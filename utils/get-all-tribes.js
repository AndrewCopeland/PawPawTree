

const main = async() => {    
    const response = await fetch("https://tribes.paw.digital/api/accounts/verified")
    const tribes = await response.json()
    let excludedAddresses = []
    
    for (let i in tribes) {
        const tribe = tribes[i]
        excludedAddresses.push(tribe.account)
    }

    console.log(`Exclude these tribes '${excludedAddresses}'`)
}
