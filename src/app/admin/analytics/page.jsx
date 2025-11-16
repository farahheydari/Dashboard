import React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';
import Linecharts from '../../component/lineCharts';
import LineBarCharts from '../../component/lineBarCharts';
import PersonIcon from '@mui/icons-material/Person';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
const statsData = [
  {
    icon: <PersonIcon sx={{ color: "#2a9adb", fontSize: "80px" }} />,
    value: '1100',
    label: 'totalUser',
  },
  {
    icon: <AddShoppingCartIcon sx={{ color: "#df5656", fontSize: "80px" }} />,
    value: '6992',
    label: 'NewOrders',
  },
  {
    icon: <AttachMoneyIcon sx={{ color: "#f08e60", fontSize: "80px" }} />,
    value: '7509',
    label: 'Revents Today',
  },

];

const StatCard = ({ icon, value, label }) => (
  <Paper
    elevation={0}
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      minHeight: '200px', 
      borderRadius: '16px',
      p: 7,
    }}
  >
    <Box sx={{ flexShrink: 0 }}>
      {icon}
    </Box>
    <Box sx={{ ml: 3, textAlign: 'left' }}>
      <Typography variant="h4" component="h1" color="text.primary" sx={{ fontWeight: 700 }}>
        {value}
      </Typography>
      <Typography variant="h6" component="h3" color="text.secondary">
        {label}
      </Typography>
    </Box>
  </Paper>
);

export default function DashboardPage() {
  return (
    <div className='w-full  p-4'> 
       <Typography variant="h4" gutterBottom sx={{ ml: 3, color:'gray' }}>
            Analytics 
        </Typography>      
        
        <Box sx={{ p: 3 }}> 
        
        <Grid container spacing={3} justifyContent="center" sx={{ mb: 4 }}>
          {statsData.map((stat, index) => (
            <Grid item xs={12} sm={6} md={3} key={index} sx={{ display: 'flex', justifyContent: 'center' ,border: '1px solid #d4cdcd', borderRadius:'15px'}}>
              <StatCard
                icon={stat.icon}
                value={stat.value}
                label={stat.label}
              />
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box sx={{ pb: 5,}}>
        <Grid container spacing={3} justifyContent="center" sx={{ height: '60vh' }}>
          
          <Grid item xs={12} md={7} sx={{ height: '100%' , width:"600px"}}>
            <Paper 
                elevation={0} 
                sx={{ 
                    height: '100%',
                    width:'100%', 
                    borderRadius: '16px', 
                    backgroundColor: '#ffffff',
                   
                }}
            >
                <Box sx={{ width: '100%', height: '100%' , px: '20px',
                    pb:'30px',border: '1px solid #d4cdcd', borderRadius:'15px'}}>
                    <LineBarCharts />
                </Box>
            </Paper>
          </Grid>

          <Grid item   sx={{ height: '100%' , width:'600px' }}>
            <Paper 
                elevation={0} 
                sx={{ 
                    height: '100%', 
                    borderRadius: '16px', 
                    backgroundColor: '#fffcfc',
                    p:'10px',
                    border: '1px solid #d4cdcd', borderRadius:'15px'
                }}
            >
                <Linecharts />
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
