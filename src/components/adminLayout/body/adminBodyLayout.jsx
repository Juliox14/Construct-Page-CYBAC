import { Box, useTheme } from "@mui/material";
import classes from "./adminList.module.scss";

const AdminBodyLayout = ({ children }) => {
    
    const theme = useTheme();

    return (
        <Box sx={{
            bgcolor: 'background.default',
            color: 'text.primary',
            transition: `background-color ${theme.transitions.duration.standard}ms`
        }}>
            <div className={classes.adminList}>
                {children}
            </div>
        </Box>
    );
};

export default AdminBodyLayout;