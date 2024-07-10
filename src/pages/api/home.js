import db from "../../../database/config/db"

//Hola Api Home te quiero mucho <3
export default async function HomeHandler(req,res){
    if(req.method === 'GET'){
        try{
            const [data_hero] = await db.execute('SELECT * FROM HeroSlide');
            const [data_LatestProject_projects] = await db.execute('SELECT * FROM proyectos');
            const allData = [data_hero, data_LatestProject_projects];
            res.status(200).json(allData);
        }catch(error){
            res.status(500).json({ message: 'Internal Server Error', error });
        }
    }
    else{
        res.status(405).json({message: 'Método no permitido'});
    }
}