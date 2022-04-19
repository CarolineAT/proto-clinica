import React from 'react'
import { Box, CssBaseline} from '@mui/material';

import { DrawerLeft } from './drawerLeft';
import { MainContent } from './content';
import  Header  from './appBar';

export const IndexView = () => {

    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };


    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CssBaseline />
            <Header

            />

            <DrawerLeft open={open} handleDrawerClose={handleDrawerClose}   handleDrawerOpen={handleDrawerOpen} />

            <MainContent open={open} />
        </Box>
    )
}
