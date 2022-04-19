import * as React from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import './header.css';
import { Grid, Stack } from '@mui/material';
import { AppBar } from '@mui/material';
import Logo from '../../../assets/icons/logo.svg'

const Header = () => {


  return (

  
    <div>
     <Box  sx={{boxShadow:'none'}}>
      <AppBar position="static" sx={{boxShadow:'none', bgcolor:'transparent'}}>
        <Toolbar className='toolbar' sx={{boxShadow:'none'}}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <img src={Logo} alt='' className='logo'/>
            </Typography>
            <Stack direction="row" spacing={3}>
            <AccountCircleIcon className='icon' fontSize='large'/>
              <Grid>
                <Typography color="secondary" className='name' >Carlos Inostroza Martínez</Typography>
                <Typography color="secondary" className='job' >Ejecutivo Esencial</Typography>
              </Grid>
              <Divider color="#FFFFFF"  orientation="vertical" variant="middle" flexItem />
              <IconButton><NotificationsIcon color="secondary" className='icon' fontSize='medium'/></IconButton>
              <Divider color="#FFFFFF"  orientation="vertical" variant="middle" flexItem />
              <Typography color="secondary" className='cerrarsesion' > Cerrar sesión</Typography>
            </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  </div>
   
  );
}
export default Header