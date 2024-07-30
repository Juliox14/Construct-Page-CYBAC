import db from "../../../database/config/db"

// Hola Api Home te quiero mucho <3
export default async function HomeHandler(req,res){
    switch(req.method){
        case "GET":
            try{
                const [data_hero] = await db.execute('SELECT * FROM HeroSlide');
                const [data_LatestProject_projects] = await db.execute('SELECT * FROM proyectos');
                const allData = [data_hero, data_LatestProject_projects];
                res.status(200).json(allData);
            }catch(error){
                res.status(500).json({ message: 'Internal Server Error', error });
            }
            break;

        case "PUT":
            try{
                const data = req.body;
                console.log(data);
                data.map( async(item) => {
                    const parsedData = parseData(item);
                    await db.execute(`UPDATE HeroSlide SET ${parsedData} WHERE id = ${item.id}`);
                })
            }catch(error){
                res.status(500).json({ message: 'Internal Server Error', error });
            }
            res.status(200).json({message: 'Petición PUT'});

        default:
            res.status(405).json({message: 'Método no permitido'});
            break;
    }
}

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