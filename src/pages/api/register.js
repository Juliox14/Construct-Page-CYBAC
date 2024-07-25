import mysql from 'mysql2/promise';

const db = mysql.createPool({
    host: process.env.MYSQL_DATABASE_HOST,
    user: process.env.MYSQL_DATABASE_USER,
    password: process.env.MYSQL_DATABASE_PASSWORD,
    database: process.env.MYSQL_DATABASE_NAME,
    multipleStatements: true,
});

const insertAdmin = async (username, password) => {
    try {
        
        const [rows] = await db.query('SET @result = NULL; CALL insert_admin(?, ?, @result); SELECT @result;', [username, password]);
        const result = rows[2][0]['@result'];
        console.log(result)
        return result;
    } catch (error) {
        console.error('Error al insertar administrador:', error);
        return { error: 'Error interno del servidor' };
    }
};

export default async function registerHandler(req, res) {
    if (req.method !== 'POST') {
        
        return res.status(405).json({ message: 'Método no permitido' });
    }
    try {
        
        const { username, password } = req.body;
        const result = await insertAdmin(username, password);
        if (result == 0) {
            
            console.log(res.status(409).json({ message: 'Usuario existente' }));
            return res.status(201).json({ message: 'Usuario existente' });
        } else {
            
            return res.status(201).json({ message: 'Usuario insertado correctamente', id: result });
        }
    } catch (error) {
        
        console.error('Error al insertar administrador:', error);
        return res.status(500).json({ error: 'Error interno del servidor' });
    }
}