import { styled } from '@mui/system';
import classes from './inputStyle.module.css';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ReactInput({
    name,
    isRequired,
    type = 'text',
    placeHolder = 'Lorem Ipsum',
    ancho = '400px',
    callBackOnInputChange,
    value = '',
}) {
    // Estilos reactivos
    const [inputState, setInputState] = useState(
        value ? 'relleno' : 'desactivo'
    );
    const [inputValue, setInputValue] = useState(value);
    const anchoDiv = { width: ancho };

    // Cuando cambie el valor del input se introduce dicho valor en la variable de estado 'inputValue'
    const handleChange = (event) => {
        const value = event.target.value;
        setInputValue(value);
        if (typeof callBackOnInputChange === 'function') {
            callBackOnInputChange(name, value);
        } else {
            console.error('callBackOnInputChange is not a function');
        }
    };

    // Cuando esté enfocado el input, se coloca el label en su posición original (dentro del input)
    const handleFocus = () => {
        setInputState('activo');
    };

    // Cuando se desenfoque el input
    const handleBlur = () => {
        inputValue === ''
            ? setInputState('desactivo')
            : setInputState('relleno');
    };

    // VariantesLabel
    const variantsLabel = {
        activo: {
            top: 6,
            left: '10px',
            color: '#012730',
            fontSize: '14px',
            fontWeight: '500',
            paddingInline: '3px',
        },
        relleno: {
            top: 6,
            left: '10px',
            color: '#8b8989',
            fontSize: '14px',
            paddingInline: '3px',
        },
        desactivo: { top: 25, color: '#8b8989' },
    };

    return (
        <div className={classes.div} style={anchoDiv}>
            <motion.label
                className={classes.my_label}
                variants={variantsLabel}
                animate={inputState}
            >
                {placeHolder}
            </motion.label>
            <input
                name={name}
                type={type}
                value={inputValue}
                className={classes.input}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleChange}
                required={isRequired}
            />
        </div>
    );
}
