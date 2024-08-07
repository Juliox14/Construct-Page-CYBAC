import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import {
    Box,
    Autocomplete,
    TextField,
    IconButton,
    useTheme,
} from '@mui/material';
import AddBtn from './items-util/AddBtn';

export default function SearchBar({ top100Films, callBack, extra }) {
    const [value, setValue] = useState(null);
    const searchRef = useRef(null);
    const theme = useTheme();

    const defaultProps = {
        options: top100Films,
        getOptionLabel: (option) => option.title,
    };

    const handleFocusSearch = () => {
        searchRef.current.focus();
    };

    useEffect(() => {
        if (value === null) {
            callBack({ title: '' });
        } else {
            callBack(value);
        }
    }, [value, callBack]);
    
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
            }}
        >
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                {extra && (
                    <div
                        style={{
                            position: 'absolute',
                            right: '0',
                            bottom: '0',
                            marginRight: '120px',
                            marginBottom: '80px',
                        }}
                    >
                        <AddBtn obj={extra} />
                    </div>
                )}
                <IconButton
                    onClick={handleFocusSearch}
                    sx={{ marginTop: '15px' }}
                >
                    <SearchIcon sx={{ color: 'grey' }} />
                </IconButton>
                <Autocomplete
                    {...defaultProps}
                    id="controlled-demo"
                    sx={{
                        width: { xs: '200px', sm: '300px' },
                    }}
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            id="inputSearch"
                            label="Buscar"
                            variant="standard"
                            inputRef={searchRef}
                        />
                    )}
                />
            </div>
        </Box>
    );
}

SearchBar.propTypes = {
    top100Films: PropTypes.array.isRequired,
    callBack: PropTypes.func.isRequired,
    extra: PropTypes.object,
};