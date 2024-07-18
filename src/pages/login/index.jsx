"use client"
import LoginRecordatorio from "../../components/login/login-recordatorio";
import LoginInicial from "../../components/login/login-inicial";
import classes from './loginStyles.module.css'
import ReactInput from "../../components/login/reactInput";
export default function Login(){
    return(
        <div className={classes.bg_pc}>
            {/* <ReactInput type='text' placeHolder='Contraseña'/> */}
            <LoginRecordatorio></LoginRecordatorio>
        </div>
    );
}