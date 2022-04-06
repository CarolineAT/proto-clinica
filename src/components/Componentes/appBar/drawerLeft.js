import React from 'react'
import { Box, Button, Divider, Drawer, IconButton, List, ListItem, ListItemIcon, useTheme } from '@mui/material'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { ListItemText, Typography } from '@material-ui/core';
import HouseIcon from '../../../assets/icons/home.svg'
import PrimaryButton, { SecondaryButton } from '../button';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import { styled } from '@mui/material';
import './appbar.css'
import VisarIcon from '../../../assets/icons/visar.svg'
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import { Visibility } from '@mui/icons-material';

const BootstrapTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
        color: '#4D5D68',
    },
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: '#4D5D68',
        fontSize: '14px',
        fontFamily: 'Interstate',
        padding: '8px 12px 8px 12px'
    },
}));

const CustomDrawer = styled(Drawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: open ? 240 : 64,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            '& .MuiDrawer-paper': {
                paddingTop: '16px',
                width: 240,
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.enteringScreen,
                }),
                overflowX: 'hidden',
            },
        }),
        ...(!open && {
            '& .MuiDrawer-paper': {
                width: 64,
                paddingTop: '16px',
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                overflowX: 'hidden',
            },
        }),
    }),
);
export const DrawerLeft = ({ open, handleDrawerClose, handleDrawerOpen }) => {
    const theme = useTheme();

    return (
        <Box sx={{ width: 320 }} aria-label="mailbox folders">
            <CustomDrawer
                variant='permanent'
                anchor="left"
                open={open}
                onClose={handleDrawerClose}
                sx={{
                    '& .MuiDrawer-paper': {
                        width: open ? 320 : 65,
                        background: '#FFFFFF',
                        color: '#67737C',
                        fontFamily: 'Interstate',
                        fontSize: '16px',
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
                    justifyContent={open ? 'flex-end' : 'center'}
                >
                    {open ?
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'ltr' ? <ArrowBackRoundedIcon /> : <ArrowForwardRoundedIcon />}
                        </IconButton> :
                        <IconButton onClick={handleDrawerOpen}>
                            <ArrowForwardRoundedIcon />
                        </IconButton>}

                </Box>
                <div className='titleContenedor'>  
                { open ?  <Typography className='drawerTitle'>Médico contralor</Typography> : null}
                   
                </div>


                <List>
                    <BootstrapTooltip title="Inicio" arrow placement="right">
                        <ListItem button >
                            <ListItemIcon>
                                <img src={HouseIcon} />
                            </ListItemIcon>
                            <ListItemText primary='Inicio' />
                        </ListItem>
                    </BootstrapTooltip>
                    <BootstrapTooltip title="Visar licencias médicas" arrow placement="right">
                        <ListItem button >
                            <ListItemIcon>
                                <img src={VisarIcon} />
                            </ListItemIcon>
                            <ListItemText primary='Visar licencias médicas' />
                        </ListItem>
                    </BootstrapTooltip>
                </List>
            </CustomDrawer>
        </Box>
    )
}
