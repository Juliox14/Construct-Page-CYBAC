import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useRef, useState } from 'react';
import { Box, Autocomplete, TextField, IconButton, useTheme } from '@mui/material';
import AddServiceBtn from './servicios/AddService';

export default function SearchBar({top100Films, callBack, extra}) {

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
            transition: `background-color ${theme.transitions.duration.standard}ms`,
            position: 'relative',
        }}>
            <div style={{
            display: 'flex',
            alignItems: 'center',
        }}>
            {extra &&(
                <div style={{
                    position: 'absolute',
                    right: '0',
                    bottom: '0',
                    marginRight: '120px',
                    marginBottom: '80px',
                }}>
                    <AddServiceBtn />
                </div> 
            )}
                <IconButton onClick={handleFocusSearch} sx={{ marginTop: "15px" }}>
                    <SearchIcon sx={{ color: 'grey' }}/>
                </IconButton>
                <Autocomplete
                    {...defaultProps}
                    id="controlled-demo"
                    sx={{
                        width: { xs: "200px", sm: "300px" },
                    }}
                    value={value}
                    onChange={(event, newValue) => {
                    setValue(newValue);
                    }}
                    renderInput={(params) => (
                        <TextField {...params} id="inputSearch" label="Buscar" variant="standard" inputRef={searchRef}/>
                    )}
                />
            </div>
        </Box>
    );
}