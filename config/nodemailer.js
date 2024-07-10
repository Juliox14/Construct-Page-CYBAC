import nodemailer from 'nodemailer'

export const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST, 
    port: parseInt(process.env.SMTP_PORT, 10),
    secure: process.env.SMTP_SECURE === 'true', 
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
    }
})


export const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "cristianfack133@gmail.com",
}