import db from '../../../database/config/db';

// Hola Api Home te quiero mucho <3
export default async function HomeHandler(req, res) {
    switch (req.method) {
        case 'GET':
            try {
                const [data_hero] = await db.execute('SELECT * FROM HeroSlide');
                const [data_LatestProject_projects] = await db.execute(
                    'SELECT * FROM proyectos'
                );
                const allData = [data_hero, data_LatestProject_projects];
                res.status(200).json(allData);
            } catch (error) {
                res.status(500).json({
                    message: 'Internal Server Error',
                    error,
                });
            }
            break;

        case 'POST':
            const index = req.body;
            const sql = 'DELETE FROM HeroSlide WHERE id = ?';

            try {
                await db.execute(sql, [index.deleteState]);
            } catch (error) {
                res.status(500).json({
                    message: 'Internal Server Error',
                    error,
                });
            }
            res.status(200).json({ message: 'Petición DELETE' });
            break;

        case 'PUT':
            try {
                const [data, newData] = req.body;
                console.log(data);
                const depuredNewData = newData.map((item) => {
                    const { id, ...rest } = item;
                    return rest;
                });

                if (depuredNewData.length !== 0) {
                    depuredNewData.map(async (item) => {
                        const { setString, values } = constructSetString(item);
                        console.log(setString);
                        console.log(values);
                        const sql = `INSERT INTO HeroSlide SET ${setString}`;
                        try {
                            await db.execute(sql, [...values]);
                        } catch (error) {
                            console.log(error);
                        }
                    });
                }

                data.map(async (item) => {
                    const { setString, values } = constructSetString(item);
                    console.log(setString);
                    console.log(values);
                    const sql = `UPDATE HeroSlide SET ${setString} WHERE id = ?`;
                    try {
                        await db.query(sql, [...values, item.id]);
                    } catch (error) {
                        console.log(error);
                    }
                });
            } catch (error) {
                res.status(500).json({
                    message: 'Internal Server Error',
                    error,
                });
                break;
            }
            res.status(200).json({ message: 'Petición PUT' });
            break;

        default:
            res.status(405).json({ message: 'Método no permitido' });
            break;
    }
}

const constructSetString = (data) => {
    const keys = Object.keys(data);
    const setString = keys.map((key) => `${key} = ?`).join(', ');
    const values = keys.map((key) =>
        data[key] === undefined ? null : data[key]
    );
    return { setString, values };
};
