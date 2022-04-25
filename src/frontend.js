const setElementText = async (id, value) => {
    let e = document.getElementById(id)
    e.innerText = value
}
exports.setElementText = setElementText


const colWithValue = (value) => {
    let col = document.createElement("td")
    col.innerText = value
    return col
}
exports.colWithValue = colWithValue


const createSelectOption = async(text, value) => {
    let option = document.createElement("option")
    option.innerText = text
    option.setAttribute("value", value)
    return option
}
exports.createSelectOption = createSelectOption

const renderTable = async(tribeData) => {
    console.log(tribeData)
    setElementText("tribe_size", rawToPaw(tribeData.tribe.excluded_total_tribe_size))
    setElementText("num_delegators", tribeData.tribe.num_tribe_members)
    setElementText("rewards", tribeData.tribe.paw_distributed_rewards)

    let table = document.getElementById("delegators_table")

    for (const [address, accountInfo] of Object.entries(tribeData.tribe_members)) {
        let row = document.createElement("tr")
        table.appendChild(row)

        row.appendChild(colWithValue(address))
        row.appendChild(colWithValue(accountInfo.starting_balance))
        row.appendChild(colWithValue(accountInfo.current_balance))
        row.appendChild(colWithValue(accountInfo.average_balance))
        row.appendChild(colWithValue(accountInfo.average_perc.toString()))
        // row.appendChild(colWithValue(realPayout))
        row.appendChild(colWithValue(accountInfo.average_payout))
        row.appendChild(colWithValue(accountInfo.tribe_tenure.toString()))
    }
}
exports.renderTable = renderTable

const renderTribeSelect = async() => {
    let tribeSelect = document.getElementById("tribes")
    for (const [tribeAddress, tribeConfig] of Object.entries(TRIBE_CONFIG)) {
        const selectOption = await createSelectOption(tribeConfig.name, tribeAddress)
        // selectOption.onchange = function(event) {
        //     console.log(event)
        // }
        tribeSelect.appendChild(selectOption)
    }

    tribeSelect.onchange = function(event) {
        const tribeAddress = event.target.value 
        getTribeInfo(tribeAddress, TRIBE_CONFIG[tribeAddress], BigInt("0")).then(tribeData => {
            renderTable(tribeData)
        })
    }

    let sendRewardsButton = document.getElementById("send_rewards")
    sendRewardsButton.onclick = function(event) {
        const tribeAddress = tribeSelect.value
        sendRewards(tribeAddress, TRIBE_CONFIG[tribeAddress], false, false).then(response => {
            console.log(response)
        })
    }
}
exports.renderTribeSelect = renderTribeSelect