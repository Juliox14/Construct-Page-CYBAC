import db from '../../../database/config/db';

const newServiceHandler = async (req, res) => {
    switch (req.method) {
        case 'POST':
            try {
                const servicioData = req.body;
                const [rows] = await db.execute(
                    `CALL InsertServicio(?, ?, ?, ?, ?, ?, ?)`,
                    [
                        servicioData.titulo_breadcrumb,
                        servicioData.subtitulo_breadcrumb,
                        servicioData.descripcion_breadcrumb,
                        servicioData.titulo,
                        servicioData.ruta_imagen,
                        servicioData.descripcion_breve,
                        servicioData.descripcion,
                    ]
                );
                res.status(200).json(rows[0][0]);
            } catch (error) {
                console.error(error);
                res.status(500).json({
                    message: 'Internal Server Error',
                    error,
                });
            }
            break;

        default:
            res.status(405).json({ message: 'Método no permitido' });
    }
};

export default newServiceHandler;
