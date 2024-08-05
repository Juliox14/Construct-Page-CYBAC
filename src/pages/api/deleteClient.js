import mysql from 'mysql2/promise';

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
        const { id } = req.body;
        const response = await editClient(id);
        return res.status(202).json({ message: 'cliente borrado con éxito' });
    } catch (error) {
        console.error('Error al buscar el usuario en la base de datos:', error);
        return res.status(500).json({ error: 'Error interno del servidor' });
    }
}

const editClient = async (id) => {
    try {
        const [rows] = await db.query(
            'DELETE FROM clientes WHERE id_cliente = ?;',
            [id]
        );
    } catch (error) {
        console.error('No se pudo editar el cliente:', error);
        return { error: 'Error interno del servidor' };
    }
};
