import db from '../../../database/config/db';

export default async function handler(req, res) {
    switch (req.method) {
        case 'GET':
            try {
                const [rows] = await db.query('SELECT * FROM proyectos;');
                res.status(200).json(rows);
            } catch (error) {
                console.error('Error en GET /api/proyectos:', error);
                res.status(500).json({
                    message: 'Error en el servidor',
                    error,
                });
            }
            break;

        case 'POST':
            try {
                const proyecto = convertKeysToSnake(req.body);
                const proyectoSetString = constructSetString(proyecto);
                const [result] = await db.execute(
                    `INSERT INTO proyectos SET ${proyectoSetString.setString};`,
                    [...proyectoSetString.values]
                );
                res.status(200).json({
                    message: 'Proyecto creado',
                    id: result.insertId,
                });
            } catch (error) {
                console.error('Error en POST /api/proyectos:', error);
                res.status(500).json({
                    message: 'Error en el servidor',
                    error,
                });
            }
            break;
        default:
            res.status(405).json({ message: 'Método no permitido' });
            break;
    }
}

const constructSetString = (data) => {
    const keys = Object.keys(data);
    const setString = keys.map((key) => `${key} = ?`).join(', ');
    const values = keys.map((key) =>
        data[key] === undefined ? null : data[key]
    );
    return { setString, values };
};

const camelToSnake = (str) =>
    str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);

const convertKeysToSnake = (obj) =>
    Object.keys(obj).reduce((acc, key) => {
        acc[camelToSnake(key)] = obj[key];
        return acc;
    }, {});