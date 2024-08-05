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
                const proyecto = constructSetString(req.body);
                const [result] = await db.execute(
                    `INSERT INTO proyectos SET ${proyecto.setString};`,
                    [...proyecto.values]
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
