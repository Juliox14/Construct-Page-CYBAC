'use client';

//  Imports de react.
import { useRef, useState } from 'react';

//  Imports de componentes de Material UI.
import { Box, Button, Alert } from '@mui/material';
import { useTheme } from '@mui/material/styles';

//  Imports de librerias externas.
import axios from 'axios';

//  Imports de estilos.
import classes from './EditService.module.scss';


export default function EditTeam({ dataSSR }) {
    const theme = useTheme();

    const [data, setData] = useState(dataSSR);
    const [confirmationUpdate, setConfirmationUpdate] = useState(false);
    const [message, setMessage] = useState(['', '']);
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

        const response = await axios.put(`/api/about`, data);

        if (response.status === 200) {
            setMessage(['Datos actualizados correctamente', 'success']);
            setInterval(() => {
                setMessage(['', '']);
            }, 4000);
        } else {
            setMessage(['Error al actualizar los datos', 'error']);
            setInterval(() => {
                setMessage(['', '']);
            }, 4000);
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
                        <h2>¿Estás seguro de actualizar sobre nosotros?</h2>
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
                    height: '100vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '20px',
                    // maxWidth: '70%',
                }}
            >
                {message[0] !== '' && (
                    <Alert
                        severity={`${message[1]}`}
                        sx={{
                            position: 'fixed',
                            left: '18%',
                            top: '8%',
                            transform: 'translate(-50%, -50%)',
                            zIndex: '1000',
                        }}
                    >
                        {message[0]}
                    </Alert>
                )}
                <form
                    className={classes.homeEdit_teamSection_formSubservicio}
                    ref={refForm}
                    onSubmit={handleSubmit}
                >
                    <div>
                        <div>
                            <label
                                htmlFor={`title_about_${data.titulo_equipo}`}
                            >
                                Título
                            </label>
                            <textarea
                                name="title_about"
                                id={`title_about_${data.titulo_equipo}`}
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
                                    updatedData.titulo_equipo = e.target.value;
                                    setData(updatedData);
                                }}
                            >
                                {data.titulo_equipo}
                            </textarea>
                        </div>
                        <div>
                            <label
                                htmlFor={`descripcion_about_${data.descripcion_equipo}`}
                            >
                                Descripción
                            </label>
                            <textarea
                                name="descripcion_about"
                                id={`descripcion_about_${data.descripcion_equipo}`}
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
                                    updatedData.subtitulo_equipo =
                                        e.target.value;
                                    setData(updatedData);
                                }}
                            >
                                {data.descripcion_equipo}
                            </textarea>
                        </div>
                    </div>
                    <div
                        className={
                            classes.homeEdit_teamSection_formSubservicio_updateAlert
                        }
                    >
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => setConfirmationUpdate(true)}
                            sx={{
                                width: '200px',
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

EditTeam.propTypes = {
    dataSSR: PropTypes.object,
};
