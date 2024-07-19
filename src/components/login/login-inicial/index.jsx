import classes from './loginStyles.module.css'
import Image from 'next/image';
import perfil from '../../../../public/images/logo/favicon_reichstag_color.png'
import Button from '@mui/material/Button';
import ReactInput from '../reactInput';

export default function LoginInicial(){
    function HandlerClick(event) {
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
                <ReactInput placeHolder='Nombre de usuario'></ReactInput>
                <ReactInput type='password' placeHolder='Contraseña'/>
                <Button variant="outlined" className={classes.btn_pc} onClick={HandlerClick()}>Iniciar Sesión</Button>
            </form>
        </div>
    );
}