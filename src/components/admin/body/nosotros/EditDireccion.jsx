'use client';
//Imports de react.
import { useEffect, useRef, useState } from 'react';

//Imports de componentes de Material UI.
import { Box, Button, CircularProgress, Alert, TextField } from '@mui/material';
import { useTheme } from '@mui/material/styles';

//Imports de estilos.
import classes from './EditService.module.scss';

//Imports de librerias externas.
import axios from 'axios';
import { Editor } from '@tinymce/tinymce-react';

const EditTitle = ({ dataSSR }) => {
    const theme = useTheme();

    const [data, setData] = useState(dataSSR);
    const [editState, setEditState] = useState(false);
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

    console.log(dataSSR);

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
            {editState === false && (
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
            )}
            <Box
                sx={{
                    color: theme.palette.mode === 'dark' ? '' : '#014655',
                    transition: `background-color ${theme.transitions.duration.standard}ms`,
                    borderRadius: '10px',
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
                            margin: '2% 4.5%',
                            zIndex: '1000',
                        }}
                    >
                        {message[0]}
                    </Alert>
                )}
                <form
                    className={
                        classes.homeEdit_direccionSection_formSubservicio
                    }
                    ref={refForm}
                    onSubmit={handleSubmit}
                >
                    <div>
                        <div>
                            <label htmlFor={`subtitulo_about_${data.mision}`}>
                                Misión
                            </label>
                            <Editor
                                apiKey="r48129s2w0duaojj9z6uw4tdb23f7owjsaalkbsy8awlmc86"
                                id={`mision_about_${data.mision}`}
                                initialValue={data.mision}
                                onEditorChange={(content) => {
                                    let updatedData = data;
                                    updatedData.mision = content;
                                    setData(updatedData);
                                }}
                                init={{
                                    height: 200,
                                    width: 300,
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
                                    content_style: `body { font-family:Helvetica,Arial,sans-serif; font-size:12px; }`,
                                    extended_valid_elements: 'span[*]',
                                    skin: 'oxide-dark',
                                    content_css: 'dark',
                                }}
                                sty
                            />
                        </div>
                        <div>
                            <label htmlFor={`title_about_${data.vision}`}>
                                Visión
                            </label>
                            <Editor
                                apiKey="r48129s2w0duaojj9z6uw4tdb23f7owjsaalkbsy8awlmc86"
                                id={`vision_about_${data.vision}`}
                                initialValue={data.vision}
                                onEditorChange={(content) => {
                                    const updatedData = data;
                                    updatedData.vision = content;
                                    setData(updatedData);
                                }}
                                init={{
                                    height: 200,
                                    width: 300,
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
                                    content_style: `body { font-family:Helvetica,Arial,sans-serif; font-size:12px; }`,
                                    extended_valid_elements: 'span[*]',
                                    skin: 'oxide-dark',
                                    content_css: 'dark',
                                }}
                                sty
                            />
                        </div>
                        <div>
                            <label
                                htmlFor={`descripcion_about_${data.valores}`}
                            >
                                Valores
                            </label>
                            <Editor
                                apiKey="r48129s2w0duaojj9z6uw4tdb23f7owjsaalkbsy8awlmc86"
                                id={`valores_about_${data.valores}`}
                                initialValue={data.valores}
                                onInit={() => setEditState(true)}
                                onEditorChange={(content) => {
                                    const updatedData = data;
                                    updatedData.valores = content;
                                    setData(updatedData);
                                }}
                                init={{
                                    height: 200,
                                    width: 300,
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
                                    content_style: `body { font-family:Helvetica,Arial,sans-serif; font-size:12px; }`,
                                    extended_valid_elements: 'span[*]',
                                    skin: 'oxide-dark',
                                    content_css: 'dark',
                                }}
                            />
                        </div>
                    </div>
                    <div
                        className={
                            classes.homeEdit_direccionSection_formSubservicio_updateAlert
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

export default EditTitle;
