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

const EditTitle = ({dataSSR}) => {
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

    console.log(dataSSR)

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
                                <label htmlFor={`subtitulo_about_${data.mision}`}>Misión</label>
                                <Editor
                                        apiKey='r48129s2w0duaojj9z6uw4tdb23f7owjsaalkbsy8awlmc86'
                                        id={`mision_about_${data.mision}`}
                                        initialValue={data.mision}
                                        onEditorChange={(content) => {
                                            console.log(content)    
                                            let updatedData = data;
                                            updatedData.mision = content;
                                            setData((prev) => updatedData);
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
                                <label htmlFor={`title_about_${data.vision}`}>Visión</label>
                                <Editor
                                        apiKey='r48129s2w0duaojj9z6uw4tdb23f7owjsaalkbsy8awlmc86'
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
                                <label htmlFor={`descripcion_about_${data.valores}`}>Valores</label>
                                <Editor
                                        apiKey='r48129s2w0duaojj9z6uw4tdb23f7owjsaalkbsy8awlmc86'
                                        id={`valores_about_${data.valores}`}
                                        initialValue={data.valores}
                                        onInit={()=> setEditState(true)}
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
                        <Button variant="contained" color="primary" type="submit" > Guardar cambios </Button>
                    </form>
            </Box>
        </>
    );
};

export default EditTitle;