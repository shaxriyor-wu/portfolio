import { useLanguage } from '../contexts/LanguageContext'
import './About.css'

const About = () => {
  const { t } = useLanguage()

  return (
    <section id="about">
      <h2 className="section-title">{t.about.title}</h2>
      <div className="about-content">
        <div className="about-intro">
          <p>{t.about.description}</p>
        </div>

        <div className="education-grid">
          <div className="education-card">
            <div className="education-header">
              <i className="fas fa-school"></i>
              <h3>{t.about.education.schoolStudent.title}</h3>
            </div>
            <div className="education-item">
              <div className="education-degree">{t.about.education.schoolStudent.degree}</div>
              <div className="education-date-badge">
                <i className="fas fa-calendar-alt"></i> {t.about.education.schoolStudent.age}
              </div>
              <p>{t.about.education.schoolStudent.description}</p>
            </div>
          </div>
        </div>

        <div className="card" style={{ marginTop: '2rem' }}>
          <div className="card-header">
            <i className="fas fa-award"></i>
            <h3>{t.about.skills.title}</h3>
          </div>
          <div className="skill-tags">
            {t.about.skills.softSkills.map((skill, index) => (
              <span key={index} className="tag">{skill}</span>
            ))}
          </div>
        </div>

        <div className="card" style={{ marginTop: '2rem' }}>
          <div className="card-header">
            <i className="fas fa-globe"></i>
            <h3>{t.about.skills.languages}</h3>
          </div>
          <div className="languages-grid">
            <div className="language-card">
              <div className="language-flag">
                <img src="https://flagcdn.com/w320/uz.png" alt="Uzbekistan flag" />
              </div>
              <div className="language-name">Uzbek</div>
              <div className="language-level">{t.about.skills.languageLevels.native}</div>
            </div>
            <div className="language-card">
              <div className="language-flag">
                <img src="https://flagcdn.com/w320/gb.png" alt="United Kingdom flag" />
              </div>
              <div className="language-name">English</div>
              <div className="language-level">{t.about.skills.languageLevels.advanced}</div>
            </div>
            <div className="language-card">
              <div className="language-flag">
                <img src="https://flagcdn.com/w320/ru.png" alt="Russia flag" />
              </div>
              <div className="language-name">Russian</div>
              <div className="language-level">{t.about.skills.languageLevels.basic}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

