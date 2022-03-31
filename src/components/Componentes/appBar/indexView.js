import React from 'react'
import { Box, CssBaseline} from '@mui/material';

import { DrawerLeft } from './drawerLeft';
import { MainContent } from './content';
import { AppBarExample } from './appBar';

export const IndexView = () => {

    const [open, setOpen] = React.useState(true);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };


    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CssBaseline />
            <AppBarExample
                open={open} 
                handleDrawerOpen={handleDrawerOpen} 
                handleDrawerClose={handleDrawerClose}
            />

            <DrawerLeft open={open} handleDrawerClose={handleDrawerClose} />

            <MainContent open={open} />
        </Box>
    )
}
