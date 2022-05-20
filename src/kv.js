"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.newKV = exports.setKV = exports.getKV = void 0;
var fs = __importStar(require("fs"));
const { NONAME } = require("dns");
var paths = require("path");
const { JsxEmit } = require("typescript");
var makePath = function (dir, folder, key, version) {
    return makeDir(dir, folder, key)+ "/" + version.toString();
};
var makeDir = function(dir, folder, key) {
    if (dir === undefined || dir === null) {
        throw Error("ERROR: Invalid dir for kv")
    }
    if (folder === undefined || folder === null) {
        throw Error("ERROR: Invalid folder for kv")
    }
    if (key === undefined || key === null) {
        throw Error("ERROR: Invalid key for kv")
    }
    return dir + "/" + folder + "/" + key
}
var getNow = function () {
    return Math.round(Date.now() / 1000);
};
var newKV = function (dir, folder) {
    return {
        dir: dir,
        folder: folder,
    };
};
exports.newKV = newKV;
var getKV = function (kv, key, version) {
    if (version === undefined) {
        version = "latest";
    }
    var path = makePath(kv.dir, kv.folder, key, version);
    return JSON.parse(fs.readFileSync(path, 'utf8'));
};
exports.getKV = getKV;
var setKV = function (kv, key, content) {
    var dirPath = paths.join(kv.dir + "/" + kv.folder + "/" + key);
    fs.mkdirSync(dirPath, { recursive: true });
    var version = "latest";
    var path = makePath(kv.dir, kv.folder, key, version);
    fs.writeFileSync(path, JSON.stringify(content));
    var versionTimestamp = getNow();
    var pathTimestamp = makePath(kv.dir, kv.folder, key, versionTimestamp.toString());
    fs.writeFileSync(pathTimestamp, JSON.stringify(content));
};
exports.setKV = setKV;

// this will return kv that is closest to the version
// This return json objects with the content of the key and the key id
// {
//     "version": "1685421874257",
//     "content": {
            // "tribe": {...}
//     }
// }
var findKV = function (kv, key, timestamp) {
    const dir = makeDir(kv.dir, kv.folder, key)

    if (!fs.existsSync(dir)) {
        return {
            version: null,
            content: null,
        }
    }
    const keys = fs.readdirSync(dir)


    let foundKV = {
        key: null,
        timestamp: timestamp,
        difference: 1000000000000000000,
    }
    for (let i in keys) {
        const key = keys[i]
        // skip latest
        if (key === 'latest') {
            continue
        }
        const kvTs = Number(key)
        const difference = Math.abs(timestamp - kvTs)

        if (difference < foundKV.difference) {
            foundKV['key'] = key
            foundKV['timestamp'] = kvTs
            foundKV['difference'] = difference
        }
    }

    if (foundKV.key === null) {
        return {
            version: null,
            content: null,
        }
    }
    return {
        version: foundKV.timestamp,
        content: getKV(kv, key, foundKV.timestamp),
    }
}
exports.findKV = findKV


var listKV = function(kv, key, toTimestamp, fromTimestamp) {
    const dir = makeDir(kv.dir, kv.folder, key)
    console.log("Attempting to get a list of keyvalues from ", fromTimestamp, " to ", toTimestamp, "dir=",dir)

    if (!fs.existsSync(dir)) {
        return {}
    }
    const timestamps = fs.readdirSync(dir)
    let results = {}
    for (let i in timestamps ) {
        // skip latest key
        if (timestamps[i] === "latest") {
            continue
        }
        const timestamp = timestamps[i]
        
        // key resides within the from and to
        if (Number(timestamp) >= fromTimestamp && Number(timestamp) <= toTimestamp) {
            results[timestamp] = getKV(kv, key, timestamp)
        }
    }

    return results
}
exports.listKV = listKV
