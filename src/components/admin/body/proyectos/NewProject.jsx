//  Imports de react.
import { useEffect, useState } from 'react';
import Image from 'next/image';

//  Imports de componentes de Material UI.
import {
    Box,
    Button,
    Alert,
    FormControlLabel,
    Checkbox,
    TextareaAutosize,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import InfoIcon from '@mui/icons-material/Info';

//  Imports de librerias externas.
import axios from 'axios';
import Ruta from '../items-util/ruta';
import BotonFixed from '../items-util/botonFixed';

//  Imports de estilos.
import classes from '../servicios/EditService.module.scss';


export default function NewProject() {
    const theme = useTheme();
    const [proyectoData, setProyectoData] = useState({
        cliente: '',
        ubicacion: '',
        estado: '',
        tipoObra: '',
        importe: 0,
        rutaImagen: null,
        fechaInicio: '',
        fechaFInal: null,
        duracion: null,
        nombreProyecto: '',
        descripcionProyecto: '',
        isDestacado: 0,
        useRichtexts: 0,
        texto1Richtext: '',
        texto2Richtext: '',
        texto3Richtext: '',
        useOverview: 0,
        rutaImagenRichtext: null,
        textoFinalRichtext: '',
        tituloOverview: '',
        descripcionOverview: '',
        imagenOverview: null,
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

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProyectoData({
            ...proyectoData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        let response = null;
        if (
            proyectoData.useRichtexts === 1 &&
            proyectoData.useOverview === 1
        ) {
            response = await axios.post('/api/proyectos', proyectoData);
        } else if (
            proyectoData.useRichtexts === 1 &&
            proyectoData.useOverview === 0
        ) {
            const {
                texto1Richtext,
                texto2Richtext,
                texto3Richtext,
                rutaImagenRichtext,
                textoFinalRichtext,
                ...data
            } = proyectoData;
            setProyectoData(data);
            response = await axios.post('/api/proyectos', proyectoData);
        } else if (
            proyectoData.useRichtexts === 0 &&
            proyectoData.useOverview === 1
        ) {
            const {
                tituloOverview,
                descripcionOverview,
                imagenOverview,
                ...data
            } = proyectoData;
            setProyectoData(data);
            response = await axios.post('/api/proyectos', proyectoData);
        } else {
            const {
                texto1Richtext,
                texto2Richtext,
                texto3Richtext,
                rutaImagenRichtext,
                textoFinalRichtext,
                tituloOverview,
                descripcionOverview,
                imagenOverview,
                ...data
            } = proyectoData;
            setProyectoData(data);
            response = await axios.post('/api/proyectos', proyectoData);
        }

        if (response.status === 200) {
            setMessage(response.data.message);
            setInterval(() => {
                setMessage('');
                window.location.href = '/admin/proyecto';
            }, 1000);
        } else {
            setMessage('Error al actualizar el proyecto');
            setInterval(() => {
                setMessage('');
            }, 5000);
        }
    };

    const handleRichtexts = () => {
        setProyectoData({
            ...proyectoData,
            useRichtexts: proyectoData.useRichtexts === 1 ? 0 : 1,
        });
        console.log(proyectoData.useRichtexts);
    };

    const handleOverview = () => {
        setProyectoData({
            ...proyectoData,
            useOverview: proyectoData.useOverview === 1 ? 0 : 1,
        });
        console.log(proyectoData.useOverview);
    };

    const rutas = [
        { link: '/admin', nombre: 'Inicio' },
        { link: '/admin/proyecto', nombre: 'Proyectos' },
        { link: '/admin/servicio/newProject', nombre: 'Nuevo Proyecto' },
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
                >
                    {message}
                </Alert>
            )}
            <Ruta rutas={rutas} titulo='Agregar proyecto' />
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
                        width: '800px',
                    }}
                >
                    <h3>Editar página principal</h3>
                    <form>
                        <div className={classes.formGroup}>
                            <label htmlFor="cliente">Cliente</label>
                            <input
                                type="text"
                                id="cliente"
                                name="cliente"
                                value={proyectoData.cliente}
                                onChange={handleInputChange}
                                required
                                className={
                                    theme.palette.mode === 'dark'
                                        ? classes.formControlDark
                                        : classes.formControl
                                }
                            />
                        </div>
                        <div className={classes.formGroup}>
                            <label htmlFor="ubicacion">Ubicación</label>
                            <input
                                type="text"
                                id="ubicacion"
                                name="ubicacion"
                                value={proyectoData.ubicacion}
                                onChange={handleInputChange}
                                required
                                className={
                                    theme.palette.mode === 'dark'
                                        ? classes.formControlDark
                                        : classes.formControl
                                }
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
                                required
                                className={
                                    theme.palette.mode === 'dark'
                                        ? classes.formControlDark
                                        : classes.formControl
                                }
                            />
                        </div>
                        <div className={classes.formGroup}>
                            <label htmlFor="tipoObra">Tipo de Obra</label>
                            <input
                                type="text"
                                id="tipoObra"
                                name="tipoObra"
                                value={proyectoData.tipoObra}
                                onChange={handleInputChange}
                                required
                                className={
                                    theme.palette.mode === 'dark'
                                        ? classes.formControlDark
                                        : classes.formControl
                                }
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
                                required
                                className={
                                    theme.palette.mode === 'dark'
                                        ? classes.formControlDark
                                        : classes.formControl
                                }
                            />
                        </div>
                        <div className={classes.formGroup}>
                            <label htmlFor="rutaImagen">
                                Ruta de la Imagen
                            </label>
                            <input
                                type="text"
                                id="rutaImagen"
                                name="rutaImagen"
                                value={proyectoData.rutaImagen}
                                onChange={handleInputChange}
                                required
                                className={
                                    theme.palette.mode === 'dark'
                                        ? classes.formControlDark
                                        : classes.formControl
                                }
                            />
                            {proyectoData.rutaImagen && (
                                <div className={classes.imagePreview}>
                                    <img
                                        src={proyectoData.rutaImagen}
                                        alt="Imagen del proyecto"
                                    />
                                </div>
                            )}
                        </div>
                        <div className={classes.formGroup}>
                            <label htmlFor="fechaInicio">
                                Fecha de Inicio
                            </label>
                            <input
                                type="date"
                                id="fechaInicio"
                                name="fechaInicio"
                                value={proyectoData.fechaInicio}
                                onChange={handleInputChange}
                                required
                                className={
                                    theme.palette.mode === 'dark'
                                        ? classes.formControlDark
                                        : classes.formControl
                                }
                            />
                        </div>
                        <div className={classes.formGroup}>
                            <label htmlFor="fechaFInal">Fecha Final</label>
                            <input
                                type="date"
                                id="fechaFInal"
                                name="fechaFInal"
                                value={proyectoData.fechaFInal}
                                onChange={handleInputChange}
                                required
                                className={
                                    theme.palette.mode === 'dark'
                                        ? classes.formControlDark
                                        : classes.formControl
                                }
                            />
                        </div>
                        <div className={classes.formGroup}>
                            <label htmlFor="nombreProyecto">
                                Nombre del Proyecto
                            </label>
                            <input
                                type="text"
                                id="nombreProyecto"
                                name="nombreProyecto"
                                value={proyectoData.nombreProyecto}
                                onChange={handleInputChange}
                                required
                                className={
                                    theme.palette.mode === 'dark'
                                        ? classes.formControlDark
                                        : classes.formControl
                                }
                            />
                        </div>
                        <div className={classes.formGroup}>
                            <label htmlFor="descripcionProyecto">
                                Descripción del Proyecto
                            </label>
                            <TextareaAutosize
                                id="descripcionProyecto"
                                name="descripcionProyecto"
                                value={proyectoData.descripcionProyecto}
                                onChange={handleInputChange}
                                required
                                rows="4"
                                className={
                                    theme.palette.mode === 'dark'
                                        ? classes.formControlDark
                                        : classes.formControl
                                }
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
                            width: proyectoData.useRichtexts
                                ? 'auto'
                                : 'max-content',
                            height: 'min-content',
                        }}
                    >
                        {proyectoData.useRichtexts ? (
                            <form>
                                <div className={classes.subservicioHead}>
                                    <h3>Sección Richtext</h3>
                                    <label htmlFor="button_richtext" style={{ display: 'none' }}/>
                                    <button
                                        id="button_richtext"
                                        type="button"
                                        onClick={() => handleRichtexts()}
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
                                    <label htmlFor="texto1Richtext">
                                        Texto 1
                                    </label>
                                    <input
                                        className={
                                            theme.palette.mode === 'dark'
                                                ? classes.formControlDark
                                                : classes.formControl
                                        }
                                        type="text"
                                        id="texto1Richtext"
                                        name="texto1Richtext"
                                        value={proyectoData.texto1Richtext}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className={classes.formGroup}>
                                    <label htmlFor="texto2Richtext">
                                        Texto 2
                                    </label>
                                    <input
                                        className={
                                            theme.palette.mode === 'dark'
                                                ? classes.formControlDark
                                                : classes.formControl
                                        }
                                        type="text"
                                        id="texto2Richtext"
                                        name="texto2Richtext"
                                        value={proyectoData.texto2Richtext}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className={classes.formGroup}>
                                    <label htmlFor="texto3Richtext">
                                        Texto 3
                                    </label>
                                    <input
                                        className={
                                            theme.palette.mode === 'dark'
                                                ? classes.formControlDark
                                                : classes.formControl
                                        }
                                        type="text"
                                        id="texto3Richtext"
                                        name="texto3Richtext"
                                        value={proyectoData.texto3Richtext}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className={classes.formGroup}>
                                    <label htmlFor="rutaImagenRichtext">
                                        Ruta de la Imagen
                                    </label>
                                    <input
                                        className={
                                            theme.palette.mode === 'dark'
                                                ? classes.formControlDark
                                                : classes.formControl
                                        }
                                        type="text"
                                        id="rutaImagenRichtext"
                                        name="rutaImagenRichtext"
                                        value={
                                            proyectoData.rutaImagenRichtext
                                        }
                                        onChange={handleInputChange}
                                    />
                                    {proyectoData.rutaImagenRichtext && (
                                        <div
                                            className={classes.imagePreview}
                                        >
                                            <img
                                                src={
                                                    proyectoData.rutaImagenRichtext
                                                }
                                                alt="Imagen del proyecto"
                                            />
                                        </div>
                                    )}
                                </div>
                                <div className={classes.formGroup}>
                                    <label htmlFor="textoFinalRichtext">
                                        Texto Final
                                    </label>
                                    <TextareaAutosize
                                        className={
                                            theme.palette.mode === 'dark'
                                                ? classes.formControlDark
                                                : classes.formControl
                                        }
                                        id="textoFinalRichtext"
                                        name="textoFinalRichtext"
                                        value={
                                            proyectoData.textoFinalRichtext
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
                                    onClick={() => handleRichtexts()}
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
                            width: proyectoData.useOverview
                                ? 'auto'
                                : 'max-content',
                            height: 'min-content',
                        }}
                    >
                        {proyectoData.useOverview ? (
                            <form>
                                <div className={classes.subservicioHead}>
                                    <h3>Sección Overview</h3>
                                    <label htmlFor="button_overview" style={{display: 'none'}}/>
                                    <button
                                        id="button_overview"
                                        type="button"
                                        onClick={() => handleOverview()}
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
                                    <label htmlFor="tituloOverview">
                                        Título
                                    </label>
                                    <input
                                        className={
                                            theme.palette.mode === 'dark'
                                                ? classes.formControlDark
                                                : classes.formControl
                                        }
                                        type="text"
                                        id="tituloOverview"
                                        name="tituloOverview"
                                        value={proyectoData.tituloOverview}
                                        onChange={handleInputChange}
                                    />
                                </div>

                                <div className={classes.formGroup}>
                                    <label htmlFor="descripcionOverview">
                                        Descripción
                                    </label>
                                    <TextareaAutosize
                                        className={
                                            theme.palette.mode === 'dark'
                                                ? classes.formControlDark
                                                : classes.formControl
                                        }
                                        id="descripcionOverview"
                                        name="descripcionOverview"
                                        value={
                                            proyectoData.descripcionOverview
                                        }
                                        onChange={handleInputChange}
                                        rows="4"
                                    />
                                </div>

                                <div className={classes.formGroup}>
                                    <label htmlFor="imagenOverview">
                                        Ruta de la Imagen
                                    </label>
                                    <input
                                        className={
                                            theme.palette.mode === 'dark'
                                                ? classes.formControlDark
                                                : classes.formControl
                                        }
                                        type="text"
                                        id="imagenOverview"
                                        name="imagenOverview"
                                        value={proyectoData.imagenOverview}
                                        onChange={handleInputChange}
                                    />
                                    {proyectoData.imagenOverview && (
                                        <div
                                            className={classes.imagePreview}
                                        >
                                            <img
                                                src={
                                                    proyectoData.imagenOverview
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
                                    onClick={() => handleOverview()}
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
