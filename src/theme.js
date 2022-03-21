import { createTheme } from "@mui/material/styles";

export const theme = createTheme({

    typography: {
        fontFamily: 'interstate'
    },
    palette: {
        primary: {
            main: '#00837A',
            dark: '#00736B',
            light: '#00A499',
        },
        secondary: {
            main: '#5143D5',
            dark: '#392F95',
            light: '#EEECFB'
        },
        error: {
            main: '#E53935'
        },
        background: {
            default: '#fff'
        }
    },
    components: {
        MuiButton: {
            defaultProps: {
            },
            styleOverrides: {
                // Boton primario
                root: {
                    fontWeight: 'bold',
                    textAlign: 'center',
                    borderRadius: '8px',
                    letterSpacing: '0.0021em',
                    fontFamily: 'interstate',
                    textTransform: 'capitalize',
                    lineHeight: '20px',
                    fontSize: '16px',
                    padding: '15px 16px',
                    width: '133px',
                    '&:hover': {
                        color: "#FFFFFF",
                        backgroundColor: '#4DC0B8',
                        // boxShadow: '0px 4px 10px rgba(1, 115, 108, 0.35)',
                    },
                    '&:active': {
                        color: "#FFFFFF",
                        backgroundColor: "#00736B",
                        boxShadow: '0px 2px 2px rgba(1, 164, 154, 0.25)'
                    },
                    "&:disabled": {
                        color: "#67737C",
                        boxShadow: '0px 2px 2px rgba(121, 133, 142, 0.25)',
                        backgroundColor: "#E9EBEC"
                    }
                }
            },
            variants: [
                // Boton secundario
                {
                    props: {
                        variant: 'outlined'
                    },
                    style: {
                        color: "#00837A",
                        fontStyle: 'normal',
                        fontWeight: 'bold',
                        border: '1px solid #00837A',
                        letterSpacing: '0.0021em',
                        alignItems: 'center',
                        textAlign: 'center',
                        borderRadius: '8px',
                        backgroundColor: "#FFFFFF",
                        lineHeight: '20px',
                        textTransform: 'none',
                        '&:hover': {
                            border: '1px solid #00837A',
                            color: "#00837A",
                            backgroundColor: '#E6F6F5',
                        },
                        '&:active': {
                            color: "#FFFFFF",
                            backgroundColor: "#00736B"
                        },
                        "&:disabled": {
                            border: '1px solid #67737C',
                            color: "#67737C",
                            boxShadow: '0px 2px 2px rgba(121, 133, 142, 0.25)',
                            backgroundColor: "#FFFFFF"
                        }
                    },
                },
            ]
        },
        MuiInputBase: {
            //Input
            styleOverrides: {
                input: {
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    width: '100%',
                    height: '50px',
                    fontSize: '16px',
                    lineHeight: '24px',
                    // padding: '13px 16px',
                    letterSpacing: ' 0.0120588em',
                    color: '#67737C',
                    boxSizing: 'border-box'
                },
            }

        },
        MuiPaper: {
            //Scrroll select
            styleOverrides: {
                root: {
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
        },
        MuiMenu: {
            styleOverrides: {
                root: {
                    maxHeight: 48 * 4,
                    borderRadius: 8,

                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                // Focus input outlined
                root: {
                    "&.Mui-focused fieldset.MuiOutlinedInput-notchedOutline": {
                        border: "1px solid #5143D5",
                    },
                }
            }
        },
        MuiFormControl: {
            styleOverrides: {
                root: {
                    width: '100%'
                }
            }
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    boxShadow: 'none',
                    height: '72px'
                }
            }
        },
        MuiList: {
            styleOverrides: {
                root: {
                    padding: 0
                }
            }
        }
    },

});