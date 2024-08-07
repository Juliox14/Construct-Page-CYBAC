import { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Button, Alert, TextareaAutosize } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Ruta from '../items-util/ruta';
import classes from './EditFooter.module.scss';
import PropTypes from 'prop-types'; 

export default function EditFooter ({ footer }) {
    const theme = useTheme();
    const [footerData, setFooterData] = useState({
        id_footer: 0,
        eslogan: '',
        telefono: '',
        direccion: '',
        codigo_postal: null,
        ubicacion: '',
    });
    const [redesSociales, setRedesSociales] = useState([
        {
            id_red_social: 0,
            red_social: '',
            enlace_red_social: '',
            icono_red_social: '',
        },
    ]);
    const [newRedSocial, setNewRedSocial] = useState([]);
    const [enlacesRapidos, setEnlacesRapidos] = useState([]);
    const [message, setMessage] = useState('');

    useEffect(() => {
        setFooterData({
            id_footer: footer.footer.id_footer,
            eslogan: footer.footer.eslogan,
            telefono: footer.footer.telefono,
            direccion: footer.footer.direccion,
            codigo_postal: footer.footer.codigo_postal,
            ubicacion: footer.footer.ubicacion,
        });
        setRedesSociales(footer.redes_sociales);
        setEnlacesRapidos(footer.enlaces_rapidos);
    }, [footer]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFooterData({
            ...footerData,
            [name]: value,
        });
    };

    const deleteNewRedSocial = () => {
        setNewRedSocial(newRedSocial.slice(0, newRedSocial.length - 1));
    };

    const handleInputRedSocialChange = (e, index) => {
        const { name, value } = e.target;
        const newRedes = redesSociales;
        newRedes[index][name] = value;
        setRedesSociales([...redesSociales], newRedes);
        console.log(redesSociales);
    };

    const handleInputNewRedSocialChange = (index, e) => {
        const { name, value } = e.target;
        const newRedes = newRedSocial;
        newRedes[index][name] = value;
        setNewRedSocial(newRedes);
        console.log(newRedSocial);
    };

    const addRedSocial = () => {
        setNewRedSocial([
            ...newRedSocial,
            { red_social: '', enlace_red_social: '', icono_red_social: '' },
        ]);
    };

    const deleteRedSocial = async (id) => {
        const response = await axios.delete('/api/redes_sociales', {
            data: { id_red_social: id },
        });
        if (response.status === 200) {
            setMessage(response.data.message);
            setInterval(() => {
                setMessage('');
            }, 3000);
            window.location.reload();
        } else {
            setMessage(response.data.message);
            setInterval(() => {
                setMessage('');
            }, 3000);
        }
    };

    const handleSubmitRedesSociales = async (e) => {
        e.preventDefault();
        if (newRedSocial.length > 0) {
            const response = await axios.post(
                '/api/redes_sociales',
                newRedSocial
            );
            if (response.status === 200) {
                setMessage(response.data.message);
                setInterval(() => {
                    setMessage('');
                }, 3000);
            } else {
                setMessage(response.data.message);
                setInterval(() => {
                    setMessage('');
                }, 3000);
            }

            const response2 = await axios.put(
                '/api/redes_sociales',
                redesSociales
            );
            if (response2.status === 200) {
                setMessage(response.data.message);
                setInterval(() => {
                    setMessage('');
                }, 3000);
            } else {
                setMessage(response.data.message);
                setInterval(() => {
                    setMessage('');
                }, 3000);
            }
        } else {
            const response = await axios.put(
                '/api/redes_sociales',
                redesSociales
            );
            if (response.status === 200) {
                setMessage(response.data.message);
                setInterval(() => {
                    setMessage('');
                }, 3000);
            } else {
                setMessage(response.data.message);
                setInterval(() => {
                    setMessage('');
                }, 3000);
            }
        }
        window.location.reload();
    };

    const handleSubmitFooter = async () => {
        const response = await axios.put('/api/footer', footerData);
        if (response.status === 200) {
            setMessage(response.data.message);
            setInterval(() => {
                setMessage('');
            }, 3000);
        } else {
            setMessage(response.data.message);
            setInterval(() => {
                setMessage('');
            }, 3000);
        }
        window.location.reload();
    };

    const handleSubmiteEnlacesRapidos = async (e) => {
        e.preventDefault();
        const response = await axios.put(
            '/api/enlaces_rapidos',
            enlacesRapidos
        );
        if (response.status === 200) {
            setMessage(response.data.message);
            setInterval(() => {
                setMessage('');
            }, 3000);
        } else {
            setMessage(response.data.message);
            setInterval(() => {
                setMessage('');
            }, 3000);
        }
        window.location.reload();
    };

    const rutas = [
        { link: '/admin', nombre: 'Inicio' },
        { link: '/admin/footer', nombre: 'Footer' },
        { link: '/admin/footer/edit', nombre: 'Editar footer' },
    ];
    return (
        <Box
            sx={{
                bgcolor: theme.palette.mode === 'dark' ? '#1C1C1C' : '#FFFFFF',
                color: theme.palette.mode === 'dark' ? 'white' : '#014655',
                transition: `background-color ${theme.transitions.duration.standard}ms`,
                height: 'auto',
                width: 'auto',
                padding: '50px',
                display: 'block',
                position: 'relative',
            }}
        >
            {message && (
                <Alert
                    variant="outlined"
                    severity="success"
                    sx={{
                        position: 'fixed',
                        top: '20px',
                        left: '100px',
                        bgcolor: '#26ca7032',
                        zIndex: '1000',
                    }}
                    children={message}
                />       
            )}
            <Ruta titulo={'Editar footer'} rutas={rutas} />
            <Box
                sx={{
                    bgcolor:
                        theme.palette.mode === 'dark' ? '#1C1C1C' : '#FFFFFF',
                    color: theme.palette.mode === 'dark' ? 'white' : '#014655',
                    transition: `background-color ${theme.transitions.duration.standard}ms`,
                    display: 'grid',
                    width: 'auto',
                    height: 'auto',
                    gap: '3em',
                    gridTemplateColumns: '1fr 1fr',
                    gridAutoRows: '1fr',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '2em',
                    }}
                >
                    <Box
                        sx={{
                            bgcolor:
                                theme.palette.mode === 'dark'
                                    ? '#242424'
                                    : '#E3E3E3',
                            color:
                                theme.palette.mode === 'dark'
                                    ? 'white'
                                    : '#014655',
                            transition: `background-color ${theme.transitions.duration.standard}ms`,
                            borderRadius: '10px',
                            padding: '20px',
                            height: 'min-content',
                            width: '100%',
                        }}
                    >
                        <form onSubmit={(e) => handleSubmitFooter(e)}>
                            <h3>Información</h3>
                            <div className={classes.formGroup}>
                                <label htmlFor="eslogan">Eslogan</label>
                                <TextareaAutosize
                                    required
                                    className={
                                        theme.palette.mode === 'dark'
                                            ? classes.formControlDark
                                            : classes.formControl
                                    }
                                    type="text"
                                    id="eslogan"
                                    name="eslogan"
                                    value={footerData.eslogan}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className={classes.formGroup}>
                                <label htmlFor="telefono">Teléfono</label>
                                <input
                                    required
                                    className={
                                        theme.palette.mode === 'dark'
                                            ? classes.formControlDark
                                            : classes.formControl
                                    }
                                    type="text"
                                    id="telefono"
                                    name="telefono"
                                    value={footerData.telefono}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className={classes.formGroup}>
                                <label htmlFor="direccion">Dirección</label>
                                <input
                                    required
                                    className={
                                        theme.palette.mode === 'dark'
                                            ? classes.formControlDark
                                            : classes.formControl
                                    }
                                    type="text"
                                    id="direccion"
                                    name="direccion"
                                    value={footerData.direccion}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className={classes.formGroup}>
                                <label htmlFor="codigo_postal">
                                    Código postal
                                </label>
                                <input
                                    required
                                    className={
                                        theme.palette.mode === 'dark'
                                            ? classes.formControlDark
                                            : classes.formControl
                                    }
                                    type="text"
                                    id="codigo_postal"
                                    name="codigo_postal"
                                    value={footerData.codigo_postal}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className={classes.formGroup}>
                                <label htmlFor="ubicacion">Ubicación</label>
                                <TextareaAutosize
                                    required
                                    className={
                                        theme.palette.mode === 'dark'
                                            ? classes.formControlDark
                                            : classes.formControl
                                    }
                                    type="text"
                                    id="ubicacion"
                                    name="ubicacion"
                                    value={footerData.ubicacion}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className={classes.buttonsSubSer}>
                                <Button
                                    variant="contained"
                                    sx={{
                                        bgcolor: '#014655',
                                        color: '#F1F1F1',
                                        height: 'max-content',
                                        '&:hover': {
                                            backgroundColor: '#757254',
                                            color: '#F1F1F1',
                                        },
                                    }}
                                    type="submit"
                                >
                                    Guardar cambios
                                </Button>
                            </div>
                        </form>
                    </Box>
                    <Box
                        sx={{
                            bgcolor:
                                theme.palette.mode === 'dark'
                                    ? '#242424'
                                    : '#E3E3E3',
                            color:
                                theme.palette.mode === 'dark'
                                    ? 'white'
                                    : '#014655',
                            transition: `background-color ${theme.transitions.duration.standard}ms`,
                            borderRadius: '10px',
                            padding: '20px',
                            width: '100%',
                            height: 'min-content',
                        }}
                    >
                        <form
                            style={{ display: 'block' }}
                            onSubmit={(e) => handleSubmitRedesSociales(e)}
                        >
                            <h3>Redes sociales</h3>
                            <div className={classes.formSubservicio}>
                                {redesSociales.map((redSocial, index) => (
                                    <div
                                        className={classes.subservicioInd}
                                        key={`${redSocial.id_red_social}_${index}`}
                                    >
                                        <div
                                            className={classes.subservicioHead}
                                        >
                                            <h3>Editar red social</h3>
                                            <label htmlFor={"deletedRedSocial"} style={{display: 'none'}}/>
                                            <button
                                                id="deleteRedSocial"
                                                type="button"
                                                onClick={() =>
                                                    deleteRedSocial(
                                                        redSocial.id_red_social
                                                    )
                                                }
                                            >
                                                <svg
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="#a80505"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <path d="M3 6h18" />
                                                    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                                                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                                                    <line
                                                        x1="10"
                                                        x2="10"
                                                        y1="11"
                                                        y2="17"
                                                    />
                                                    <line
                                                        x1="14"
                                                        x2="14"
                                                        y1="11"
                                                        y2="17"
                                                    />
                                                </svg>
                                            </button>
                                        </div>

                                        <div className={classes.formGroup}>
                                            <label
                                                htmlFor={`red_social${index}`}
                                            >
                                                Red social
                                            </label>
                                            <select
                                                required
                                                className={
                                                    theme.palette.mode ===
                                                    'dark'
                                                        ? classes.formControlDark
                                                        : classes.formControl
                                                }
                                                id={`red_social${index}`}
                                                name={'red_social'}
                                                value={redSocial.red_social}
                                                defaultChecked={
                                                    redSocial.red_social
                                                }
                                                onChange={(e) =>
                                                    handleInputRedSocialChange(
                                                        e,
                                                        index
                                                    )
                                                }
                                            >
                                                <option value="Facebook">
                                                    Facebook
                                                </option>
                                                <option value="Instagram">
                                                    Instagram
                                                </option>
                                                <option value="Linkedin">
                                                    Linkedin
                                                </option>
                                                <option value="X">X</option>
                                            </select>
                                        </div>

                                        <div className={classes.formGroup}>
                                            <label
                                                htmlFor={`enlace_red_social${index}`}
                                            >
                                                Enlace
                                            </label>
                                            <input
                                                required
                                                className={
                                                    theme.palette.mode ===
                                                    'dark'
                                                        ? classes.formControlDark
                                                        : classes.formControl
                                                }
                                                type="text"
                                                id={`enlace_red_social${index}`}
                                                name="enlace_red_social"
                                                value={
                                                    redSocial.enlace_red_social
                                                }
                                                onChange={(e) =>
                                                    handleInputRedSocialChange(
                                                        e,
                                                        index
                                                    )
                                                }
                                            />
                                        </div>
                                    </div>
                                ))}
                                {newRedSocial.map((redSocial, index) => (
                                    <div
                                        className={classes.subservicioInd}
                                        key={`${redSocial.red_social}_${index}`}
                                    >
                                        <div
                                            className={classes.subservicioHead}
                                        >
                                            <h3>Añadir red social</h3>
                                            <label htmlFor={"deletedNewRedSocial"} style={{display: 'none'}}/>
                                            <button
                                                id="deleteNewRedSocial"
                                                type="button"
                                                onClick={() =>
                                                    deleteNewRedSocial()
                                                }
                                            >
                                                <svg
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="#a80505"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <path d="M3 6h18" />
                                                    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                                                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                                                    <line
                                                        x1="10"
                                                        x2="10"
                                                        y1="11"
                                                        y2="17"
                                                    />
                                                    <line
                                                        x1="14"
                                                        x2="14"
                                                        y1="11"
                                                        y2="17"
                                                    />
                                                </svg>
                                            </button>
                                        </div>

                                        <label htmlFor={`red_social${index}`}>
                                            Red social
                                        </label>
                                        <select
                                            required
                                            className={
                                                theme.palette.mode === 'dark'
                                                    ? classes.formControlDark
                                                    : classes.formControl
                                            }
                                            id={`red_social${index}`}
                                            name={'red_social'}
                                            defaultValue={redSocial.red_social}
                                            onChange={(e) =>
                                                handleInputNewRedSocialChange(
                                                    index,
                                                    e
                                                )
                                            }
                                        >
                                            <option value="Facebook">
                                                Facebook
                                            </option>
                                            <option value="Instagram">
                                                Instagram
                                            </option>
                                            <option value="Linkedin">
                                                Linkedin
                                            </option>
                                            <option value="X">X</option>
                                        </select>

                                        <label
                                            htmlFor={`enlace_red_social${index}`}
                                        >
                                            Enlace
                                        </label>
                                        <input
                                            required
                                            className={
                                                theme.palette.mode === 'dark'
                                                    ? classes.formControlDark
                                                    : classes.formControl
                                            }
                                            type="text"
                                            id={`enlace_red_social${index}`}
                                            name={'enlace_red_social'}
                                            defaultValue={
                                                redSocial.enlace_red_social
                                            }
                                            onChange={(e) => {
                                                handleInputNewRedSocialChange(
                                                    index,
                                                    e
                                                );
                                            }}
                                        />
                                    </div>
                                ))}

                                <div className={classes.buttonsSubSer}>
                                    <Button
                                        variant="contained"
                                        sx={{
                                            bgcolor: '#014655',
                                            color: '#F1F1F1',
                                            height: 'max-content',
                                            '&:hover': {
                                                backgroundColor: '#757254',
                                                color: '#F1F1F1',
                                            },
                                        }}
                                        onClick={addRedSocial}
                                        type="button"
                                    >
                                        Agregar red social
                                    </Button>
                                    <Button
                                        variant="contained"
                                        sx={{
                                            bgcolor: '#014655',
                                            color: '#F1F1F1',
                                            height: 'max-content',
                                            '&:hover': {
                                                backgroundColor: '#757254',
                                                color: '#F1F1F1',
                                            },
                                        }}
                                        type="submit"
                                    >
                                        Guardar cambios
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </Box>
                </Box>

                <Box
                    sx={{
                        bgcolor:
                            theme.palette.mode === 'dark'
                                ? '#242424'
                                : '#E3E3E3',
                        color:
                            theme.palette.mode === 'dark' ? 'white' : '#014655',
                        transition: `background-color ${theme.transitions.duration.standard}ms`,
                        borderRadius: '10px',
                        padding: '20px',
                        height: 'min-content',
                    }}
                >
                    <form onSubmit={(e) => handleSubmiteEnlacesRapidos(e)}>
                        <h3>Enlaces rápidos</h3>
                        {enlacesRapidos.map((enlace, index) => (
                            <div key={`${enlace.nombre_enlace}_${index}`} className={classes.formGroup}>
                                <label htmlFor={`nombre_enlace${index}`}>
                                    Nombre del enlace
                                </label>
                                <input
                                    required
                                    className={
                                        theme.palette.mode === 'dark'
                                            ? classes.formControlDark
                                            : classes.formControl
                                    }
                                    type="text"
                                    id={`nombre_enlace${index}`}
                                    name="nombre_enlace"
                                    value={enlace.nombre_enlace}
                                    onChange={(e) => {
                                        const newEnlaces = enlacesRapidos;
                                        newEnlaces[index].nombre_enlace =
                                            e.target.value;
                                        setEnlacesRapidos(
                                            [...enlacesRapidos],
                                            newEnlaces
                                        );
                                    }}
                                />

                                <label htmlFor={`enlace${index}`}>Enlace</label>
                                <input
                                    required
                                    className={
                                        theme.palette.mode === 'dark'
                                            ? classes.formControlDark
                                            : classes.formControl
                                    }
                                    type="text"
                                    id={`enlace${index}`}
                                    name="enlace"
                                    value={enlace.enlace}
                                    onChange={(e) => {
                                        const newEnlaces = enlacesRapidos;
                                        newEnlaces[index].enlace =
                                            e.target.value;
                                        setEnlacesRapidos(
                                            [...enlacesRapidos],
                                            newEnlaces
                                        );
                                    }}
                                />
                            </div>
                        ))}
                        <div className={classes.buttonsSubSer}>
                            <Button
                                variant="contained"
                                sx={{
                                    bgcolor: '#014655',
                                    color: '#F1F1F1',
                                    height: 'max-content',
                                    '&:hover': {
                                        backgroundColor: '#757254',
                                        color: '#F1F1F1',
                                    },
                                }}
                                type="submit"
                            >
                                Guardar cambios
                            </Button>
                        </div>
                    </form>
                </Box>
            </Box>
        </Box>
    );
};

EditFooter.propTypes = {
    footer: PropTypes.shape({
        footer: PropTypes.shape({
            id_footer: PropTypes.number.isRequired,
            eslogan: PropTypes.string.isRequired,
            telefono: PropTypes.string.isRequired,
            direccion: PropTypes.string.isRequired,
            codigo_postal: PropTypes.string.isRequired,
            ubicacion: PropTypes.string.isRequired,
        }).isRequired,
        redes_sociales: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                icono: PropTypes.string.isRequired,
                enlace: PropTypes.string.isRequired,
            })
        ).isRequired,
        enlaces_rapidos: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                nombre: PropTypes.string.isRequired,
                enlace: PropTypes.string.isRequired,
            })
        ).isRequired,
    }).isRequired,
};