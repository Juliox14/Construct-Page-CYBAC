import PropTypes from 'prop-types';
import { Button, useTheme } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

export default function AddBtn ({ obj }) {
    const { href, title } = obj;
    const theme = useTheme();
    return (
        <Button
            variant="contained"
            sx={{
                backgroundColor:
                    theme.palette.mode === 'dark' ? '#323232' : '#014655',
                color: 'white',
                '&:hover': {
                    backgroundColor: '#ADA479',
                    color: 'white',
                },
            }}
            href={href}
        >
            <AddIcon /> {title}
        </Button>
    );
};

AddBtn.propTypes = {
    obj: PropTypes.shape({
        href: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
    }).isRequired,
};