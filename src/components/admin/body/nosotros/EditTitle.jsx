'use client';
//Imports de react.
import { useEffect, useRef, useState } from 'react';

//Imports de componentes de Material UI.
import { Box, Button, Alert } from '@mui/material';
import { useTheme } from '@mui/material/styles';

//Imports de estilos.
import classes from './EditService.module.scss';

//Imports de librerias externas.
import axios from 'axios';

const EditTitle = ({ dataSSR }) => {
    console.log(dataSSR);
    const theme = useTheme();

    const [data, setData] = useState(dataSSR);
    const [message, setMessage] = useState(['', '']);
    const [confirmationUpdate, setConfirmationUpdate] = useState(false);
    const refForm = useRef(null);

    const reportIncompleteForm = (e) => {
        e.preventDefault();
        if (refForm.current.reportValidity()) {
            refForm.current.requestSubmit();
        } else {
            setConfirmationUpdate(false);
            setMessage(['Por favor, llene todos los campos', 'error']);
            setInterval(() => {
                setMessage(['', '']);
            }, 4000);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append(`file${1}`, data.imgTitulo);

        const responseImageUrl = await axios.post('/api/upload', formData);

        const updatedDataWithImg = {
            ...data,
            imgTitulo:
                responseImageUrl.data.url.length > 0
                    ? responseImageUrl.data.url[0].file
                    : data.imgTitulo,
        };

        if (responseImageUrl.status === 200) {
            const response = await axios.put(`/api/about`, updatedDataWithImg);
            if (response.status === 200) {
                setConfirmationUpdate(false);
                setMessage([
                    'Titulo de "Sobre nosotros" actualizado correctamente',
                    'success',
                ]);
                setInterval(() => {
                    setMessage(['', '']);
                }, 10000);
            } else {
                setConfirmationUpdate(false);
                setMessage(['Error al actualizar los datos', 'error']);
                setInterval(() => {
                    setMessage(['', '']);
                }, 4000);
            }
        }
    };

    return (
        <>
            {confirmationUpdate && (
                <Box
                    sx={{
                        position: 'fixed',
                        top: '0',
                        left: '0',
                        width: '100%',
                        height: '100%',
                        bgcolor: 'rgba(0, 0, 0, 0.5)',
                        zIndex: '1000',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    component="form"
                    onSubmit={(e) => reportIncompleteForm(e)}
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
                        }}
                    >
                        <h2>
                            ¿Estás seguro de actualizar el título de "Sobre
                            nosotros"?
                        </h2>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                gap: '20px',
                            }}
                        >
                            <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                            >
                                Confirmar
                            </Button>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={() => setConfirmationUpdate(false)}
                            >
                                Cancelar
                            </Button>
                        </div>
                    </Box>
                </Box>
            )}
            <Box
                sx={{
                    color: theme.palette.mode === 'dark' ? '' : '#014655',
                    transition: `background-color ${theme.transitions.duration.standard}ms`,
                    borderRadius: '10px',
                    padding: '20px',
                    // maxWidth: '70%',
                }}
            >
                {message[0] !== '' && (
                    <Alert
                        severity={`${message[1]}`}
                        sx={{
                            position: 'fixed',
                            width: 'auto',
                            height: 'auto',
                            zIndex: '1000',
                        }}
                    >
                        {message[0]}
                    </Alert>
                )}
                <Box
                    sx={{
                        width: '100%',
                        height: '400px',
                        backgroundColor:
                            theme.palette.mode === 'dark' ? '#333' : '#f5f5f5',
                    }}
                ></Box>
                <form
                    className={classes.homeEdit_formSubservicio}
                    onSubmit={handleSubmit}
                    ref={refForm}
                >
                    <div>
                        <div>
                            <label
                                htmlFor={`subtitulo_about_${data.subtitulo_breadcrumb}`}
                            >
                                Subtitulo
                            </label>
                            <textarea
                                name="subtitulo_about"
                                id={`subtitulo_about_${data.subtitulo_breadcrumb}`}
                                rows={10}
                                cols={40}
                                style={{
                                    resize: 'none',
                                    backgroundColor:
                                        theme.palette.mode === 'dark'
                                            ? '#222F3E'
                                            : 'white',
                                    color:
                                        theme.palette.mode === 'dark'
                                            ? 'white'
                                            : 'black',
                                    transition: `background-color ${theme.transitions.duration.standard}ms`,
                                }}
                                onChange={(e) => {
                                    const updatedData = data;
                                    updatedData.subtitulo_nosotros =
                                        e.target.value;
                                    setData(updatedData);
                                }}
                            >
                                {data.subtitulo_breadcrumb}
                            </textarea>
                        </div>
                        <div>
                            <label
                                htmlFor={`title_about_${data.titulo_breadcrumb}`}
                            >
                                Título
                            </label>
                            <textarea
                                name="title_about"
                                id={`title_about_${data.titulo_breadcrumb}`}
                                rows={10}
                                cols={40}
                                style={{
                                    resize: 'none',
                                    backgroundColor:
                                        theme.palette.mode === 'dark'
                                            ? '#222F3E'
                                            : 'white',
                                    color:
                                        theme.palette.mode === 'dark'
                                            ? 'white'
                                            : 'black',
                                    transition: `background-color ${theme.transitions.duration.standard}ms`,
                                }}
                                onChange={(e) => {
                                    const updatedData = data;
                                    updatedData.titulo_breadcrumb =
                                        e.target.value;
                                    setData(updatedData);
                                }}
                            >
                                {data.titulo_breadcrumb}
                            </textarea>
                        </div>
                        <div>
                            <label
                                htmlFor={`descripcion_about_${data.descripcion_breadcrumb}`}
                            >
                                Descripción
                            </label>
                            <textarea
                                name="descripcion_about"
                                id={`descripcion_about_${data.descripcion_breadcrumb}`}
                                rows={10}
                                cols={40}
                                style={{
                                    resize: 'none',
                                    backgroundColor:
                                        theme.palette.mode === 'dark'
                                            ? '#222F3E'
                                            : 'white',
                                    color:
                                        theme.palette.mode === 'dark'
                                            ? 'white'
                                            : 'black',
                                    transition: `background-color ${theme.transitions.duration.standard}ms`,
                                }}
                                onChange={(e) => {
                                    const updatedData = data;
                                    updatedData.descripcion_breadcrumb =
                                        e.target.value;
                                    setData(updatedData);
                                }}
                            >
                                {data.descripcion_breadcrumb}
                            </textarea>
                        </div>
                        <div>
                            <label
                                htmlFor="imagen2"
                                style={{ marginBottom: 0 }}
                            >
                                Imagen 2
                            </label>
                            <input
                                type="file"
                                accept="image/*"
                                name="imagen2"
                                onChange={(e) => {
                                    const updatedData = data;
                                    updatedData.imgTitulo = e.target.files[0];
                                    setData(updatedData);
                                }}
                                className={
                                    theme.palette.mode === 'dark'
                                        ? classes.formControlDark
                                        : classes.formControl
                                }
                            />
                        </div>
                    </div>
                    <div
                        className={classes.homeEdit_formSubservicio_updateAlert}
                    >
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => setConfirmationUpdate(true)}
                            sx={{
                                width: '200px',
                                position: 'fixed',
                                height: '50px',
                                bgcolor: '#014655',
                                color: 'white',
                                ':hover': {
                                    bgcolor: '#0d5c6c',
                                },
                            }}
                        >
                            {' '}
                            Guardar cambios{' '}
                        </Button>
                    </div>
                </form>
            </Box>
        </>
    );
};

export default EditTitle;
