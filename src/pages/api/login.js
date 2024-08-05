import mysql from 'mysql2/promise';
import { SignJWT } from 'jose';
import bcrypt from 'bcrypt';
import { serialize } from 'cookie';

const db = mysql.createPool({
    host: process.env.MYSQL_DATABASE_HOST,
    user: process.env.MYSQL_DATABASE_USER,
    password: process.env.MYSQL_DATABASE_PASSWORD,
    database: process.env.MYSQL_DATABASE_NAME,
    multipleStatements: true,
});

export async function createToken(username, password) {
    const payload = {
        username,
        password,
    };
    //TODO: Extraer la llave del token de una variable de entorno
    const secret = new TextEncoder().encode('JcGnCa-18-13-08');
    try {
        const tokenAdmin = await new SignJWT(payload)
            .setProtectedHeader({ alg: 'HS256' })
            .setIssuedAt()
            .setExpirationTime('5h')
            .sign(secret);
        return tokenAdmin;
    } catch (error) {
        console.error('Error al crear el JWT:', error);
        return error;
    }
}

export function createCookie(token) {
    const serializedCookie = serialize('auth', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 60 * 60 * 5,
        path: '/',
    });
    return serializedCookie;
}

export default async function registerHandler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Método no permitido' });
    }
    try {
        const { username, password } = req.body;
        const response = await findUser(username, password);
        // console.log(response)
        if (response.message === 'Usuario no encontrado') {
            return res.status(202).json(response);
        }
        if (response.message === 'Contraseña incorrecta') {
            return res.status(202).json(response);
        }

        if (response === true) {
            const result = await createToken(username, password);
            const cookie = createCookie(result);
            res.setHeader('Set-Cookie', cookie);
            return res
                .status(201)
                .json({ message: 'Usuario autenticado correctamente' });
        }
        if (response.error) {
            return res.status(400).json(response.error);
        }
    } catch (error) {
        console.error('Error al buscar el usuario en la base de datos:', error);
        return res.status(500).json({ error: 'Error interno del servidor' });
    }
}

const findUser = async (username, password) => {
    try {
        const [rows] = await db.query(
            'SELECT 1 FROM admin WHERE username = ?; SELECT password_hashed FROM admin WHERE username = ?;',
            [username, username]
        );
        const exists = rows[0].length > 0 ? true : false;
        if (exists) {
            const truePassword = rows[1][0].password_hashed;
            const verifyPassword = await bcrypt.compare(password, truePassword);
            if (verifyPassword) {
                return true;
            } else {
                return { message: 'Contraseña incorrecta' };
            }
        } else {
            return { message: 'Usuario no encontrado' };
        }
    } catch (error) {
        console.error('Error al validar usuario:', error);
        return { error: 'Error interno del servidor' };
    }
};
