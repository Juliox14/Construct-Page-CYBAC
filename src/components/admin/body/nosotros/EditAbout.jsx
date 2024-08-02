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
    const [message, setMessage] = useState(["", ""]);
    const [confirmationUpdate, setConfirmationUpdate] = useState(false);
    const refForm = useRef(null);

    const reportIncompleteForm = (e) =>{
        e.preventDefault();
        if(refForm.current.reportValidity()){
            refForm.current.requestSubmit();
        }else{
            setConfirmationUpdate(false);
            setMessage(['Por favor, llene todos los campos', 'error']);
            setInterval(() => {
                setMessage(["", ""]);
            }, 5000);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append(`file${1}` , data.img1);
        formData.append(`file${2}` , data.img2);

        const responseImageUrl = await axios.post("/api/upload", formData);

        const updatedDataWithImg = { 
            ...data,
            img1: responseImageUrl.data.url[0].file,
            img2: responseImageUrl.data.url[1].file 
        }

        if(responseImageUrl.status === 200){
            const response = await axios.put(`/api/about`, updatedDataWithImg);

            if (response.status === 200) {
                setConfirmationUpdate(false);
                setMessage(['Servicio actualizado correctamente', 'success']);
                setInterval(() => {
                    setMessage('');
                }, 10000);
            } else {
                setConfirmationUpdate(false);
                setMessage(['Error al actualizar', 'error']);
                setInterval(() => {
                    setMessage('');
                }, 5000);
            }
        }
    };

    return (
        <>
            {confirmationUpdate && (
                    <Box sx={{
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
                    }} component="form" onSubmit={(e)=> reportIncompleteForm(e)}>
                        <Box sx={{
                            bgcolor: theme.palette.mode === 'dark' ? "#242424" : "#E3E3E3",
                            color: theme.palette.mode === 'dark' ? "white" : "#014655",
                            transition: `background-color ${theme.transitions.duration.standard}ms`,
                            borderRadius: '10px',
                            padding: '20px',
                        }}>
                            <h2>¿Estás seguro de actualizar sobre nosotros?</h2>
                            <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
                                <Button variant="contained" color="primary" type="submit">Confirmar</Button>
                                <Button variant="contained" color="primary" onClick={() => setConfirmationUpdate(false)}>Cancelar</Button>
                            </div>
                        </Box>
                    </Box>
                )}
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
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    // maxWidth: '70%',
                }}>
                    {message[0] !== "" && (
                        <Alert severity={`${message[1]}`} sx={{
                            position: 'fixed',
                            width: 'auto',
                            height: 'auto',
                            zIndex: '1000',
                        }} >
                            {message[0]}
                        </Alert>
                    )}
                    <form className={classes.homeEdit_aboutSection_formSubservicio} ref={refForm} onSubmit={handleSubmit}>
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
                                        onChange={(e) => {
                                            const updatedData = data;
                                            updatedData.img1 = e.target.files[0];
                                            setData(updatedData);
                                        }}
                                        required
                                        className={theme.palette.mode === 'dark' ? classes.formControlDark : classes.formControl}
                                    />
                                <label htmlFor="imagen2" style={{marginBottom: 0}}>Imagen 2</label>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        name="imagen2"
                                        onChange={(e) => {
                                            const updatedData = data;
                                            updatedData.img2 = e.target.files[0];
                                            setData(updatedData);
                                        }}
                                        required
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
                                        extended_valid_elements: 'span[*]',
                                        skin: 'oxide-dark',
                                        content_css: 'dark',
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
                                        extended_valid_elements: 'span[*]',
                                        skin: 'oxide-dark',
                                        content_css: 'dark',
                                    }} sty/>
                            </div>
                        </div>
                        <div className={classes.homeEdit_aboutSection_formSubservicio_updateAlert}>
                            <Button variant="contained" color="primary"  onClick={() => setConfirmationUpdate(true)} 
                                sx={{
                                    width: "200px",
                                    height: "50px",
                                    bgcolor: "#014655",
                                    color: "white",
                                    ":hover": {
                                        bgcolor: "#0d5c6c",
                                    }
                                }}> Guardar cambios </Button>
                        </div>
                    </form>
            </Box>
        </>
    );
};

export default EditAbout;
