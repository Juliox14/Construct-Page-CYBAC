// Imports de mui material
import { Box, Button, Alert, TextareaAutosize} from "@mui/material";
import { useTheme } from "@mui/material/styles";

// Import de estilos
import classes from "./EditService.module.scss";

// Imports de react
import { useEffect, useState } from "react";

// Imports de axios
import axios from "axios";

// Imports de tinymce
import { Editor } from "@tinymce/tinymce-react";

// Imports de componentes propios
import Ruta from "../items-util/ruta";

const NewServiceForm = () => {
    const theme = useTheme();
    const [servicioData, setServicioData] = useState({ titulo_breadcrumb: '', subtitulo_breadcrumb: '', descripcion_breadcrumb: '', titulo: '', ruta_imagen: '', descripcion_breve: '', descripcion: '' });
    const [newSubservicioData, setNewSubservicioData] = useState([{ titulo_subservicio: '', descripcion_subservicio: '' }, { titulo_subservicio: '', descripcion_subservicio: '' }]);
    const [auxWidth, setAuxWidth] = useState(false);
    const [message, setMessage] = useState(false);

    useEffect(() => {
        if (newSubservicioData.length > 2) {
            setAuxWidth(true);
        } else {
            setAuxWidth(false);
        }
    }, [newSubservicioData]);

    const handleNewSubservicioEditorChange = (index, content) => {
        const updatedNewSubServicios = [...newSubservicioData];
        updatedNewSubServicios[index].descripcion_subservicio = content;
        setNewSubservicioData(updatedNewSubServicios);
    };

    const addSubservice = () => {
        setNewSubservicioData([...newSubservicioData, { titulo_subservicio: '', descripcion_subservicio: '' }]);
    };

    const deleteNewSubservice = () => {
        setNewSubservicioData(newSubservicioData.slice(0, newSubservicioData.length - 1));
    };

    const handleInputNewSubserviceChange = (index, e) => {
        const { name, value } = e.target;
        const updatedNewSubServicios = [...newSubservicioData];
        updatedNewSubServicios[index][name] = value;
        setNewSubservicioData(updatedNewSubServicios);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setServicioData({
            ...servicioData,
            [name]: value
        });
    };

    const handleImageUpload = (e) => {
        if (!e.target.files?.[0]) return;
        setFile(e.target.files?.[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/newService', servicioData);
            if (response.status === 200) {
                setMessage('Servicio actualizado correctamente');
                setTimeout(() => {
                    setMessage('');
                }, 10000);
                return response.data.new_id_servicio; // Suponiendo que `new_id_servicio` es el ID devuelto por la API
            } else {
                setMessage('Error al actualizar el servicio');
                setTimeout(() => {
                    setMessage('');
                }, 5000);
            }
        } catch (error) {
            console.error('Error en handleSubmit:', error);
            setMessage('Error al actualizar el servicio');
            setTimeout(() => {
                setMessage('');
            }, 5000);
        }
    };

    const handleSubmitSubservicio = async (id_servicio) => {
        try {
            const subserviciosWithId = newSubservicioData.map((item) => ({ ...item, id_servicio }));
            const response = await axios.post(`/api/subservices`, subserviciosWithId);
            if (response.status === 200) {
                setMessage(response.data.message);
                setTimeout(() => {
                    setMessage('');
                }, 10000);
            } else {
                setMessage('Error al agregar los subservicios');
                setTimeout(() => {
                    setMessage('');
                }, 5000);
            }
        } catch (error) {
            console.error('Error en handleSubmitSubservicio:', error);
            setMessage('Error al agregar los subservicios');
            setTimeout(() => {
                setMessage('');
            }, 5000);
        }
    };

    const handleBothSubmits = async (e) => {
        e.preventDefault();
        const id_servicio = await handleSubmit(e);
        if (id_servicio) {
            await handleSubmitSubservicio(id_servicio);
            window.location.href = '/admin/servicio';
        } else {
            console.error('Error al obtener el ID del nuevo servicio');
        }
    };

    const rutas = [{ nombre: 'Inicio', link: '/admin' }, { nombre: 'Servicios', link: '/admin/servicio' }, { nombre: 'Nuevo servicio', link: '/admin/servicio/newService' }];
    return (
        <Box sx={{
            bgcolor: theme.palette.mode === 'dark' ? "#1C1C1C" : "#FFFFFF",
            color: theme.palette.mode === 'dark' ? "white" : "#014655",
            transition: `background-color ${theme.transitions.duration.standard}ms`,
            height: 'auto',
            width: 'auto',
            padding: '50px',
            display: 'block',
        }}>
            <Ruta rutas={rutas} titulo={'Agregar servicio'} />
            <Box sx={{
                bgcolor: theme.palette.mode === 'dark' ? "#1C1C1C" : "#FFFFFF",
                color: theme.palette.mode === 'dark' ? "white" : "#014655",
                transition: `background-color ${theme.transitions.duration.standard}ms`,
                display: 'flex',
                flexDirection: 'row',
                width: 'auto',
                height: 'auto',
                justifyContent: auxWidth === true ? 'space-between' : 'center',
                gap: '3rem',
            }}>
                {message && (
                    <Alert variant="outlined" severity="success" sx={{
                        position: 'fixed',
                        top: '40px',
                        left: '80px',
                        width: 'auto',
                        height: 'auto',
                        bgcolor: '#26ca7032',
                        zIndex: '1000',
                    }} >
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
                    minWidth: 'min-content',
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
                                required
                                className={theme.palette.mode === 'dark' ? classes.formControlDark : classes.formControl}
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
                                required
                                className={theme.palette.mode === 'dark' ? classes.formControlDark : classes.formControl}
                            />
                        </div>
                        <div className={classes.formGroup}>
                            <label htmlFor="descripcion_breadcrumb">Descripción Breadcrumb</label>
                            <TextareaAutosize
                                id="descripcion_breadcrumb"
                                name="descripcion_breadcrumb"
                                value={servicioData.descripcion_breadcrumb}
                                onChange={handleInputChange}
                                required
                                rows="4"
                                className={theme.palette.mode === 'dark' ? classes.formControlDark : classes.formControl}
                            />
                        </div>
                        <div className={classes.formGroup}>
                            <label htmlFor="titulo">Título</label>
                            <input
                                type="text"
                                id="titulo"
                                name="titulo"
                                value={servicioData.titulo}
                                onChange={handleInputChange}
                                className={theme.palette.mode === 'dark' ? classes.formControlDark : classes.formControl}
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
                                className={theme.palette.mode === 'dark' ? classes.formControlDark : classes.formControl}
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
                                className={theme.palette.mode === 'dark' ? classes.formControlDark : classes.formControl}
                            />
                        </div>
                        <div className={classes.formGroup}>
                            <label htmlFor="descripcion">Descripción</label>
                            <TextareaAutosize name="descripcion" defaultValue={servicioData.descripcion} onChange={handleInputChange} className={theme.palette.mode === 'dark' ? classes.formControlDark : classes.formControl} />
                        </div>
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
                                "&:hover": {
                                    backgroundColor: '#757254',
                                    color: '#F1F1F1'
                                }
                            }}
                            onClick={handleBothSubmits}
                        >
                            Guardar Cambios
                        </Button>
                    </form>
                </Box>

                <Box sx={{
                    bgcolor: theme.palette.mode === 'dark' ? "#242424" : "#E3E3E3",
                    color: theme.palette.mode === 'dark' ? "white" : "#014655",
                    transition: `background-color ${theme.transitions.duration.standard}ms`,
                    borderRadius: '10px',
                    padding: '20px',
                    minWidth: '10%',
                    height: 'min-content',
                }}>
                    <form style={{ display: 'block', maxHeight: 'max-content' }} >
                        <div className={classes.formSubservicio}>
                            {newSubservicioData.map((item, index) => (
                                <div className={classes.subservicioInd} key={index}>
                                    <div className={classes.subservicioHead}>
                                        <h3>Nuevo subservicio</h3>
                                        <button type="button" onClick={() => deleteNewSubservice()}>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#a80505" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M3 6h18" />
                                                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                                                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                                                <line x1="10" x2="10" y1="11" y2="17" />
                                                <line x1="14" x2="14" y1="11" y2="17" />
                                            </svg>
                                        </button>
                                    </div>
                                    <div className={classes.formGroup}>
                                        <label htmlFor={`titulo_new_subservicio_${index}`}>Título</label>
                                        <input
                                            type="text"
                                            id={`titulo_new_subservicio_${index}`}
                                            name="titulo_subservicio"
                                            value={item.titulo_subservicio}
                                            onChange={(e) => handleInputNewSubserviceChange(index, e)}
                                            className={theme.palette.mode === 'dark' ? classes.formControlDark : classes.formControl}
                                        />
                                    </div>
                                    <div className={classes.formGroup}>
                                        <label htmlFor={`descripcion_new_subservicio_${index}`}>Descripción</label>
                                        <Editor
                                            id={`descripcion_new_subservicio_${index}`}
                                            className={theme.palette.mode === 'dark' ? classes.editorTinyDark : ''}
                                            apiKey='r48129s2w0duaojj9z6uw4tdb23f7owjsaalkbsy8awlmc86'
                                            value={item.descripcion_subservicio}
                                            onEditorChange={(content) => handleNewSubservicioEditorChange(index, content)}
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
                        </div>
                        <div className={classes.buttonsSubSer}>
                            <Button variant="contained" sx={{
                                bgcolor: '#014655', color: '#F1F1F1', height: 'max-content', "&:hover": {
                                    backgroundColor: '#757254',
                                    color: '#F1F1F1'
                                }
                            }} onClick={addSubservice} type="button">
                                Agregar subservicio
                            </Button>
                        </div>

                    </form>
                </Box>
            </Box>
        </Box>
    )
}

export default NewServiceForm;