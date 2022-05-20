import { Card, CardContent, Typography, Stack, Divider, Box, Container } from "@mui/material"
import { grey } from '@mui/material/colors';

import TribeSearch from "./TribeSearch";

import colors from "./colors";

const rawToPaw = (raw) => {
    if (raw.length < 28) {
        return "0"
    }
    return raw.substring(0, raw.length-27)
}

export default function TribePayoutBanner ({ tribeInfo }) {
    if (tribeInfo === null) {
        console.error("no info to return")
        return
    }
    const yesterdayTribeInfo = null
    const weekAgoTribeInfo = null
    console.log(tribeInfo)
    const minTribeMemberAmount = tribeInfo.tribe.config.min_account_amount / 1000
    const dayIncome = tribeInfo.tribe.paw_distributed_rewards
    const tribeMembersOverMin = tribeInfo.tribe.num_tribe_members
    const timestamp = new Date(tribeInfo.tribe.start_time * 1000)
    const dateTime = timestamp.toLocaleString()
    const totalTribeMembers = tribeInfo.tribe.total_num_tribe_members
    const tribeSize = rawToPaw(tribeInfo.tribe.total_tribe_size)
    const tribeAddress = tribeInfo.tribe.tribe_address
    const currentBalance = tribeInfo.tribe.current_balance
    const yesterdayTribeSize = (yesterdayTribeInfo === null) ? 0 : Number(rawToPaw(yesterdayTribeInfo.tribe.total_tribe_size))
    const dayWeightDifference = Number(tribeSize) - yesterdayTribeSize
    // const weekWeightDifference = Number(tribeSize) - Number(rawToPaw(weekAgoTribeInfo.tribe.total_tribe_size))
    const yesterdayTribeMembers = (yesterdayTribeInfo === null) ? 0 : yesterdayTribeInfo.tribe.total_num_tribe_members
    const totalTribeMembersYesterday =  totalTribeMembers - yesterdayTribeMembers
    const tribeMembersYesterday = (yesterdayTribeInfo === null) ? 0 : yesterdayTribeInfo.tribe.num_tribe_members
    const tribeMembersOverMinYesterday = tribeMembersOverMin - tribeMembersYesterday

    const payout1DayBalance = tribeInfo.tribe.payout_1_day_balance
    
    const pawpawtreeTax = ~~(tribeInfo.tribe.paw_tree_tax_cut)
    const actualPayout = (tribeInfo.actual_payout === undefined) ? 0 : tribeInfo.actual_payout
    const leakage = Number(dayIncome) - actualPayout
    const payout = Number(dayIncome) + pawpawtreeTax

    console.log(payout1DayBalance)

    return (
        <Container disableGutters maxWidth={false} sx={{
            backgroundColor: colors.GREY_LIGHT,
        }}>
            <Typography align="left" variant="h4"> Tribe Payout Info </Typography>

            <Divider />
            <Stack direction="row" spacing={2}>
                <Box sx={{
                    
                    width: 150,
                    height: 110
                }}>
                    <Typography sx={{ textDecoration: "underline"}} align="left" variant="h6">Tribe Info:</Typography>
                    <Typography variant="subtitle2" align="right">Address:</Typography>
                    <Typography variant="subtitle2" align="right">Current Balance:</Typography>
                    <Typography variant="subtitle2" align="right">Data Collected:</Typography>
                </Box>
                <Box sx={{
                    width: 150,
                    height: 110
                }}>
                    <Typography sx={{ textDecoration: "underline", color: "transparent"}} align="right" variant="h6"> placeholder </Typography>
                    <Typography variant="subtitle2" align="right">{tribeAddress}</Typography>
                    <Typography variant="subtitle2" align="right">{currentBalance.toLocaleString()}</Typography>
                    <Typography variant="subtitle2" align="right">{dateTime}</Typography>

                </Box>
            </Stack>
            <Stack direction="row" spacing={2}>
                <Box sx={{
                    
                    width: 150,
                    height: 120
                }}>
                    <Typography sx={{ textDecoration: "underline"}} align="left" variant="h6">Tribe Payout:</Typography>
                    <Typography variant="subtitle2" align="right">Payout:</Typography>
                    <Typography variant="subtitle2" align="right">PawPawTree Tax (5%):</Typography>
                    <Typography variant="subtitle2" align="right">Leakage:</Typography>
                    <Typography variant="subtitle2" align="right">Actual Payout:</Typography>
                </Box>
                <Box sx={{
                    width: 150,
                    height: 80
                }}>
                    <Typography sx={{ textDecoration: "underline", color: "transparent"}} align="right" variant="h6"> placeholder </Typography>
                    <Typography variant="subtitle2" align="right">{payout.toLocaleString()}</Typography>
                    <Typography sx={{ color: colors.RED }} variant="subtitle2" align="right">-{pawpawtreeTax.toLocaleString()}</Typography>
                    <Typography sx={{ color: colors.RED }} variant="subtitle2" align="right">-{leakage.toLocaleString()}</Typography>
                    <Typography sx={{ color: colors.GREEN }} variant="subtitle2" align="right">{actualPayout.toLocaleString()}</Typography>

                </Box>
            </Stack>
            <Divider />
        </Container>
    )
}

