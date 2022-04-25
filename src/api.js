
var util = require("./util")
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));



const NODE_URL="http://localhost:7046"
const WALLET = "7E3A22B6DEAEB93E25E515A47D34A53D152B49356079180AF5513AEE4A0037D2"


const MIN_DELEGATION=BigInt("10000000000000000000000000000000")
const MIN_REWARDS=BigInt("10000000000000000000000000000000")
const SECONDS_IN_A_DAY=86400



// NODE API
const getBlockCount = async () => {
    const response = await fetch(NODE_URL, {
        method: "POST",
        body: JSON.stringify({
            "action": "block_count"
        })
    })
    const body = await response.json()
    return body
}

exports.getBlockCount = getBlockCount

const getDelegators= async (address) => {
    const response = await fetch(NODE_URL, {
        method: "POST",
        body: JSON.stringify({
            "action": "delegators",
            "account": address,
            "count": -1,
        })
    })
    const body = await response.json()
    return body
}
exports.getDelegators = getDelegators

const getAccountHistory = async (address, count) => {
    const response = await fetch(NODE_URL, {
        method: "POST",
        body: JSON.stringify({
            "action": "account_history",
            "account": address,
            "count": count.toString()
        })
    })
    const body = await response.json()
    return body
}
exports.getAccountHistory = getAccountHistory

const getRawAccountHistory = async (address, count, reverse) => {
    const response = await fetch(NODE_URL, {
        method: "POST",
        body: JSON.stringify({
            "action": "account_history",
            "account": address,
            "count": count.toString(),
            "raw": "true",
            "reverse": reverse
        })
    })
    const body = await response.json()
    return body
}
exports.getRawAccountHistory = getRawAccountHistory

const getAccountInfo = async (address) => {
    const response = await fetch(NODE_URL, {
        method: "POST",
        body: JSON.stringify({
            "action": "account_info",
            "account": address
        })
    })
    const body = await response.json()
    return body
}
exports.getAccountInfo = getAccountInfo

const getBlockInfo = async (block) => {
    const response = await fetch(NODE_URL, {
        method: "POST",
        body: JSON.stringify({
            "action": "block_info",
            "json_block": "true",
            "hash": block
        })
    })
    const body = await response.json()
    return body
}
exports.getBlockInfo = getBlockInfo

const sendAmount = async (to, sendAddress, rawAmount) => {
    const response = await fetch(NODE_URL, {
        method: "POST",
        body: JSON.stringify({
            "action": "send",
            "wallet": WALLET,
            "source": sendAddress,
            "destination": to,
            "amount": rawAmount,
            "id": util.uuidv4()
        })
    })
    const body = await response.json()

    if ('error' in body) {
        console.error(`An error occured when attempting to send amount '${JSON.stringify(body)}' maybe should have a retry and backoff`)
    }
    return body
}
exports.sendAmount = sendAmount
