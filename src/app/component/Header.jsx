'use client'
import React, { useState, useEffect } from 'react'; 
import { 
    AppBar, 
    Toolbar,
    Box, 
    IconButton, 
    Typography 
} from '@mui/material';
import MessageIcon from '@mui/icons-material/Message';
import MenuIcon from '@mui/icons-material/Menu';
import Slider from '../admin/slider/Slider'; 
import { useTheme } from "next-themes";
import BedtimeIcon from '@mui/icons-material/Bedtime'; 
import Brightness7Icon from '@mui/icons-material/Brightness7'; 
export default function Header() {

  const [isSliderOpen, setIsSliderOpen] = useState(false);
  const [mounted, setMounted] = useState(false); 

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleToggleSlider = () => {
    setIsSliderOpen(!isSliderOpen);
  };
  
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  if (!mounted) {
      return null;
  }

  const isDark = theme === "dark";
  const themeText = isDark ? "Light Mode" : "Dark Mode";
  const ThemeIcon = isDark ? Brightness7Icon : BedtimeIcon; 

  return (
    <AppBar 
        position="static" 
        sx={{ 
            height: '80px', 
            borderBottom: '1px solid #e0e0e0',
            backgroundColor: isDark ? 'rgb(21, 16, 48)' : 'white',
            color: isDark ? 'white' : 'black',
            boxShadow: 'none', 
        }}
    >
        <Toolbar sx={{ height: '100%', padding: '0 16px' }}> 
            
            <Box sx={{ flex: '0 0 60%', display: 'flex', alignItems: 'center', height: '100%' }}>
                
                <IconButton 
                    onClick={handleToggleSlider} 
                    sx={{ mr: 2 }}
                    aria-label="open slider menu"
                >
                    <MenuIcon sx={{ color: 'gray', fontSize: 30 }} />
                </IconButton>

                <Typography variant='h4' sx={{color: isDark ? '#ccc' : '#5e5c5c'}}>Dashboard</Typography> 
            </Box>
            
            <Box sx={{ flexGrow: 1 }} /> 

            <Box sx={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                
                <IconButton sx={{ color: 'gray', mx: 1 }}  onClick={toggleTheme}>
                    
                    <ThemeIcon 
                        sx={{fontSize:'40px'}}
                        className={`flex items-center p-2 rounded-lg w-full 
                                    ${isDark ? 'hover:bg-white/10' : 'hover:bg-gray-200'} 
                                    ${isSliderOpen ? "gap-2 justify-start" : "justify-start"}
                        `}
                    />
                    {isSliderOpen && (
                        <span className="font-medium text-sm ml-2 text-gray-500">
                            {themeText}
                        </span>
                    )}
                </IconButton>
                
                <IconButton sx={{ color: 'gray', mx: 1 }}>
                    <MessageIcon />
                </IconButton>
                
                <Box sx={{ width: '60px', height: '60px', mx: 2, overflow: 'hidden', borderRadius: '50%' }}>
                    <img 
                        src={"https://demo.dashboardpack.com/hospital-html/img/client_img.png"} 
                        alt="Client Avatar"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </Box>
            </Box>
        </Toolbar>

      <Slider 
        open={isSliderOpen} 
        onClose={() => setIsSliderOpen(false)}
      />
    </AppBar>
  );
}
