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
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: `${drawerWidth}px`,
            paddingRight: '30px',
            width: `calc(100% - ${drawerWidth}px)`,
        }),
        ...(!open && {
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            marginLeft: '64px',
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen
            }),
        }),
    }),
);

export const MainContent = ({ open }) => {
    return (
        <Box >
            <Main open={open}>
                <Typography>Contenido</Typography>
            </Main>
        </Box>

    )
}
