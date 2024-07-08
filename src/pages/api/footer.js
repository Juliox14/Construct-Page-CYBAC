import db from '../../../database/config/db';

export default async function handler(req, res) {
    if(req.method !== 'GET'){
        return res.status(405).json({message: 'Método no permitido'});
    }
    else{
        try{
            const [footer] = await db.query('SELECT * FROM footer');
            const [enlaces_rapidos] = await db.query('SELECT * FROM enlaces_rapidos');
            const [redes_sociales] = await db.query('SELECT * FROM redes_sociales');

            const footerCompleto = {
                footer: footer[0],
                enlaces_rapidos: enlaces_rapidos,
                redes_sociales: redes_sociales
            }
            return res.status(200).json(footerCompleto);
        }catch(error){
            return res.status(500).json({message: 'Error en el servidor'});
        }
    }
}