import Head from "next/head";
import NavAdmin from "./header/NavAdmin";
import classes from "./header/header.module.scss";
import classesMain from "./body/mainSection.module.scss";
import Box from "@mui/material/Box";
import { useState, useMemo } from "react";
import ColorModeContext from "../../context/contexDarkMode";
import { ThemeProvider, createTheme } from '@mui/material/styles';

const AdminLayout = ({ children }) => {

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
              ...(mode === 'dark' && {
                  background: {
                    default: "#1c1c1c",
                    paper: "#2F2F2F",
                  },
                }),
            },
            transitions: {
              duration: {
                standard: 300,
              },
            },
        }),
        [mode],
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
            <Box className={classesMain.boxFather}
              sx={{
                bgcolor: 'background.default',
                color: 'text.primary',
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