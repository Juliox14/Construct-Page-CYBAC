'use client'
import { useState } from "react";
const adminTest = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage(''); // Limpia el mensaje previo

        // Envío de solicitud a la API
        try {
            const response = await fetch('/api/test', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();
            if (response.ok) {
                setMessage(`Admin creado exitosamente. ID: ${data.adminId}`);
            } else {
                setMessage(`Error: ${data.message}`);
            }
        } catch (error) {
            setMessage('Error de red');
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
                                value={username} 
                                onChange={(e) => setUsername(e.target.value)} 
                                required 
                            />
                        </div>
                        <div>
                            <label htmlFor="password">Contraseña</label>
                            <input 
                                type="password" 
                                autoComplete="off" 
                                name="password" 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
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