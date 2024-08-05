import db from '../../../database/config/db';

export default async function handler(req, res) {
    switch (req.method) {
        case 'GET':
            try {
                const [rows] = await db.query('SELECT * FROM home_services;');
                res.status(200).json(rows);
            } catch (error) {
                res.status(500).json({
                    message: 'Error en el servidor',
                    error,
                });
            }
            break;

        case 'PUT':
            try {
                const home_services = req.body;

                await db.execute(
                    `
                    UPDATE home_services 
                    SET 
                        titulo_breadcrumb = ?, 
                        subtitulo_breadcrumb = ?, 
                        descripcion_breadcrumb = ?, 
                        titulo_about = ?, 
                        subtitulo_about = ?, 
                        imagen_url_about = ?, 
                        descripcion_about = ?, 
                        bullets_about = ?
                    WHERE 
                        id_home_service = ?
                `,
                    [
                        home_services.titulo_breadcrumb,
                        home_services.subtitulo_breadcrumb,
                        home_services.descripcion_breadcrumb,
                        home_services.titulo_about,
                        home_services.subtitulo_about,
                        home_services.imagen_url_about,
                        home_services.descripcion_about,
                        home_services.bullets_about,
                        home_services.id_home_service,
                    ]
                );

                res.status(200).json({
                    message: 'Página actualizada correctamente',
                });
            } catch (error) {
                console.error(error);
                res.status(500).json({
                    message: 'Internal Server Error',
                    error,
                });
            }
            break;
    }
}
