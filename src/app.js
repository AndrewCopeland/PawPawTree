var util = require("./util");
var config = require("./config")
var kv = require("./kv")


const main = async () => {
    for (const [tribeAddress, tribeConfig] of Object.entries(config.TRIBE_CONFIG)) {
        console.log(`Getting tribe info for tribe address '${tribeAddress}'`)
        const info = await util.getTribeInfo(tribeAddress, tribeConfig, BigInt(0))
        const db = kv.newKV("./data", "tribe-info")
        kv.setKV(db, tribeAddress + ":24-hr", info)
        console.log(info)
    }
}
exports.main = main