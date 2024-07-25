'use client'
//Imports de react.
import { useEffect, useState, useRef } from "react";

//Imports de componentes de Material UI.
import { Box, Button, CircularProgress, Alert } from "@mui/material";
import { useTheme } from "@mui/material/styles";

//Imports de componentes externos.
import { Editor } from '@tinymce/tinymce-react';

//Imports de estilos.
import classes from "./EditService.module.scss";

//Imports de métodos y componentes propios.
import { getItemsBy } from "../../../../lib/items";

//Imports de librerias externas.
import axios from "axios";

const EditService = ({ servicio }) => {
    const theme = useTheme();
    const [modo, setModo] = useState('');
    const [servicioData, setServicioData] = useState({ titulo_breadcrumb: '', subtitulo_breadcrumb: '', descripcion_breadcrumb: '', titulo: '', ruta_imagen: '', descripcion_breve: '', descripcion: '' });
    const [subServiciosData, setSubServiciosData] = useState([]);
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState('');


    useEffect(() => {
        setModo(theme.palette.mode);
    }, [theme.palette.mode]);

    useEffect(() => {
        const services = async () => {
            const data = await getItemsBy('services', servicio);
            if (data && data.servicios) {
                setServicioData({
                    titulo_breadcrumb: data.servicios.titulo_breadcrumb || '',
                    subtitulo_breadcrumb: data.servicios.subtitulo_breadcrumb || '',
                    descripcion_breadcrumb: data.servicios.descripcion_breadcrumb || '',
                    titulo: data.servicios.titulo || '',
                    ruta_imagen: data.servicios.ruta_imagen || '',
                    descripcion_breve: data.servicios.descripcion_breve || '',
                    descripcion: data.servicios.descripcion || ''
                });
                setSubServiciosData(data.get_servicio || []);
            }
        }
        services();
    }, [servicio]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setServicioData({
            ...servicioData,
            [name]: value
        });
    };

    const handleSubservicioEditorChange = (index, content) => {
        const updatedSubServicios = [...subServiciosData];
        updatedSubServicios[index].descripcion_subservicio = content;
        setSubServiciosData(updatedSubServicios);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await axios.put(`/api/services/${servicio}`, servicioData);

        if (response.status === 200) {
            setMessage('Servicio actualizado correctamente');
            setInterval(() => {
                setMessage('');
            }, 10000);
        } else {
            setMessage('Error al actualizar el servicio');
            setInterval(() => {
                setMessage('');
            }, 5000);
        }

    };


    const handleImageUpload = (e) => {
        if (!e.target.files?.[0]) return;
        setFile(e.target.files?.[0]);
    };

    return (
        <>
            {servicioData.descripcion === '' ? (
                <Box sx={{
                    bgcolor: theme.palette.mode === 'dark' ? "#1C1C1C" : "#FFFFFF",
                    color: theme.palette.mode === 'dark' ? "white" : "#014655",
                    transition: `background-color ${theme.transitions.duration.standard}ms`,
                    display: 'flex',
                    width: 'auto',
                    minHeight: '100vh',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'relative',

                }}>
                    <CircularProgress size={'50px'} />
                </Box>
            ) : (
                <Box sx={{
                    bgcolor: theme.palette.mode === 'dark' ? "#1C1C1C" : "#FFFFFF",
                    color: theme.palette.mode === 'dark' ? "white" : "#014655",
                    transition: `background-color ${theme.transitions.duration.standard}ms`,
                    display: 'flex',
                    flexDirection: 'row',
                    width: 'auto',
                    height: 'auto',
                    padding: '50px',
                    gap: '3rem',
                }}>
                    {message && (
                        <Alert variant="outlined" severity="success" sx={{
                            position: 'fixed',
                            width: 'auto',
                            height: 'auto',
                            bgcolor: '#26ca7032',
                            zIndex: '1000',
                        }}>
                            {message}
                        </Alert>
                    )}
                    <Box sx={{
                        bgcolor: theme.palette.mode === 'dark' ? "#242424" : "#E3E3E3",
                        color: theme.palette.mode === 'dark' ? "white" : "#014655",
                        transition: `background-color ${theme.transitions.duration.standard}ms`,
                        borderRadius: '10px',
                        padding: '20px',
                        height: 'min-content',
                        minWidth: '30%',
                        // maxWidth: '60%',
                    }}>
                        <h3>Editar Servicio</h3>
                        <form onSubmit={handleSubmit}>
                            <div className={classes.formGroup}>
                                <label htmlFor="titulo_breadcrumb">Título Breadcrumb</label>
                                <input
                                    type="text"
                                    id="titulo_breadcrumb"
                                    name="titulo_breadcrumb"
                                    value={servicioData.titulo_breadcrumb}
                                    onChange={handleInputChange}
                                    className={modo === 'dark' ? classes.formControlDark : classes.formControl}
                                />
                            </div>
                            <div className={classes.formGroup}>
                                <label htmlFor="subtitulo_breadcrumb">Subtítulo Breadcrumb</label>
                                <input
                                    type="text"
                                    id="subtitulo_breadcrumb"
                                    name="subtitulo_breadcrumb"
                                    value={servicioData.subtitulo_breadcrumb}
                                    onChange={handleInputChange}
                                    className={modo === 'dark' ? classes.formControlDark : classes.formControl}
                                />
                            </div>
                            <div className={classes.formGroup}>
                                <label htmlFor="descripcion_breadcrumb">Descripción Breadcrumb</label>
                                <textarea
                                    id="descripcion_breadcrumb"
                                    name="descripcion_breadcrumb"
                                    value={servicioData.descripcion_breadcrumb}
                                    onChange={handleInputChange}
                                    rows="4"
                                    className={modo === 'dark' ? classes.formControlDark : classes.formControl}
                                ></textarea>
                            </div>
                            <div className={classes.formGroup}>
                                <label htmlFor="titulo">Título</label>
                                <input
                                    type="text"
                                    id="titulo"
                                    name="titulo"
                                    value={servicioData.titulo}
                                    onChange={handleInputChange}
                                    className={modo === 'dark' ? classes.formControlDark : classes.formControl}
                                />
                            </div>
                            <div className={classes.formGroup}>
                                <label htmlFor="imagen">Imagen</label>
                                <input
                                    type="file"
                                    accept="image/*"
                                    id="imagen"
                                    name="imagen"
                                    onChange={handleImageUpload}
                                    className={modo === 'dark' ? classes.formControlDark : classes.formControl}
                                />
                                {servicioData.ruta_imagen && (
                                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px', marginTop: '10px' }}>
                                        <img src={`/images/servicios/${servicioData.ruta_imagen}`} alt="Imagen del servicio" style={{ width: '200px' }} />
                                    </div>
                                )}
                            </div>
                            <div className={classes.formGroup}>
                                <label htmlFor="descripcion_breve">Descripción Breve</label>
                                <input
                                    type="text"
                                    id="descripcion_breve"
                                    name="descripcion_breve"
                                    value={servicioData.descripcion_breve}
                                    onChange={handleInputChange}
                                    className={modo === 'dark' ? classes.formControlDark : classes.formControl}
                                />
                            </div>
                            <div className={classes.formGroup}>
                                <label htmlFor="descripcion">Descripción</label>
                                <textarea value={servicioData.descripcion} onChange={handleInputChange} className={modo === 'dark' ? classes.formControlDark : classes.formControl} />
                            </div>
                            <div className={classes.button}>
                                <Button variant="contained" sx={{ bgcolor: '#014655', color: '#F1F1F1' }} type="submit">
                                    Guardar
                                </Button>
                            </div>
                        </form>
                    </Box>
                    <Box sx={{
                        bgcolor: theme.palette.mode === 'dark' ? "#242424" : "#E3E3E3",
                        color: theme.palette.mode === 'dark' ? "white" : "#014655",
                        transition: `background-color ${theme.transitions.duration.standard}ms`,
                        borderRadius: '10px',
                        padding: '20px',
                        minWidth: '10%',
                        // maxWidth: '70%',
                    }}>
                        <form className={classes.formSubservicio}>
                            {subServiciosData.map((item, index) => (
                                <div key={index} className={classes.subservicioInd}>
                                    <h3>Editar subservicio {index + 1}</h3>
                                    <div className={classes.formGroup}>
                                        <label htmlFor={`titulo_subservicio_${item.id_subservicio}`}>Título</label>
                                        <input
                                            type="text"
                                            id={`titulo_subservicio_${item.id_subservicio}`}
                                            name={`titulo_subservicio_${item.id_subservicio}`}
                                            value={item.titulo_subservicio}
                                            onChange={handleInputChange}
                                            className={modo === 'dark' ? classes.formControlDark : classes.formControl}
                                        />
                                    </div>
                                    <div className={classes.formGroup}>
                                        <label htmlFor={`descripcion_subservicio_${item.id_subservicio}`}>Descripción</label>
                                        <Editor
                                            apiKey='r48129s2w0duaojj9z6uw4tdb23f7owjsaalkbsy8awlmc86'
                                            value={item.descripcion_subservicio}
                                            onEditorChange={(content) => handleSubservicioEditorChange(index, content)}
                                            init={{
                                                menubar: false,
                                                plugins: [
                                                    'advlist', 'autolink', 'lists', 'link', 'charmap', 'preview',
                                                    'anchor', 'searchreplace', 'visualblocks', 'fullscreen',
                                                    'wordcount'
                                                ],
                                                toolbar:
                                                    'bold italic |' +
                                                    '| bullist numlist outdent indent | ',
                                                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:12px }'
                                            }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </form>
                    </Box>
                </Box>
            )}
        </>
    );
};

export default EditService;
