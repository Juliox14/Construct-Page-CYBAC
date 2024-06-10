import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import classes from './project.module.scss';
import LoadingButton from '../loadingButton/loadingButton';

const Filter = ({open}) =>{

    const sliderReference = useRef(); 
    const progress = useRef();
    const priceInput = useRef();

    const [minValState, setMinValState] = useState();
    const [maxValState, setMaxValState] = useState();
    const [alertMinVal, setAlertMinVal] = useState(false);

    useEffect(() => {
        // Aquí se obtiene el slider y los inputs
        let priceGap = 100000;
        const slider = sliderReference.current,
        rangeInput = slider.querySelectorAll("input"),
        priceInputChildren = priceInput.current.querySelectorAll("input");
        
        // Lógica de los valores del slider
        priceInputChildren.forEach((input) => {
            input.addEventListener("input", (e) => {
                let minVal = parseInt(priceInputChildren[0].value),
                maxVal = parseInt(priceInputChildren[1].value);

                if((maxVal - minVal >= priceGap) && maxVal <= 1000000 && minVal >= 0){
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

                if(minVal > 1000000) priceInputChildren[0].value = 1000000;
                if(maxVal > 1000000) priceInputChildren[1].value = 1000000;

                console.log(minVal, maxVal);
                if(minVal >= maxVal) setAlertMinVal(true);
                else{
                    setAlertMinVal(false);
                    console.log("entro");
                }
                setMaxValState(maxVal);
                setMinValState(minVal);
            });
        });

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
            });
        });
    }, []);

    return (
        <motion.div variants={{visible: {opacity:0, y:0, width:0, height:0}, 
        hidden: {y:20, opacity:1, width:"100%", height:350}}} animate={open ? "visible" : "hidden"} className={classes.filtro}>
            <div className="cajaFiltro">
                <div className={classes.filtro_wrapper}>
                    <header className={classes.filtro_headerFilter}>
                        <h2>Rango de precio</h2>
                        <p>Usa el deslizador o coloca un precio minimo y un maximo</p>
                    </header>
                    <div className={classes.filtro_priceInput} ref={priceInput}>
                        <div className={classes.filtro_field}>
                            <span>Min</span>
                            <input type="number" className="inputMin" defaultValue="0" required/>
                        </div>
                        <div className={classes.filtro_priceInput__separator}>-</div>
                        <div className={classes.filtro_field}>
                            <span>Max</span>
                            <input type="number" className="inputMax" defaultValue="250000" required/>
                        </div>
                        {alertMinVal && <span className={classes.filtro_alert}>El valor minimo es mayor o igual al maximo</span>}
                    </div>
                    <div className={classes.filtro_slider}>
                        <div className={`${classes.filtro_slider__progress}`} ref={progress}></div>
                    </div>
                    <div className={classes.filtro_rangeInput} ref={sliderReference}>
                        <input type="range" className={`rangeMin ${classes.filtro_inputTypeRange}`} id={classes.filtro_inputTypeRange} min="0" max="1000000" defaultValue="0"/>
                        <input type="range" className={`rangeMax ${classes.filtro_inputTypeRange}`} id={classes.filtro_inputTypeRange} min="0" max="1000000" defaultValue="250000"/>
                    </div>
                </div>
                <div>
                    <LoadingButton />
                </div>
            </div>
            <div className={classes.boxFilterList}>
                <h2 className={classes.boxFilterList_title}>Lista de filtros</h2>
            </div>
        </motion.div>
    );
}

export default Filter;