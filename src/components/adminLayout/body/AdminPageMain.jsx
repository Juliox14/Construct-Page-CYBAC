import classes from './mainSection.module.scss';
import Box from '@mui/material/Box';
import { useContext } from 'react';
import { useTheme } from '@mui/material/styles';
import ColorModeContext from '../../../context/contexDarkMode';

const AdminPageMain = () => {

    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);


    return (
        <>
            <Box className={classes.reichstag}
            sx={{
                display: 'flex',
                width: '100%',
                height: '100vh',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: 'background.default',
                color: 'text.primary',
                p: 3,
              }}
            >
                <header>Admin Page Main</header>
            </Box>
        </>
    );
}

export default AdminPageMain;