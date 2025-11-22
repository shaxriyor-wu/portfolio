import { useLanguage } from '../contexts/LanguageContext'
import './Certifications.css'

const Certifications = () => {
  const { t } = useLanguage()

  const certifications = [
    {
      icon: 'fa-certificate',
      title: 'IELTS',
      provider: 'Band 6.0',
      date: '2024',
      link: null
    },
    {
      icon: 'fab fa-google',
      title: 'Google Cybersecurity Specialization',
      provider: 'Coursera',
      date: '2025',
      link: 'https://www.coursera.org/account/accomplishments/specialization/WTW555BB8UTC'
    },
    {
      icon: 'fa-project-diagram',
      title: 'Google Management Specialization',
      provider: 'Coursera',
      date: '2025',
      link: 'https://www.coursera.org/account/accomplishments/specialization/BM4TL7SCSJBU'
    }
  ]

  return (
    <section id="certifications">
      <h2 className="section-title">{t.certifications.title}</h2>
      <div className="cert-grid">
        {certifications.map((cert, index) => {
          const content = (
            <>
              <i className={cert.icon}></i>
              <div className="cert-info">
                <div className="cert-title">{cert.title}</div>
                <div className="cert-provider">{cert.provider}</div>
                <div className="cert-date">{cert.date}</div>
              </div>
              {cert.link && <i className="fas fa-external-link-alt cert-link-icon"></i>}
            </>
          )

          if (cert.link) {
            return (
              <a
                key={index}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="cert-card"
              >
                {content}
              </a>
            )
          }

          return (
            <div key={index} className="cert-card">
              {content}
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Certifications

