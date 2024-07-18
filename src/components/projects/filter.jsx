import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Divider, Button, InputLabel, Select, MenuItem, FormControl } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import classes from './project.module.scss';
import { handleFilter } from '../../lib/getProyects';

const Filter = ({open, handleFilterUpdate}) =>{

    const sliderReference = useRef(); 
    const progress = useRef();
    const priceInput = useRef();

    const [minValState, setMinValState] = useState();
    const [maxValState, setMaxValState] = useState();
    const [filterNumber, setFilterNumber] = useState(false);
    const [filterSlider , setFilterSlider] = useState(false);

    const [filtros, setFiltros] = useState([]);
    const [estado, setEstados] = useState('');
    const [alertMinVal, setAlertMinVal] = useState(false);

    useEffect(() => {
        // Aquí se obtiene el slider y los inputs
        let priceGap = 500000;
        const slider = sliderReference.current,
        rangeInput = slider.querySelectorAll("input"),
        priceInputChildren = priceInput.current.querySelectorAll("input");
        
        // Aquí se encuentra la lógica de los inputs numéricos del slider
        priceInputChildren.forEach((input) => {
            input.addEventListener("input", (e) => {
                let minVal = parseInt(priceInputChildren[0].value),
                maxVal = parseInt(priceInputChildren[1].value);

                if((maxVal - minVal >= priceGap) && maxVal <= 5000000 && minVal >= 0){
                    if((e.target.className.includes("inputMin"))){
                        rangeInput[0].value = minVal;
                        progress.current.style.left = (minVal / rangeInput[0].max) * 100 + "%";
                        return;
                    }else{
                        rangeInput[1].value = maxVal;
                        progress.current.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
                        return;
                    }
                }
                if(!(minVal)) priceInputChildren[0].value = 0;
                if(!(maxVal)) priceInputChildren[1].value = 0;

                if(minVal > 5000000) priceInputChildren[0].value = 5000000;
                if(maxVal > 5000000) priceInputChildren[1].value = 5000000;
                if(minVal >= maxVal) setAlertMinVal(true);
                else{
                    setAlertMinVal(false);
                }
                setMaxValState(maxVal);
                setMinValState(minVal);
                setFilterNumber(prev => !prev);
            });
        });

        // Aquí se encuentra la lógica del slider
        rangeInput.forEach((input) => {
            input.addEventListener("input", (e) => {
                let minVal = parseInt(rangeInput[0].value),
                maxVal = parseInt(rangeInput[1].value);

                if(maxVal - minVal < priceGap){
                    if((e.target.className.includes("rangeMin"))){
                        rangeInput[0].value = maxVal - priceGap;
                        return;
                    }else{
                        rangeInput[1].value = minVal + priceGap;
                        return;
                    }
                }else{
                    priceInputChildren[0].value = minVal;
                    priceInputChildren[1].value = maxVal;
                    progress.current.style.left = (minVal / rangeInput[0].max) * 100 + "%";
                    progress.current.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
                }
                
                if(minVal >= maxVal) setAlertMinVal(true);
                else{
                    setAlertMinVal(false);
                }

                setMaxValState(maxVal);
                setMinValState(minVal);
                setFilterSlider(prev => !prev);
            });
        });
    }, []);

    // Aquí se encuentra la lógica del select, también se agrega el filtro de estado a las variables de estado para ser enviadas en la API
    const handleChange = (event) => {
        setEstados(event.target.value);
        if(!(filtros.includes("Estado"))) {
            setFiltros((prevFiltros) => {
                if (!prevFiltros.includes("Estado")) {
                    return [...prevFiltros, "Estado"];
                }
                return prevFiltros;
            });
        }
      };


    // Lógica para agregar el filtro de rango de precio a variables de estado y puedan ser enviados en la API
    useEffect(() => {
        if(maxValState !== undefined && minValState !== undefined){
            if(!(filtros.includes("Rango de precio"))) {
                setFiltros((prevFiltros) => {
                    if (!prevFiltros.includes("Rango de precio")) {
                        return [...prevFiltros, "Rango de precio"];
                    }
                    return prevFiltros;
                });
            }
        }
    },[filterNumber, filterSlider]);

    // Lógica para eliminar un filtro
    const handleDeleteFilter = (index, filtro) => {
        setFiltros(filtros.filter((filtro, i) => i !== index));
        switch (filtro) {
            case "Rango de precio":
                setMinValState(null);
                setMaxValState(null);
                break;
            case "Estado":
                setEstados("");
                break;

            // Aquí se pueden agregar más casos para más filtros
            default:
                break;
        }
    }

    const handleSubmit = async() => {
        try{
            const data = {
                estado: estado,
                precioInicial: minValState,
                precioFinal: maxValState
            }
            const getData = await handleFilter(data.estado, data.precioInicial, data.precioFinal);
            
            handleFilterUpdate(getData);
        }catch(error){
            console.log(error);
        }
    }

    return (
        <motion.div variants={{visible: {opacity:0, y:0, width: "100%", height:0}, 
        hidden: {y:20, opacity:1, width:"100%", height:240}}} animate={open ? "visible" : "hidden"} className={classes.filtro}>
                <div className={classes.boxFilterList}>
                    <h2 className={classes.filtro_boxFilterList__title}>Lista de filtros</h2>
                    <Divider variant="middle"/>
                    <div className={classes.filtro_boxBtnDelete}>
                        {filtros && filtros.map((filtro, index) => (
                            <Button key={index} variant="outlined" startIcon={<DeleteIcon />} style={{margin: "10px 0px 10px 0"}} onClick={(e)=> {handleDeleteFilter(index, filtro)}}>
                                {filtro}
                            </Button>
                        ))}
                    </div>
                    <Divider variant="middle"/>
                    <div className={classes.filtro_boxBtnFilter} margin='normal'>
                        <div className="cajaSlider">
                            <div className={classes.filtro_wrapper}>
                                <div className={classes.filtro_priceInput} ref={priceInput}>
                                    <div className={classes.filtro_field}>
                                        <span>$Min</span>
                                        <input type="number" className="inputMin" defaultValue="0" required/>
                                    </div>
                                    <div className={classes.filtro_priceInput__separator}>-</div>
                                    <div className={classes.filtro_field}>
                                        <span>$Max</span>
                                        <input type="number" className="inputMax" defaultValue="1250000" required/>
                                    </div>
                                    {alertMinVal && <span className={classes.filtro_alert}>El valor minimo es mayor o igual al maximo</span>}
                                </div>
                                <div className={classes.filtro_slider}>
                                    <div className={`${classes.filtro_slider__progress}`} ref={progress}></div>
                                </div>
                                <div className={classes.filtro_rangeInput} ref={sliderReference}>
                                    <input type="range" className={`rangeMin ${classes.filtro_inputTypeRange}`} id={classes.filtro_inputTypeRange} min="0" max="5000000" defaultValue="0" step="1000" />
                                    <input type="range" className={`rangeMax ${classes.filtro_inputTypeRange}`} id={classes.filtro_inputTypeRange} min="0" max="5000000" defaultValue="1250000" step="1000"/>
                                </div>
                            </div>
                        </div>
                        
                        <FormControl margin='normal'>
                            <InputLabel id="demo-simple-select-helper-label">Estado</InputLabel>
                            <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            value={estado}
                            label="Estado"
                            onChange={handleChange}
                            style={{width: "200px"}}
                            >
                                <MenuItem value="">
                                    <em>---</em>
                                </MenuItem>
                                <MenuItem value="Tamaulipas">Tamaulipas</MenuItem>
                                <MenuItem value="Chiapas">Chiapas</MenuItem>
                                <MenuItem value="Sonora">Sonora</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                </div>
                <div className={classes.filtro_boxLoading}>
                    <Button variant="contained" className={classes.filtro_boxLoading__btnLoading} onClick={handleSubmit}>Aplicar filtros</Button>
                </div>
        </motion.div>
    );
}

export default Filter;