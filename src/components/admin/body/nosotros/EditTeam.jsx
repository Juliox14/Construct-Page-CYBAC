'use client'
//Imports de react.
import { useEffect, useRef, useState} from "react";

//Imports de componentes de Material UI.
import { Box, Button, CircularProgress, Alert, TextField } from "@mui/material";
import { useTheme } from "@mui/material/styles";

//Imports de estilos.
import classes from "./EditService.module.scss";

//Imports de librerias externas.
import axios from "axios";

const EditTeam = ({dataSSR}) => {
    const theme = useTheme();

    const [data , setData] = useState(dataSSR);
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await axios.put(`/api/about`, data);

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

    console.log(dataSSR);

    return (
        <>
            <Box sx={{
                    color: theme.palette.mode === 'dark' ? "" : "#014655",
                    transition: `background-color ${theme.transitions.duration.standard}ms`,
                    borderRadius: '10px',
                    padding: '20px',
                    // maxWidth: '70%',
                }}>
                    {message && (
                        <Alert variant="outlined" severity="success" sx={{
                            position: 'fixed',
                            width: 'auto',
                            height: 'auto',
                            bgcolor: '#26ca7032',
                            zIndex: '1000',
                        }} >
                            {message}
                        </Alert>
                    )}
                    <form className={classes.homeEdit_secondSection_formSubservicio} onSubmit={handleSubmit}>
                        <div>
                            <div>
                                <label htmlFor={`title_about_${data.titulo_equipo}`}>Título</label>
                                <textarea name="title_about" id={`title_about_${data.titulo_equipo}`} rows={10} cols={40} style={{resize: "none"}}
                                onChange={(e) => {
                                    const updatedData = data;
                                    updatedData.titulo_equipo = e.target.value;
                                    setData(updatedData);
                                }}>{data.titulo_equipo}</textarea>
                            </div>
                            <div>
                                <label htmlFor={`descripcion_about_${data.descripcion_equipo}`}>Descripción</label>
                                <textarea name="descripcion_about" id={`descripcion_about_${data.descripcion_equipo}`} rows={10} cols={40} style={{resize: "none"}}
                                onChange={(e) => {
                                    const updatedData = data;
                                    updatedData.subtitulo_equipo = e.target.value;
                                    setData(updatedData);
                                }}>{data.descripcion_equipo}</textarea>
                            </div>
                        </div>
                        <Button variant="contained" color="primary" type="submit" > Guardar cambios </Button>
                    </form>
            </Box>
        </>
    );
};

export default EditTeam;
