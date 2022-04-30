var api = require("./api");
const SECONDS_IN_A_DAY=86400
const MIN_REWARDS=BigInt("10000000000000000000000000000000")
global.crypto = require('crypto')

const uuidv4 = () => {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}
exports.uuidv4 = uuidv4

const rawToPaw = (raw) => {
    if (raw.length < 28) {
        return "0"
    }
    return raw.substring(0, raw.length-27)
}
exports.rawToPaw = rawToPaw

const pawToRaw = (paw) => {
    return paw + "000000000000000000000000000"
}
exports.pawToRaw = pawToRaw

const getLastChangeBlockTime = async (address) => {
    const history = await api.getRawAccountHistory(address, 1000, "false")
    for(let i in history.history) {
        const block = history.history[i]
        if (block.subtype !== "change") {
            continue
        }

        const timestamp = Number(block.local_timestamp)
        return timestamp
    }
    return 0
    throw `Last change block could not be found for '${address}'`
}
exports.getLastChangeBlockTime = getLastChangeBlockTime

const getAccountCreationTimestamp = async (address) => {
    const accountInfo = await api.getAccountInfo(address)
    const blockInfo = await api.getBlockInfo(accountInfo.open_block)
    return Number(blockInfo.local_timestamp)
}
exports.getAccountCreationTimestamp = getAccountCreationTimestamp

const getAccountBalanceAt = async (address, history, timestamp) => {
    for (let i in history) {
        const block = history[i]
        const blockTimestamp = Number(block.local_timestamp)

        if (blockTimestamp <= timestamp) {
            const balance = rawToPaw(block.balance)
            if (balance === 0) {
                console.log(`Found balance: ${JSON.stringify(block)}`)
            }
            return balance
        }
    }
    return 0
}
exports.getAccountBalanceAt = getAccountBalanceAt

const getTransactionsFromNowTo = async(history, timestamp) => {
    let results = [] 
    for (let i in history) {
        const block = history[i]
        const blockTimestamp = Number(block.local_timestamp)
        if (blockTimestamp < timestamp) {
            return results
        }
        results.push(block)
    }
    return results
}
exports.getTransactionsFromNowTo = getTransactionsFromNowTo

const getAccountAverage = async(startingBal, from, to, blocks) => {
    let results = [
        {
            "balance": startingBal,
            "timestamp": from
        }
    ]

    for (let i = blocks.length-1; i > 0; i--) {
        const block = blocks[i]
        results.push({
            "balance": rawToPaw(block.balance),
            "timestamp": Number(block.local_timestamp)
        })
    }

    let points = []
    for (let i in results) {
        const point = results[Number(i)]
        if (results.length == Number(i) + 1) {
            const difference = to - point.timestamp
            const percOfDay = difference / SECONDS_IN_A_DAY
            points.push({
                "balance": point.balance,
                "perc_of_day": percOfDay
            })
            break
        }
        const nextI = Number(i) + 1
        const point2 = results[nextI]
        const difference = point2.timestamp - point.timestamp
        const percOfDay = difference / SECONDS_IN_A_DAY
        points.push({
            "balance": point.balance,
            "perc_of_day": percOfDay
        })
    }

    let avg = 0
    for (let i in points) {
        const point = points[i]
        avg += Number(point.balance) * point.perc_of_day
    }

    return ~~avg
}
exports.getAccountAverage = getAccountAverage



const getRewards = async (history) => {
    let total = BigInt(0)
    let yesterday = 0
    for(let i in history.history) {
        const transaction = history.history[i]
        if (transaction.type !== "receive") {
            continue
        }
        if (transaction.account !== "paw_1qfe5u7bcm7qrpp9rhk9p7wyqw316om1ts7s4gm466nwy6ueniik1gzwcno8") {
            continue
        }
        const timeStamp = parseInt(transaction.local_timestamp)
        if (yesterday === 0) {
            yesterday = timeStamp - SECONDS_IN_A_DAY
        }

        if (timeStamp > yesterday) {
            total += BigInt(transaction.amount)
        }
    }

    return total
}
exports.getRewards = getRewards


const tribeSize = async (delegators) => {
    let total = BigInt(0)
    for (const [account, raw] of Object.entries(delegators.delegators)) {
        total += BigInt(raw)
    }
    return total.toString()
}

// TODO - this does not sort but really just filters if the delegator does 
// not meet the min_account_amount payout threshold
const sortDelegators = async (delegators, config) => {
    let newDelegators = {}
    for (const [account, raw] of Object.entries(delegators.delegators)) {
        // if (EXCLUDE_ACCOUNTS.includes(account)) {
        //     continue
        // }
        const intRaw = BigInt(raw)
        if (intRaw < BigInt(pawToRaw(config.min_account_amount.toString()))) {
            continue
        }
        newDelegators[account] = rawToPaw(raw)
    }

    return newDelegators
}



const getJoinedTimpStamp = async (address) => {
    let joinedTimeStamp = await getLastChangeBlockTime(address)
    if (joinedTimeStamp === 0) {
        // I believe this occures when a the origin account creates a staking account
        // and the origin account already was delegated to the tribeAddress
        console.log("Getting account creation date")
        joinedTimeStamp = await getAccountCreationTimestamp(address)
    }
    return joinedTimeStamp
}

const getAveragePayout = async (rewards, avgPerc, tribeTenure) => {
    let avgPayout = ~~(Number(rawToPaw(rewards.toString())) * avgPerc)
    if (tribeTenure < 1) {
        avgPayout = ~~(avgPayout * tribeTenure)
    }
    return avgPayout
}

const getAddressRewardInfo = async(address, now, yesterday, total, rewards) => {
    const joinedTimeStamp = await getJoinedTimpStamp(address)
    const tribeTenure = (now - joinedTimeStamp) / SECONDS_IN_A_DAY
    const acctHistory = await api.getRawAccountHistory(address, -1, "false")
    const startingBalance = await getAccountBalanceAt(address, acctHistory.history, yesterday)
    const blocks = await getTransactionsFromNowTo(acctHistory.history, yesterday)
    const avgBalance = await getAccountAverage(startingBalance, yesterday, now, blocks)
    const avgPerc = avgBalance / Number(rawToPaw(total))
    const avgPayout = await getAveragePayout(rewards, avgPerc, tribeTenure)

    return {
        joinedTimeStamp: joinedTimeStamp,
        tribeTenure: tribeTenure,
        acctHistory: acctHistory,
        startingBalance: startingBalance,
        currentBalance: acctHistory.history[0].balance,
        blocks: blocks,
        avgBalance: avgBalance,
        avgPerc: avgPerc,
        avgPayout: avgPayout
    }
}

const getTribeInfo = async (tribeAddress, config, balance) => {
    const history = await api.getAccountHistory(tribeAddress, 1000)
    const delegators = await api.getDelegators(tribeAddress)
    let total = await tribeSize(delegators)
    const totalTribeSize = total
    let totalRewards = balance
    if (balance === BigInt(0)) {
        totalRewards = await getRewards(history)
    }
    const totalNumTribeMembers = Object.keys(delegators.delegators).length
    const now = (new Date().getTime() / 1000)
    const yesterday = now - (SECONDS_IN_A_DAY * config.payout_period_days)
    const sorted = await sortDelegators(delegators, config)
    const numTribeMembers = Object.keys(sorted).length

    // Todo - figure out how to standize raw its ugly.....
    const totalRewards2 = Number(rawToPaw(totalRewards.toString()))
    const tribeTax = totalRewards2 * config.tribe_tax
    // 1% tax per 20 tribe members.
    const pawTreeTax = (numTribeMembers / 2000)
    const pawTreeTaxCut =  totalRewards2 * pawTreeTax
    let rewards = pawToRaw((totalRewards2 - tribeTax).toString())
    console.log(`Rewards #1: ${rewards}`)


    let exclusionLeftovers = 0

    // calculate excluded rewards
    for (const [address, specialInfo] of Object.entries(config.special_accounts)) {
        if (!specialInfo.exclude) {
            continue
        }
        if (!(address in sorted)) {
            console.log(`address is no longer a tribe member '${address}'`)
            continue
        }

        console.log(address)
        const addressRewards = await getAddressRewardInfo(address, now, yesterday, total, rewards)
        console.log(`Excluding ${JSON.stringify(addressRewards.avgPayout)}`)
        exclusionLeftovers += Number(rawToPaw(addressRewards.currentBalance))
    }

    // deduct the excluded rewards from the tribe size
    console.log("Exclusion", exclusionLeftovers)
    total = Number(rawToPaw(total)) - exclusionLeftovers
    console.log("TOTAL: ", total)
    total = pawToRaw(total.toString())

    const tribe = {
        tribe_address: tribeAddress,
        tribe_tax: config.tribe_tax,
        tribe_tax_cut: tribeTax,
        paw_tree_tax_cut: pawTreeTaxCut,
        paw_tree_tax: pawTreeTax,
        distributed_rewards: rewards,
        paw_distributed_rewards: rawToPaw(rewards),
        total_rewards: totalRewards.toString(),
        num_tribe_members: numTribeMembers,
        start_time: now,
        end_time: yesterday,
        config: config,
        excluded_total_tribe_size: total,
        total_tribe_size: totalTribeSize,
        total_num_tribe_members: totalNumTribeMembers
    }

    console.log("THIS IS TRIBE", tribe)
    
    let tribeMembers = {}
    for (const [address, amount] of Object.entries(sorted)) {
        const accountRewards = await getAddressRewardInfo(address, now, yesterday, total, rewards)

        // address is special account and is exclude then no payout
        if (address in config.special_accounts && config.special_accounts[address].exclude) {
            exclusionLeftovers += accountRewards.avgPayout
            tribeMembers[address] = {
                // tribe: tribeAddress,
                starting_balance: accountRewards.startingBalance,
                current_balance: accountRewards.currentBalance,
                average_balance: accountRewards.avgBalance,
                average_perc: accountRewards.avgPerc,
                average_payout: 0,
                tribe_tenure: accountRewards.tribeTenure,
                excluded: true
            }
            continue
        }

        tribeMembers[address] = {
            // tribe: tribeAddress,
            starting_balance: accountRewards.startingBalance,
            current_balance: accountRewards.currentBalance,
            average_balance: accountRewards.avgBalance,
            average_perc: accountRewards.avgPerc,
            average_payout: accountRewards.avgPayout,
            tribe_tenure: accountRewards.tribeTenure,
            excluded: false
        }
    }

    return {
        tribe: tribe,
        tribe_members: tribeMembers
    }
}
exports.getTribeInfo = getTribeInfo

const calculateTotalAvgPayout = async (tribeData) => {
    totalPayout = 0
    for (const [address, info] of Object.entries(tribeData.tribe_members)) {    
        totalPayout += info.average_payout
    }

    return totalPayout
}

const sendRewards = async(tribeAddress, config, autoCalc, noSend) => {
    const payoutInfo = await api.getAccountInfo(config.payout_address)
    console.log(`payout info: ${JSON.stringify(payoutInfo)}`)

    if (BigInt(payoutInfo.balance) < MIN_REWARDS && !autoCalc) {
        console.log(`Not sending out rewards for '${tribeAddress}' because balance is too low '${rawToPaw(payoutInfo.balance)}' `)
        return {
            error: true,
            message: `Not sending out rewards for '${tribeAddress}' because balance is too low '${rawToPaw(payoutInfo.balance)}' `
        }
    }

    let payout = BigInt(0)
    if (!autoCalc) {
        // Then send entire account balance
        payout = BigInt(payoutInfo.balance)
    }

    console.log(`Sending rewards for '${tribeAddress}' tribe with the amount of '${payout}'`)

    const tribeData = await getTribeInfo(tribeAddress, config, payout)
    // console.log(JSON.stringify(tribeData))

    const totalAvgPayout = await calculateTotalAvgPayout(tribeData)
    console.log(`Total rewards given out '${totalAvgPayout}'`)

    if (noSend) {
        return tribeData
    }

    let tribeMembersData = {}

    for (const [address, info] of Object.entries(tribeData.tribe_members)) {    
        await api.sendAmount(address, config.payout_address, pawToRaw(info.average_payout.toString())).then(response => {
            console.log(response)
            memberInfo = info

            if ('error' in response) {
                memberInfo['error'] = response.error
                memberInfo['block'] = null
            } else {
                memberInfo['error'] = null
                memberInfo['payment_block'] = response.block
            }

            console.log("Paid out " + address + " " + info.average_payout + " PAW")
            tribeMembersData[address] = memberInfo
        })
    }

    return {
        tribe: tribeData.tribe,
        tribe_members: tribeMembersData
    }
}
exports.sendRewards = sendRewards

const isAddressTribeMember = async (tribeAddress, address) => {
    const delegators = await api.getDelegators(tribeAddress)
    if ( address in delegators.delegators) {
        console.log(`'${address}' is tribe member with '${rawToPaw(delegators.delegators[address])}'`)
        return true
    }
    console.log(`'${address}' is NOT tribe member`)
    return false
}

const sendRedditTribeRewards = async(tribeAddress, address, amount) => {
    if (!(await isAddressTribeMember(tribeAddress, address))) {
        return
    }

    const response = await api.sendAmount(address, tribeAddress, pawToRaw(amount.toString()))
    console.log(response)
}
exports.sendRedditTribeRewards = sendRedditTribeRewards
