import { hash } from 'bcrypt';
import db from '../../../database/config/db';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Método no permitido' });
    }

    const { username, password } = req.body;

    try {
  
        const hashedPassword = await hash(password, 10); 

        const [result] = await db.execute(
            'INSERT INTO admin (username, password_hashed) VALUES (?, ?)',
            [username, hashedPassword]
        );

        res.status(201).json({ message: 'Admin creado exitosamente', adminId: result.insertId });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error en el servidor', error });
    }
}
