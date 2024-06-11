'use client'
import { useState } from "react";
import axios from "axios";
const adminTest = () => {
    const [adminInfo, setAdminInfo] = useState({username: '', password: ''});
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setAdminInfo(prevState => ({...prevState, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');

        try {
            const response = await axios.post('/api/test', adminInfo);
            if (response.status === 201) {
                setMessage(`${response.data.message}. ID: ${response.data.adminId}`);
            } else {
                setMessage(`Error: ${response.data.message}`);
            }
        } catch (error) {
            setMessage('Error: ' + error.message);        
        }
    };

    return (
        <>
            <section>
                <article>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="username">Nombre de usuario</label>
                            <input 
                                type="text" 
                                autoComplete="off" 
                                name="username" 
                                value={adminInfo.username} 
                                onChange={handleChange }
                                required 
                            />
                        </div>
                        <div>
                            <label htmlFor="password">Contraseña</label>
                            <input 
                                type="password" 
                                autoComplete="off" 
                                name="password" 
                                value={adminInfo.password} 
                                onChange={handleChange }
                                required 
                            />
                        </div>
                        <input type="submit" value="Crear Admin" />
                    </form>
                    {message && <p>{message}</p>}
                </article>
            </section>
        </>
    );
};
export default adminTest;
