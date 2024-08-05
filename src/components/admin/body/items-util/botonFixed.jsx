import { Button } from '@mui/material';

const BotonFixed = ({ metodo }) => {
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
            onClick={(e) => metodo(e)}
        >
            Guardar Cambios
        </Button>
    );
};

export default BotonFixed;
