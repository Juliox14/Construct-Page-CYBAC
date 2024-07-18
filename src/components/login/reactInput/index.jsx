import { styled } from '@mui/system';
import classes from './inputStyle.module.css';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { duration } from '@mui/material';
import { LineWeightTwoTone } from '@mui/icons-material';

export default function ReactInput({ type = 'text', placeHolder = 'Lorem ipsum', ancho = '400px'}) {

    //Estilos reactivos
    const [inputState, setInputState] = useState('desactivo');
    const [inputValue, setInputValue] = useState('');

    const anchoDiv = {width: ancho};

    //Cuando cambie el valor del input se introduce dicho valor en la variable de estado 'inputValue'
    const HandlerChange = (event) => {
        setInputValue(event.target.value);
    }

    //Cuando esté enfocado el input, se coloca el label en su posición original (dentro del input)
    const HandlerFocus = () => {
        setInputState('activo');
    };

    //Cuando se desenfoque el input
    const HandlerBlur = () => {
        inputValue === '' ? setInputState('desactivo') : setInputState('relleno')
    };

    //VariantesLabel
    const variantsLabel = {
        activo: { top: 6, left:'10px', color: '#012730', fontSize:'14px', width: '80px', fontWeight: '500'},
        relleno: { top: 6, left:'10px', color: '#8b8989', fontSize:'14px', width: '80px',},
        desactivo: { top: 25, color: '#8b8989',},
    }


    return (
        <div className={classes.div} style={anchoDiv}>
            <motion.label
                className={classes.my_label}
                variants={variantsLabel}
                animate={inputState}>
                {placeHolder}
            </motion.label>
            <input
                type={type}
                className={classes.input}
                onFocus={HandlerFocus}
                onBlur={HandlerBlur}
                onChange={HandlerChange}
            />
        </div>
    );
}