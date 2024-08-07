//  Imports de react.
import { useEffect, useState, useRef } from 'react';

//  Imports de librerias externas.
import axios from 'axios';
import Ruta from '../items-util/ruta';
import BotonFixed from '../items-util/botonFixed';

//  Imports de componentes de Material UI.
import {
    Box,
    Button,
    CircularProgress,
    Alert,
    TextareaAutosize,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

//  Imports de componentes externos.
import { Editor } from '@tinymce/tinymce-react';

//  Imports de estilos.
import classes from './EditService.module.scss';


export default function EditService({ servicio }) {
    const theme = useTheme();
    const [servicioData, setServicioData] = useState({
        id_servicio: 0,
        titulo_breadcrumb: '',
        subtitulo_breadcrumb: '',
        descripcion_breadcrumb: '',
        titulo: '',
        imagen_url: '',
        descripcion_breve: '',
        descripcion: '',
    });
    const [subServiciosData, setSubServiciosData] = useState([]);
    const [newSubservicioData, setNewSubservicioData] = useState([]);
    const [message, setMessage] = useState('');

    useEffect(() => {
        setServicioData({
            id_servicio: servicio.servicios.id_servicio || 0,
            titulo_breadcrumb: servicio.servicios.titulo_breadcrumb || '',
            subtitulo_breadcrumb: servicio.servicios.subtitulo_breadcrumb || '',
            descripcion_breadcrumb:
                servicio.servicios.descripcion_breadcrumb || '',
            titulo: servicio.servicios.titulo || '',
            imagen_url: servicio.servicios.imagen_url || '',
            descripcion_breve: servicio.servicios.descripcion_breve || '',
            descripcion: servicio.servicios.descripcion || '',
        });
        setSubServiciosData(servicio.get_servicio || []);
    }, [servicio]);

    const addSubservice = () => {
        const id_servicio = servicioData.id_servicio;
        setNewSubservicioData([
            ...newSubservicioData,
            {
                id_servicio: id_servicio,
                titulo_subservicio: '',
                descripcion_subservicio: '',
            },
        ]);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setServicioData({
            ...servicioData,
            [name]: value,
        });
    };

    const handleInputSubserviceChange = (index, e) => {
        const { name, value } = e.target;
        const updatedSubServicios = [...subServiciosData];
        updatedSubServicios[index][name] = value;
        setSubServiciosData(updatedSubServicios);
    };

    const handleInputNewSubserviceChange = (index, e) => {
        const { name, value } = e.target;
        const updatedNewSubServicios = [...newSubservicioData];
        updatedNewSubServicios[index][name] = value;
        setNewSubservicioData(updatedNewSubServicios);
    };

    const handleSubservicioEditorChange = (index, content) => {
        const updatedSubServicios = [...subServiciosData];
        updatedSubServicios[index].descripcion_subservicio = content;
        setSubServiciosData(updatedSubServicios);
    };

    const handleNewSubservicioEditorChange = (index, content) => {
        const updatedNewSubServicios = [...newSubservicioData];
        updatedNewSubServicios[index].descripcion_subservicio = content;
        setNewSubservicioData(updatedNewSubServicios);
    };

    const handleBothSubmits = async () => {
        try {
            // Enviar datos del servicio
            const responseService = await axios.put(
                `/api/services/${servicio}`,
                servicioData
            );
            if (responseService.status === 200) {
                setMessage(responseService.data.message);
                setInterval(() => {
                    setMessage('');
                }, 1500);
            } else {
                setMessage('Error al actualizar el servicio');
                return; // Detener si falla
            }

            // Enviar datos de los subservicios existentes
            if (subServiciosData.length > 0) {
                const responseSubservices = await axios.put(
                    `/api/subservices`,
                    subServiciosData
                );
                if (responseSubservices.status === 200) {
                    setMessage(response.data.message);
                    setInterval(() => {
                        setMessage('');
                    }, 1500);
                } else {
                    setMessage('Error al actualizar los subservicios');
                    setInterval(() => {
                        setMessage('');
                    }, 1500);
                    return; // Detener si falla
                }
            }

            // Enviar nuevos subservicios
            if (newSubservicioData.length > 0) {
                const responseNewSubservices = await axios.post(
                    `/api/subservices`,
                    newSubservicioData
                );
                if (responseNewSubservices.status === 200) {
                    setMessage(response.data.message);
                    setInterval(() => {
                        setMessage('');
                    }, 1500);
                } else {
                    setMessage(response.data.message);
                    setInterval(() => {
                        setMessage('');
                    }, 1500);
                    return; // Detener si falla
                }
            }
        } catch (error) {
            console.error(error);
        }
    };

    const deleteSubservice = async (id_subservicio) => {
        const response = await axios.delete('/api/subservices', {
            data: { id_subservicio },
        });
        if (response.status === 200) {
            setMessage(response.data.message);
            setInterval(() => {
                setMessage('');
            }, 10000);
        } else {
            setMessage('Error al eliminar el subservicio');
            setInterval(() => {
                setMessage('');
            }, 10000);
        }
        window.location.reload();
    };

    const deleteNewSubservice = () => {
        setNewSubservicioData(
            newSubservicioData.slice(0, newSubservicioData.length - 1)
        );
    };

    const rutas = [
        { link: '/admin', nombre: 'Inicio' },
        { link: '/admin/servicio', nombre: 'Servicios' },
        {
            link: `/admin/servicio/${servicioData.titulo}`,
            nombre: servicioData.titulo,
        },
    ];

    return (
        <>
            {servicioData.descripcion === '' ? (
                <Box
                    sx={{
                        bgcolor:
                            theme.palette.mode === 'dark'
                                ? '#1C1C1C'
                                : '#FFFFFF',
                        color:
                            theme.palette.mode === 'dark' ? 'white' : '#014655',
                        transition: `background-color ${theme.transitions.duration.standard}ms`,
                        display: 'flex',
                        width: 'auto',
                        minHeight: '100vh',
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'relative',
                    }}
                >
                    <CircularProgress size={'50px'} />
                </Box>
            ) : (
                <Box
                    sx={{
                        bgcolor:
                            theme.palette.mode === 'dark'
                                ? '#1C1C1C'
                                : '#FFFFFF',
                        color:
                            theme.palette.mode === 'dark' ? 'white' : '#014655',
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
                                top: '60px',
                                left: '430px',
                                width: 'auto',
                                height: 'auto',
                                bgcolor: '#26ca7032',
                                zIndex: '1000',
                            }}
                        >
                            {message}
                        </Alert>
                    )}
                    <Ruta titulo={'Editar servicio'} rutas={rutas} />
                    <Box
                        sx={{
                            bgcolor:
                                theme.palette.mode === 'dark'
                                    ? '#1C1C1C'
                                    : '#FFFFFF',
                            color:
                                theme.palette.mode === 'dark'
                                    ? 'white'
                                    : '#014655',
                            transition: `background-color ${theme.transitions.duration.standard}ms`,
                            display: 'flex',
                            flexDirection: 'row',
                            width: 'auto',
                            height: 'auto',

                            gap: '3rem',
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
                                minWidth: 'min-content',
                                // maxWidth: '60%',
                            }}
                        >
                            <h3>Editar Servicio</h3>
                            <form>
                                <div className={classes.formGroup}>
                                    <label htmlFor="titulo_breadcrumb">
                                        Título Breadcrumb
                                    </label>
                                    <input
                                        type="text"
                                        id="titulo_breadcrumb"
                                        name="titulo_breadcrumb"
                                        value={servicioData.titulo_breadcrumb}
                                        onChange={handleInputChange}
                                        className={
                                            theme.palette.mode === 'dark'
                                                ? classes.formControlDark
                                                : classes.formControl
                                        }
                                    />
                                </div>
                                <div className={classes.formGroup}>
                                    <label htmlFor="subtitulo_breadcrumb">
                                        Subtítulo Breadcrumb
                                    </label>
                                    <input
                                        type="text"
                                        id="subtitulo_breadcrumb"
                                        name="subtitulo_breadcrumb"
                                        value={
                                            servicioData.subtitulo_breadcrumb
                                        }
                                        onChange={handleInputChange}
                                        className={
                                            theme.palette.mode === 'dark'
                                                ? classes.formControlDark
                                                : classes.formControl
                                        }
                                    />
                                </div>
                                <div className={classes.formGroup}>
                                    <label htmlFor="descripcion_breadcrumb">
                                        Descripción Breadcrumb
                                    </label>
                                    <TextareaAutosize
                                        id="descripcion_breadcrumb"
                                        name="descripcion_breadcrumb"
                                        value={
                                            servicioData.descripcion_breadcrumb
                                        }
                                        onChange={handleInputChange}
                                        rows="4"
                                        className={
                                            theme.palette.mode === 'dark'
                                                ? classes.formControlDark
                                                : classes.formControl
                                        }
                                    ></TextareaAutosize>
                                </div>
                                <div className={classes.formGroup}>
                                    <label htmlFor="titulo">Título</label>
                                    <input
                                        type="text"
                                        id="titulo"
                                        name="titulo"
                                        value={servicioData.titulo}
                                        onChange={handleInputChange}
                                        className={
                                            theme.palette.mode === 'dark'
                                                ? classes.formControlDark
                                                : classes.formControl
                                        }
                                    />
                                </div>
                                <div className={classes.formGroup}>
                                    <label htmlFor="imagen">URL imagen</label>
                                    <input
                                        type="text"
                                        id="imagen"
                                        name="imagen_url"
                                        onChange={handleInputChange}
                                        className={
                                            theme.palette.mode === 'dark'
                                                ? classes.formControlDark
                                                : classes.formControl
                                        }
                                        value={servicioData.imagen_url}
                                    />
                                    {servicioData.imagen_url && (
                                        <div
                                            style={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                marginBottom: '10px',
                                                marginTop: '10px',
                                            }}
                                        >
                                            <img
                                                src={servicioData.imagen_url}
                                                alt="Imagen del servicio"
                                                style={{ width: '200px' }}
                                            />
                                        </div>
                                    )}
                                </div>
                                <div className={classes.formGroup}>
                                    <label htmlFor="descripcion_breve">
                                        Descripción Breve
                                    </label>
                                    <TextareaAutosize
                                        type="text"
                                        id="descripcion_breve"
                                        name="descripcion_breve"
                                        value={servicioData.descripcion_breve}
                                        onChange={handleInputChange}
                                        className={
                                            theme.palette.mode === 'dark'
                                                ? classes.formControlDark
                                                : classes.formControl
                                        }
                                    />
                                </div>
                                <div className={classes.formGroup}>
                                    <label htmlFor="descripcion">
                                        Descripción
                                    </label>
                                    <TextareaAutosize
                                        name="descripcion"
                                        id="descripcion"
                                        value={servicioData.descripcion}
                                        onChange={handleInputChange}
                                        className={
                                            theme.palette.mode === 'dark'
                                                ? classes.formControlDark
                                                : classes.formControl
                                        }
                                    />
                                </div>
                                <div className={classes.button}></div>
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
                                minWidth: '10%',
                                height: 'min-content',
                            }}
                        >
                            <form style={{ display: 'block' }}>
                                <div className={classes.formSubservicio}>
                                    {subServiciosData.map((item, index) => (
                                        <div
                                            key={index}
                                            className={classes.subservicioInd}
                                        >
                                            <div
                                                className={
                                                    classes.subservicioHead
                                                }
                                            >
                                                <h3>
                                                    Editar subservicio{' '}
                                                    {index + 1}
                                                </h3>
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        deleteSubservice(
                                                            item.id_subservicio
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
                                                    htmlFor={`titulo_subservicio_${item.id_subservicio}`}
                                                >
                                                    Título
                                                </label>
                                                <input
                                                    type="text"
                                                    id={`titulo_subservicio_${item.id_subservicio}`}
                                                    name="titulo_subservicio"
                                                    value={
                                                        item.titulo_subservicio
                                                    }
                                                    onChange={(e) =>
                                                        handleInputSubserviceChange(
                                                            index,
                                                            e
                                                        )
                                                    }
                                                    className={
                                                        theme.palette.mode ===
                                                        'dark'
                                                            ? classes.formControlDark
                                                            : classes.formControl
                                                    }
                                                />
                                            </div>
                                            <div className={classes.formGroup}>
                                                <label
                                                    htmlFor={`descripcion_subservicio_${item.id_subservicio}`}
                                                >
                                                    Descripción
                                                </label>
                                                <Editor
                                                    className={
                                                        theme.palette.mode ===
                                                        'dark'
                                                            ? classes.editorTinyDark
                                                            : ''
                                                    }
                                                    apiKey="r48129s2w0duaojj9z6uw4tdb23f7owjsaalkbsy8awlmc86"
                                                    value={
                                                        item.descripcion_subservicio
                                                    }
                                                    onEditorChange={(content) =>
                                                        handleSubservicioEditorChange(
                                                            index,
                                                            content
                                                        )
                                                    }
                                                    init={{
                                                        menubar: false,
                                                        plugins: [
                                                            'advlist',
                                                            'autolink',
                                                            'lists',
                                                            'link',
                                                            'charmap',
                                                            'preview',
                                                            'anchor',
                                                            'searchreplace',
                                                            'visualblocks',
                                                            'fullscreen',
                                                            'wordcount',
                                                        ],
                                                        toolbar:
                                                            'bold italic |' +
                                                            '| bullist numlist outdent indent | ',
                                                        content_style:
                                                            'body { font-family:Helvetica,Arial,sans-serif; font-size:12px;}',
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                    {newSubservicioData.map((item, index) => (
                                        <div
                                            className={classes.subservicioInd}
                                            key={index}
                                        >
                                            <div
                                                className={
                                                    classes.subservicioHead
                                                }
                                            >
                                                <h3>Nuevo subservicio</h3>
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        deleteNewSubservice()
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
                                                    htmlFor={`titulo_new_subservicio_${index}`}
                                                >
                                                    Título
                                                </label>
                                                <input
                                                    type="text"
                                                    id={`titulo_new_subservicio_${index}`}
                                                    name="titulo_subservicio"
                                                    value={
                                                        item.titulo_subservicio
                                                    }
                                                    onChange={(e) =>
                                                        handleInputNewSubserviceChange(
                                                            index,
                                                            e
                                                        )
                                                    }
                                                    className={
                                                        theme.palette.mode ===
                                                        'dark'
                                                            ? classes.formControlDark
                                                            : classes.formControl
                                                    }
                                                />
                                            </div>
                                            <div className={classes.formGroup}>
                                                <label
                                                    htmlFor={`descripcion_new_subservicio_${index}`}
                                                >
                                                    Descripción
                                                </label>
                                                <Editor
                                                    id={`descripcion_new_subservicio_${index}`}
                                                    className={
                                                        theme.palette.mode ===
                                                        'dark'
                                                            ? classes.editorTinyDark
                                                            : ''
                                                    }
                                                    apiKey="r48129s2w0duaojj9z6uw4tdb23f7owjsaalkbsy8awlmc86"
                                                    value={
                                                        item.descripcion_subservicio
                                                    }
                                                    onEditorChange={(content) =>
                                                        handleNewSubservicioEditorChange(
                                                            index,
                                                            content
                                                        )
                                                    }
                                                    init={{
                                                        menubar: false,
                                                        plugins: [
                                                            'advlist',
                                                            'autolink',
                                                            'lists',
                                                            'link',
                                                            'charmap',
                                                            'preview',
                                                            'anchor',
                                                            'searchreplace',
                                                            'visualblocks',
                                                            'fullscreen',
                                                            'wordcount',
                                                        ],
                                                        toolbar:
                                                            'bold italic |' +
                                                            '| bullist numlist outdent indent | ',
                                                        content_style:
                                                            'body { font-family:Helvetica,Arial,sans-serif; font-size:12px }',
                                                        skin:
                                                            theme.palette
                                                                .mode === 'dark'
                                                                ? 'oxide-dark'
                                                                : 'oxide',
                                                        content_css:
                                                            theme.palette
                                                                .mode === 'dark'
                                                                ? 'dark'
                                                                : 'default',
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    ))}
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
                                        onClick={addSubservice}
                                        type="button"
                                    >
                                        Agregar subservicio
                                    </Button>
                                </div>
                            </form>
                        </Box>
                    </Box>
                    <BotonFixed metodo={handleBothSubmits} />
                </Box>
            )}
        </>
    );
};
