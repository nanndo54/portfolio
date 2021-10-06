import React from 'react'
import { FormattedMessage } from 'react-intl'

import Section from '@/components/Section'

function ContactSection() {
  return (
    <Section shadow={false} fallback={false}>
      <h2>
        <FormattedMessage id='contact.title' />
      </h2>
      <p className='center'>
        <FormattedMessage id='contact.invitation' />
        <a href='https://www.linkedin.com/in/pabloc54/'>LinkedIn</a>! 📨
      </p>
      <p className='center small'>
        <FormattedMessage id='contact.alternative' />
        <a href='mailto:pablofernando54@outlook.com'>pablofernando54@outlook.com</a>.
      </p>
    </Section>
  )
}

export default ContactSection
