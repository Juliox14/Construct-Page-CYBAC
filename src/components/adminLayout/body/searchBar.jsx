import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { Box, Autocomplete, TextField, styled } from '@mui/material';

export default function SearchBar() {

    const defaultProps = {
        options: top100Films,
        getOptionLabel: (option) => option.title,
      };
      
      const [value, setValue] = useState(null);

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
                <SearchIcon style={{ marginRight: '10px', marginTop: "15px", color: 'grey' }} />
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
                        <TextField {...params} label="Buscar" variant="standard" />
                        )}
                    />
            </Box>
        </Box>
    );
}