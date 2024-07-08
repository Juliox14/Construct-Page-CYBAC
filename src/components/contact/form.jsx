'use client'
import { useState } from 'react';
import classes from './index.module.scss';
import axios from 'axios';

export default function FormContact() {
    const [formData, setFormData] = useState({ nombre: '', email: '', mensaje: '' , asunto:''});
    const [viewForm, setViewForm] = useState(true);
    const [sended, setSended] = useState(false);
    const [formError, setFormError] = useState(false);
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        const response = await axios.post('/api/sendEmail', formData);
        if (response.status === 200) {
            setViewForm(false);
            setSended(true);
        }
        else {
            setFormError(true);
            setTimeout(() => {
                setFormError(false);
            }, 3000);
        };
    }
    return (
        <>
            {viewForm && (
                <form className={classes.form} method='POST' onSubmit={handleSubmit}>
                    <div className={classes.form_group__input}>
                        <input
                            type="text"
                            name="nombre"
                            id="nombre"
                            placeholder="Tu nombre*"
                            required
                            value={formData.nombre}
                            onChange={handleChange}
                            className={`${classes.form_input__field} me-30`}
                        />
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Tu Email*"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className={classes.form_input__field}
                        />
                    </div>

                    <div className={classes.form_asunto}>
                        <select
                            name="asunto"
                            id="asunto"
                            required
                            value={formData.asunto}
                            onChange={handleChange}
                            className={classes.form_select__field}
                        >
                            <option value="">Selecciona un asunto*</option>
                            <option value="Cotización">Solicitud de cotización</option>
                            <option value="Información de vacantes">Preguntar por vacante</option>
                            <option value="Soporte técnico">Asistencia técnica</option>
                        </select>
                    </div>
                    
                    <textarea
                        name="mensaje"
                        placeholder="Mensaje"
                        required
                        value={formData.mensaje}
                        onChange={handleChange}
                        className={`${classes.form_textarea__field} mt-30`}
                    />
                    <div className={classes.form_btn__wrap}>
                        <button
                            className={`${classes.btn} ${classes.btn_secondary} ${classes.btn_hover__primary}`}
                            type="submit"
                        >
                            Enviar
                        </button>
                    </div>
                </form>
            )}
            {formError && (
                <div className={classes.error}>
                    <div role="alert">
                        <strong>¡Algo salió mal! </strong>
                        <span>Error al enviar el formulario. Por favor, intentalo más tarde.</span>
                    </div>
                </div>
            )}
            {sended && (
                <div className={classes.sended}>
                    <div className={classes.sended_container} role="alert">
                        <div className={classes.sended_content}>
                            <div className={classes.sended_divIcon}>
                                <div className={classes.sended_icon}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-telegram" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#014655" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <p className={classes.sended_text}>¡Gracias {formData?.nombre}! Tu mail ha sido recibido.</p>
                                <p className={classes.sended_text2}>Nos comunicaremos contigo muy pronto.</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
