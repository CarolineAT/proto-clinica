import React from 'react'
import { Box, Divider, Drawer, IconButton, List, ListItem, ListItemIcon, useTheme } from '@mui/material'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { ListItemText } from '@material-ui/core';

export const DrawerLeft = ({ open, handleDrawerClose }) => {
    const theme = useTheme();

    return (
        <Box sx={{ width: 240 }} aria-label="mailbox folders">
            <Drawer
                variant='persistent'
                anchor="left"
                open={open}
                onClose={handleDrawerClose}
                sx={{
                    '& .MuiDrawer-paper': {
                        width: 240,
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
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </Box>

                <Divider />
                <List>
                    {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
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
