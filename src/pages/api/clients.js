import db from "../../../database/config/db"

//Hola api clientes te quiero mucho <3
export default async function clientsHandler(req, res) {
    if (req.method === 'GET') {
        try {
            const [clientes_api] = await db.execute('SELECT * FROM mostrar_clientes');
            res.status(200).json(clientes_api);
        } catch (error) {z
            res.status(500).json({ message: 'Internal Server Error', error });
        }
    } else {
        res.status(405).json({ message: 'Método no permitido' });
    }
};
