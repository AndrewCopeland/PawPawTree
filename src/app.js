var util = require("./util");
var config = require("./config")
var kv = require("./kv")


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
        const payoutDB = kv.newKV("./data", "tribe-payment")
        kv.setKV(payoutDB, tribeAddress, result)
        console.log(result)
    }
}
exports.main = main
