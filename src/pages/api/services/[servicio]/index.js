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
            console.error(error);
            res.status(500).json({ message: 'Internal Server Error', error });
        }
    } else {
        res.status(405).json({ message: 'Método no permitido' });
    }
};
