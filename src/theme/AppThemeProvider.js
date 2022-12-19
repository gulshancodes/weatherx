import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material';

// customizing the default MUI theme
const theme = createTheme({
    palette: {
        primary: {
            main: "#1f2687"
        },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                html: {
                    fontSize: "16px",
                    '@media (max-width: 399px)': {
                        fontSize: "13px"
                    }
                },
                body: {
                    backgroundImage: "linear-gradient(to top, #dfe9f3 0%, rgba(31, 38, 135, 0.1) 100%)",
                },
                svg: {
                    verticalAlign: "middle"
                },
                img: {
                    maxWidth: "100%",
                    height: "100%",
                    verticalAlign: "middle"
                }
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
        },
    }
});

const AppThemeProvider = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    );
};

export default AppThemeProvider;