import db from "../../../database/config/db"

//Hola api home_clients te quiero mucho <3
export default async function clientsHandler(req, res) {
    if (req.method === 'GET') {
        try {
            const [clientes_api] = await db.execute('SELECT * FROM clientes');
            console.log(clientes_api)
            const [data_breadcrumb] = await db.execute('SELECT * FROM home_clients');
            const allData = [clientes_api, data_breadcrumb];
            res.status(200).json(allData);
        } catch (error) {
            res.status(500).json({ message: 'Internal Server Error', error });
        }
    }else if(req.method === 'POST'){
        
    }
    else {
        res.status(405).json({ message: 'Método no permitido' });
    }
};