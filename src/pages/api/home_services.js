import db from "../../../database/config/db";

export default async function handler(req, res){
    if(req.method !== 'GET'){
        return res.status(405).json({message: 'Method not allowed'})
    }
    else{
        try {
            const [rows] = await db.query('SELECT * FROM home_services;');
            res.status(200).json(rows);
        } catch (error) {
            res.status(500).json({ message: 'Error en el servidor', error });
        }
    }
}