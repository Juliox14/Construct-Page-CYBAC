import axios from 'axios';

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
        else if (password.length < 8) {
            return 'La contraseña debe tener al menos 8 caracteres';
        }
        else if (!containsSpecialChar) {
            return `La contraseña debe tener al menos un carácter especial (${specialChars})`;
        }
    }
    return true;
}

export async function guardarDatos(values) {
    try {
        var response = '';
        if (validateUser(values.username) != true) {
            response = validateUser(values.username);
            return response
        }
        if (validatePassword(values.password,values.confirmPassword) != true) {
            response = validatePassword(values.password,values.confirmPassword)
            return response
        }
        const formData = {
            username:values.username,
            password:values.password,
        }
        response = await axios.post('/api/register', formData);
        if(response.status === 409){
            return response.data.message;
        }
        return true;
    } catch (error) {
        console.error(error)
        return 'Salio mal';
    }
}