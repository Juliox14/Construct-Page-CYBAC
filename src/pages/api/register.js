import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs"
import { sql } from '@vercel/postgres';
import { db } from '@vercel/postgres';

export default async function registernHandler(req, register) {
    if (req.method === 'POST') {
        const { nombre, apellido, email, password } = req.body;    
        const hashedPassword = await bcrypt.hash(password, 10);

        const client = await db.connect();
        try {
            // Insertar datos en la base de datos
            const result = await insertCliente(nombre, apellido, email, hashedPassword, res);

            if (result.insertar_cliente === 'Cliente registrado exitosamente'){
                res.status(201).json(result);
            }
            else{
                res.status(401).json(result)
            }
            
        } catch (error) {
            res.status(500).json({ error: 'Error interno del servidor' });
        }finally{
            client.release();
        }
    } else {
        res.status(400).json({ error: 'Método no permitido' });
    }
};

const insertCliente = async (nombre, apellido, email, hashedPassword, res) => {
    try {
        const result = await sql`SELECT * FROM insertar_cliente(${nombre}, ${apellido}, ${email}, ${hashedPassword})`;

        // Verificar si el resultado es un array con al menos un elemento
        if (Array.isArray(result.rows) && result.rows.length > 0 && result.rows[0].insertar_cliente) {
            return result.rows[0]; // Devolver el primer elemento del array
        } else {
            throw new Error('Error al ejecutar el procedimiento almacenado');
        }
    } catch (error) {
            console.error('Error al insertar cliente:', error);
            return { error: 'Error interno del servidor' }; // Devolver un objeto con el mensaje de error
    }
};
