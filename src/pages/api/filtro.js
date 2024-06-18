import db from '../../../database/config/db';

export default async function filtro(res, req) {

    switch(req.method){
        case 'GET':
            try {
                const response = await getFunction(res, req);
                res.status(200).json(response);
            } catch (error) {
                res.status(500).json({ message: 'Error del servidor', error });
            }
            break;
        default:
            res.status(405).json({ message: 'Método no permitido' });
            break;
    }
}

const getFunction = async(res, req) =>{
    const { param } = req.body;
    try{
        const response = await db.query(`CALL filtro(?)`, [param]);
        return response[0];
    }catch(error){
        res.status(500).json({ message: 'Error al hacer la consulta', error });
    }  
}