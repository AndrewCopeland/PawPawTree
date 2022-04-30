import { Card, CardContent, Typography, Stack, Divider, Box, Container } from "@mui/material"
import { grey } from '@mui/material/colors';

const rawToPaw = (raw) => {
    if (raw.length < 28) {
        return "0"
    }
    return raw.substring(0, raw.length-27)
}

export default function TribeInfoBanner ({ tribeInfo }) {
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

    return (
        <div sx={{
            backgroundColor: grey[100],
        }}>

            <Typography variant="h3" component="div">{tribeName}</Typography>
            <Divider />
            <Typography variant="h6">Tribe address: {tribeAddress}</Typography>
            <Typography variant="h6">Payout address: {payoutAddress}</Typography>
            <Typography variant="h6">Data Collected: {dateTime}</Typography>
            <Divider />

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
                    <Typography variant="subtitle2" align="right">{dayIncome}</Typography>
                    <Typography variant="subtitle2" align="right">NaN</Typography>
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
                    <Typography sx={{ textDecoration: "underline", color: "transparent"}} align="right" variant="h6"> placeholder </Typography>
                    <Typography variant="subtitle2" align="right">{totalTribeMembers}</Typography>
                    <Typography variant="subtitle2" align="right">{tribeMembersOverMin}</Typography>
                </Box>
            </Stack>

            <Stack direction="row" spacing={2}>
                <Box sx={{
                    width: 150,
                    height: 80
                }}>
                    <Typography sx={{ textDecoration: "underline"}} align="left" variant="h6">Tribe Weight:</Typography>
                    <Typography variant="subtitle2" align="right">Current: </Typography>
                    <Typography variant="subtitle2" align="right">Last 24 Hours:</Typography>
                </Box>
                <Box sx={{
                    width: 150,
                    height: 80
                }}>
                    <Typography sx={{ textDecoration: "underline", color: "transparent"}} align="right" variant="h6"> placeholder </Typography>
                    <Typography variant="subtitle2" align="right">{tribeSize}</Typography>
                    <Typography variant="subtitle2" align="right">NaN</Typography>
                </Box>
            </Stack>
        </div>
    )
    return (
        <div>
            <Typography variant="h2" component="div">{tribeName}</Typography>
            <Divider />
            <div>
                <Typography variant="h5">Payout address: {payoutAddress}</Typography>
            </div>
            <div>


            </div>
            <Stack direction="row" spacing={2}>
                <Card sx={{ maxWidth: 275 }} variant="outlined">
                    <CardContent>
                        <Typography variant="h5" component="div">
                        Tribe Income
                        </Typography>
                        <Typography variant="h6" component="div">
                        24 Hours
                        </Typography>
                        <Typography variant="subtitle2">
                        {dayIncome}
                        </Typography>
                        <Typography variant="h6" component="div">
                        7 Days
                        </Typography>
                        <Typography variant="subtitle2">
                        NaN
                        </Typography>
                    </CardContent>
                </Card>
                <Card sx={{ maxWidth: 275 }} variant="outlined">
                    <CardContent>
                        <Typography variant="h5" component="div">
                        Tribe Members
                        </Typography>
                        <Typography variant="h6" component="div">
                        Total
                        </Typography>
                        <Typography variant="subtitle2">
                        {totalTribeMembers}
                        </Typography>
                        <Typography variant="h6" component="div">
                        Over {minTribeMemberAmount}K
                        </Typography>
                        <Typography variant="subtitle2">
                        {tribeMembersOverMin}
                        </Typography>
                    </CardContent>
                </Card>
                <Card sx={{ maxWidth: 275 }} variant="outlined">
                    <CardContent>
                        <Typography variant="h5" component="div">
                        Tribe Size
                        </Typography>
                        <Typography variant="h6" component="div">
                        Total
                        </Typography>
                        <Typography variant="subtitle2">
                        {tribeSize}
                        </Typography>
                    </CardContent>
                </Card>
                <Card sx={{ maxWidth: 275 }} variant="outlined">
                    <CardContent>
                        <Typography variant="h5" component="div">
                        Last Gathered Data
                        </Typography>
                        <Typography variant="subtitle2">
                        {dateTime}
                        </Typography>
                    </CardContent>
                </Card>
            </Stack>
        </div>
    )
}

