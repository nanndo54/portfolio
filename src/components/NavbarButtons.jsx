import Link from '@/components/Link'
import ThemeButton from '@/components/ThemeButton'
import styles from '@/styles/NavbarButtons.module.css'
import getDictionary, { getCurrentLocale } from 'i18n/server'

export default async function NavbarButtons() {
  const { aria } = await getDictionary()
  const locale = getCurrentLocale()

  return (
    <div className={styles.base}>
      <ThemeButton />
      <Link
        className={`${styles.language} scale-animation`}
        title={aria.toggleLocale}
        href={locale === 'en' ? '/es' : '/en'}
        scroll={false}
        decoration={false}
      >
        {locale}
      </Link>
    </div>
  )
}
