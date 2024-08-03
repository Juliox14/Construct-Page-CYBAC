import { useEffect, useState } from 'react';
import { Box, TextareaAutosize, Alert } from '@mui/material';
import Ruta from '../../items-util/ruta';
import BotonFixed from '../../items-util/botonFixed';
import classes from './EditContact.module.scss';
import { useTheme } from '@mui/material/styles';
import axios from 'axios';

const EditInformacion = ({ contacto }) => {
    const [contactoData, setContactoData] = useState({
        id_contacto: 0,
        titulo_breadcrumb: "",
        subtitulo_breadcrumb: "",
        descripcion_breadcrumb: "",
        ruta_imagen: "",
        titulo: "",
        subtitulo: "",
        descripcion: "",
        direccion: "",
        telefono: "",
        horario: "",
        whatsapp: "",
        email: "",
        titulo_formulario: "",
        descripcion_formulario: ""
    });

    useEffect(() => {
        setContactoData(contacto);
    }, [contacto]);

    const [message, setMessage] = useState('');

    const theme = useTheme();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setContactoData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await axios.put(`/api/contact`, contactoData);
        if (response.status === 200) {
            setMessage(response.data.message);
            setInterval(() => {
                setMessage('');
            }, 10000);
        }
        else {
            setMessage('Error al actualizar la información de contacto');
            setInterval(() => {
                setMessage('');
            }, 5000);
        }
        window.location.reload();
    };

    const rutas = [{ nombre: 'Inicio', link: '/admin' }, { nombre: 'Contacto', link: '/admin/contacto' }, { nombre: 'Editar Información', link: '/admin/contacto/edit/informacion' }];

    return (
        <Box sx={{
            bgcolor: theme.palette.mode === 'dark' ? "#1C1C1C" : "#FFFFFF",
            color: theme.palette.mode === 'dark' ? "white" : "#014655",
            transition: `background-color ${theme.transitions.duration.standard}ms`,
            height: 'auto',
            width: 'auto',
            padding: '50px',
            display: 'block',
            position: 'relative',
        }}>
            {message && (
                <Alert variant="outlined" severity="success" sx={{
                    position: 'fixed',
                    top: '20px',
                    left: '100px',
                    bgcolor: '#26ca7032',
                    zIndex: '1000',
                }}>
                    {message}
                </Alert>
            )}
            <Ruta titulo={'Editar información de contacto'} rutas={rutas} />
            <div className={classes.formContainer}>
                <Box sx={{
                    bgcolor: theme.palette.mode === 'dark' ? "#242424" : "#E3E3E3",
                    color: theme.palette.mode === 'dark' ? "white" : "#014655",
                    transition: `background-color ${theme.transitions.duration.standard}ms`,
                    borderRadius: '10px',
                    padding: '20px',
                    height: 'min-content',
                    width: '800px',
                }}>

                    <form id="edit-contact-form" onSubmit={handleSubmit}>
                        <div id='breadcrumb-id'>
                            <h3>Editar página de contacto</h3>
                            <div className={classes.formGroup}>
                                <label htmlFor="titulo_breadcrumb">Título Breadcrumb</label>
                                <input
                                    required
                                    type="text"
                                    id="titulo_breadcrumb"
                                    name="titulo_breadcrumb"
                                    value={contactoData.titulo_breadcrumb}
                                    onChange={handleInputChange}
                                    className={theme.palette.mode === 'dark' ? classes.formControlDark : classes.formControl}
                                />
                            </div>
                            <div className={classes.formGroup}>
                                <label htmlFor="subtitulo_breadcrumb">Subtítulo Breadcrumb</label>
                                <input
                                    required
                                    type="text"
                                    id="subtitulo_breadcrumb"
                                    name="subtitulo_breadcrumb"
                                    value={contactoData.subtitulo_breadcrumb}
                                    onChange={handleInputChange}
                                    className={theme.palette.mode === 'dark' ? classes.formControlDark : classes.formControl}
                                />
                            </div>
                            <div className={classes.formGroup}>
                                <label htmlFor="descripcion_breadcrumb">Descripción Breadcrumb</label>
                                <TextareaAutosize
                                    required
                                    id="descripcion_breadcrumb"
                                    name="descripcion_breadcrumb"
                                    value={contactoData.descripcion_breadcrumb}
                                    onChange={handleInputChange}
                                    rows="4"
                                    className={theme.palette.mode === 'dark' ? classes.formControlDark : classes.formControl}
                                />
                            </div>
                        </div>
                        <hr style={{ marginBottom: '20px' }} />

                        <div id='info-id'>
                            <div className={classes.formGroup}>
                                <label htmlFor="titulo">Título</label>
                                <input
                                    required
                                    type="text"
                                    id="titulo"
                                    name="titulo"
                                    value={contactoData.titulo}
                                    onChange={handleInputChange}
                                    className={theme.palette.mode === 'dark' ? classes.formControlDark : classes.formControl}
                                />
                            </div>
                            <div className={classes.formGroup}>
                                <label htmlFor="subtitulo">Subtitulo</label>
                                <input
                                    required
                                    type="text"
                                    id="subtitulo"
                                    name="subtitulo"
                                    value={contactoData.subtitulo}
                                    onChange={handleInputChange}
                                    className={theme.palette.mode === 'dark' ? classes.formControlDark : classes.formControl}
                                />
                            </div>
                            <div className={classes.formGroup}>
                                <label htmlFor="descripcion">Descripción</label>
                                <TextareaAutosize
                                    required
                                    id="descripcion"
                                    name="descripcion"
                                    value={contactoData.descripcion}
                                    onChange={handleInputChange}
                                    rows="4"
                                    className={theme.palette.mode === 'dark' ? classes.formControlDark : classes.formControl}
                                />
                            </div>
                            <div className={classes.formGroup}>
                                <label htmlFor="direccion">Dirección</label>
                                <input
                                    required
                                    type="text"
                                    id="direccion"
                                    name="direccion"
                                    value={contactoData.direccion}
                                    onChange={handleInputChange}
                                    className={theme.palette.mode === 'dark' ? classes.formControlDark : classes.formControl}
                                />
                            </div>
                            <div className={classes.formGroup}>
                                <label htmlFor="telefono">Teléfono</label>
                                <input
                                    required
                                    type="text"
                                    id="telefono"
                                    name="telefono"
                                    value={contactoData.telefono}
                                    onChange={handleInputChange}
                                    className={theme.palette.mode === 'dark' ? classes.formControlDark : classes.formControl}
                                />
                            </div>
                            <div className={classes.formGroup}>
                                <label htmlFor="horario">Horario</label>
                                <input
                                    required
                                    type="text"
                                    id="horario"
                                    name="horario"
                                    value={contactoData.horario}
                                    onChange={handleInputChange}
                                    className={theme.palette.mode === 'dark' ? classes.formControlDark : classes.formControl}
                                />
                            </div>
                            <div className={classes.formGroup}>
                                <label htmlFor="whatsapp">WhatsApp</label>
                                <input
                                    required
                                    type="text"
                                    id="whatsapp"
                                    name="whatsapp"
                                    value={contactoData.whatsapp}
                                    onChange={handleInputChange}
                                    className={theme.palette.mode === 'dark' ? classes.formControlDark : classes.formControl}
                                />
                            </div>
                            <div className={classes.formGroup}>
                                <label htmlFor="email">Email</label>
                                <input
                                    required
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={contactoData.email}
                                    onChange={handleInputChange}
                                    className={theme.palette.mode === 'dark' ? classes.formControlDark : classes.formControl}
                                />
                            </div>
                        </div>
                        <hr style={{ marginBottom: '20px' }} />

                        <div id='form-id'>
                            <div className={classes.formGroup}>
                                <label htmlFor="titulo_formulario">Título del Formulario</label>
                                <input
                                    required
                                    type="text"
                                    id="titulo_formulario"
                                    name="titulo_formulario"
                                    value={contactoData.titulo_formulario}
                                    onChange={handleInputChange}
                                    className={theme.palette.mode === 'dark' ? classes.formControlDark : classes.formControl}
                                />
                            </div>
                            <div className={classes.formGroup}>
                                <label htmlFor="descripcion_formulario">Descripción del Formulario</label>
                                <TextareaAutosize
                                    required
                                    id="descripcion_formulario"
                                    name="descripcion_formulario"
                                    value={contactoData.descripcion_formulario}
                                    onChange={handleInputChange}
                                    rows="4"
                                    className={theme.palette.mode === 'dark' ? classes.formControlDark : classes.formControl}
                                />
                            </div>
                        </div>
                        <BotonFixed metodo={() => document.getElementById('edit-contact-form').requestSubmit()} />
                    </form>
                </Box>
            </div>
        </Box>
    );
};

export default EditInformacion;
