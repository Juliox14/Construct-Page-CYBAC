import { transporter, mailOptions } from "../../../config/nodemailer";

export default async function emailHandler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' })
    }
    else {
        try {
            const { nombre, email, mensaje, asunto } = req.body;
            const htmlContent = `
                <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #0C231E;">
                <h1 style="color: #000000;">${asunto}</h1>
                <p><strong>Nombre del cliente:</strong> ${nombre}</p>
                <p><strong>Mensaje:</strong></p>
                <p>${mensaje}</p>
                <hr />
                <p><strong>Comunicarse al email:</strong> ${email}</p>
                <p style="font-size: 0.9em;">Este correo fue enviado desde el formulario de contacto de <strong>Reichstag Edificaciones</strong>.</p>
                </div>
                `;
            await transporter.sendMail({
                ...mailOptions,
                subject: `Nuevo mensaje desde formulario web - ${asunto}`,
                text: `Nombre: ${nombre} - Email: ${email} - Mensaje: ${mensaje}`,
                html: htmlContent
            })
            return res.status(200).json({ message: 'Email sent successfully' })
        } catch (error) {
            console.error(error)
            return res.status(500).json({ message: 'Internal server error' })
        }
    }
}