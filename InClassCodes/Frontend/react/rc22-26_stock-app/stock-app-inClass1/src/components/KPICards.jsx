import React from 'react'
import Paper from '@mui/material/Paper';
import CurrencyLiraIcon from '@mui/icons-material/CurrencyLira';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { Box, Stack, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { deepOrange, deepPurple, amber } from '@mui/material/colors';
import { useSelector } from "react-redux";


const KPICards = () => {

    const {sales, purchases} = useSelector(state=> state.getData)
    const totalSales = sales?.reduce((acc,sale)=> acc + sale.amount, 0)
    const totalPurchases = purchases?.reduce((acc,purchase)=> acc + purchase.amount, 0)
    console.log(totalSales)

    
    
    const kpiData = [
        {
        id: 1,
        title: "Sales",
        icon: <CurrencyLiraIcon/>,
        amount: `$${totalSales.toLocaleString("tr-TR")}`,
        color: deepPurple[700],
        bgColor: deepPurple[200]
    },
        {
        id: 2,
        title: "Profit",
        icon: <ShoppingCartIcon/>,
        amount: `$${(totalSales-totalPurchases).toLocaleString("tr-TR")}`,
        color: deepOrange[700],
        bgColor: deepOrange[200]
    },
        {
        id: 3,
        title: "Purchases",
        icon: <LocalMallIcon/>,
        amount: `$${totalPurchases.toLocaleString("tr-TR")}`,
        color: amber[700],
        bgColor: amber[200]
    },
]
  return (
    <div>
        <Stack justifyContent={'center'} alignItems={'center'} flexWrap={'wrap'} direction={'row'} gap={2}>
            {kpiData.map((item)=> (
                <Paper sx={{display:'flex', width: 300, p:2, justifyContent:'flex-start', alignItems: 'center', gap: 2}} key={item.id} elevation={3}>
                    <Avatar sx={{ bgcolor: item.bgColor, color: item.color, width:"75px", height:"75px" }}>
                        <div>
                        {item.icon}
                        </div>
                    </Avatar>
                    <Box>
                        <Typography variant='button'>{item.title}</Typography>
                        <Typography  variant='h5'>{item.amount}</Typography>
                    </Box>
                </Paper>

            ))}

        </Stack>
    </div>
  )
}

export default KPICards