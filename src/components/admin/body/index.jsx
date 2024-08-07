// React
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import PropTypes from 'prop-types';

// Componentes personalizados
import SearchBar from './searchBar';
import AdminList from './adminList';


// Elementos de MUI material
import { Box, useTheme } from '@mui/material';
import classes from './adminList.module.scss';

export default function Component({ componentsInThePage, extra, deleteButton }) {
    const theme = useTheme();
    const [filterSearch, setFilterSearch] = useState(componentsInThePage);

    const handleSearch = (search) => {
        setFilterSearch(
            componentsInThePage.filter((component) =>
                component.title.toLowerCase().includes(search.title.toLowerCase())
            )
        );
    };


    useEffect(() => {
        setFilterSearch(componentsInThePage);
    }, [componentsInThePage]);

    const [backgroundNavBar, setBackgroundNavBar] = useState(null);

    useEffect(() => {
        const darkMode = Cookies.get('darkMode') === 'dark';
        setBackgroundNavBar(darkMode ? '#1c1c1c' : 'white');
    }, []);

    if (backgroundNavBar === null) return null;

    return (
        <>
            <SearchBar
                top100Films={componentsInThePage}
                callBack={handleSearch}
                extra={extra}
            />
            <Box
                component="div"
                className={classes.adminList}
                sx={{
                    bgcolor: 'background.default',
                    transition: `background-color ${theme.transitions.duration.standard}ms`,
                }}
            >
                {filterSearch.map((component) => (
                    <AdminList
                        key={component.id}
                        nombreElemento={component.title}
                        descripcion={component.description}
                        link={component.link}
                        id={component.id}
                        url={component.url}
                        video={component.video}
                        deleteButton={
                            component.title !== 'Index de proyectos' &&
                                component.title !== 'Index de servicios'
                                ? deleteButton
                                : false
                        }
                        extra={extra !== undefined ? extra.title : ''}
                    />
                ))}
            </Box>
        </>
    );
};

Component.propTypes = {
    componentsInThePage: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            link: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired,
            url: PropTypes.string.isRequired,
            video: PropTypes.string.isRequired,
        })
    ).isRequired,
    extra: PropTypes.shape({
        title: PropTypes.string.isRequired,
    }),
    deleteButton: PropTypes.bool,
};