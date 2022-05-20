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

export default function TribeInfoBanner ({ tribeInfo, yesterdayTribeInfo, weekAgoTribeInfo }) {
    if (tribeInfo === null) {
        console.error("no info to return")
        return
    }
    console.log(tribeInfo)
    const minTribeMemberAmount = tribeInfo.tribe.config.min_account_amount / 1000
    const dayIncome = tribeInfo.tribe.paw_distributed_rewards
    const tribeMembersOverMin = tribeInfo.tribe.num_tribe_members
    const timestamp = new Date(tribeInfo.tribe.start_time * 1000)
    const dateTime = timestamp.toLocaleString()
    const totalTribeMembers = tribeInfo.tribe.total_num_tribe_members
    const tribeSize = rawToPaw(tribeInfo.tribe.total_tribe_size)
    const tribeName = tribeInfo.tribe.config.name
    const payoutAddress = tribeInfo.tribe.config.payout_address
    const tribeAddress = tribeInfo.tribe.tribe_address
    const currentBalance = tribeInfo.tribe.current_balance
    const payoutAddress7Day = tribeInfo.tribe.config.payout_address_7_day
    const yesterdayTribeSize = (yesterdayTribeInfo === null) ? 0 : Number(rawToPaw(yesterdayTribeInfo.tribe.total_tribe_size))
    const dayWeightDifference = Number(tribeSize) - yesterdayTribeSize
    // const weekWeightDifference = Number(tribeSize) - Number(rawToPaw(weekAgoTribeInfo.tribe.total_tribe_size))
    const dayWeightColor = (dayWeightDifference > 0) ? colors.GREEN : colors.RED
    const dayWeightSign = (dayWeightDifference > 0) ? '+' : ''
    const tribeWeekIncome = tribeInfo.tribe.total_rewards_7_days
    const yesterdayTribeMembers = (yesterdayTribeInfo === null) ? 0 : yesterdayTribeInfo.tribe.total_num_tribe_members
    const totalTribeMembersYesterday =  totalTribeMembers - yesterdayTribeMembers
    const totalTribeSign = (totalTribeMembersYesterday > 0 ) ? "+" : ''
    const tribeMembersYesterday = (yesterdayTribeInfo === null) ? 0 : yesterdayTribeInfo.tribe.num_tribe_members
    const tribeMembersOverMinYesterday = tribeMembersOverMin - tribeMembersYesterday
    const totalTribeMinSign = (tribeMembersOverMinYesterday > 0 ) ? "+" : ''
    const totalTribeColor = (totalTribeMembersYesterday > 0) ? colors.GREEN : colors.RED
    const totalTribeMinColor = (tribeMembersOverMinYesterday > 0) ? colors.GREEN : colors.RED

    const payout1DayBalance = tribeInfo.tribe.payout_1_day_balance
    const payout7DayBalance = tribeInfo.tribe.payout_7_day_balance
    console.log(payout1DayBalance)

    return (
        <Container disableGutters maxWidth={false} sx={{
            backgroundColor: colors.GREY_LIGHT,
        }}>

            <div style={{
                backgroundColor: colors.CYAN,
                color: colors.WHITE_OFF
            }}>
                <Typography variant="h3" component="div">{tribeName}</Typography>
                <Divider />
                <TribeSearch></TribeSearch>
                <Divider />
            </div>

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
                    <Typography variant="subtitle2" align="right">1-day Address:</Typography>
                    <Typography variant="subtitle2" align="right">1-day Balance:</Typography>
                    <Typography variant="subtitle2" align="right">7-day Address:</Typography>
                    <Typography variant="subtitle2" align="right">7-day Balance:</Typography>
                </Box>
                <Box sx={{
                    width: 150,
                    height: 80
                }}>
                    <Typography sx={{ textDecoration: "underline", color: "transparent"}} align="right" variant="h6"> placeholder </Typography>
                    <Typography variant="subtitle2" align="right">{payoutAddress}</Typography>
                    <Typography variant="subtitle2" align="right">{payout1DayBalance}</Typography>
                    <Typography variant="subtitle2" align="right">{payoutAddress7Day}</Typography>
                    <Typography variant="subtitle2" align="right">{payout7DayBalance}</Typography>
                </Box>
            </Stack>
            <Stack direction="row" spacing={2}>
                <Box sx={{
                    
                    width: 150,
                    height: 80
                }}>
                    <Typography sx={{ textDecoration: "underline"}} align="left" variant="h6">Tribe Income:</Typography>
                    <Typography variant="subtitle2" align="right">Last 24 Hours: </Typography>
                    <Typography variant="subtitle2" align="right">Last 7 Days:</Typography>
                </Box>
                <Box sx={{
                    width: 150,
                    height: 80
                }}>
                    <Typography sx={{ textDecoration: "underline", color: "transparent"}} align="right" variant="h6"> placeholder </Typography>
                    <Typography variant="subtitle2" align="right">{Number(dayIncome).toLocaleString()}</Typography>
                    <Typography variant="subtitle2" align="right">{tribeWeekIncome.toLocaleString()}</Typography>
                </Box>
            </Stack>
            <Stack direction="row" spacing={2}>
                <Box sx={{
                    width: 150,
                    height: 80
                }}>
                    <Typography sx={{ textDecoration: "underline"}} align="left" variant="h6">Tribe Members:</Typography>
                    <Typography variant="subtitle2" align="right">Total: </Typography>
                    <Typography variant="subtitle2" align="right">Over {minTribeMemberAmount}K:</Typography>
                </Box>
                <Box sx={{
                    width: 150,
                    height: 80
                }}>
                    <Typography sx={{ textDecoration: "underline", paddingTop: '.75em'}} align="right" variant="subtitle2">24 hour</Typography>
                    <Typography sx={{ color: totalTribeColor}} variant="subtitle2" align="right">
                            {totalTribeSign}{totalTribeMembersYesterday}
                        </Typography>
                        <Typography inline sx={{ color: totalTribeMinColor}}  variant="subtitle2" align="right">
                            {totalTribeMinSign}{tribeMembersOverMinYesterday}
                        </Typography>
                </Box>
                <Box sx={{
                    width: 150,
                    height: 80
                }}>
                    <Typography sx={{ textDecoration: "underline", color: "transparent"}} align="right" variant="h6"> placeholder </Typography>

                    <Typography variant="subtitle2" align="right">
                        {totalTribeMembers}
                    </Typography>
                    <Typography inline variant="subtitle2" align="right">
                        {tribeMembersOverMin}
                    </Typography>
                </Box>
            </Stack>

            <Stack direction="row" spacing={2}>
                <Box sx={{
                    width: 150,
                    height: 100
                }}>
                    <Typography sx={{ textDecoration: "underline"}} align="left" variant="h6">Tribe Weight:</Typography>
                    <Typography variant="subtitle2" align="right">Current: </Typography>
                    <Typography variant="subtitle2" align="right">Last 24 Hours:</Typography>
                    <Typography variant="subtitle2" align="right">Last 7 Days:</Typography>
                </Box>
                <Box sx={{
                    width: 150,
                    height: 100
                }}>
                    <Typography sx={{ textDecoration: "underline", color: "transparent"}} align="right" variant="h6"> placeholder </Typography>
                    <Typography variant="subtitle2" align="right">{Number(tribeSize).toLocaleString()}</Typography>
                    <Typography sx={{ color: dayWeightColor}} variant="subtitle2" align="right">{dayWeightSign}{dayWeightDifference.toLocaleString()}</Typography>
                    <Typography variant="subtitle2" align="right">NaN</Typography>
                </Box>
            </Stack>
            <Divider />
        </Container>
    )
}

