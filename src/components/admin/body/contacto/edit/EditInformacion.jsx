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
        const formData = new FormData();
        formData.append(`file${1}` , contactoData.imagen_breadcrumb);
        formData.append(`file${2}` , contactoData.ruta_imagen);

        const responseImageUrl = await axios.post("/api/upload", formData);

        const imagen_imagen_breadcrumb = responseImageUrl.data.url.find((url) => url.id === 1);
        const imagen_ruta_imagen = responseImageUrl.data.url.find((url) => url.id === 2);

        const updatedDataWithImg = { 
            ...contactoData,
            imagen_breadcrumb: imagen_imagen_breadcrumb !== undefined ? imagen_imagen_breadcrumb.file : contactoData.imagen_breadcrumb,
            ruta_imagen: imagen_ruta_imagen !== undefined ? imagen_ruta_imagen.file : contactoData.ruta_imagen,
        }

        if(responseImageUrl.status === 200){
            const response = await axios.put(`/api/contact`, updatedDataWithImg);
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
        }
    };

    console.log(contactoData);

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
                                <label htmlFor="imagenBreadcrumb">Imagen breadcrumb - (1920 x 470)</label>
                                <input
                                    id="imagenBreadcrumb"
                                    type="file"
                                    accept="image/*"
                                    name="imagen"
                                    onChange={(e) => {
                                        const updatedData = contactoData;
                                        updatedData.imagen_breadcrumb = e.target.files[0];
                                        setContactoData(updatedData);
                                    }}
                                    required={contactoData.imagen_breadcrumb ? false : true}
                                    className={theme.palette.mode === 'dark' ? classes.formControlDark : classes.formControl}
                                />
                                {contactoData.imagen_breadcrumb && (
                                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px', marginTop: '10px' }}>
                                        <img src={contactoData.imagen_breadcrumb} alt="Imagen del servicio" style={{ width: '200px' }} />
                                    </div>
                                )}
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
                                <label htmlFor="imagen">Imagen - (510 x 587)</label>
                                <input
                                        id="imagen"
                                        type="file"
                                        accept="image/*"
                                        name="imagen"
                                        onChange={(e) => {
                                            const updatedData = contactoData;
                                            updatedData.ruta_imagen = e.target.files[0];
                                            setContactoData(updatedData);
                                        }}
                                        required={contactoData.ruta_imagen ? false : true}
                                        className={theme.palette.mode === 'dark' ? classes.formControlDark : classes.formControl}
                                    />
                                {contactoData.ruta_imagen && (
                                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px', marginTop: '10px' }}>
                                        <img src={contactoData.ruta_imagen} alt="Imagen del servicio" style={{ width: '200px' }} />
                                    </div>
                                )}
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
                        <BotonFixed metodo={() => document.getElementById('edit-contact-form').requestSubmit} />
                    </form>
                </Box>
            </div>
        </Box>
    );
};

export default EditInformacion;
