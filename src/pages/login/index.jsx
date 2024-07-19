"use client"
import LoginInicial from '../../components/login/login-inicial'
import LoginRecordatorio from '../../components/login/login-recordatorio'
import Register from "../../components/register";
import classes from './loginStyles.module.css'
export default function Login(){
    return(
        <div className={classes.bg_pc}>
            <Register/>
            {/* <LoginInicial/> */}
            {/* <LoginRecordatorio/> */}
        </div>
    );
}