import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
    palette: {
        primary: {
            main: "#1f2687"
        },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    backgroundImage: "linear-gradient(to top, #dfe9f3 0%, rgba(31, 38, 135, 0.1) 100%)",
                },
                svg: {
                    verticalAlign: "middle"
                },
            }
        },
        MuiIconButton: {
            defaultProps: {
                sx: {
                    bgcolor: "primary.light",
                    color: "#fff",

                    '&:hover': {
                        bgcolor: "primary.main",
                    }
                }
            }
        }
    }
});

const AppThemeProvider = (props) => {
    return (
        <ThemeProvider theme={theme}>
            {props.children}
        </ThemeProvider>
    );
};

export default AppThemeProvider;