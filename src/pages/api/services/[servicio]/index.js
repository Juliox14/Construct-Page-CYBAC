import { object } from "prop-types";
import db from "../../../../../database/config/db";

export default async function servicesHandler(req, res) {
    if (req.method === 'GET') {
        try {
            const { servicio } = req.query;

            const [dataServices] = await db.execute('SELECT * FROM servicios WHERE titulo = ?', [servicio]);
            const [dataSubservices] = await db.execute('SELECT id_subservicio, titulo_subservicio, descripcion_subservicio FROM get_servicio WHERE titulo_servicio = ?', [servicio]);

            const allData = {
                servicios: dataServices[0],
                get_servicio: dataSubservices
            };

            res.status(200).json(allData);
        } catch (error) {
            res.status(500).json({ message: 'Internal Server Error', error });
        }
    }else if (req.method === 'PUT') {
        try {
            const servicioData = req.body;
            const {id_servicio, ...rest} = servicioData;
            const parseServicioData = parseData(rest);
            await db.execute(`UPDATE servicios SET ${parseServicioData} WHERE id_servicio = "${id_servicio}"`);
            res.status(200).json({ message: 'Servicio actualizado correctamente' });
        } catch (error) {
            res.status(500).json({ message: 'Internal Server Error', error });
        }
    }else if (req.method === 'DELETE') {
        try {
            const { servicio } = req.query;
            await db.execute('DELETE FROM servicios WHERE id_servicio = ?', [servicio]);
            res.status(200).json({ message: 'Servicio eliminado correctamente' });
        } catch (error) {
            res.status(500).json({ message: 'Internal Server Error', error });
        }
    }
    else {
        res.status(405).json({ message: 'Método no permitido' });
    }
};


const parseData = (data) => {
    let string = '';
    Object.keys(data).forEach((key, index) => {
        string += `${key}="${data[key]}"`;
        if (index !== Object.keys(data).length - 1) {
            string += ', ';
        } else {
            string += '';
        }
    });
    return string;
}