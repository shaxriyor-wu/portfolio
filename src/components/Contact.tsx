import { useLanguage } from '../contexts/LanguageContext'
import './Contact.css'

const Contact = () => {
  const { t } = useLanguage()

  const contactInfo = [
    {
      icon: 'fab fa-instagram',
      title: t.contact.info.instagram,
      value: '@shaxriyor_karimberdiyev',
      link: 'https://instagram.com/shaxriyor_karimberdiyev',
      color: '#E4405F'
    },
    {
      icon: 'fab fa-github',
      title: t.contact.info.github,
      value: 'github.com/shaxriyor-wu',
      link: 'https://github.com/shaxriyor-wu',
      color: 'var(--primary)'
    },
    {
      icon: 'fab fa-telegram',
      title: t.contact.info.telegram,
      value: '@shaxriyorkarimberdiyev',
      link: 'https://t.me/shaxriyorkarimberdiyev',
      color: '#229ED9'
    },
    {
      icon: 'fas fa-envelope',
      title: t.contact.info.email,
      value: 'shaxriyorkarimberdiyev008@gmail.com',
      link: 'mailto:shaxriyorkarimberdiyev008@gmail.com',
      color: '#ea4335'
    },
    {
      icon: 'fas fa-phone',
      title: t.contact.info.phone,
      value: '+998 88 062 0710',
      link: 'tel:+998880620710',
      color: '#25d366'
    }
  ]

  return (
    <section id="contact">
      <h2 className="section-title">{t.contact.title}</h2>
      <div className="contact-container">
        <div className="contact-info">
          {contactInfo.map((info, index) => (
            <a
              key={index}
              href={info.link}
              target={info.link.startsWith('http') ? '_blank' : undefined}
              rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="contact-card"
              style={{ '--contact-color': info.color } as React.CSSProperties}
            >
              <i className={info.icon}></i>
              <div>
                <h4>{info.title}</h4>
                <span style={{ color: 'var(--primary)' }}>{info.value}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact

