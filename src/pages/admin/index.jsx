import { useState, useMemo } from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AdminLayout from "../../components/adminLayout";
import AdminPageMain from "../../components/adminLayout/body/AdminPageMain";
import ColorModeContext from "../../context/contexDarkMode";


export default function AdminPage() {

    const [mode, setMode] = useState('light');
    const colorMode = useMemo(
        () => ({
        toggleColorMode: () => {
            setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
        },
        }),
        [],
    );

    const theme = useMemo(
        () =>
        createTheme({
            palette: {
            mode,
            },
        }),
        [mode],
    );

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <AdminLayout>
                    <AdminPageMain />
                </AdminLayout>
            </ThemeProvider>
        </ColorModeContext.Provider>
    )
}