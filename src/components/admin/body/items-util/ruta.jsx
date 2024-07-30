import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useTheme } from '@mui/material';
import Link from 'next/link';
import classes from './ruta.module.scss';


const Ruta = ({ rutas }) => {
    const theme = useTheme();
    return (
        <div className={classes.ruta}>
            <Link style={{display: 'flex', alignItems: 'center', marginBottom: '10px'}} href={rutas[rutas.length-2].link}><ArrowBackIcon sx={{ color: theme.palette.mode === 'dark' ? '#014655' : '#014655', fontSize: '30px', cursor: 'pointer', '&:hover':{
                color: '#ADA479'
            } }} /></Link>
            <div>
                <h1>Editar servicios</h1>
                <p style={{ color: theme.palette.mode === 'dark' ? '#014655' : '#014655' }}>
                    {rutas.map((ruta, index) =>
                    (
                       <span><Link href={ruta.link}>{ruta.nombre}</Link>{(rutas.length - index) > 1 ? ( <span>{' > '} </span>) : ''}</span>
                    ))}
                </p>
            </div>
        </div>
    )
};


export default Ruta;