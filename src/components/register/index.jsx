'use client';
import classes from './registerStyles.module.css';
import perfil from '../../../public/images/logo/favicon_reichstag_color.png';
import Image from 'next/image';
import Button from '@mui/material/Button';
import ReactInput from '../login/reactInput';
import { useState } from 'react';
import { guardarDatos } from './registerLogic';
import Alert from '@mui/material/Alert';

export default function Register() {
    const [values, setValues] = useState({});
    const [alert, setAlert] = useState(false);
    const [alertValue, setAlertValue] = useState('');
    const [success, setSuccessValue] = useState(false);
    const callBackOnInputChange = (name, value) => {
        setValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
        setAlertValue('');
        setAlert(false);
    };
    async function HandlerSubmit(event) {
        event.preventDefault();
        const result = await guardarDatos(values);
        if (result != true) {
            setAlertValue(result);
            setAlert(true);
        } else {
            setValues({});
            setSuccessValue(true);
            setTimeout(() => {
                window.location.href = '/login';
            }, 2000);
        }
    }

    return (
        <div className={classes.container_pc}>
            <form className={classes.form_pc} onSubmit={HandlerSubmit}>
                <div className={classes.image_pc}>
                    <Image src={perfil.src} fill></Image>
                </div>
                <h1 className={classes.h1_pc}>Regístrate</h1>
                <ReactInput
                    name="username"
                    placeHolder="Nombre de usuario"
                    callBackOnInputChange={callBackOnInputChange}
                    isRequired={true}
                />
                <ReactInput
                    name="password"
                    type="password"
                    placeHolder="Contraseña"
                    callBackOnInputChange={callBackOnInputChange}
                    isRequired={true}
                />
                <ReactInput
                    name="confirmPassword"
                    type="password"
                    placeHolder="Confirmar contraseña"
                    callBackOnInputChange={callBackOnInputChange}
                    isRequired={true}
                />
                {alert && (
                    <Alert
                        severity="warning"
                        sx={{ width: '400px', marginTop: '15px' }}
                    >
                        {alertValue}
                    </Alert>
                )}
                {success && (
                    <Alert
                        severity="success"
                        sx={{ width: '400px', marginTop: '15px' }}
                    >
                        Usuario Ingresado Exitosamente
                    </Alert>
                )}
                <Button
                    variant="outlined"
                    className={classes.btn_pc}
                    type="submit"
                >
                    Registrarse
                </Button>
            </form>
        </div>
    );
}
