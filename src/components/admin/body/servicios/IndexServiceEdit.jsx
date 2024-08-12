// Imports de mui material
import { Box, Alert, TextareaAutosize } from "@mui/material";
import { useTheme } from "@mui/material/styles";

// Imports de estilos
import classes from "./EditService.module.scss";

// Imports de componentes propios
import Ruta from "../items-util/ruta";
import BotonFixed from "../items-util/botonFixed";

// Imports de react
import { useState } from "react";

// Imports de axios
import axios from "axios";

const IndexServiceEdit = ({ home_services }) => {
    const theme = useTheme();
    const [home_services_data, setHome_services_data] = useState(home_services);
    const [message, setMessage] = useState('');
    const [bullets, setBullets] = useState(home_services.bullets_about || '');


    const handleBulletsChange = (index, value) => {
        const bulletsArray = bullets.split(',');
        bulletsArray[index] = value;
        const newBullets = bulletsArray.join(',');
        setBullets(newBullets);
        setHome_services_data({
            ...home_services_data,
            bullets_about: newBullets
        });
    };

    const rutas = [{ nombre: 'Inicio', link: '/admin' }, { nombre: 'Servicios', link: '/admin/servicio' }, { nombre: 'Home Servicios', link: '/admin/servicio/edit/index' }];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setHome_services_data({
            ...home_services_data,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append(`file${1}` , home_services_data.imagen_url_about);
        formData.append(`file${2}` , home_services_data.imagen_breadcrumb);
        
        const responseImageUrl = await axios.post("/api/upload", formData);

        const file_about = responseImageUrl.data.url.find(file => file.id === 1);
        const file_breadcrumb = responseImageUrl.data.url.find(file => file.id === 2);

        const updatedDataWithImg = { 
            ...home_services_data,
            imagen_url_about: file_about !== undefined ? file_about.file : home_services_data.imagen_url_about,
            imagen_breadcrumb: file_breadcrumb !== undefined ? file_breadcrumb.file : home_services_data.imagen_breadcrumb
        }

        if(responseImageUrl.status === 200){
            const response = await axios.put(`/api/home_services`, updatedDataWithImg);
            if (response.status === 200) {
                setMessage(response.data.message);
                setInterval(() => {
                    setMessage('');
                }, 10000);
            } else {
                setMessage('Error al actualizar el servicio');
                setInterval(() => {
                    setMessage('');
                }, 5000);
            }
        }
    };

    return (
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
                    top: '60px',
                    left: '430px',
                    width: 'auto',
                    height: 'auto',
                    bgcolor: '#26ca7032',
                    zIndex: '1000',
                }} >
                    {message}
                </Alert>
            )}
            <Ruta rutas={rutas} titulo={'Editar index de servicios'} />
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
                    <form onSubmit={handleSubmit} id="edit-index-form">
                        <div className={classes.formGroup}>
                            <label htmlFor="titulo_breadcrumb">Título Breadcrumb</label>
                            <input
                                required
                                type="text"
                                id="titulo_breadcrumb"
                                name="titulo_breadcrumb"
                                value={home_services_data.titulo_breadcrumb}
                                onChange={handleInputChange}
                                className={theme.palette.mode === 'dark' ? classes.formControlDark : classes.formControl}
                            />
                        </div>
                        <div className={classes.formGroup}>
                            <label htmlFor="imagen_url_about_breadcrumb">Imagen breadcrumb - (1920 x 470)</label>
                                <input
                                    id="imagen_url_about_breadcrumb"
                                    type="file"
                                    accept="image/*"
                                    name="imagen"
                                    onChange={(e) => {
                                        const updatedData = home_services_data;
                                        updatedData.imagen_breadcrumb = e.target.files[0];
                                        setHome_services_data(updatedData);
                                    }}

                                    className={theme.palette.mode === 'dark' ? classes.formControlDark : classes.formControl}
                                />
                            <div className={classes.imagePreview}>
                                <img src={home_services_data.imagen_breadcrumb} alt="Imagen del servicio" />
                            </div>
                        </div>
                        <div className={classes.formGroup}>
                            <label htmlFor="subtitulo_breadcrumb">Subtítulo Breadcrumb</label>
                            <input
                                required
                                type="text"
                                id="subtitulo_breadcrumb"
                                name="subtitulo_breadcrumb"
                                value={home_services_data.subtitulo_breadcrumb}
                                onChange={handleInputChange}
                                className={theme.palette.mode === 'dark' ? classes.formControlDark : classes.formControl}
                            />
                        </div>
                        <div className={classes.formGroup}>
                            <label htmlFor="descripcion_breadcrumb">Descripción Breadcrumb</label>
                            <TextareaAutosize
                                required
                                id="descripcion_breadcrumb"
                                name="descripcion_breadcrumb"
                                value={home_services_data.descripcion_breadcrumb}
                                onChange={handleInputChange}
                                rows="4"
                                className={theme.palette.mode === 'dark' ? classes.formControlDark : classes.formControl}
                            />
                        </div>
                        <div className={classes.formGroup}>
                            <label htmlFor="titulo_about">Título</label>
                            <input
                                required
                                type="text"
                                id="titulo_about"
                                name="titulo_about"
                                value={home_services_data.titulo_about}
                                onChange={handleInputChange}
                                className={theme.palette.mode === 'dark' ? classes.formControlDark : classes.formControl}
                            />
                        </div>
                        <div className={classes.formGroup}>
                            <label htmlFor="subtitulo_about">Subtitulo</label>
                            <input
                                required
                                type="text"
                                id="subtitulo_about"
                                name="subtitulo_about"
                                value={home_services_data.subtitulo_about}
                                onChange={handleInputChange}
                                className={theme.palette.mode === 'dark' ? classes.formControlDark : classes.formControl}
                            />
                        </div>
                        <div className={classes.formGroup}>
                            <label htmlFor="imagen_url_about">Imagen - aproximadamente (1024 x 1024)</label>
                                <input
                                    id="imagen_url_about"
                                    type="file"
                                    accept="image/*"
                                    name="imagen"
                                    onChange={(e) => {
                                        const updatedData = home_services_data;
                                        updatedData.imagen_url_about = e.target.files[0];
                                        setHome_services_data(updatedData);
                                    }}
                                    required={home_services_data.imagen_url_about ? false : true}
                                    className={theme.palette.mode === 'dark' ? classes.formControlDark : classes.formControl}
                                />
                            <div className={classes.imagePreview}>
                                <img src={home_services_data.imagen_url_about} alt="Imagen del servicio" />
                            </div>
                        </div>
                        <div className={classes.formGroup}>
                            <label htmlFor="descripcion_about">Descripción</label>
                            <TextareaAutosize
                                required
                                id="descripcion_about"
                                name="descripcion_about"
                                value={home_services_data.descripcion_about}
                                onChange={handleInputChange}
                                rows="4"
                                className={theme.palette.mode === 'dark' ? classes.formControlDark : classes.formControl}
                            />
                        </div>

                        <div className={classes.formGroup_bullets}>
                            {bullets.split(',').map((item, index) => (
                                <div key={index} className={classes.formGroup_bullets_bullet}>
                                    <label htmlFor={`bullet_${index}`}>Bullet {index + 1}</label>
                                    <input
                                        required
                                        type="text"
                                        value={item}
                                        id={`bullet_${index}`}
                                        className={theme.palette.mode === 'dark' ? classes.formControlDark_bullet : classes.formControlDark_bullet}
                                        onChange={(e) => handleBulletsChange(index, e.target.value)}
                                    />
                                </div>
                            ))}
                        </div>
                        <BotonFixed metodo={() => document.getElementById('edit-index-form').requestSubmit} />
                    </form>
                </Box>
            </div>
        </Box>
    );
}

export default IndexServiceEdit;
