import db from '../../../database/config/db';

const handlerAllServices = async (req, res) => {
    if (req.method === 'GET') {
        try {
            const [rows] = await db.query('SELECT * FROM servicios;');
            res.status(200).json(rows);
        } catch (error) {
            res.status(500).json({ message: 'Error en el servidor', error });
        }
    }
}

export default handlerAllServices;