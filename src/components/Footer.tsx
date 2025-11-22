import { useLanguage } from '../contexts/LanguageContext'
import { scrollToSection } from '../utils/scroll'
import './Footer.css'

const Footer = () => {
  const { t } = useLanguage()

  const socialLinks = [
    { icon: 'fab fa-github', link: 'https://github.com/shaxriyor-wu', title: 'GitHub' },
    { icon: 'fab fa-telegram', link: 'https://t.me/shaxriyorkarimberdiyev', title: 'Telegram' },
    { icon: 'fas fa-envelope', link: 'mailto:shaxriyorkarimberdiyev@gmail.com', title: 'Email' },
    { icon: 'fas fa-phone', link: 'tel:+998880620710', title: 'Phone' }
  ]

  const navLinks = [
    { id: 'home', text: t.footer.links.home },
    { id: 'about', text: t.footer.links.about },
    { id: 'experience', text: t.footer.links.experience },
    { id: 'projects', text: t.footer.links.projects },
    { id: 'skills', text: t.footer.links.skills },
    { id: 'certifications', text: t.footer.links.certifications },
    { id: 'contact', text: t.footer.links.contact }
  ]

  return (
    <footer>
      <div className="footer-social">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.link}
            target={social.link.startsWith('http') ? '_blank' : undefined}
            rel={social.link.startsWith('http') ? 'noopener noreferrer' : undefined}
            title={social.title}
          >
            <i className={social.icon}></i>
          </a>
        ))}
      </div>

      <div className="footer-links">
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={(e) => {
              e.preventDefault()
              scrollToSection(link.id)
            }}
          >
            {link.text}
          </a>
        ))}
      </div>

      <p>{t.footer.copyright}</p>
    </footer>
  )
}

export default Footer

