import nodemailer from 'nodemailer'

const smtpConfig = {
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT),
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD
  }
}

export const sendEmail = async (data) => {
  const transporter = nodemailer.createTransport(smtpConfig)

  return await transporter.sendMail({
    from: process.env.SMTP_USER,
    to: process.env.SMTP_USER,
    ...data
  })
}
