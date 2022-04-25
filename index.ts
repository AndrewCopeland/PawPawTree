import { newKV, setKV, getKV } from "./src/kv";


function main() {
    const kv = newKV("./data", "v1")
    setKV(kv, "testing", {
        something: "meep"
    })

    const yep = getKV(kv, "testing")
    console.log(yep)
}


main()