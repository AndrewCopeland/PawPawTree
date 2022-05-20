const { Utils } = require("tslint");
var api = require("./api");
var kv = require("./kv")
var util = require("./util")

const PAW_LOTTO_ADDRESS = "paw_1d7kke7zh4i3fdtb1sxd89i6689gmzs3amrp4d1ibgcqxh917ste77mz3eqp"
const PAW_LOTTO_DB = kv.newKV("./data", "paw-lotto")

const init = () => {
    kv.setKV(PAW_LOTTO_DB, "info", {
        height: 0,
        hash: null,
        winner: null,
        amount: null,
        timestamp: null,
    })
}
exports.init = init

const run = async() => {
    const result = await api.getAccountInfo(PAW_LOTTO_ADDRESS)
    const currentHeight = ('error' in result) ? 0 : result.block_count
    const pawLottoInfo = kv.getKV(PAW_LOTTO_DB, "info")

    const diff = currentHeight - pawLottoInfo.height
    if (diff === 0) {
        console.log("NO ONE IS PLAYING THE GAME SKIP!")
        return
    }

    const historyResult = await api.getAccountHistory(PAW_LOTTO_ADDRESS, diff)
    let pawLottoTickets = {}
    let allLottoTickets = []
    for(let i in historyResult.history) {
        const block = historyResult.history[i]
        // Filter out send or change blocks
        if (block.type !== 'receive') {
            continue
        }


        // Return pay that is not 1000 PAW
        if (block.amount !== util.pawToRaw("1000")) {
            const sendResult = await api.sendAmount(block.account, PAW_LOTTO_ADDRESS, block.amount)
            console.log(`Returned '${util.rawToPaw(block.amount)}' to '${block.account}' because it was not 1000 PAW. ${JSON.stringify(sendResult)}`)
            continue
        }

        // init the value store
        if (!(block.account in pawLottoTickets)) {
            pawLottoTickets[block.account] = []
        }

        pawLottoTickets[block.account].push(block.hash)
        allLottoTickets.push({
            hash: block.hash,
            account: block.account
        })
    }

    if (allLottoTickets.length === 0) {
        console.log("NO ONE IS PLAYING DUE TO NO RECEIVE BLOCKS OR VALID AMOUNTS")
        return
    }

    
    // Display all lotto players and tickets
    console.log("Lotto tickets with address: ", pawLottoTickets)
    console.log("All tickets: ", allLottoTickets)

    const winningNumber = Math.floor(Math.random() * allLottoTickets.length)
    const winningTicket = allLottoTickets[winningNumber]
    const winningAmount = util.pawToRaw((allLottoTickets.length * 1000).toString())

    console.log(`The winning ticket was '${winningTicket.hash}' to account '${winningTicket.account}' with a winning of '${util.rawToPaw(winningAmount)}'`)
    const sendResult = await api.sendAmount(winningTicket.account, PAW_LOTTO_ADDRESS, winningAmount)
    console.log(`Winning send results '${JSON.stringify(sendResult)}'`)

    kv.setKV(PAW_LOTTO_DB, "info", {
        height: currentHeight,
        winning_hash: winningTicket.hash,
        payout_hash: sendResult.block,
        winner: winningTicket.account,
        amount: Number(util.rawToPaw(winningAmount)),
        timestamp: util.getNow(),
        tickets_sold: allLottoTickets,
        accounts_tickets_sold: pawLottoTickets
    })

}
exports.run = run
