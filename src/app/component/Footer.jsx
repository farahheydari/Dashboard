import React from 'react'
import { Typography ,Box, AppBar ,Toolbar
} from "@mui/material";




export default function Footer() {
  return (
   <AppBar 
        position="static" 
        sx={{ 
            height: '80px', 
            color: 'white', 
            boxShadow: 'none', 
        }}>

        <Toolbar sx={{ height: '100%', padding: '0 16px',   display: 'flex',justifyContent: 'center',alignItems: 'center',   }}> 
            <Typography variant="h6" >&copy created by Farahnaz Heydari in 2025</Typography>
       </Toolbar>
    </AppBar>
  )
}
