import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Link, Tab, Tabs, AppBar, backdropClasses} from "@mui/material"
import colors from "./colors";

const columns= [
    { 
        field: 'id', 
        headerName: 'ID', 
        width: 70 ,
        hide: true,
    },
    { 
        field: 'address', 
        headerName: 'address', 
        width: 200,
        renderCell: (params) => {
            if (params === undefined || params.value === null) {
                return (<div></div>)
            }
            // console.log("params: ", params)
            const link = "https://tracker.paw.digital/account/" + params.value
            const shortAddress = params.value.substring(0, 9) + "..." + params.value.substring(params.value.length-5, params.value.length)
            return (
                <div>
                    <Link href={link} color="inherit">
                        {shortAddress}
                    </Link>
                </div>
            )
        }
    },
    { 
        field: 'payment_block',
        headerName: 'hash', 
        width: 200,
        renderCell: (params) => {
            if (params === undefined || params.value === null || params.value === undefined) {
                return (<div></div>)
            }
            // console.log("params: ", params)
            const link = "https://tracker.paw.digital/block/" + params.value
            const shortAddress = params.value.substring(0, 9) + "..." + params.value.substring(params.value.length-5, params.value.length)
            return (
                <div>
                    <Link href={link} color="inherit">
                        {shortAddress}
                    </Link>
                </div>
            )
        }
    },
    { 
        field: 'error', 
        headerName: 'error', 
        width: 150
    },
    { 
        field: 'starting_balance', 
        headerName: 'starting balance', 
        width: 150,
        type: 'number'
    },
    { 
        field: 'current_balance', 
        headerName: 'current balance', 
        width: 150,
        type: 'number'
    },
    { 
        field: 'average_balance', 
        headerName: 'avg balance', 
        width: 150,
        type: 'number'
    },
    { 
        field: 'average_perc', 
        headerName: 'avg percentage', 
        width: 100,
        type: 'number',
        renderCell: (params) => {
            if (params === undefined || params.value === null) {
                return (<div></div>)
            }
            const perc = (params.value * 100).toFixed(2)
            return (
                <div>
                    {perc}%
                </div>
            )
        }
    },
    { 
        field: 'average_payout', 
        headerName: 'estimated payout', 
        width: 150 ,
        type: 'number'
    },
    { 
        field: 'tribe_tenure', 
        headerName: 'tribe tenure', 
        width: 150,
        type: 'number'
    }
];


// "paw_11inwx4hef64cd18htjsnedds7odyfaqk3p9et6ur4nro5abp78pwnsw9j19": {
//     "starting_balance": "1045419",
//     "current_balance": "1045419453303941344412300762518440",
//     "average_balance": 1045419,
//     "average_perc": 0.0018222349328962154,
//     "average_payout": 0,
//     "tribe_tenure": 25.29485726851832,
//     "excluded": false,
//     "error": "Invalid amount number",
//     "block": null
//   },

export default function TribeMembersPayoutTable({ rows }) {
  return (
    <div style={{ height: 800, width: '100%', align: 'center', backgroundColor: colors.GREY_LIGHT }}>
          {/* <AppBar position="static" color="default">
        <Tabs
        value="yep"
        onChange={(param) => {console.log(param)}}
        >
        <Tab label="Item One" value="one" component={Link} to="/one" />
        <Tab label="Item Two" value="two" component={Link} to="/two" />
        </Tabs>
    </AppBar> */}
        <DataGrid
            initialState={{
                sorting: {
                    sortModel: [{field: 'average_payout', sort: 'desc'}]
                }
            }}
            sx={{
                boxShadow: 2,
                columnFill: colors.CYAN,
                border: 2,
                "& .MuiDataGrid-columnHeaders": {
                    backgroundColor: colors.CYAN,
                    color: colors.WHITE,
                    fontSize: 16
                },
                '& .MuiDataGrid-cell': {
                    color: colors.GREY_LIGHT_FONT,
                },
                '& .MuiDataGrid-cell:hover': {
                  color: colors.CYAN,
                },
              }}
            rows={rows}
            density="compact"
            columns={columns}
            pageSize={25}
            rowsPerPageOptions={[10,25,50,100]}
            checkboxSelection={false}
        />
    </div>
  );
}