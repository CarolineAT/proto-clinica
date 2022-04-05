import React from 'react'
import { Box, Divider, Drawer, IconButton, List, ListItem, ListItemIcon, useTheme } from '@mui/material'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { ListItemText, Typography } from '@material-ui/core';
import HouseIcon from  '../../../assets/icons/home.svg'
import PrimaryButton, { SecondaryButton } from '../button';
import './appbar.css'

export const DrawerLeft = ({ open, handleDrawerClose ,handleDrawerOpen}) => {
    const theme = useTheme();

    return (
        <Box sx={{ width: 240 }} aria-label="mailbox folders">
            <Drawer
                variant='permanent'
                anchor="left"
                open={open}
                onClose={handleDrawerClose}
                sx={{
                    '& .MuiDrawer-paper': {
                        width: open ? 240 : 64,
                        background: theme.palette.background.default,
                        color: theme.palette.text.primary,
                        borderRight: 'none',
                        top: '64px'
                        // [theme.breakpoints.up('md')]: {
                        //     top: '64px'
                        // }
                    }
                }}
                ModalProps={{ keepMounted: true }}
                color="inherit"
            >

                <Box
                    display="flex"
                    justifyContent="flex-end"
                >
                    {open ?
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton> :
                    <IconButton onClick={handleDrawerOpen}>
                        <ChevronRightIcon />
                    </IconButton>}

                </Box>
                <Typography>Médico contralor</Typography>
                <List>
                    {['Inicio'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>
                            <img src={HouseIcon}/>
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
                <SecondaryButton><img src={HouseIcon} /></SecondaryButton>
                <span></span>
                <button className='icon-home'><span>Home</span></button>
                <Divider />
                <List>
                    {['All mail', 'Trash', 'Spam'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </Box>
    )
}
