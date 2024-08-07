import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useTheme } from '@mui/material';
import PropTypes from 'prop-types';
import Link from 'next/link';
import classes from './ruta.module.scss';

export default function Ruta ({ rutas, titulo }){
    const theme = useTheme();
    return (
        <div className={classes.ruta}>
            <Link
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '10px',
                }}
                href={rutas[rutas.length - 2].link}
            >
                <ArrowBackIcon
                    sx={{
                        color:
                            theme.palette.mode === 'dark'
                                ? '#014655'
                                : '#014655',
                        fontSize: '30px',
                        cursor: 'pointer',
                        '&:hover': {
                            color: '#ADA479',
                        },
                    }}
                />
            </Link>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-end',
                }}
            >
                <h1>{titulo}</h1>
                <p
                    style={{
                        color:
                            theme.palette.mode === 'dark'
                                ? '#014655'
                                : '#014655',
                    }}
                >
                    {rutas.map((ruta, index) => (
                        <span key={`${ruta.nombre}_${index}`}>
                            <Link href={ruta.link}>{ruta.nombre}</Link>
                            {rutas.length - index > 1 ? (
                                <span>{' > '} </span>
                            ) : (
                                ''
                            )}
                        </span>
                    ))}
                </p>
            </div>
        </div>
    );
};

Ruta.propTypes = {
    rutas: PropTypes.arrayOf(
        PropTypes.shape({
            link: PropTypes.string.isRequired,
            nombre: PropTypes.string.isRequired,
        })
    ).isRequired,
    titulo: PropTypes.string.isRequired,
};