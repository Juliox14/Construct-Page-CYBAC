import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useRef, useState } from 'react';
import { Box, Autocomplete, TextField, IconButton, useTheme } from '@mui/material';

export default function SearchBar({top100Films, callBack}) {

    const [value, setValue] = useState(null);
    const searchRef = useRef(null);
    const theme = useTheme();

    const defaultProps = {
        options: top100Films,
        getOptionLabel: (option) => option.title,
      };

    const handleFocusSearch = () => {
        searchRef.current.focus();
        console.log("focus");
    }

    useEffect(() => {
        if(value === null) return callBack({title: ""});
        callBack(value)
    }, [value]);

    return (
        <Box
        sx={{
            bgcolor: 'background.default',
            color: 'text.primary',
            height: '200px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            transition: `background-color ${theme.transitions.duration.standard}ms`
        }}>
            <Box sx={{
            bgcolor: 'background.default',
            color: 'text.primary',
            display: 'flex',
            alignItems: 'center',
            transition: `background-color ${theme.transitions.duration.standard}ms`
        }}>
                <IconButton onClick={handleFocusSearch} sx={{ marginTop: "15px" }}>
                    <SearchIcon sx={{ color: 'grey' }}/>
                </IconButton>
                <Autocomplete
                    {...defaultProps}
                    id="controlled-demo"
                    sx={{
                        width: "300px",
                    }}
                    value={value}
                    onChange={(event, newValue) => {
                    setValue(newValue);
                    }}
                    renderInput={(params) => (
                        <TextField {...params} id="inputSearch" label="Buscar" variant="standard" inputRef={searchRef}/>
                    )}
                />
            </Box>
        </Box>
    );
}