import fs from 'fs/promises'

export async function GET(_, { params }) {
  const { locale } = params
  const file = await fs.readFile(`${process.cwd()}/i18n/locales/${locale}/cv.pdf`)

  return new Response(file, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename=Pablo Cabrera - CV.pdf'
    }
  })
}
