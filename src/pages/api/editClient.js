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
        const {
            id,
            nombre,
            clasificacion,
            ruta_logo,
            correo,
            telefono,
            alt,
            visualizarLista,
            visualizarSlider,
        } = req.body;
        const response = await editClient(
            id,
            nombre,
            clasificacion,
            ruta_logo,
            correo,
            telefono,
            alt,
            visualizarLista,
            visualizarSlider
        );
        return res.status(202).json({ message: 'cliente editado con éxito' });
    } catch (error) {
        console.error('Error al buscar el usuario en la base de datos:', error);
        return res.status(500).json({ error: 'Error interno del servidor' });
    }
}

const editClient = async (
    id,
    nombre,
    clasificacion,
    ruta_logo,
    correo,
    telefono,
    alt,
    visualizarLista,
    visualizarSlider
) => {
    try {
        const [rows] = await db.query(
            'UPDATE clientes SET nombre = ?, clasificacion = ?,  ruta_logo = ?,  correo = ?,  telefono = ?, alt = ?, visualizarLista = ?, visualizarSlider = ? WHERE id_cliente = ?;',
            [
                nombre,
                clasificacion,
                ruta_logo,
                correo,
                telefono,
                alt,
                visualizarLista,
                visualizarSlider,
                id,
            ]
        );
    } catch (error) {
        console.error('No se pudo editar el cliente:', error);
        return { error: 'Error interno del servidor' };
    }
};
