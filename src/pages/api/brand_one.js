import db from '../../../database/config/db';

export default async function brandOneHandler(req, res) {
    if (req.method === 'GET') {
        try {
            const [allData] = await db.execute(
                'SELECT * FROM mostrar_clientes'
            );
            res.status(200).json(allData);
        } catch (error) {
            res.status(500).json({ message: 'Internal Server Error', error });
        }
    } else {
        res.status(405).json({ message: 'Método no permitido' });
    }
}
