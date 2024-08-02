import db from '../../../database/config/db';

export default async function handler(req, res) {
    switch (req.method) {
        case 'GET':
            try {
                const [footer] = await db.query('SELECT * FROM footer');
                const [enlaces_rapidos] = await db.query('SELECT * FROM enlaces_rapidos');
                const [redes_sociales] = await db.query('SELECT * FROM redes_sociales');

                const footerCompleto = {
                    footer: footer[0],
                    enlaces_rapidos: enlaces_rapidos,
                    redes_sociales: redes_sociales
                }
                return res.status(200).json(footerCompleto);
            } catch (error) {
                return res.status(500).json({ message: 'Error en el servidor' });
            }
            break;

        case 'PUT':
            try {
                const footer  = req.body;
                console.log(footer);
                const parseFooter = parseData(footer);  
                console.log(parseFooter);
                await db.query(`UPDATE footer SET ${parseFooter} WHERE id_footer = ${footer.id_footer}`);
                return res.status(200).json({ message: 'Footer actualizado correctamente' });
            } catch (error) {
                return res.status(500).json({ message: 'Error en el servidor' });
            }
            break;

        default:
            res.status(405).json({ message: 'Método no permitido' });
            break;



    }
}

const parseData = (data) => {
    let string = '';
    Object.keys(data).forEach((key, index) => {
        if (index !== 0) {
            string += `${key}= ${typeof (data[key]) === true ? data[key] : `"${data[key]}"`}`;
            if (index !== Object.keys(data).length - 1) {
                string += ', ';
            }
            else {
                string += '';
            }
        }
    });
    return string;
}

