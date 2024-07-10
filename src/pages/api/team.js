import db from '../../../database/config/db';

export default async function teamHandler(req, res){
    if(req.method !== 'GET'){
        return res.status(405).json({message: 'Method not allowed'})
    }
    else{
        try{
            const [rows] = await db.query('SELECT * FROM empleados');
            return res.status(200).json(rows)
        }catch(error){
            console.error(error)
            return res.status(500).json({message: 'Internal server error'})
        }
    }
}
