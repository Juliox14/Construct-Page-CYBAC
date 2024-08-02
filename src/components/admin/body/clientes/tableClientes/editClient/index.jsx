import { useEffect, useState } from "react";
import classes from "./styleEditClient.module.css"
import ReactInput from "../../../../../login/reactInput"
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import axios from "axios";
import { Box, Button} from "@mui/material";
import Alert from '@mui/material/Alert';

export default function EditClient({inData, dataEditClient, showComponent = true}){
    const [showComponentFromEditClient, setShowComponentFromEditClient] = useState(showComponent);
    const [dataClient, setDataClient] = useState(dataEditClient);
    const [showLogo, setShowLogo] = useState(dataClient.ruta_logo ? true : false);
    const [alert, setAlert] = useState(false);
    const [alertValue, setAlertValue] = useState('Algo Salió mal');
    const [succesAlert,setSuccesAlert] =  useState(false);
    const [check1, setCheck1] = useState(false);
    const [check2, setCheck2] = useState(false);

    useEffect(() => {
        if(dataClient.visualizarLista === 1){
            setCheck1(true);
        }
        if(dataClient.visualizarSlider === 1){
            setCheck2(true);
        }
    },[dataEditClient]);

    //Mui materials
    const currencies = [
        {
          value: 'Municipios',
          label: 'Municipios',
        },
        {
          value: 'Particulares',
          label: 'Particulares',
        },
        {
          value: 'Iniciativa Privada',
          label: 'Iniciativa Privada',
        },
      ];

    async function HandlerOnClickSave(e){
        e.preventDefault();
        const clientData = {
            id: dataClient.id,
            nombre: dataClient.nombre,
            clasificacion: dataClient.clasificacion,
            ruta_logo: dataClient.ruta_logo,
            correo: dataClient.correo,
            telefono: dataClient.telefono,
            alt: dataClient.alt,
            visualizarLista: check1,
            visualizarSlider: check2,
        }
        const response = await axios.post('/api/editClient', clientData);
        setSuccesAlert(true);
        setInterval(() => {
            setSuccesAlert(false);
            setShowComponentFromEditClient(false);
            inData(showComponentFromEditClient);
            window.location.reload();
        },2000);
    }

    function HandlerOnClickCancel(){
        setShowComponentFromEditClient(false);
        inData(showComponentFromEditClient);
    }

    const callBackOnInputChange = (name, value) => {
        const data = {...dataClient};
        if(name === 'ruta_logo'){
            if(value == '' && showLogo === true){
                setShowLogo(false);
            }
            if(value != '' && showLogo === false){
                setShowLogo(true);
            }
        }
        data[name]=value;
        setDataClient(data);

    };

    function onCheckedChange1(){
        if(check2 === false && check1 === true){
            setAlertValue('Tienes que seleccionar al menos un sitio para mostrar al cliente');
            setAlert(true);
            setInterval(() => {
                setAlert(false)
            },3000);
        }else{
            setCheck1(!check1);
        }
    }
    function onCheckedChange2(){
        if((dataClient.ruta_logo === '' || dataClient.ruta_logo == undefined) && check2 === false){
            setAlertValue('Tienes que tener un logo para poder colocar el cliente en el Slider');
            setAlert(true);
            setInterval(() => {
                setAlert(false)
            },3000);

        }else if(check1 === false && check2 === true){
            setAlertValue('Tienes que seleccionar al menos un sitio para mostrar al cliente');
            setAlert(true);
            setInterval(() => {
                setAlert(false)
            },3000);
        }
        else{
            setCheck2(!check2);
        }
    }
    return(
        <div className={classes.body}>
            <div className={classes.body2}>
                <h1 className={classes.h1}>Editar Cliente</h1>
                <form id="basic-form" action="/submit" onSubmit={(e) => {HandlerOnClickSave(e)}} className={classes.form}>
                    <ReactInput
                        name="nombre"
                        placeHolder="Nombre"
                        value={dataClient.nombre}
                        callBackOnInputChange={callBackOnInputChange}
                        isRequired={true}
                    />
                    <div className={classes.divInputOptions}> 
                    <TextField
                        id="outlined-select-currency"
                        isRequired
                        select
                        label="Select"
                        defaultValue={dataClient.clasificacion}
                        sx={{width: '400px', marginTop: '15px', borderBlockColor: 'red'}}
                        >
                        {currencies.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                            {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    </div>
                    <ReactInput
                        name="ruta_logo"
                        placeHolder="Ruta Imagen"
                        value={dataClient.ruta_logo}
                        callBackOnInputChange={callBackOnInputChange}
                    />
                    <ReactInput
                        name="correo"
                        placeHolder="Correo"
                        value={dataClient.correo}
                        callBackOnInputChange={callBackOnInputChange}
                    />
                    <ReactInput
                        name="telefono"
                        placeHolder="Teléfono"
                        value={dataClient.telefono}
                        callBackOnInputChange={callBackOnInputChange}
                    />
                    <ReactInput
                        name="alt"
                        placeHolder="Alt imagen"
                        value={dataClient.alt}
                        callBackOnInputChange={callBackOnInputChange}
                        isRequired={true}
                    />
                    <FormGroup className={classes.divInputCheck}>
                        <FormControlLabel control={<Checkbox checked={check1} onChange={onCheckedChange1} sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }}/>} label="Mostrar en tabla" />
                        <FormControlLabel control={<Checkbox checked={check2} onChange={onCheckedChange2} sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }}/>} label="Mostrar en Slider" />
                    </FormGroup>
                    <div className={classes.btns}>
                        <Button variant="contained" color="primary" type='submit'
                            sx={{
                                width: "200px",
                                height: "50px",
                                bgcolor: "#014655",
                                ":hover": {
                                    bgcolor: "#0d5c6c",
                                }
                            }}> 
                            Guardar cambios 
                        </Button>
                        <Button variant="contained" color="primary" onClick={HandlerOnClickCancel}
                            sx={{
                                width: "200px",
                                height: "50px",
                                bgcolor: "#014655",
                                ":hover": {
                                    bgcolor: "#0d5c6c",
                                }
                            }}> 
                            Cancelar
                        </Button>
                    </div>
                </form>
            </div>
            {alert && <Alert severity="warning" sx={{
                position: 'absolute',
                top: '50px',
                left: '100px',
            }
            }>{alertValue}</Alert>}
            {succesAlert && <Alert severity="success" sx={{
                position: 'absolute',
                top: '50px',
                left: '100px',
            }
            }>Cliente Editado con éxito</Alert>}
            {showLogo && <div className={classes.imagen}><img src={dataClient.ruta_logo} alt={dataClient.alt  || 'No se pudo encontrar la imagen'} /></div>}
        </div>
    );
}
