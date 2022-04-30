import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Link, Tab, Tabs, AppBar} from "@mui/material"

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
            if (params === undefined) {
                return (<div></div>)
            }
            console.log("params: ", params)
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
        field: 'starting_balance', 
        headerName: 'starting balance', 
        width: 150 
    },
    { 
        field: 'current_balance', 
        headerName: 'current balance', 
        width: 150 
    },
    { 
        field: 'average_balance', 
        headerName: 'avg balance', 
        width: 150 
    },
    { 
        field: 'average_perc', 
        headerName: 'avg percentage', 
        width: 100 
    },
    { 
        field: 'average_payout', 
        headerName: 'estimated payout', 
        width: 200 
    },
    { 
        field: 'tribe_tenure', 
        headerName: 'tribe tenure', 
        width: 200 
    }
];

export default function TribeMembersTable({ rows }) {
  return (
    <div style={{ height: 800, width: '100%' }}>
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