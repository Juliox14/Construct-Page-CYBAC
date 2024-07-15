import {Box} from "@mui/material";
import classes from "./adminList.module.scss";

const AdminBodyLayout = ({ children }) => {
    
    return (
        <Box sx={{
            bgcolor: 'background.default',
            color: 'text.primary',
        }}>
            <div className={classes.adminList}>
                {children}
            </div>
        </Box>
    );
};

export default AdminBodyLayout;