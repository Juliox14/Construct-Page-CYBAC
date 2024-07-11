import {InputBase, styled, Box} from "@mui/material";
import classes from "./adminList.module.scss";
import SearchBar from "./searchBar";

const AdminBodyLayout = ({ children }) => {
    
    return (
        <>
            <SearchBar/>
            <div className={classes.adminList}>
                <Box className={classes.textos} sx={{
                    bgcolor: '#fbfbfb;',
                    color: 'text.primary',
                }}
                >
                    <p>Imagen</p>
                    <p>Elemento</p>
                    <p>Descripción</p>
                    <p>Editar</p>
                </Box>
                {children}
            </div>
        </>
    );
};

export default AdminBodyLayout;