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
import { Editor } from "@tinymce/tinymce-react";

const EditAbout = ({dataSSR}) => {
    const theme = useTheme();

    const [data , setData] = useState(dataSSR);
    const [editState, setEditState] = useState(false);
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

    return (
        <>
            {editState === false &&
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
            }
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
                                <label htmlFor={`subtitulo_about_${data.subtitulo_nosotros}`}>Subtitulo</label>
                                <textarea name="subtitulo_about" id={`subtitulo_about_${data.subtitulo_nosotros}`} rows={10} cols={40} style={{resize: "none"}}
                                onChange={(e) => {
                                    const updatedData = data;
                                    updatedData.subtitulo_nosotros = e.target.value;
                                    setData(updatedData);
                                }}>{data.subtitulo_nosotros}</textarea>
                            </div>
                            <div>
                                <label htmlFor={`title_about_${data.titulo_nosotros}`}>Título</label>
                                <textarea name="title_about" id={`title_about_${data.titulo_nosotros}`} rows={10} cols={40} style={{resize: "none"}}
                                onChange={(e) => {
                                    const updatedData = data;
                                    updatedData.titulo_nosotros = e.target.value;
                                    setData(updatedData);
                                }}>{data.titulo_nosotros}</textarea>
                            </div>
                            <div>
                                <label htmlFor={`descripcion_about_${data.descripcion_nosotros}`}>Descripción</label>
                                <textarea name="descripcion_about" id={`descripcion_about_${data.descripcion_nosotros}`} rows={10} cols={40} style={{resize: "none"}}
                                onChange={(e) => {
                                    const updatedData = data;
                                    updatedData.descripcion_nosotros = e.target.value;
                                    setData(updatedData);
                                }}>{data.descripcion_nosotros}</textarea>
                            </div>
                            <div>
                                <label htmlFor={`descripcion_about_${data.anios_experiencia}`}>Años de experiencia</label>
                                <TextField
                                    id="outlined-number"
                                    label="Number"
                                    type="number"
                                    defaultValue={data.anios_experiencia}
                                    sx={{ width: "300px" }}
                                    onChange={(e) => {
                                        const updatedData = data;
                                        updatedData.anios_experiencia = parseInt(e.target.value);
                                        setData(updatedData);
                                    }}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                                <label htmlFor="imagen" style={{marginBottom: 0}}>Imagen</label>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        name="imagen"
                                        className={theme.palette.mode === 'dark' ? classes.formControlDark : classes.formControl}
                                    />
                                <label htmlFor="imagen2" style={{marginBottom: 0}}>Imagen 2</label>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        name="imagen2"
                                        className={theme.palette.mode === 'dark' ? classes.formControlDark : classes.formControl}
                                    />
                            </div>
                            <div>
                                <label htmlFor={`descripcion_about_${data.titulo2_nosotros}`}>Título 2</label>
                                <Editor
                                    apiKey='r48129s2w0duaojj9z6uw4tdb23f7owjsaalkbsy8awlmc86'
                                    id={`descripcion_about_${data.titulo2_nosotros}`}
                                    value={data.titulo2_nosotros}
                                    onEditorChange={(content) => {
                                        const updatedData = data;
                                        updatedData.title2_nosotros = content;
                                        setData(updatedData);
                                    }}
                                    init={{
                                        height: 200,
                                        width: 300,
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
                                    }} sty/>
                            </div>
                            <div>
                                <label htmlFor={`descripcion_about_${data.descripcion2_nosotros}`}>Descripción 2</label>
                                <Editor
                                    apiKey='r48129s2w0duaojj9z6uw4tdb23f7owjsaalkbsy8awlmc86'
                                    id={`descripcion_about_${data.descripcion2_nosotros}`}
                                    value={data.descripcion2_nosotros}
                                    onInit={()=> setEditState(true)}
                                    onEditorChange={(content) => {
                                        const updatedData = data;
                                        updatedData.descripcion2_nosotros = content;
                                        setData(updatedData);
                                    }}
                                    init={{
                                        height: 200,
                                        width: 300,
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
                                    }} sty/>
                            </div>
                        </div>
                        <Button variant="contained" color="primary" type="submit" > Guardar cambios </Button>
                    </form>
            </Box>
        </>
    );
};

export default EditAbout;
