import React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import CssBaseline from "@mui/material/CssBaseline"

import Toolbar from "@mui/material/Toolbar"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"

import useApiRequest from "../services/useApiRequest";
import { useSelector } from "react-redux"

function Dashboard() {
  const currentUser = JSON.parse(sessionStorage.getItem("user"))
  const demene = useSelector(state => state.auth)
  console.log(demene)
  const {logout} = useApiRequest()
  console.log(currentUser)

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            STOCK APP
          </Typography>
          {currentUser && <Button onClick={()=>logout()} color="inherit">Logout</Button>}
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Dashboard
