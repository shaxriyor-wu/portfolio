import { useLanguage } from '../contexts/LanguageContext'
import './Experience.css'

const Experience = () => {
  const { t } = useLanguage()

  return (
    <section id="experience">
      <h2 className="section-title">{t.experience.title}</h2>
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-content">
            <div className="timeline-header">
              <div>
                <div className="timeline-title">{t.experience.freelance.title}</div>
                <a href="#" className="timeline-company">{t.experience.freelance.company}</a>
              </div>
              <div className="timeline-date">{t.experience.freelance.period}</div>
            </div>
            <ul>
              {t.experience.freelance.description.map((desc, index) => (
                <li key={index}>{desc}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience

