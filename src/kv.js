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
var paths = require("path");
var makePath = function (dir, folder, key, version) {
    return dir + "/" + folder + "/" + key + "/" + version.toString();
};
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
