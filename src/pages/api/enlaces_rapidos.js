import db from '../../../database/config/db';

const enlacesRapidosFooterHandler = async (req, res) => {
    switch (req.method) {
        case 'PUT':
            try {
                const enlacesRapidosData = req.body;
                let parseEnlacesRapidosData = [];
                for (let i = 0; i < enlacesRapidosData.length; i++) {
                    parseEnlacesRapidosData.push(
                        parseData(enlacesRapidosData[i])
                    );
                }

                for (let i = 0; i < parseEnlacesRapidosData.length; i++) {
                    await db.query(
                        `UPDATE enlaces_rapidos SET ${parseEnlacesRapidosData[i]} WHERE id_enlace = ${enlacesRapidosData[i].id_enlace}`
                    );
                }
                res.status(200).json({
                    message: 'Enlace rápido actualizado correctamente',
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
};

const parseData = (data) => {
    let string = '';
    Object.keys(data).forEach((key, index) => {
        if (index !== 0) {
            string += `${key}=${
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

export default enlacesRapidosFooterHandler;
