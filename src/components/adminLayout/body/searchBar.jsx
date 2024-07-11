import SearchIcon from '@mui/icons-material/Search';
import { InputBase, styled } from '@mui/material';

export default function SearchBar() {
    const Search = styled('div')(({ theme }) => ({
        backgroundColor: "white",
        padding: "5px 10px",
        borderRadius: '10px',
        width: "80%", // Ancho para dispositivos pequeños
        margin: "2em auto 1.5em auto", // Centrado para dispositivos pequeños
        display: "flex",
        alignItems: "center",
        boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)",
        [theme.breakpoints.up('sm')]: {
            width: "60%",
            marginTop: "3em",
        },
        [theme.breakpoints.up('md')]: {
            width: "40%",
            marginTop: "4em",
            marginLeft: "4em",
            marginBottom: "1.5em",
        },
        [theme.breakpoints.up('lg')]: {
            width: "20%",
            marginTop: "5em",
            marginLeft: "4em",
            marginBottom: "1.5em",
        },
    }));
    return (
        <div>
            <Search>
                <SearchIcon style={{ marginRight: '10px', color: 'grey' }} />
                <InputBase placeholder='Buscar...' type='search' />
            </Search>
        </div>
    );
}
