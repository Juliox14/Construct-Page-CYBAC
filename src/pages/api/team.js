import db from '../../../database/config/db';

export default async function teamHandler(req, res){
    switch(req.method){
        case 'GET':
            try{
                const [rows] = await db.query('SELECT * FROM empleados');
                return res.status(200).json(rows)
            }catch(error){
                console.error(error)
                return res.status(500).json({message: 'Internal server error'})
            }
        case 'POST':
            const index = req.body;
            console.log(index);

            index.map(async(item) => {
                const sql = "DELETE FROM empleados WHERE id_empleado = ?";
                console.log(item);
                try{
                    await db.execute(sql, [item]);
                }catch(error){
                    res.status(500).json({ message: 'Internal Server Error', error });
                    console.log(error);
                }
            });
            res.status(200).json({message: 'Petición DELETE'});
            break;
        default:
            return res.status(405).json({message: 'Method not allowed'})
    }
}
