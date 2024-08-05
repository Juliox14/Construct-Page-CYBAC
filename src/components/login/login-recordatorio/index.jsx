import classes from './loginStyles.module.css';
import Image from 'next/image';
import perfil from '../../../../public/img/favicon/profile-1.jpg';
import Button from '@mui/material/Button';
import ReactInput from '../reactInput';

export default function LoginRecordatorio() {
    return (
        <div className={classes.container_pc}>
            <section className={classes.section1_pc}>
                <div className={classes.image_pc}>
                    <Image src={perfil.src} fill></Image>
                </div>
                <h1 className={classes.h1_pc}>Paula Zuleta</h1>
                <h2 className={classes.h2_pc}>Administrador</h2>
            </section>
            <form className={classes.form_pc}>
                <ReactInput
                    type="password"
                    placeHolder="Contraseña"
                    ancho="400px"
                />
                <Button variant="outlined" className={classes.btn_pc}>
                    Iniciar Sesión
                </Button>
            </form>
        </div>
    );
}
