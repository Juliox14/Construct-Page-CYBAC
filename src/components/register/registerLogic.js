import { useState } from 'react';

export function validateEmail(correo) {
    // Expresión regular para validar un correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Comprobar si el correo cumple con la expresión regular
    if (emailRegex.test(email)) {
        return true; // El correo es válido
    } else {
        return false; // El correo no es válido
    }
}

export function validateUser(username) {
    // Expresión regular para validar un que el usuario no tenga caracteres especiales y empiece con mayúscula
    const regex = /^[A-Z][A-Za-z]*$/;
    // Comprobar si el usuario cumple con la expresión regular
    if (regex.test(username)) {
        return true; // El usuario es válido
    } else {
        return 'El usuario no puede contener caracteres especiales y debe empezar con mayúscula'; // El usuario no es válido
    }
}

export function validatePassword(password, confirmPassword) {
    const specialChars = /[!@#$%^&*(),.?":{}|<>]/;
    const containsSpecialChar = [...password].find(char => specialChars.test(char));
    if (confirmPassword) {
        if (password != confirmPassword) {
            return 'Las contraseñas deben ser iguales';
        }
    }
    else if (password.length < 8) {
        return 'La contraseña debe tener al menos 8 caracteres';
    }
    else if (!containsSpecialChar) {
        return `La contraseña debe tener al menos un carácter especial (${specialChars})`;
    }
    return true;
}

export function reinicioRegister() {
    setContenidoInput({ ...contenidoInput, nombre: '', apellido: '', email: '', password: '', confirmPassword: '' })
    if (formRefRegister.current) {
        formRefRegister.current.reset();
    }
}

export async function guardarDatos(values) {
    if (validateUser(values.username) != true) {
        console.log(validateUser(values.username))
        return validateUser(values.username)
    }
    if (validatePassword(values.password,values.confirmPassword) != true) {
        console.log(validatePassword(values.password,values.confirmPassword))
        return validatePassword(values.password,values.confirmPassword)
    }

    try {
        const response = await axios.post('/api/auth/register', formData);
        console.log(response.data);
        setRegisterSucces(true);
        setTimeout(() => {
            setRegisterSucces(false);
        }, 6000);
        setCambiarForm(!cambiaSrForm);
    } catch (error) {
        setRegisterError(true);
        setTimeout(() => {
            setRegisterError(false);
        }, 6000);
    }
}
export default guardarDatos;