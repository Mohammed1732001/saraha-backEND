import nodemailer from "nodemailer"


const sendEmail = async ({ to, subject, text, html } = {}) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASSWORD
        }
    });
    const info = await transporter.sendMail({
        from: `"Saraha 👻" <${process.env.EMAIL}>`, 
        to,
        subject,
        text, 
        html 
    });
    console.log(info);
    if (info.rejected.length) {
        throw new Error("Rejected Email")
    }
}

export default sendEmail
