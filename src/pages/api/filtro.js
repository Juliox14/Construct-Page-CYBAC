import db from '../../../database/config/db';

export default async function filtro(req, res) {

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
            console.log(" CHUPAAAAAAS : ", req.method)
            res.status(405).json({ message: 'Método no permitido' });
            break;
    }
}

const getFunction = async(req, res) =>{
    try{
        const { param } = req.body;
        const { estado, precioInicial, precioFinal } = param;
        console.log("ESTADO: ", estado, "PRECIO INICIAL: ", precioInicial, "PRECIO FINAL: ", precioFinal);
        const response = await db.query(`CALL filtro(?, ?, ?)`, [estado, precioInicial, precioFinal]);
        return response;
    }catch(error){
        res.status(500).json({ message: 'Error al hacer la consulta', error });
    }  
}