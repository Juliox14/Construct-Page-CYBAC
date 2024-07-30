'use client'

//Imports de react.
import { useEffect, useState} from "react";

//Imports de componentes de Material UI.
import { Box, Button, CircularProgress, Alert } from "@mui/material";
import { useTheme } from "@mui/material/styles";

//Imports de estilos.
import classes from "./EditService.module.scss";

//Imports de librerias externas.
import axios from "axios";
import { Editor } from "@tinymce/tinymce-react";
import Image from "next/image";

const EditHome = ({hero, srcImages}) => {
    const theme = useTheme();

    const [dataSlider , setDataSlider] = useState(hero);
    const [editState, setEditState] = useState(false);
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await axios.put(`/api/home`, dataSlider);

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
    
    return (
        <div className={classes.homeEdit}>
            {!editState && (
                <Box sx={{
                    bgcolor: theme.palette.mode === 'dark' ? "#1C1C1C" : "#FFFFFF",
                    color: theme.palette.mode === 'dark' ? "white" : "#014655",
                    transition: `background-color ${theme.transitions.duration.standard}ms`,
                    display: 'flex',
                    width: 'auto',
                    minHeight: '100vh',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'relative',
                }}>
                    <CircularProgress size={'50px'} />
                </Box>
            )}
            <Box sx={{
                    bgcolor: theme.palette.mode === 'dark' ? "#242424" : "#E3E3E3",
                    color: theme.palette.mode === 'dark' ? "white" : "#014655",
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
                    <form className={classes.homeEdit_formSubservicio} onSubmit={handleSubmit}>
                        {dataSlider.map((heroItem, index) => (
                        <div key={index}>
                            <h3>Editar imagen {index + 1}</h3>
                            <div>
                                <div>
                                    <Image src={srcImages[index]} alt={`Imagen ${index + 1}`} sizes="(max-width: 768px) 100vw, 33vw"	 fill priority />
                                </div>
                                <div>
                                    <label htmlFor="imagen">Imagen</label>
                                    <input
                                        type="file"
                                        accept="image/*"

                                        name="imagen"
                                        className={theme.palette.mode === 'dark' ? classes.formControlDark : classes.formControl}/>
                                </div>
                            </div>
                            <div className={classes.homeEdit_formSubservicio_editGroup}>
                                <div className={classes.homeEdit_formSubservicio_editGroup_formGroup}>
                                    <label htmlFor={`subtitle_slider_${heroItem.subtitle}`}>Subtitulo</label>
                                    <Editor
                                        apiKey='r48129s2w0duaojj9z6uw4tdb23f7owjsaalkbsy8awlmc86'
                                        id={`subtitle_slider_${heroItem.subtitle}_${index}`}
                                        value={heroItem.subtitle}
                                        onEditorChange={(content) => {
                                            const updatedData = [...dataSlider];
                                            updatedData[index].subtitle = content;
                                            setDataSlider(updatedData);
                                        }}
                                        init={{
                                            height: 200,
                                            menubar: false,
                                            plugins: [
                                                'advlist', 'autolink', 'lists', 'link', 'charmap', 'preview',
                                                'anchor', 'searchreplace', 'visualblocks', 'fullscreen',
                                                'wordcount'
                                            ],
                                            toolbar:
                                                'bold italic |' +
                                                '| bullist numlist outdent indent | ',
                                            content_style: `body { font-family:Helvetica,Arial,sans-serif; font-size:12px }`,
                                        }} />
                                </div>
                                <div className={classes.homeEdit_formSubservicio_editGroup_formGroup}>
                                    <label htmlFor={`title_slider_${heroItem.title}_${index}`}>Título</label>
                                    <Editor
                                        apiKey='r48129s2w0duaojj9z6uw4tdb23f7owjsaalkbsy8awlmc86'
                                        id={`title_slider_${heroItem.title}`}
                                        value={heroItem.title}
                                        onEditorChange={(content) => {
                                            const updatedData = [...dataSlider];
                                            updatedData[index].title = content;
                                            setDataSlider(updatedData);
                                        }}
                                        init={{
                                            height: 200,
                                            menubar: false,
                                            plugins: [
                                                'advlist', 'autolink', 'lists', 'link', 'charmap', 'preview',
                                                'anchor', 'searchreplace', 'visualblocks', 'fullscreen',
                                                'wordcount'
                                            ],
                                            toolbar:
                                                'bold italic |' +
                                                '| bullist numlist outdent indent | ',
                                            content_style: `body { font-family:Helvetica,Arial,sans-serif; font-size:12px;`,
                                            extended_valid_elements: 'span[*]'
                                        }} />
                                </div>
                                <div className={classes.homeEdit_formSubservicio_editGroup_formGroup}>
                                    <label htmlFor={`descripcion_slider_${heroItem.descripcion}_${index}`}>Descripción</label>
                                    <Editor
                                        apiKey='r48129s2w0duaojj9z6uw4tdb23f7owjsaalkbsy8awlmc86'
                                        onInit={()=> setEditState(true)}
                                        id={`descripcion_slider_${heroItem.descripcion}`}
                                        value={heroItem.descripcion}
                                        onEditorChange={(content) => {
                                            const updatedData = [...dataSlider];
                                            updatedData[index].descripcion = content;
                                            console.log(content);
                                            setDataSlider(updatedData);
                                        }}
                                        init={{
                                            height: 200,
                                            menubar: false,
                                            plugins: [
                                                'advlist', 'autolink', 'lists', 'link', 'charmap', 'preview',
                                                'anchor', 'searchreplace', 'visualblocks', 'fullscreen',
                                                'wordcount'
                                            ],
                                            toolbar:
                                                'bold italic |' +
                                                '| bullist numlist outdent indent | ',
                                            content_style: `body { font-family:Helvetica,Arial,sans-serif; font-size:12px; }`,
                                            extended_valid_elements: 'span[*]'
                                        }}/>
                                </div>
                            </div>
                        </div>
                        ))}
                        <Button variant="contained" color="primary" type="submit"> Guardar cambios </Button>
                    </form>
                </Box>
        </div>
    );
};

export default EditHome;