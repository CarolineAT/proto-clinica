import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { shadows } from '@mui/system';

 const PrimaryButton = styled(Button)({

  color: "#FFFFFF",
  fontStyle: 'normal',
  fontWeight: 'bold',
  left:'0%',
  right:'0%',
  top: '0%',
  bottom:'0%',
  letterSpacing: '0.0021em',
  alignItems: 'center',
  textAlign: 'center',
  borderRadius: '8px',
  boxShadow: ' 0px 2px 2px rgba(121, 133, 142, 0.25)',
  backgroundColor: "#00837A",
  lineHeight: '20px',   
  textTransform: 'none',
  fontFamily: 'interstate',
  '&:hover': {
    color: "#FFFFFF",
    backgroundColor: '#4DC0B8',
    boxShadow: '0px 4px 10px rgba(1, 115, 108, 0.35)'
  },
  '&:active': {
    color: "#FFFFFF",
    backgroundColor: "#00736B",
    boxShadow:'0px 2px 2px rgba(1, 164, 154, 0.25)'
  },
  "&:disabled": {
    color: "#67737C",
    boxShadow: '0px 2px 2px rgba(121, 133, 142, 0.25)',
    backgroundColor: "#E9EBEC"
  }
});


 export const SecondaryButton = styled(Button)({
  color: "#00837A",
  fontStyle: 'normal',
  fontWeight: 'bold',
  boxSizing: 'border-box',
  border: '1px solid #00837A',
  left:'0%',
  right:'0%',
  top: '0%',
  bottom:'0%',
  letterSpacing: '0.0021em',
  alignItems: 'center',
  textAlign: 'center',
  borderRadius: '8px',
  backgroundColor: "#FFFFFF",
  lineHeight: '20px',
  textTransform: 'none',
  fontFamily: 'interstate',
  '&:hover': {
    border: '1px solid #00837A',
    boxSizing: 'border-box',
    color: "#00837A",
    backgroundColor: '#E6F6F5',
  },
  '&:active': {
    color: "#FFFFFF",
    backgroundColor: "#00736B"
  },
  "&:disabled": {
    boxSizing: 'border-box',
    border: '1px solid #67737C',
    color: "#67737C",
    boxShadow: '0px 2px 2px rgba(121, 133, 142, 0.25)',
    backgroundColor: "#FFFFFF"
  }
});


export default PrimaryButton