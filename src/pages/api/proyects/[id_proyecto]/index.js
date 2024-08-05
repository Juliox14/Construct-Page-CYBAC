import db from '../../../../../database/config/db';

export default async function servicesHandler(req, res) {
    switch (req.method) {
        case 'GET':
            try {
                const { id_proyecto } = req.query;

                const [rows] = await db.execute(
                    'SELECT * FROM proyectos WHERE id_proyecto = ?',
                    [id_proyecto]
                );

                res.status(200).json(rows);
            } catch (error) {
                console.error(error);
                res.status(500).json({
                    message: 'Internal Server Error',
                    error,
                });
            }
            break;

        case 'PUT':
            try {
                const { id_proyecto } = req.query;
                const proyecto = constructSetString(req.body);
                const [result] = await db.execute(
                    `UPDATE proyectos SET ${proyecto.setString} WHERE id_proyecto = ${id_proyecto};`,
                    [...proyecto.values]
                );
                res.status(200).json({
                    message: 'Proyecto actualizado correctamente',
                });
            } catch (error) {
                console.error(error);
                res.status(500).json({
                    message: 'Internal Server Error',
                    error,
                });
            }
            break;
        case 'DELETE':
            try {
                const { id_proyecto } = req.query;

                await db.execute(
                    'DELETE FROM proyectos WHERE id_proyecto = ?',
                    [id_proyecto]
                );

                res.status(200).json({
                    message: 'Proyecto eliminado correctamente',
                });
            } catch (error) {
                console.error(error);
                res.status(500).json({
                    message: 'Internal Server Error',
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
