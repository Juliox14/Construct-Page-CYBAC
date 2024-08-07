'use client';

//  Imports de react.
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';


//  Imports de componentes de Material UI.
import {
    Box,
    Button,
    CircularProgress,
    Alert,
    IconButton,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import DeleteIcon from '@mui/icons-material/Delete';

//  Imports de librerias externas.
import axios from 'axios';
import PropTypes from 'prop-types';
import { Editor } from '@tinymce/tinymce-react';

//  Imports de estilos.
import sliderImage from '../../../../../public/images/admin/slider.png';
import classes from './EditService.module.scss';

export default function EditHome({ hero, srcImages }) {
    const theme = useTheme();

    const [dataSlider, setDataSlider] = useState(hero);
    const [newDataSlider, setnewDataSlider] = useState([]);
    const [editState, setEditState] = useState(false);
    const [disableButton, setDisableButton] = useState(false);
    const [message, setMessage] = useState(['', '']);
    const [confirmationUpdateDelete, setConfirmationUpdateDelete] = useState([
        false,
        false,
    ]);
    const [deleteState, setDeleteState] = useState(undefined);
    const refForm = useRef(null);


    useEffect(() => {
        if (dataSlider.length >= 10) {
            setDisableButton(true);
        } else {
            setDisableButton(false);
        }
    }, [dataSlider]);

    const addNewData = () => {
        const newData = {
            id: dataSlider[dataSlider.length - 1].id + 1,
            bg: '',
            subtitle: '',
            descripcion: '',
            title: '',
        };
        setDataSlider([...dataSlider, newData]);
        setnewDataSlider([...newDataSlider, newData]);
    };

    const handleDelete = async (e) => {
        e.preventDefault();

        let clientData = null;
        let data = [...dataSlider];

        data = data.filter((item) => item.id !== deleteState);
        console.log(data);
        setDataSlider(data);

        let newData = [...newDataSlider];
        console.log([...newDataSlider]);
        newData = newData.filter((item) => item.id !== deleteState);
        console.log(newData);
        setnewDataSlider(newData);

        const compareElement = (item, item2) => item.id === item2.id;
        clientData = data.filter(
            (item) => !newData.some((item2) => compareElement(item, item2))
        );

        const compareObjects = (obj1, obj2) => {
            if (obj1.length !== obj2.length) return false;
            if (obj1 === null || obj2 === null) return false;
            for (const key of Object.keys(obj1)) {
                if (obj1[key] !== obj2[key]) {
                    return false;
                }
            }            
            return true;
        };

        if (
            !compareObjects(clientData, hero) &&
            compareObjects([...newDataSlider], newData)
        ) {
            setConfirmationUpdateDelete([false, false]);
            const response = await axios.post(`/api/home`, { deleteState });
            if (response.status === 200) {
                setTimeout(() => {
                    window.location.reload();
                }, 1000);
            } else {
                setConfirmationUpdateDelete([false, false]);
                setMessage(['Error al elmiminar el elemento', 'error']);
                setInterval(() => {
                    setMessage(['', '']);
                }, 5000);
            }
        } else {
            setConfirmationUpdateDelete([false, false]);
            setMessage(['Elemento eliminado correctamente', 'info']);
            setInterval(() => {
                setMessage(['', '']);
            }, 10000);
        }
    };

    const handleShowDeleteConfirmation = (index) => {
        setConfirmationUpdateDelete([false, true]);
        setDeleteState(index);
        console.log(index);
    };

    const reportIncompleteForm = (e) => {
        e.preventDefault();
        if (refForm.current.reportValidity()) {
            console.log('entro');
            refForm.current.requestSubmit();
        } else {
            setConfirmationUpdateDelete([false, false]);
            setMessage(['Por favor, llene todos los campos', 'error']);
            setInterval(() => {
                setMessage(['', '']);
            }, 5000);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();

        dataSlider.forEach((item) => {
            formData.append(`file${item.id}`, item.bg);
        });
    
        const responseImageUrl = await axios.post('/api/upload', formData);

        const vida = responseImageUrl.data.url.filter((item) =>
            dataSlider.some((url) => url.id === item.id)
        );

        const tempDataSlider = dataSlider.map((item) => {
            const newImage = vida.find((v) => v.id === item.id);
            return newImage ? { ...item, bg: newImage.file } : item;
        });

        const muerte = responseImageUrl.data.url.filter((item) =>
            newDataSlider.some((url) => url.id === item.id)
        );
        const tempNewDataSlider = newDataSlider.map((item) => {
            const newImage = muerte.find((m) => m.id === item.id);
            return newImage ? { ...item, bg: newImage.file } : item;
        });

        setDataSlider(tempDataSlider);
        setnewDataSlider(tempNewDataSlider);

        if (responseImageUrl.status === 200) {
            const response = await axios.put('/api/home', [
                tempDataSlider,
                tempNewDataSlider,
            ]);

            if (response.status === 200) {
                setConfirmationUpdateDelete([false, false]);
                setMessage(['Carrusel actualizado correctamente', 'success']);
                setInterval(() => {
                    setMessage(['', '']);
                }, 10000);
            } else {
                setConfirmationUpdateDelete([false, false]);
                setMessage(['Error al actualizar el carrusel', 'error']);
                setInterval(() => {
                    setMessage(['', '']);
                }, 5000);
            }
        }
    };

    return (
        <div className={classes.homeEdit}>
            {!editState && (
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
                    <CircularProgress size='50px' />
                </Box>
            )}
            {confirmationUpdateDelete[0] && (
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
                        <h2>¿Estás seguro de actualizar el carrusel?</h2>
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
                                onClick={() =>
                                    setConfirmationUpdateDelete([false, false])
                                }
                            >
                                Cancelar
                            </Button>
                        </div>
                    </Box>
                </Box>
            )}
            {confirmationUpdateDelete[1] && (
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
                    onSubmit={(e) => handleDelete(e)}
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
                        <h2 style={{ textAlign: 'center' }}>
                            ¿Estás seguro de eliminar este elemento?
                        </h2>
                        <p style={{ textAlign: 'center' }}>
                            Esta acción no se puede deshacer
                        </p>
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
                                Eliminar
                            </Button>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={() =>
                                    setConfirmationUpdateDelete([false, false])
                                }
                            >
                                Cancelar
                            </Button>
                        </div>
                    </Box>
                </Box>
            )}
            <Box
                sx={{
                    bgcolor:
                        theme.palette.mode === 'dark' ? '#242424' : '#E3E3E3',
                    color: theme.palette.mode === 'dark' ? 'white' : '#014655',
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
                <form
                    className={classes.homeEdit_formSubservicio}
                    ref={refForm}
                    onSubmit={(e) => {
                        handleSubmit(e);
                    }}
                >
                    {dataSlider.map((heroItem, index) => (
                        <div
                            className={
                                classes.homeEdit_formSubservicio_firstBox
                            }
                            key={index}
                            style={{
                                boxShadow:
                                    theme.palette.mode === 'dark'
                                        ? '0px 0px 0px 0px white'
                                        : '0px 0px 20px 0px #ccc',
                            }}
                        >
                            <div>
                                <div>
                                    {srcImages && srcImages[index] !== '' ? (
                                        <Image
                                            src={srcImages[index]}
                                            alt={`Imagen ${index + 1}`}
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                            fill
                                            priority
                                        />
                                    ) : (
                                        <Image
                                            src={sliderImage.src}
                                            alt={`Imagen ${index + 1}`}
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                            fill
                                            priority
                                        />
                                    )}
                                </div>
                                <div>
                                    <label htmlFor="imagen">Imagen</label>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        name="imagen"
                                        onChange={(e) => {
                                            const updatedData = [...dataSlider];
                                            const { files } = e.target;
                                            updatedData[index].bg = files[0];
                                            setDataSlider(updatedData);
                                        }}                                        
                                        className={
                                            theme.palette.mode === 'dark'
                                                ? classes.formControlDark
                                                : classes.formControl
                                        }
                                        required={Boolean(heroItem.bg)}
                                    />
                                </div>
                            </div>
                            <IconButton
                                sx={{
                                    position: 'absolute',
                                    top: '5%',
                                    right: '2%',
                                }}
                                onClick={() =>
                                    handleShowDeleteConfirmation(heroItem.id)
                                }
                            >
                                <DeleteIcon sx={{ fontSize: 30 }} />
                            </IconButton>
                            <div
                                className={
                                    classes.homeEdit_formSubservicio_editGroup
                                }
                            >
                                <div
                                    className={
                                        classes.homeEdit_formSubservicio_editGroup_formGroup
                                    }
                                >
                                    <label
                                        htmlFor={`subtitle_slider_${heroItem.subtitle}`}
                                    >
                                        Subtitulo
                                    </label>
                                    <Editor
                                        apiKey="r48129s2w0duaojj9z6uw4tdb23f7owjsaalkbsy8awlmc86"
                                        id={`subtitle_slider_${heroItem.subtitle}_${index}`}
                                        value={heroItem.subtitle}
                                        onEditorChange={(content) => {
                                            const updatedData = [...dataSlider];
                                            updatedData[index].subtitle =
                                                content;
                                            setDataSlider(updatedData);
                                        }}
                                        init={{
                                            height: 200,
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
                                            content_style: `body { font-family:Helvetica,Arial,sans-serif; font-size:12px;}`,
                                            skin: 'oxide-dark',
                                            content_css: 'dark',
                                        }}
                                    />
                                </div>
                                <div
                                    className={
                                        classes.homeEdit_formSubservicio_editGroup_formGroup
                                    }
                                >
                                    <label
                                        htmlFor={`title_slider_${heroItem.title}_${index}`}
                                    >
                                        Título
                                    </label>
                                    <Editor
                                        apiKey="r48129s2w0duaojj9z6uw4tdb23f7owjsaalkbsy8awlmc86"
                                        id={`title_slider_${heroItem.title}_${index}`}
                                        value={heroItem.title}
                                        onEditorChange={(content) => {
                                            const updatedData = [...dataSlider];
                                            updatedData[index].title = content;
                                            setDataSlider(updatedData);
                                        }}
                                        init={{
                                            height: 200,
                                            color_cols_background: 'red',
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
                                                '| bullist numlist outdent indent | forecolor backcolor |',
                                            content_style: `body { font-family:Helvetica,Arial,sans-serif; font-size:12px;`,
                                            extended_valid_elements: 'span[*]',
                                            skin: 'oxide-dark',
                                            content_css: 'dark',
                                            setup: (editor) => {
                                                editor.on('NodeChange', (e) => {
                                                    // Aplica <h2> a los nuevos párrafos si es necesario
                                                    if (
                                                        editor.getBody()
                                                            .firstChild &&
                                                        editor.getBody()
                                                            .firstChild
                                                            .nodeName === 'P'
                                                    ) {
                                                        editor.formatter.apply(
                                                            'h2'
                                                        );
                                                    }
                                                });
                                            },
                                            formats: {
                                                h2: { block: 'h2' }, // Define el formato h2
                                            },
                                        }}
                                    />
                                </div>
                                <div
                                    className={
                                        classes.homeEdit_formSubservicio_editGroup_formGroup
                                    }
                                >
                                    <label
                                        htmlFor={`descripcion_slider_${heroItem.descripcion}_${index}`}
                                    >
                                        Descripción
                                    </label>
                                    <Editor
                                        apiKey="r48129s2w0duaojj9z6uw4tdb23f7owjsaalkbsy8awlmc86"
                                        onInit={() => setEditState(true)}
                                        id={`descripcion_slider_${heroItem.descripcion}_${index}`}
                                        value={heroItem.descripcion}
                                        onEditorChange={(content) => {
                                            const updatedData = [...dataSlider];
                                            updatedData[index].descripcion =
                                                content;
                                            console.log(content);
                                            setDataSlider(updatedData);
                                        }}
                                        init={{
                                            height: 200,
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
                                            content_style: `html { z-index: 0; } body { font-family:Helvetica,Arial,sans-serif; font-size:12px; }`,
                                            skin: 'oxide-dark',
                                            content_css: 'dark',
                                            extended_valid_elements: 'span[*]',
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                    <div style={{ boxShadow: 'none', height: '50px' }} />
                    <div
                        className={classes.homeEdit_formSubservicio_updateAlert}
                    >
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() =>
                                setConfirmationUpdateDelete([true, false])
                            }
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
                            Guardar cambios
                        </Button>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={addNewData}
                            sx={{
                                width: '200px',
                                height: '50px',
                            }}
                            disabled={disableButton}
                        >
                            {' '}
                            Agregar un elemento{' '}
                        </Button>
                    </div>
                </form>
            </Box>
        </div>
    );
};

EditHome.propTypes = {
    hero: PropTypes.string.isRequired,
    srcImages: PropTypes.arrayOf(PropTypes.string).isRequired,
};
