import axios from 'axios';

export async function userAccess(values) {
    try {
        const formData = {
            username: values.username_unique,
            password: values.password_unique,
        }
        const response = await axios.post('/api/login', formData);
        console.log()
        if(response.status === 202){
            return {data: response.data.message, status: response.status};
        }
        if(response.status === 201){
            return {data: response.data.message, status: response.status}
        }
        else{
            return 'Error en el servidor, inténtelo de nuevo más tarde.';
        }
    } catch (error) {
        console.error(error)
        return 'Este nombre de usuario no existe, intente con otro nombre de usuario.';
    }
}