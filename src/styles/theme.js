import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#55cc44',
        },
    },
    components: {
        MuiContainer: {
            defaultProps: { maxWidth: 'xl' }
        },
        MuiButton: {
            styleOverrides: {
                containedPrimary: {
                    color: '#fff',
                }
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    color: '#fff',
                }
            }
        }
    },
});

export default theme;
