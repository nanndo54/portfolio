import React from 'react'
import Section from './Section'

function ContactSection() {
  return (
    <Section shadow={false} last fallback={false}>
      <h2>¿Te gusta lo que ves?</h2>
      <p>
        ¡Te invito a mandarme un mensaje por{' '}
        <a href='https://www.linkedin.com/in/pablo-cabrera-2a567b209/'>LinkedIn</a>! 📨
      </p>
      <p className='small'>
        ... o <a href='mailto:pablofernando54@outlook.com'>mandame un email</a> a
        pablofernando54@outlook.com.
      </p>
    </Section>
  )
}

export default ContactSection
