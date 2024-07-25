import classes from './loginStyles.module.css'
import Image from 'next/image';
import perfil from '../../../../public/images/logo/favicon_reichstag_color.png'
import Button from '@mui/material/Button';
import ReactInput from '../reactInput';
import { userAccess } from './logiNLogic.JS';

export default function LoginInicial(){

    const callBackOnInputChange = (name, value) => {
        setValues(prevValues => ({
            ...prevValues,
            [name]: value,
        }));
        setAlertValue('');
        setAlert(false);
    };


    
    function HandlerClick(event, values) {
        event.preventDefault();
        userAccess(values);
        




        console.log('Pressioned button')
    }











    return(
        <div className={classes.container_pc}>
            <section className={classes.section1_pc}>
                <div className={classes.image_pc}>
                    <Image src={perfil.src} fill></Image>
                </div>
                <h1 className={classes.h1_pc}>Reischtag</h1>
            </section>
            <form className={classes.form_pc}>
                <ReactInput 
                    name="username-unique" 
                    placeHolder="Nombre de usuario" 
                    callBackOnInputChange={callBackOnInputChange}
                    isRequired={true}>
                </ReactInput>
                <ReactInput 
                    name="password-unique" 
                    type="password" 
                    placeHolder="Contraseña" 
                    callBackOnInputChange={callBackOnInputChange}
                    isRequired={true}>
                </ReactInput>
                <Button variant="outlined" className={classes.btn_pc} onClick={HandlerClick()}>Iniciar Sesión</Button>
            </form>
        </div>
    );
}