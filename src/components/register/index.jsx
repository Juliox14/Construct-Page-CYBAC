import classes from './registerStyles.module.css';
import Button from '@mui/material/Button';
import ReactInput from '../login/reactInput';
import { useState } from 'react';
import {guardarDatos} from './registerLogic';

export default function Register() {
    // Variable de estado para capturar los valores de los ReactInput
    const [values, setValues] = useState({});

    const callBackOnInputChange = (name, value) => {
        setValues(prevValues => ({
            ...prevValues,
            [name]: value,
        }));
    };
    async function HandlerSubmit(event) {
        console.log(values)
        event.preventDefault();
        const response = await guardarDatos(values);
    }
    
    return (
        <div className={classes.container_pc}>
            <form className={classes.form_pc} onSubmit={HandlerSubmit}>
                <h1 className={classes.h1_pc}>Regístrate</h1>
                <ReactInput 
                    name="username" 
                    placeHolder = 'Nombre de usuario' 
                    callBackOnInputChange={callBackOnInputChange}
                    isRequired
                />
                <ReactInput 
                    name="password" 
                    type="password" 
                    placeHolder='Contraseña' 
                    callBackOnInputChange={callBackOnInputChange}
                />
                <ReactInput 
                    name="confirmPassword" 
                    type="password" 
                    placeHolder="Confirmar contraseña" 
                    callBackOnInputChange={callBackOnInputChange}
                />
                <Button variant="outlined" className={classes.btn_pc} type="submit">
                    Registrarse
                </Button>
            </form>
        </div>
    );
}
