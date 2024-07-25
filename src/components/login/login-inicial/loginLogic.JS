import axios from 'axios';

export function validateUser(username) {
    //TODO: Verificar si el usuario existe en la base de datos
    if(/*No existe el usuario en la base de datos)*/){
        return 'Usuario inexistente, pruebe con otro nombre de usuario';
    }
    else{//El usuario sí existe en la base de datos
        return true;        
    }
}

export function validatePassword(password, confirmPassword) {
    //TODO: Verificar si el usuario tiene esa contraseña
    if(/*La contraseña relacionada al usuario no existe en la base de datos)*/){
        return 'Contraseña incorrecta';
    }
    else{//La contraseña sí coincide en la base de datos
        return true;        
    }
}

export async function userAccess(values) {
    try {
        var response = '';
        if (validateUser(values.username) != true) {
            return validateUser(values.username);
        }
        if (validatePassword(values.password,values.confirmPassword) != true) {
            return validatePassword(values.password,values.confirmPassword)
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
        return 'Usuario no disponible, intente con otro nombre de usuario.';
    }
}