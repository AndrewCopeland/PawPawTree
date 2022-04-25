import * as fs from 'fs';
const paths = require("path");


interface KV {
    dir: string,
    folder: string,
}


const makePath = (dir: string, folder: string, key: string, version : string): string => {
    return dir + "/" + folder + "/" + key + "/" + version.toString()
}

const getNow = (): Number => {
    return  Math.round(Date.now() / 1000)
}

const newKV = (dir: string, folder: string): KV => {
    return {
        dir: dir,
        folder: folder,
    }
}

const getKV = (kv: KV, key: string, version?: string): any =>  {
    if (version === undefined) {
        version = "latest"
    }
    const path = makePath(kv.dir, kv.folder, key, version)
    return JSON.parse(fs.readFileSync(path,'utf8'))
}

const setKV = (kv: KV, key: string, content: any) => {
    const dirPath = paths.join(kv.dir + "/" + kv.folder + "/" + key)
    fs.mkdirSync(dirPath, { recursive: true })

    const version = "latest"
    const path = makePath(kv.dir, kv.folder, key, version)
    fs.writeFileSync(path, JSON.stringify(content))
    const versionTimestamp = getNow()
    const pathTimestamp = makePath(kv.dir, kv.folder, key, versionTimestamp.toString())
    fs.writeFileSync(pathTimestamp, JSON.stringify(content))
}

export {
    getKV,
    setKV,
    newKV
}