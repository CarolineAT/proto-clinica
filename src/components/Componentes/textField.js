import { styled } from '@mui/material/styles';
import { TextField } from '@mui/material';
import inputBaseClasses from '@mui/base/InputUnstyled/inputUnstyledClasses';
import { InputBase } from '@mui/material';


const ThemeTextField = styled( TextField ) ({
      '& .MuiInputLabel-root': {
        fontFamily: 'Interstate',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '16px',
        lineHeight: '24px',
        letterSpacing:' 0.0120588em',
        color:' #BBBBBB',
      },
      "& .MuiOutlinedInput-root": {
        '& input': {
          paddingLeft: '16px',
          paddingTop: '16px',
          paddingBottom: '16px',
          fontFamily: 'Interstate',
          fontStyle: 'normal',
          fontWeight: '400',
          fontSize: '16px',
          lineHeight: '24px',
          letterSpacing:' 0.0120588em',
          color:' #364855',
        },
        "& fieldset": {
          paddingTop: '16px',
          height: '56px',
          border: '1px solid #BCC2C6',
          boxSizing: 'border-box',
          borderRadius: '8px',
          width: 'auto',
        },
        "& hover": {
          "& fieldset": {
            width: 'auto',
            letterSpacing: '0.0120588em',
            border: '1px solid #364855',
            boxSizing: 'border-box',
            borderRadius: '8px'
          },
          "& input" :{
            fontFamily: 'interstate',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '16px',
            lineHeight: '24px',
            letterSpacing:' 0.0120588em',
            color: '#364855'
          },
          "& filled": {
            "& fieldset":{
              width: 'auto',
              height: '56px',
              background: '#E9EBEC',
              borderRadius: '8px'
            },
            "& input":{
              color:'#364855',
              fontSize: '20px',
              fontWeight: '400'
            }
        },
          
        },
        "&:focused": {
          "& fieldset":{
            width: 'auto',
            height: '56px',
            border: '1px solid #5143D5',
            boxSizing: 'border-box',
            borderRadius: '8px',
            caretColor: '#5143D5'
          }
        },
        "&:disabled": {
          "& fieldset":{
            width: 'auto',
            height: '56px',
            background: '#E9EBEC',
            borderRadius: '8px'
          },
          "& input":{
            fontFamily: 'interstate',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: '16px',
            lineHeight: '20px',
            letterSpacing:' 0.0120588em',
            color: '#79858E'
          },
          "& filled":{
            fontFamily: 'interstate',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: '16px',
            lineHeight: '24px',
            letterSpacing:' 0.0120588em',
            color: '#79858E'
          }
        },
        '&:error': {
          fontFamily: 'Interstate',
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: '40px',
          lineHeight: '24px',
          letterSpacing:' 0.0120588em',
          color:' #BBBBBB',
        },
          "&:filled": {
            "& fieldset":{
              width: 'auto',
              height: '56px',
              background: '#E9EBEC',
              borderRadius: '8px'
            },
            "& input":{
              color:'#364855'
            }

        },
        // '&.Mui-filled fieldset': {
        //   borderColor: '#5143D5',
        //   borderWidth: 1.5
        // },
        // '& input:invalid + fieldset': {
        //   borderColor: 'red',
        //   borderWidth: 4,
        // }
      }
    })

const BootstrapInput = styled(InputBase) ({
      '& label': {
        Animation : 'disabled',
        fontFamily: 'Interstate',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '16px',
        lineHeight: '24px',
        letterSpacing:' 0.0120588em',
        color:' #BBBBBB',
      },
      "& .MuiOutlinedInput-root": {
        '& input': {
          paddingLeft: '16px',
          paddingTop: '16px',
          paddingBottom: '16px',
          fontFamily: 'Interstate',
          fontStyle: 'normal',
          fontWeight: '400',
          fontSize: '16px',
          lineHeight: '24px',
          letterSpacing:' 0.0120588em',
          color:' #364855',
        },
        "& fieldset": {
          paddingTop: '16px',
          height: '56px',
          border: '1px solid #BCC2C6',
          boxSizing: 'border-box',
          borderRadius: '8px',
          width: 'auto',
        },
        "& hover": {
          "& fieldset": {
            width: 'auto',
            letterSpacing: '0.0120588em',
            border: '1px solid #364855',
            boxSizing: 'border-box',
            borderRadius: '8px'
          },
          "& input" :{
            fontFamily: 'interstate',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '16px',
            lineHeight: '24px',
            letterSpacing:' 0.0120588em',
            color: '#364855'
          },
          "& filled": {
            "& fieldset":{
              width: 'auto',
              height: '56px',
              background: '#E9EBEC',
              borderRadius: '8px'
            },
            "& input":{
              color:'#364855',
              fontSize: '20px',
              fontWeight: '400'
            }
        },
          
        },
        "&:focused": {
          "& fieldset":{
            width: 'auto',
            height: '56px',
            border: '1px solid #5143D5',
            boxSizing: 'border-box',
            borderRadius: '8px',
            caretColor: '#5143D5'
          }
        },
        "&:disabled": {
          "& fieldset":{
            width: 'auto',
            height: '56px',
            background: '#E9EBEC',
            borderRadius: '8px'
          },
          "& input":{
            fontFamily: 'interstate',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: '16px',
            lineHeight: '20px',
            letterSpacing:' 0.0120588em',
            color: '#79858E'
          },
          "& filled":{
            fontFamily: 'interstate',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: '16px',
            lineHeight: '24px',
            letterSpacing:' 0.0120588em',
            color: '#79858E'
          }
        },
        '&:error': {
          fontFamily: 'Interstate',
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: '40px',
          lineHeight: '24px',
          letterSpacing:' 0.0120588em',
          color:' #BBBBBB',
        },
          "&:filled": {
            "& fieldset":{
              width: 'auto',
              height: '56px',
              background: '#E9EBEC',
              borderRadius: '8px'
            },
            "& input":{
              color:'#364855'
            }

        },
      },
    })

export default ThemeTextField


