import React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import WheelchairPickupIcon from '@mui/icons-material/WheelchairPickup';
import AccessibleForwardIcon from '@mui/icons-material/AccessibleForward';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import Rateing from '../component/Rateing';
import BarChart from '../component/BarChart';

const statsData = [
  {
    icon: <Diversity1Icon sx={{ color: "#2a9adb", fontSize: "80px" }} />,
    value: '520',
    label: 'Doctors',
  },
  {
    icon: <WheelchairPickupIcon sx={{ color: "#df5656", fontSize: "80px" }} />,
    value: '6992',
    label: 'Nurses',
  },
  {
    icon: <AccessibleForwardIcon sx={{ color: "#f08e60", fontSize: "80px" }} />,
    value: '7509',
    label: 'Patients',
  },
  {
    icon: <VaccinesIcon sx={{ color: "#7dd689", fontSize: "80px" }} />,
    value: '84',
    label: 'Pharmacists',
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
    <div className='w-full'> 
      <Box sx={{ p: 3 }}> 
        
        <Grid container spacing={3} justifyContent="center" sx={{ mb: 4 ,}}>
          {statsData.map((stat, index) => (
            <Grid item xs={12} sm={6} md={3} key={index} sx={{ display: 'flex', justifyContent: 'center' ,border: '1px solid #d4cdcd', borderRadius:'15px' }}>
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
                    p: 1
                }}
            >
                <Box sx={{ width: '100%', height: '100%' ,border: '1px solid #d4cdcd', borderRadius:'15px'
                      }}>
                    <BarChart />
                </Box>
            </Paper>
          </Grid>

          <Grid item   sx={{ height: '100%' , width:'500px' }}>
            <Paper 
                elevation={0} 
                sx={{ 
                    height: '100%', 
                    borderRadius: '16px', 
                    backgroundColor: '#fffcfc',
                    border: '1px solid #d4cdcd', borderRadius:'15px'
                }}
            >
                <Rateing />
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
