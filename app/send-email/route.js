import { EMAIL_PATTERN } from '@/constants/patterns'
import { sendEmail } from 'lib/send-email'

export async function POST(request) {
  const data = await request.json()
  const { name, email, subject, message } = data

  try {
    if (EMAIL_PATTERN.test(email) === false) return new Response(null, { status: 400 })

    const html = `Solicitud de contacto:
    <p><strong>Nombre:</strong> ${name}</p>
    <p><strong>Correo:</strong> ${email}</p>
    <p>${message.replace('\n', '<br/>')}</p>
  `

    await sendEmail({
      subject,
      html
    })

    return new Response(null, { status: 200 })
  } catch (error) {
    return new Response(null, { status: 500 })
  }
}
