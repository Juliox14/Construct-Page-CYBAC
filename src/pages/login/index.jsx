'use client';
import LoginInicial from '../../components/login/login-inicial';
import LoginRecordatorio from '../../components/login/login-recordatorio';
import classes from './loginStyles.module.css';
export default function Login() {
    return (
        <div className={classes.bg_pc}>
            <LoginInicial />
            {/* <LoginRecordatorio/> */}
        </div>
    );
}
