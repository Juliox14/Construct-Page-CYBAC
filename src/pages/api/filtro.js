import db from '../../../database/config/db';

export default async function filtro(req, res) {

    switch(req.method){
        case 'GET':
            try {
                const response = await getFunction(req, res);
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

const getFunction = async(req, res) =>{
    try{
        const { estado, precioMenor, precioMayor } = req.query;
        const estadoNew = estado ? estado : null;
        const response = (await db.query(`CALL filtro(?, ?, ?)`, [estadoNew, precioMenor, precioMayor]));
        return response;
    }catch(error){
        res.status(500).json({ message: 'Error al hacer la consulta', error });
    }  
}