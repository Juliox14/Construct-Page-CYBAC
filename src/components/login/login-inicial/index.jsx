'use client';
import classes from './loginStyles.module.css';
import Image from 'next/image';
import perfil from '../../../../public/images/logo/favicon_reichstag_color.png';
import Button from '@mui/material/Button';
import ReactInput from '../reactInput';
import { userAccess, createToken } from './loginLogic.JS';
import { useState } from 'react';
import Alert from '@mui/material/Alert';

export default function LoginInicial() {
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

    async function HandlerClick(event) {
        event.preventDefault();
        const response = await userAccess(values);
        if (response.status === 201) {
            setValues({});
            setSuccessValue(true);
            window.location.href = '/admin';
        }
        if (response.status === 202) {
            setAlertValue(response.data);
            setAlert(true);
        } else {
            setAlertValue(response);
            setAlert(true);
        }
    }

    return (
        <div className={classes.container_pc}>
            <section className={classes.section1_pc}>
                <div className={classes.image_pc}>
                    <Image src={perfil.src} alt="Perfil" fill={true}></Image>
                </div>
                <h1 className={classes.h1_pc}>Reischtag</h1>
            </section>
            <form className={classes.form_pc}>
                <ReactInput
                    name="username_unique"
                    placeHolder="Nombre de usuario"
                    callBackOnInputChange={callBackOnInputChange}
                    isRequired={true}
                />
                <ReactInput
                    name="password_unique"
                    type="password"
                    placeHolder="Contraseña"
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
                    onClick={HandlerClick}
                >
                    Iniciar Sesión
                </Button>
            </form>
        </div>
    );
}
