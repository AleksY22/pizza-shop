//!!RESEND

// import { Resend } from "resend";

// export const sendEmail = async (
//   to: string,
//   subject: string,
//   template: React.ReactNode
// ) => {
//   const resend = new Resend(process.env.RESEND_API_KEY);

//   const { data, error } = await resend.emails.send({
//     from: "onboarding@resend.dev",
//     to,
//     subject,
//     react: template,
//   });

//   if (error) {
//     throw error;
//   }

//   return data;
// };

//!!!!!!!!!!!!NODEMAILER
import nodemailer from "nodemailer";

export const sendEmail = async (
  to: string,
  subject: string,
  template: string
) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "mail.info-media.by",
      port: 465,
      secure: true,
      auth: {
        user: process.env.MAIL_LOGIN,
        pass: process.env.MAIL_PASSWORD,
      },
    });

    const options = {
      from: process.env.MAIL_LOGIN,
      to,
      subject,
      html: template,
    };

    const data = await transporter.sendMail(options);

    return data;
  } catch (error) {
    console.log(error);
  }
};
