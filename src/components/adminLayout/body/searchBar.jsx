import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useRef, useState } from 'react';
import { Box, Autocomplete, TextField, IconButton, styled, InputAdornment } from '@mui/material';

export default function SearchBar({top100Films, callBack}) {

    const [value, setValue] = useState(null);
    const searchRef = useRef(null);

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
        }}>
            <Box sx={{
            bgcolor: 'background.default',
            color: 'text.primary',
            display: 'flex',
            alignItems: 'center',
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