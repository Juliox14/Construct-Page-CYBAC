import classes from './header/header.module.scss';
import classesMain from './body/mainSection.module.scss';
import Cookies from 'js-cookie';

// Componentes personalizados
import NavAdmin from './header';
import ColorModeContext from '../../context/contexDarkMode';

// Componentes de Material-UI
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme } from '@mui/material/styles';

// Componentes de Next y React
import Head from 'next/head';
import { useState, useMemo, useEffect } from 'react';

const AdminLayout = ({ children }) => {
    const [mode, setMode] = useState('light');

    useEffect(() => {
        // Lee la preferencia del modo desde las cookies
        const cookieMode = Cookies.get('darkMode') || 'light';
        setMode(cookieMode);
    }, []);

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => {
                    const newMode = prevMode === 'light' ? 'dark' : 'light';
                    Cookies.set('darkMode', newMode);
                    return newMode;
                });
            },
        }),
        []
    );

    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                    ...(mode === 'dark' && {
                        background: {
                            default: '#1c1c1c',
                            paper: '#2F2F2F',
                        },
                    }),
                },
                transitions: {
                    duration: {
                        standard: 300,
                    },
                },
            }),
        [mode]
    );

    return (
        <>
            <Head>
                <title>Admin Dashboard</title>
            </Head>

            <ColorModeContext.Provider value={colorMode}>
                <ThemeProvider theme={theme}>
                    <div className={classes.boxHeaderMain}>
                        <NavAdmin />
                        <Box
                            className={classesMain.boxFather}
                            sx={{
                                bgcolor: 'background.default',
                                color: 'text.primary',
                                transition: `background-color ${theme.transitions.duration.standard}ms`,
                            }}
                        >
                            {children}
                        </Box>
                    </div>
                </ThemeProvider>
            </ColorModeContext.Provider>
        </>
    );
};

export default AdminLayout;
