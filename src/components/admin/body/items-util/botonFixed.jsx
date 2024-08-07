import PropTypes from 'prop-types';
import { Button } from '@mui/material';

export default function BotonFixed({ metodo }){
    return (
        <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{
                bgcolor: '#014655',
                color: '#F1F1F1',
                position: 'fixed',
                bottom: '20px',
                right: '20px',
                zIndex: '999',
                '&:hover': {
                    backgroundColor: '#757254',
                    color: '#F1F1F1',
                },
            }}
            onClick={(e) => {return metodo(e)}}
        >
            Guardar Cambios
        </Button>
    );
};

BotonFixed.propTypes = {
    metodo: PropTypes.func.isRequired,
};
