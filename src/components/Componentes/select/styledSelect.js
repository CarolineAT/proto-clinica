import { InputBase } from "@mui/material";
import { styled } from "@mui/material/styles";

const ITEM_HEIGHT = 48;
export const menuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4,
            borderRadius: 8,
        },
        sx: {
            '&.MuiPaper-root::-webkit-scrollbar': {
                width: '5px'
            },
            '&.MuiPaper-root::-webkit-scrollbar-track': {
                background: 'white',
                borderRadius: '100px',
                margin: '10px',
            },
            '&.MuiPaper-root::-webkit-scrollbar-thumb': {
                background: '#BCC2C6',
                borderRadius: '100px',
            },
        }
    },
};

export const menuItemStyle = {
    fontWeight: '700',
    letterSpacing: '0.0120588em',
    color: '#364855',
    borderBottom: '1px solid #E9EBEC',
    height: '48px'
}

export const CustomInputSelect = styled(InputBase)(({ theme }) => ({
    '& .MuiInputBase-input': {
        borderRadius: 8,
        position: 'relative',
        width: '100%',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #BCC2C6',
        fontSize: 16,
        color: '#364855',
        padding: '15px 0px 16px 16px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        WebkitAppearance: 'none',
        letterSpacing: '0.0120588em',
        '&:focus': {
            borderRadius: 8,
            borderColor: '#5D5FEF',
            // boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        }
    }
}));
