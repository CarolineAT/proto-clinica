import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { shadows } from '@mui/system';
import { Typography } from '@material-ui/core';

export const Display1 = styled(Typography)({
        '& .MuiTypography-root': {
            fontFamily: 'Interstate',
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: '72px',
            lineHeight: '56px',
            letterSpacing: '0.0120588em',
            color: '#203442',
        }
});
