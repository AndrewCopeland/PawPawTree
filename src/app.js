var util = require("./util");
var config = require("./config")
var kv = require("./kv")
var api = require("./api")




const setTribeAverageWeight = async () => {
    for (const [tribeAddress, tribeConfig] of Object.entries(config.TRIBE_CONFIG)) {
        // get tribe delegators
        const delegators = await api.getDelegators(tribeAddress)
        const delegatorsDB = kv.newKV("./data", "delegators")
        kv.setKV(delegatorsDB, tribeAddress, delegators)

        // calculate weight from delegators
        const tribeWeightDB = kv.newKV("./data", "tribe-weight")
        const weightRaw = await util.tribeSize(delegators)
        const weightPaw = Number(util.rawToPaw(weightRaw))
        kv.setKV(tribeWeightDB, tribeAddress, {
            "weight_raw": weightRaw,
            "weight_paw": weightPaw 
        })

        // calculate 24 hour average weight
        const now = util.getNow()
        const yesterday = now - util.SECONDS_IN_A_DAY

        const results = kv.listKV(tribeWeightDB, tribeAddress, now, yesterday)
        console.log("Calculating 24 hour average reward:", JSON.stringify(results, 4))
        let sumWeight = BigInt(0)
        for (const [timestamp, weight] of Object.entries(results)) {
            sumWeight += BigInt(weight.weight_raw)
        }

        // cannot divide by 0
        const numberOfTimestamps = (Object.keys(results).length === 0) ? BigInt(1) : BigInt(Object.keys(results).length)
        const averageWeight = (sumWeight / numberOfTimestamps)
        const averageTribeWeight24HoursDB = kv.newKV("./data", "average-24-hour-tribe-weight")
        kv.setKV(averageTribeWeight24HoursDB, tribeAddress, {
            "average_weight_raw": averageWeight.toString(),
            "average_weight_paw": Number(util.rawToPaw(averageWeight.toString()))
        })
    }
}
exports.setTribeAverageWeight = setTribeAverageWeight



const main = async () => {
    for (const [tribeAddress, tribeConfig] of Object.entries(config.TRIBE_CONFIG)) {
        // get tribe info
        console.log(`Getting tribe info for tribe address '${tribeAddress}'`)
        const info = await util.getTribeInfo(tribeAddress, tribeConfig, BigInt(0))
        const db = kv.newKV("./data", "tribe-info")
        kv.setKV(db, tribeAddress, info)
        console.log(info)

        // send rewards to tribe members
        console.log(`Sending rewards to tribe '${tribeAddress}'`)
        const result = await util.sendRewards(tribeAddress, tribeConfig, false, false)
        if ('error' in result) {

        }
        // const balance = (payoutInfo.balance === undefined) ? "0" : (payoutInfo.balance)
        const payoutDB = ('error' in result) ? kv.newKV("./data", "tribe-payment-error") : kv.newKV("./data", "tribe-payment")
        kv.setKV(payoutDB, tribeAddress, result)
        console.log(result)
    }
}
exports.main = main
