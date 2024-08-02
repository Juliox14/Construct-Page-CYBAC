import db from "../../../database/config/db";

const redesSocialesHandler = async (req, res) => {
    switch (req.method) {
        case 'PUT':
            try {
                const redesSocialesData = req.body;
                let parseRedesSocialesData = [];
                for (let i = 0; i < redesSocialesData.length; i++) {
                    parseRedesSocialesData.push(parseData(redesSocialesData[i]));
                }

                for (let i = 0; i < parseRedesSocialesData.length; i++) {
                    await db.query(`UPDATE redes_sociales SET ${parseRedesSocialesData[i]} WHERE id_red_social = ${redesSocialesData[i].id_red_social}`);
                }
                res.status(200).json({ message: 'Red social actualizada correctamente' });
            } catch (error) {
                console.error(error);
                res.status(500).json({ message: 'Internal Server Error', error });
            }
            break;

        case 'POST':
            try {
                const redesSocialesData = req.body;
                for (let i = 0; i < redesSocialesData.length; i++) {
                    await db.execute(`INSERT INTO redes_sociales (red_social, enlace_red_social, icono_red_social) VALUES(? , ?, ?)`, [redesSocialesData[i].red_social, redesSocialesData[i].enlace_red_social, redesSocialesData[i].icono_red_social]);
                }
                res.status(200).json({ message: 'Red social añadida correctamente' });
            } catch (error) {
                console.error(error);
                res.status(500).json({ message: 'Internal Server Error', error });
            }
            break;

        case 'DELETE':
            try {
                console.log(req.body);
                const { id_red_social } = req.body;
                await db.execute(`DELETE FROM redes_sociales WHERE id_red_social = ?`, [id_red_social]);
                res.status(200).json({ message: 'Red social eliminada correctamente' });
            } catch (error) {
                console.error(error);
                res.status(500).json({ message: 'Internal Server Error', error });
            }
            break;
    }
}

const parseData = (data) => {
    let string = '';
    Object.keys(data).forEach((key, index) => {
        if (index !== 0) {
            string += `${key}=${typeof (data[key]) === true ? data[key] : `"${data[key]}"`}`;
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

export default redesSocialesHandler;