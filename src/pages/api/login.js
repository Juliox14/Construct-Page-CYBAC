import mysql from 'mysql2/promise';
import { RESPONSE_LIMIT_DEFAULT } from 'next/dist/server/api-utils';

const db = mysql.createPool({
    host: process.env.MYSQL_DATABASE_HOST,
    user: process.env.MYSQL_DATABASE_USER,
    password: process.env.MYSQL_DATABASE_PASSWORD,
    database: process.env.MYSQL_DATABASE_NAME,
    multipleStatements: true,
});

export default async function registerHandler(req, res) {
    if (req.method !== 'POST') {
        
        return res.status(405).json({ message: 'Método no permitido' });
    }
    try {
        const { username, password } = req.body;
        const result = await findUser(username, password);
        //TODO: Lógica para el manejo de valores que pueda tomar result y devolver json's según los mismos.

    } catch (error) {
        console.error('Error al buscar el usuario en la base de datos:', error);
        return res.status(500).json({ error: 'Error interno del servidor' });
    }
}

const findUser = async (username, password) => {
    try {
        const [rows] = await db.query('SELECT 1 FROM admin WHERE username = ?; SELECT password_hashed FROM admin WHERE username = ?;', [username, username]);
        console.log(rows[1][0].password_hashed)
        const exists = rows[0].length>0 ? true: false;
        const truePassword = rows[1][0].password_hashed;
        if (exists){
            if(password === truePassword){
                return true;
            }
            else{
                return res.status(201).json({ message: 'Contraseña incorrecta'});
            }
        }
        else{
            return res.status(201).json({ message: 'Usuario no encontrado'});
        }
    } catch (error) {
        console.error('Error al validar usuario:', error);
        return { error: 'Error interno del servidor' };
    }
};