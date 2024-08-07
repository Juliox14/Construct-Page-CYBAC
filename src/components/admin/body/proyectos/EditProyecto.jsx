//  Imports de react.
import { useEffect, useState } from 'react';

//  Imports de next.
import Image from 'next/image';

//  Imports de componentes de Material UI.
import { Box, Button, Alert, FormControlLabel, Checkbox, TextareaAutosize } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import InfoIcon from '@mui/icons-material/Info';

//  Imports de librerias externas.
import PropTypes from 'prop-types';
import axios from 'axios';

//  Imports de estilos.
import classes from '../servicios/EditService.module.scss';

//  Imports de componentes propios.
import Ruta from '../items-util/ruta';
import BotonFixed from '../items-util/botonFixed';

export default function EditProyecto({ proyecto }) {
    const theme = useTheme();
    const [proyectoData, setProyectoData] = useState({
        id_proyecto: 0,
        cliente: '',
        ubicacion: '',
        estado: '',
        tipo_obra: '',
        importe: 0,
        ruta_imagen: null,
        fecha_inicio: '',
        fecha_final: null,
        duracion: null,
        nombre_proyecto: '',
        descripcion_proyecto: '',
        isDestacado: 0,
        use_richtexts: 0,
        texto1_richtext: '',
        texto2_richtext: '',
        texto3_richtext: '',
        use_overview: 0,
        ruta_imagen_richtext: null,
        texto_final_richtext: '',
        titulo_overview: '',
        descripcion_overview: '',
        imagen_overview: null,
    });
    const [message, setMessage] = useState('');
    const [showTooltipRich, setShowTooltipRich] = useState(false);
    const [showTooltipOver, setShowTooltipOver] = useState(false);

    const handleRichMouseEnter = () => {
        setShowTooltipRich(true);
    };

    const handleRichMouseLeave = () => {
        setShowTooltipRich(false);
    };

    const handleOverMouseEnter = () => {
        setShowTooltipOver(true);
    };

    const handleOverMouseLeave = () => {
        setShowTooltipOver(false);
    };

    useEffect(() => {
        setProyectoData({
            id_proyecto: proyecto.id_proyecto,
            cliente: proyecto.cliente,
            ubicacion: proyecto.ubicacion,
            estado: proyecto.estado,
            tipo_obra: proyecto.tipo_obra,
            importe: proyecto.importe,
            ruta_imagen: proyecto.ruta_imagen,
            fecha_inicio: proyecto.fecha_inicio,
            fecha_final: proyecto.fecha_final,
            nombre_proyecto: proyecto.nombre_proyecto,
            descripcion_proyecto: proyecto.descripcion_proyecto,
            isDestacado: proyecto.isDestacado,
            use_richtexts: proyecto.use_richtexts,
            texto1_richtext: proyecto.texto1_richtext,
            texto2_richtext: proyecto.texto2_richtext,
            texto3_richtext: proyecto.texto3_richtext,
            use_overview: proyecto.use_overview,
            ruta_imagen_richtext: proyecto.ruta_imagen_richtext,
            texto_final_richtext: proyecto.texto_final_richtext,
            titulo_overview: proyecto.titulo_overview,
            descripcion_overview: proyecto.descripcion_overview,
            imagen_overview: proyecto.imagen_overview,
        });
    }, [proyecto]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProyectoData({
            ...proyectoData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await axios.put(
            `/api/proyects/${proyectoData.id_proyecto}`,
            proyectoData
        );

        if (response.status === 200) {
            setMessage(response.data.message);
            setInterval(() => {
                setMessage('');
            }, 5000);
        } else {
            setMessage('Error al actualizar el proyecto');
            setInterval(() => {
                setMessage('');
            }, 5000);
        }
    };

    const loaderImage = (image) => image;
    

    const rutas = [
        { link: '/admin', nombre: 'Inicio' },
        { link: '/admin/proyecto', nombre: 'Proyectos' },
        {
            link: `/admin/servicio/${proyectoData.id_proyecto}`,
            nombre: `${proyectoData.nombre_proyecto}`,
        },
    ];

    return (
        <Box
            sx={{
                bgcolor:
                    theme.palette.mode === 'dark' ? '#1C1C1C' : '#FFFFFF',
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
                        top: '40px',
                        left: '80px',
                        width: 'auto',
                        height: 'auto',
                        bgcolor: '#26ca7032',
                        zIndex: '1000',
                    }}
                    children={message}
                />
            )}
            <Ruta rutas={rutas} titulo={'Editar proyecto'} />
            <Box
                sx={{
                    bgcolor:
                        theme.palette.mode === 'dark'
                            ? '#1C1C1C'
                            : '#FFFFFF',
                    color:
                        theme.palette.mode === 'dark' ? 'white' : '#014655',
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
                        gridRowStart: '1',
                        gridRowEnd: '3',
                    }}
                >
                    <h3>Editar página principal</h3>
                    <form onSubmit={handleSubmit}>
                        <div className={classes.formGroup}>
                            <label htmlFor="cliente">Cliente</label>
                            <input
                                type="text"
                                id="cliente"
                                name="cliente"
                                value={proyectoData.cliente}
                                onChange={handleInputChange}
                                className={
                                    theme.palette.mode === 'dark'
                                        ? classes.formControlDark
                                        : classes.formControl
                                }
                                required
                            />
                        </div>
                        <div className={classes.formGroup}>
                            <label htmlFor="ubicacion">Ciudad</label>
                            <input
                                type="text"
                                id="ubicacion"
                                name="ubicacion"
                                value={proyectoData.ubicacion}
                                onChange={handleInputChange}
                                className={
                                    theme.palette.mode === 'dark'
                                        ? classes.formControlDark
                                        : classes.formControl
                                }
                                required
                            />
                        </div>
                        <div className={classes.formGroup}>
                            <label htmlFor="estado">Estado</label>
                            <input
                                type="text"
                                id="estado"
                                name="estado"
                                value={proyectoData.estado}
                                onChange={handleInputChange}
                                className={
                                    theme.palette.mode === 'dark'
                                        ? classes.formControlDark
                                        : classes.formControl
                                }
                                required
                            />
                        </div>
                        <div className={classes.formGroup}>
                            <label htmlFor="tipo_obra">Tipo de Obra</label>
                            <input
                                type="text"
                                id="tipo_obra"
                                name="tipo_obra"
                                value={proyectoData.tipo_obra}
                                onChange={handleInputChange}
                                className={
                                    theme.palette.mode === 'dark'
                                        ? classes.formControlDark
                                        : classes.formControl
                                }
                                required
                            />
                        </div>
                        <div className={classes.formGroup}>
                            <label htmlFor="importe">Importe</label>
                            <input
                                type="number"
                                id="importe"
                                name="importe"
                                value={proyectoData.importe}
                                onChange={handleInputChange}
                                className={
                                    theme.palette.mode === 'dark'
                                        ? classes.formControlDark
                                        : classes.formControl
                                }
                                required
                            />
                        </div>
                        <div className={classes.formGroup}>
                            <label htmlFor="ruta_imagen">
                                Ruta de la Imagen
                            </label>
                            <input
                                type="text"
                                id="ruta_imagen"
                                name="ruta_imagen"
                                value={proyectoData.ruta_imagen}
                                onChange={handleInputChange}
                                className={
                                    theme.palette.mode === 'dark'
                                        ? classes.formControlDark
                                        : classes.formControl
                                }
                                required
                            />
                            {proyectoData.ruta_imagen && (
                                <div className={classes.imagePreview}>
                                    <Image
                                        src={proyectoData.ruta_imagen}
                                        loader={() =>
                                            loaderImage(
                                                proyectoData.ruta_imagen
                                            )
                                        }
                                        width={300}
                                        height={200}
                                        alt="Imagen del proyecto"
                                    />
                                </div>
                            )}
                        </div>
                        <div className={classes.formGroup}>
                            <label htmlFor="fecha_inicio">
                                Fecha de Inicio
                            </label>
                            <input
                                type="date"
                                id="fecha_inicio"
                                name="fecha_inicio"
                                value={proyectoData.fecha_inicio}
                                onChange={handleInputChange}
                                className={
                                    theme.palette.mode === 'dark'
                                        ? classes.formControlDark
                                        : classes.formControl
                                }
                                required
                            />
                        </div>
                        <div className={classes.formGroup}>
                            <label htmlFor="fecha_final">Fecha Final</label>
                            <input
                                type="date"
                                id="fecha_final"
                                name="fecha_final"
                                value={proyectoData.fecha_final}
                                onChange={handleInputChange}
                                className={
                                    theme.palette.mode === 'dark'
                                        ? classes.formControlDark
                                        : classes.formControl
                                }
                                required
                            />
                        </div>
                        <div className={classes.formGroup}>
                            <label htmlFor="nombre_proyecto">
                                Nombre del Proyecto
                            </label>
                            <input
                                type="text"
                                id="nombre_proyecto"
                                name="nombre_proyecto"
                                value={proyectoData.nombre_proyecto}
                                onChange={handleInputChange}
                                className={
                                    theme.palette.mode === 'dark'
                                        ? classes.formControlDark
                                        : classes.formControl
                                }
                                required
                            />
                        </div>
                        <div className={classes.formGroup}>
                            <label htmlFor="descripcion_proyecto">
                                Descripción del Proyecto
                            </label>
                            <TextareaAutosize
                                id="descripcion_proyecto"
                                name="descripcion_proyecto"
                                value={proyectoData.descripcion_proyecto}
                                onChange={handleInputChange}
                                rows="4"
                                className={
                                    theme.palette.mode === 'dark'
                                        ? classes.formControlDark
                                        : classes.formControl
                                }
                                required
                            />
                        </div>
                        <div className={classes.formGroup_check}>
                            <FormControlLabel
                                label="¿Es destacado?"
                                control={
                                    <Checkbox
                                        id="isDestacado"
                                        name="isDestacado"
                                        checked={proyectoData.isDestacado}
                                        onChange={(e) =>
                                            setProyectoData({
                                                ...proyectoData,
                                                isDestacado: e.target
                                                    .checked
                                                    ? 1
                                                    : 0,
                                            })
                                        }
                                    />
                                }
                            />
                        </div>
                    </form>
                </Box>
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
                            width: proyectoData.use_richtexts
                                ? 'auto'
                                : 'max-content',
                            height: 'min-content',
                        }}
                    >
                        {proyectoData.use_richtexts ? (
                            <form>
                                <div className={classes.subservicioHead}>
                                    <h3>Sección Richtext</h3>
                                    <label htmlFor="button_richtext" style={{display: 'none'}}/>
                                    <button
                                        id='button_richtext'
                                        type="button"
                                        onClick={() =>
                                            setProyectoData({
                                                ...proyectoData,
                                                use_richtexts: 0,
                                            })
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
                                    <label htmlFor="texto1_richtext">
                                        Texto 1
                                    </label>
                                    <TextareaAutosize
                                        className={
                                            theme.palette.mode === 'dark'
                                                ? classes.formControlDark
                                                : classes.formControl
                                        }
                                        type="text"
                                        id="texto1_richtext"
                                        name="texto1_richtext"
                                        value={proyectoData.texto1_richtext}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className={classes.formGroup}>
                                    <label htmlFor="texto2_richtext">
                                        Texto 2
                                    </label>
                                    <TextareaAutosize
                                        className={
                                            theme.palette.mode === 'dark'
                                                ? classes.formControlDark
                                                : classes.formControl
                                        }
                                        type="text"
                                        id="texto2_richtext"
                                        name="texto2_richtext"
                                        value={proyectoData.texto2_richtext}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className={classes.formGroup}>
                                    <label htmlFor="texto3_richtext">
                                        Texto 3
                                    </label>
                                    <TextareaAutosize
                                        className={
                                            theme.palette.mode === 'dark'
                                                ? classes.formControlDark
                                                : classes.formControl
                                        }
                                        type="text"
                                        id="texto3_richtext"
                                        name="texto3_richtext"
                                        value={proyectoData.texto3_richtext}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className={classes.formGroup}>
                                    <label htmlFor="ruta_imagen_richtext">
                                        Ruta de la Imagen
                                    </label>
                                    <input
                                        className={
                                            theme.palette.mode === 'dark'
                                                ? classes.formControlDark
                                                : classes.formControl
                                        }
                                        type="text"
                                        id="ruta_imagen_richtext"
                                        name="ruta_imagen_richtext"
                                        value={
                                            proyectoData.ruta_imagen_richtext
                                        }
                                        onChange={handleInputChange}
                                    />
                                    {proyectoData.ruta_imagen_richtext && (
                                        <div
                                            className={classes.imagePreview}
                                        >
                                            <img
                                                src={
                                                    proyectoData.ruta_imagen_richtext
                                                }
                                                alt="Imagen del proyecto"
                                            />
                                        </div>
                                    )}
                                </div>
                                <div className={classes.formGroup}>
                                    <label htmlFor="texto_final_richtext">
                                        Texto Final
                                    </label>
                                    <TextareaAutosize
                                        className={
                                            theme.palette.mode === 'dark'
                                                ? classes.formControlDark
                                                : classes.formControl
                                        }
                                        id="texto_final_richtext"
                                        name="texto_final_richtext"
                                        value={
                                            proyectoData.texto_final_richtext
                                        }
                                        onChange={handleInputChange}
                                        rows="4"
                                    />
                                </div>
                            </form>
                        ) : (
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    gap: '10px',
                                }}
                            >
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
                                    type="button"
                                    onClick={() =>
                                        setProyectoData({
                                            ...proyectoData,
                                            use_richtexts: 1,
                                        })
                                    }
                                >
                                    Agregar sección richtext
                                </Button>
                                <div
                                    style={{ position: 'relative' }}
                                    onMouseEnter={handleRichMouseEnter}
                                    onMouseLeave={handleRichMouseLeave}
                                >
                                    <InfoIcon
                                        color="disabled"
                                        sx={{
                                            fontSize: '20px',
                                            cursor: 'pointer',
                                            position: 'relative',
                                        }}
                                    />
                                    {showTooltipRich && (
                                        <div
                                            style={{
                                                position: 'absolute',
                                                top: '30px',
                                                left: '50%',
                                                transform:
                                                    'translateX(-50%)',
                                                width: '400px',
                                                padding: '10px',
                                                backgroundColor: '#fff',
                                                border: '1px solid #ccc',
                                                borderRadius: '4px',
                                                boxShadow:
                                                    '0 4px 8px rgba(0, 0, 0, 0.1)',
                                                zIndex: 100,
                                            }}
                                        >
                                            <div
                                                style={{
                                                    position: 'absolute',
                                                    top: '-10px',
                                                    left: '50%',
                                                    transform:
                                                        'translateX(-50%)',
                                                    width: '0',
                                                    height: '0',
                                                    borderLeft:
                                                        '10px solid transparent',
                                                    borderRight:
                                                        '10px solid transparent',
                                                    borderBottom:
                                                        '10px solid #fff',
                                                }}
                                            />
                                            <Image
                                                src="/images/admin/projects/richtext_example.png"
                                                alt="Descripción de la imagen"
                                                layout="responsive"
                                                width={16}
                                                height={9}
                                                objectFit="cover"
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
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
                            width: proyectoData.use_overview
                                ? 'auto'
                                : 'max-content',
                            height: 'min-content',
                        }}
                    >
                        {proyectoData.use_overview ? (
                            <form>
                                <div className={classes.subservicioHead}>
                                    <h3>Sección Overview</h3>
                                    <label htmlFor="button_overview" style={{display: 'none'}}/>
                                    <button
                                        id="button_overview"
                                        type="button"
                                        onClick={() =>
                                            setProyectoData({
                                                ...proyectoData,
                                                use_overview: 0,
                                            })
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
                                    <label htmlFor="titulo_overview">
                                        Título
                                    </label>
                                    <input
                                        className={
                                            theme.palette.mode === 'dark'
                                                ? classes.formControlDark
                                                : classes.formControl
                                        }
                                        type="text"
                                        id="titulo_overview"
                                        name="titulo_overview"
                                        value={proyectoData.titulo_overview}
                                        onChange={handleInputChange}
                                    />
                                </div>

                                <div className={classes.formGroup}>
                                    <label htmlFor="descripcion_overview">
                                        Descripción
                                    </label>
                                    <TextareaAutosize
                                        className={
                                            theme.palette.mode === 'dark'
                                                ? classes.formControlDark
                                                : classes.formControl
                                        }
                                        id="descripcion_overview"
                                        name="descripcion_overview"
                                        value={
                                            proyectoData.descripcion_overview
                                        }
                                        onChange={handleInputChange}
                                        rows="4"
                                    />
                                </div>

                                <div className={classes.formGroup}>
                                    <label htmlFor="imagen_overview">
                                        Ruta de la Imagen
                                    </label>
                                    <input
                                        className={
                                            theme.palette.mode === 'dark'
                                                ? classes.formControlDark
                                                : classes.formControl
                                        }
                                        type="text"
                                        id="imagen_overview"
                                        name="imagen_overview"
                                        value={proyectoData.imagen_overview}
                                        onChange={handleInputChange}
                                    />
                                    {proyectoData.imagen_overview && (
                                        <div
                                            className={classes.imagePreview}
                                        >
                                            <img
                                                src={
                                                    proyectoData.imagen_overview
                                                }
                                                alt="Imagen del proyecto"
                                            />
                                        </div>
                                    )}
                                </div>
                            </form>
                        ) : (
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    gap: '10px',
                                }}
                            >
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
                                    type="button"
                                    onClick={() =>
                                        setProyectoData({
                                            ...proyectoData,
                                            use_overview:
                                                proyectoData.use_overview ===
                                                    1
                                                    ? 0
                                                    : 1,
                                        })
                                    }
                                >
                                    Agregar sección overview
                                </Button>
                                <div
                                    style={{ position: 'relative' }}
                                    onMouseEnter={handleOverMouseEnter}
                                    onMouseLeave={handleOverMouseLeave}
                                >
                                    <InfoIcon
                                        color="disabled"
                                        sx={{
                                            fontSize: '20px',
                                            cursor: 'pointer',
                                            position: 'relative',
                                        }}
                                    />
                                    {showTooltipOver && (
                                        <div
                                            style={{
                                                position: 'absolute',
                                                top: '30px',
                                                left: '50%',
                                                transform:
                                                    'translateX(-50%)',
                                                width: '400px',
                                                padding: '10px',
                                                backgroundColor: '#fff',
                                                border: '1px solid #ccc',
                                                borderRadius: '4px',
                                                boxShadow:
                                                    '0 4px 8px rgba(0, 0, 0, 0.1)',
                                                zIndex: 100,
                                            }}
                                        >
                                            <div
                                                style={{
                                                    position: 'absolute',
                                                    top: '-10px',
                                                    left: '50%',
                                                    transform:
                                                        'translateX(-50%)',
                                                    width: '0',
                                                    height: '0',
                                                    borderLeft:
                                                        '10px solid transparent',
                                                    borderRight:
                                                        '10px solid transparent',
                                                    borderBottom:
                                                        '10px solid #fff',
                                                }}
                                            />
                                            <Image
                                                src="/images/admin/projects/overview_example.png"
                                                alt="Descripción de la imagen"
                                                layout="responsive"
                                                width={16}
                                                height={9}
                                                objectFit="cover"
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </Box>
                </Box>
                <BotonFixed metodo={handleSubmit} />
            </Box>
        </Box>
    );
};

EditProyecto.propTypes = {
    proyecto: PropTypes.shape({
        id_proyecto: PropTypes.number.isRequired,
        cliente: PropTypes.string.isRequired,
        ubicacion: PropTypes.string.isRequired,
        estado: PropTypes.string.isRequired,
        tipo_obra: PropTypes.string.isRequired,
        importe: PropTypes.number.isRequired,
        ruta_imagen: PropTypes.string,
        fecha_inicio: PropTypes.string.isRequired,
        fecha_final: PropTypes.string,
        duracion: PropTypes.string,
        nombre_proyecto: PropTypes.string.isRequired,
        descripcion_proyecto: PropTypes.string.isRequired,
        isDestacado: PropTypes.number.isRequired,
        use_richtexts: PropTypes.number.isRequired,
        texto1_richtext: PropTypes.string.isRequired,
        texto2_richtext: PropTypes.string.isRequired,
        texto3_richtext: PropTypes.string.isRequired,
        use_overview: PropTypes.number.isRequired,
        ruta_imagen_richtext: PropTypes.string,
        texto_final_richtext: PropTypes.string.isRequired,
        titulo_overview: PropTypes.string.isRequired,
        descripcion_overview: PropTypes.string.isRequired,
        imagen_overview: PropTypes.string,
    }).isRequired,
};