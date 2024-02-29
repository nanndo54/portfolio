import fs from 'fs/promises'

export async function GET(_, { params }) {
  const { locale } = params
  const cv = await fs.readFile(`i18n/locales/${locale}/cv.pdf`)

  return new Response(cv, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename=Pablo Cabrera - CV.pdf'
    }
  })
}
