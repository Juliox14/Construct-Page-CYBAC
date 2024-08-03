import db from '../../../database/config/db';
export default async function handler(req, res) {
    switch (req.method) {
        case 'GET':
            try {
                const [rows] = await db.query('SELECT * FROM contacto');
                res.status(200).json(rows[0]);
            } catch (error) {
                console.error(error);
                res.status(500).json({ message: 'Internal server error' });
            }
            break;
        case 'PUT':
            try {
                const contacto = req.body;
                const parseContacto = parseData(contacto);
                await db.query(`UPDATE contacto SET ${parseContacto} WHERE id_contacto = ${contacto.id_contacto}`);
                res.status(200).json({ message: 'Información actualizada con éxito' });
            } catch (error) {
                console.error(error);
                res.status(500).json({ message: 'Internal server error' });
            }
            break;
        default:
            res.status(405).json({ message: 'Method not allowed' });
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