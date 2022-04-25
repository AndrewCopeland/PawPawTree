"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var kv_1 = require("./src/kv");
var app = require("./src/app")
function main() {
    var kv = (0, kv_1.newKV)("./data", "v1");
    (0, kv_1.setKV)(kv, "testing", {
        something: "meep"
    });
    var yep = (0, kv_1.getKV)(kv, "testing");
    console.log(yep);

    app.main();
}
main();
