'use client'
import { 
    Drawer, 
    Box, 
    Typography ,
    Button
} from '@mui/material';
import { useTheme } from 'next-themes';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton'; 
import LogoutIcon from '@mui/icons-material/Logout';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Slider({ open, onClose}) {
   
    const {theme} = useTheme()
    const isDark=theme==='dark'

    const router = useRouter()

     function handelNavigation(path) {
        if(path){
            router.push(path)
        }
        onClose()
    }
    
    
    return (
        <Drawer
            open={open} 
            onClose={onClose} 
            variant="temporary" 
            anchor="left"
            sx={{
                '& .MuiDrawer-paper': {
                    width:'250px',
                    boxSizing: 'border-box',
                },
            }}
        >
            <Box sx={{ width: '100%',height:'80%', p: 2,   backgroundColor: isDark ? 'rgb(30, 30, 50)' : 'white',
                        color: isDark ? 'white' : 'black',}}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Button onClick={()=>handelNavigation('/admin')}>
                        <Typography color='gray'>
                            Dashboard
                        </Typography>
                    </Button>
                    <IconButton onClick={onClose}>
                        <CloseIcon />
                    </IconButton>
                </Box>
                <Box sx={{width:'100%' , height:'50%'}}>
                    <Button onClick={()=>handelNavigation('/admin/user')} sx={{width:'100%',height:'50px',mt:5, bgcolor:'#e4e2e2' , display:'flex' ,alignItems:'center', justifyContent:'start'}}>
                        <Typography sx={{  cursor:'pointer', color:'gray'}}>
                            Users
                        </Typography>
                    </Button>
                    <Button onClick={()=>handelNavigation('/admin/analytics')} sx={{width:'100%',mt:5, height:'50px', bgcolor:'#e4e2e2' , display:'flex' ,alignItems:'center', justifyContent:'start'}}>
                        <Typography sx={{ cursor:'pointer' , color:'gray' }}>
                            Analytics
                        </Typography>
                    </Button>
                    <Button onClick={()=>handelNavigation('/admin/setting')} sx={{width:'100%',mt:5,height:'50px', bgcolor:'#e4e2e2' , display:'flex' ,alignItems:'center', justifyContent:'start'}}>
                        <Typography sx={{cursor:'pointer', color:'gray'}}>
                            Setting
                        </Typography>
                    </Button>
                </Box>
            </Box>
            <Box sx={{display:'flex', justifyContent:'center', height:'100%',  backgroundColor: isDark ? 'rgb(30, 30, 50)' : 'white',
                        color: isDark ? 'white' : 'black',}}>
                            <Link href={'/login'}>
                  <Button sx={{width:'100%',mt:5,height:'50px',mx:'20px', bgcolor:'#e4e2e2' , display:'flex' ,alignItems:'center', justifyContent:'center'}}>
                        <Typography sx={{cursor:'pointer', color:'red'}}>
                            Logout
                        </Typography>
                        <LogoutIcon sx={{color:'red'}}/>
                </Button>
                </Link>
            </Box>
        </Drawer>
    );
}
