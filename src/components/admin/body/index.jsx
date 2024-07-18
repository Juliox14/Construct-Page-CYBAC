import classes from "./adminList.module.scss";

// Componentes personalizados
import SearchBar from './searchBar';
import AdminList from './adminList';

// React
import { useState } from 'react';

// Elementos de MUI material
import { Box, useTheme } from "@mui/material";

const Component = ({componentsInThePage}) => {

    const theme = useTheme();
    const [filterSearch, setFilterSearch] = useState(componentsInThePage);

    const handleSearch = (search) => {
        setFilterSearch(componentsInThePage.filter((component) =>{
            return component.title.toLowerCase().includes(search.title.toLowerCase());
        }));
    }

    return (
        <> 
            <SearchBar top100Films={componentsInThePage} callBack={handleSearch}/>
            <Box className={classes.adminList}
            sx={{
                bgcolor: 'background.default',
                color: theme.palette.mode === 'dark' ? "white" : "#014655",
                transition: `background-color ${theme.transitions.duration.standard}ms`
            }}>
                {filterSearch.map((component, index) => (
                    <AdminList key={index} 
                        nombre_elemento={component.title} 
                        descripcion={component.description} 
                        link={component.link} 
                        idFrame={component.id}
                        urlFrame={component.urlFrame}
                        positionFrame={component.positionFrame} />
                ))}
            </Box>
        </>
    );
}

export default Component;