import db from '../../../database/config/db';

const subServicesHandler = async (req, res) => {
    switch (req.method) {
        case 'PUT':
            try {
                const subServiciosData = req.body;
                let parseSubserviciosData = [];
                for (let i = 0; i < subServiciosData.length; i++) {
                    parseSubserviciosData.push(parseData(subServiciosData[i]));
                }

                for (let i = 0; i < parseSubserviciosData.length; i++) {
                    await db.execute(
                        `UPDATE subservicios SET ${parseSubserviciosData[i]} WHERE id_subservicio = ${subServiciosData[i].id_subservicio}`
                    );
                }
                res.status(200).json({
                    message: 'Subservicio actualizado correctamente',
                });
            } catch (error) {
                console.error(error);
                res.status(500).json({
                    message: 'Internal Server Error',
                    error,
                });
            }
            break;

        case 'POST':
            try {
                const subServiciosData = req.body;
                for (let i = 0; i < subServiciosData.length; i++) {
                    await db.execute(
                        `INSERT INTO subservicios (id_servicio, titulo_subservicio, descripcion_subservicio) VALUES(? , ?, ?)`,
                        [
                            subServiciosData[i].id_servicio,
                            subServiciosData[i].titulo_subservicio,
                            subServiciosData[i].descripcion_subservicio,
                        ]
                    );
                }
                res.status(200).json({
                    message: 'Subservicio añadido correctamente',
                });
            } catch (error) {
                console.error(error);
                res.status(500).json({
                    message: 'Internal Server Error',
                    error,
                });
            }
            break;

        case 'DELETE':
            try {
                const { id_subservicio } = req.body;
                await db.execute(
                    `DELETE FROM subservicios WHERE id_subservicio = ?`,
                    [id_subservicio]
                );
                res.status(200).json({
                    message: 'Subservicio eliminado correctamente',
                });
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
            break;
    }
};

export default subServicesHandler;

const parseData = (data) => {
    let string = '';
    Object.keys(data).forEach((key, index) => {
        if (index !== 0) {
            string += `${key}= ${
                typeof data[key] === true ? data[key] : `"${data[key]}"`
            }`;
            if (index !== Object.keys(data).length - 1) {
                string += ', ';
            } else {
                string += '';
            }
        }
    });
    return string;
};
