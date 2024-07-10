import classes from './mainSection.module.scss';
import Box from '@mui/material/Box';
import { useContext } from 'react';
import { useTheme } from '@mui/material/styles';
import ColorModeContext from '../../../context/contexDarkMode';

const AdminPageMain = () => {

    return (
        <>
            <Box className={classes.reichstag}
            sx={{
                bgcolor: 'background.default',
                color: 'text.primary',
              }}
            >
                <header>Admin Page Main</header>
            </Box>
        </>
    );
}

export default AdminPageMain;