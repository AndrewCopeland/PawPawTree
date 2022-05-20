"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var kv_1 = require("./src/kv");
var app = require("./src/app")

// Set the tribe average weight every 10 mins
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
const main = async () => {
    while(true) {
        app.setTribeAverageWeight()
        // should be 10 mins
        await sleep(600000)
    }
}
main();


