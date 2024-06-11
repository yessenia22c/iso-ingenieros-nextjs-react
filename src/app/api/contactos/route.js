import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';
const transporter = nodemailer.createTransport({ 
    host: process.env.SERVIDOR_SMTP,
    port: process.env.PORT_SMTP,
    secure: true,
    auth: {
        user: process.env.CORREO,
        pass: process.env.PASS
    } 
  });


  export async function POST(request) {
    const { nombre, email, telefono, mensaje } = await request.json();
    //console.log(nombre, email, telefono, mensaje);
    const mailData = {
      from: process.env.CORREO,
      to: process.env.CORREO,
      subject: `Nuevo mensaje de ${nombre}`,
      text: `
        Nombre: ${nombre}
        Email: ${email}
        Teléfono: ${telefono}
        Mensaje: ${mensaje}
      `,
    };
  
    try {
      await transporter.sendMail(mailData);
      return NextResponse.json({ message: 'Mensaje enviado' });
    } catch (error) {
      console.error(error);
        return NextResponse.json({ message: 'Error al enviar el mensaje' }, { status: 500 });
    }
  }