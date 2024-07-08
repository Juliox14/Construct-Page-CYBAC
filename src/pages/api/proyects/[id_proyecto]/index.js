import db from "../../../../../database/config/db";

export default async function servicesHandler(req, res) {
    if (req.method === 'GET') {
        try {
            const { id_proyecto } = req.query;

            const [rows] = await db.execute('SELECT * FROM proyectos WHERE id_proyecto = ?', [id_proyecto]);

            res.status(200).json(rows);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal Server Error', error });
        }
    } else {
        res.status(405).json({ message: 'Método no permitido' });
    }
};
