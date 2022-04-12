import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const drawerWidth = 320;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        // marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: `${drawerWidth}px`,
            width: `calc(100% - ${drawerWidth}px)`,
        }),
        ...(!open && {
            marginLeft: '64px',
            width: 'calc(100% - 64px)',
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen
            }),
        }),
    }),
);

export const MainContent = ({ open }) => {
    return (
        <Box>
            <Main open={open}>
                <Box margin="auto" sx={{backgroundColor: '#E6F6F5', width: '86%', height: '500px'}}>

                </Box>
            </Main>
        </Box>

    )
}
