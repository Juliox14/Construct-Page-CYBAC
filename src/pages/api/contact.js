import db from '../../../database/config/db';

export default async function handler(req, res) {
    if(req.method!=='GET'){
        return res.status(405).json({message: 'Method not allowed'});
    }
    else{
        try{
            const [rows] = await db.query('SELECT * FROM contacto');
            res.status(200).json(rows[0]);
        }catch(error){
            console.error(error);
            res.status(500).json({message: 'Internal server error'});
        }
    }
}