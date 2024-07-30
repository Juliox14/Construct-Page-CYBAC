import db from '../../../database/config/db';

export default async function aboutHandler(req, res){
    switch(req.method){
        case 'GET':
            try{
                const [rows] = await db.query('SELECT * FROM nosotros');
                res.status(200).json(rows);
            }catch(error){
                console.error(error)
                return res.status(500).json({message: 'Internal server error'})
            }
            break;

        case 'PUT':
            try{
                const data = req.body;

                await db.query(`UPDATE nosotros SET titulo_breadcrumb= "${data.titulo_breadcrumb}",
                    subtitulo_breadcrumb= "${data.subtitulo_breadcrumb}",
                    descripcion_breadcrumb= "${data.descripcion_breadcrumb}",
                    titulo_nosotros= "${data.titulo_nosotros}",
                    subtitulo_nosotros= "${data.subtitulo_nosotros}",
                    descripcion_nosotros= "${data.descripcion_nosotros}",
                    anios_experiencia= ${data.anios_experiencia},
                    titulo2_nosotros= "${data.titulo2_nosotros}",
                    descripcion2_nosotros= "${data.descripcion2_nosotros}",
                    mision= "${data.mision}",
                    vision= "${data.vision}",
                    valores= "${data.valores}",
                    clientes= ${data.clientes},
                    proyectos= ${data.proyectos},
                    titulo_equipo= "${data.titulo_equipo}",
                    descripcion_equipo= "${data.descripcion_equipo}" WHERE id_nosotros = ${data.id_nosotros}`);

                res.status(200).json({message: 'About updated successfully'});
            }catch(error){
                return res.status(500).json({message: 'Internal server error'})
            }
            break;
        default:
            return res.status(405).json({message: 'Method not allowed'})
    }
}

const parseData = (data) => {
    let string = '';
    Object.keys(data).forEach((key, index) => {
        const value = data[key];
        if (typeof value === 'number') {
            string += `${key}=${value}`;
        } else {
            string += `${key}="${value}"`;
        }
        if (index !== Object.keys(data).length - 1) {
            string += ', ';
        }
    });
    return string;
}