const SECONDS_IN_A_DAY=86400

const getEpochSeconds = (date) => {
    return ~~(date.getTime() / 1000)
}


const main = async() => {
    const now = getEpochSeconds(new Date()) 
    
    const response = await fetch("https://tribes.paw.digital/api/accounts/verified")
    const tribes = await response.json()
    
    for (let i in tribes) {
        const tribe = tribes[i]
        const accountResponse = await fetch("https://tribes.paw.digital/api/accounts/" + tribe.account)
        const accountInfo = await accountResponse.json()
        const created = getEpochSeconds(new Date(accountInfo.created))
    
        const alive = now - created
        const aliveDays = alive / SECONDS_IN_A_DAY
        console.log(`Tribe '${tribe.alias}' has been thriving for '${aliveDays}' days`)
    }
}
