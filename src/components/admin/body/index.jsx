import classes from "./adminList.module.scss";
import Cookies from "js-cookie";

// Componentes personalizados
import SearchBar from './searchBar';
import AdminList from './adminList';

// React
import { useState, useEffect } from 'react';

// Elementos de MUI material
import { Box, useTheme } from "@mui/material";

const Component = ({componentsInThePage, extra}) => {

    const theme = useTheme();
    const [filterSearch, setFilterSearch] = useState(componentsInThePage);

    const handleSearch = (search) => {
        setFilterSearch(componentsInThePage.filter((component) =>{
            return component.title.toLowerCase().includes(search.title.toLowerCase());
        }));
    }


    const [backgroundNavBar, setBackgroundNavBar] = useState(null);

    useEffect(() => {
        const darkMode = Cookies.get("darkMode") === 'dark';
        setBackgroundNavBar(darkMode ? "#1c1c1c" : "white");
    }, []);

    if (backgroundNavBar === null) return null;

    return (
        <> 
            <SearchBar top100Films={componentsInThePage} callBack={handleSearch} extra={extra}/>
            <Box component="div" className={classes.adminList}
            sx={{
                bgcolor: "background.default",
                transition: `background-color ${theme.transitions.duration.standard}ms`
            }}>
                {filterSearch && filterSearch.map((component, index) => (
                    <AdminList key={index} 
                        nombre_elemento={component.title} 
                        descripcion={component.description} 
                        link={component.link} 
                        id={component.id}
                        url={component.url} 
                        video={component.video}/>
                ))}
            </Box>
        </>
    );
}

export default Component;