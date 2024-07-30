'use client'
//Imports de react.
import { useEffect, useState, useRef } from "react";

//Imports de componentes de Material UI.
import { Box, Button, CircularProgress, Alert } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

//Imports de componentes externos.
import { Editor } from '@tinymce/tinymce-react';

//Imports de estilos.
import classes from "../servicios/EditService.module.scss"

//Imports de métodos y componentes propios.
import { getItemsBy } from "../../../../lib/items";

//Imports de librerias externas.
import axios from "axios";
import Ruta from "../items-util/ruta";
import BotonFixed from "../items-util/botonFixed";

const EditProyecto = ({ proyecto }) => {
    console.log(proyecto);
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
    });
    const [message, setMessage] = useState('');

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
        });
    }, [proyecto]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProyectoData({
            ...proyectoData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await axios.put(`/api/proyects/${proyectoData.id_proyecto}`, proyectoData);

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



    const rutas = [{ link: '/admin', nombre: 'Inicio' }, { link: '/admin/proyecto', nombre: 'Proyectos' }, { link: `/admin/servicio/${proyectoData.id_proyecto}`, nombre: `${proyectoData.nombre_proyecto}` }];

    return (
        <>
            <Box sx={{
                bgcolor: theme.palette.mode === 'dark' ? "#1C1C1C" : "#FFFFFF",
                color: theme.palette.mode === 'dark' ? "white" : "#014655",
                transition: `background-color ${theme.transitions.duration.standard}ms`,
                height: 'auto',
                width: 'auto',
                padding: '50px',
                display: 'block',
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
                <Ruta rutas={rutas} titulo={'Editar proyecto'} />
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
                                    className={theme.palette.mode === 'dark' ? classes.formControlDark : classes.formControl}
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
                                    className={theme.palette.mode === 'dark' ? classes.formControlDark : classes.formControl}
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
                                    className={theme.palette.mode === 'dark' ? classes.formControlDark : classes.formControl}
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
                                    className={theme.palette.mode === 'dark' ? classes.formControlDark : classes.formControl}
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
                                    className={theme.palette.mode === 'dark' ? classes.formControlDark : classes.formControl}
                                />
                            </div>
                            <div className={classes.formGroup}>
                                <label htmlFor="ruta_imagen">Ruta de la Imagen</label>
                                <input
                                    type="text"
                                    id="ruta_imagen"
                                    name="ruta_imagen"
                                    value={proyectoData.ruta_imagen}
                                    onChange={handleInputChange}
                                    className={theme.palette.mode === 'dark' ? classes.formControlDark : classes.formControl}
                                />
                                {proyectoData.ruta_imagen && (
                                    <div className={classes.imagePreview}>
                                        <img src={proyectoData.ruta_imagen} alt="Imagen del proyecto" />
                                    </div>
                                )}
                            </div>
                            <div className={classes.formGroup}>
                                <label htmlFor="fecha_inicio">Fecha de Inicio</label>
                                <input
                                    type="date"
                                    id="fecha_inicio"
                                    name="fecha_inicio"
                                    value={proyectoData.fecha_inicio}
                                    onChange={handleInputChange}
                                    className={theme.palette.mode === 'dark' ? classes.formControlDark : classes.formControl}
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
                                    className={theme.palette.mode === 'dark' ? classes.formControlDark : classes.formControl}
                                />
                            </div>
                            <div className={classes.formGroup}>
                                <label htmlFor="nombre_proyecto">Nombre del Proyecto</label>
                                <input
                                    type="text"
                                    id="nombre_proyecto"
                                    name="nombre_proyecto"
                                    value={proyectoData.nombre_proyecto}
                                    onChange={handleInputChange}
                                    className={theme.palette.mode === 'dark' ? classes.formControlDark : classes.formControl}
                                />
                            </div>
                            <div className={classes.formGroup}>
                                <label htmlFor="descripcion_proyecto">Descripción del Proyecto</label>
                                <textarea
                                    id="descripcion_proyecto"
                                    name="descripcion_proyecto"
                                    value={proyectoData.descripcion_proyecto}
                                    onChange={handleInputChange}
                                    rows="4"
                                    className={theme.palette.mode === 'dark' ? classes.formControlDark : classes.formControl}
                                ></textarea>
                            </div>
                            <div className={classes.formGroup}>
                                <label htmlFor="isDestacado">¿Es Destacado?</label>
                                <input
                                    type="checkbox"
                                    id="isDestacado"
                                    name="isDestacado"
                                    checked={proyectoData.isDestacado}
                                    onChange={(e) => setProyectoData({
                                        ...proyectoData,
                                        isDestacado: e.target.checked ? 1 : 0
                                    })}
                                    className={theme.palette.mode === 'dark' ? classes.formControlDark : classes.formControl}
                                />
                            </div>
                        </form>
                    </Box>
                    <BotonFixed metodo={handleSubmit}/>
                </div>
            </Box>
        </>
    );
};

export default EditProyecto;
