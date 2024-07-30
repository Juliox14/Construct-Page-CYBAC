import db from "../../../../../database/config/db";

export default async function servicesHandler(req, res) {
    switch (req.method) {
        case 'GET':
            try {
                const { id_proyecto } = req.query;

                const [rows] = await db.execute('SELECT * FROM proyectos WHERE id_proyecto = ?', [id_proyecto]);

                res.status(200).json(rows);
            } catch (error) {
                console.error(error);
                res.status(500).json({ message: 'Internal Server Error', error });
            }
            break;

        case 'PUT':
            try {
                const { id_proyecto } = req.query;
                const { cliente, ubicacion, estado, tipo_obra, importe, ruta_imagen, fecha_inicio, fecha_final, nombre_proyecto, descripcion_proyecto, isDestacado } = req.body;
                await db.execute('UPDATE proyectos SET cliente = ?, ubicacion = ?, estado = ?, tipo_obra = ?, importe = ?, ruta_imagen = ?, fecha_inicio = ?, fecha_final = ?, nombre_proyecto = ?, descripcion_proyecto = ?, isDestacado = ? WHERE id_proyecto = ?', [cliente, ubicacion, estado, tipo_obra, importe, ruta_imagen, fecha_inicio, fecha_final, nombre_proyecto, descripcion_proyecto, isDestacado, id_proyecto]);
                
                res.status(200).json({ message: 'Proyecto actualizado correctamente' });
            } catch (error) {
                console.error(error);
                res.status(500).json({ message: 'Internal Server Error', error });
            }
            break;

        default:
            res.status(405).json({ message: 'Método no permitido' });
            break;
    }
};
