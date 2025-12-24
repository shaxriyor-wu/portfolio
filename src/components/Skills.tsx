import { useLanguage } from '../contexts/LanguageContext'
import './Skills.css'

const Skills = () => {
  const { t } = useLanguage()

  const skills = [
    'Python', 'Aiogram', 'SQLite', 'Django', 
    'PostgreSQL', 'HTML', 'CSS'
  ]

  return (
    <section id="skills">
      <h2 className="section-title">{t.skills.title}</h2>
      <div className="skills-grid">
        <div className="skill-category">
          <h3>{t.skills.title}</h3>
          <div className="skill-tags-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-tag">{skill}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills

