import { useLanguage } from '../contexts/LanguageContext'
import { scrollToSection } from '../utils/scroll'
import './Hero.css'

const Hero = () => {
  const { t } = useLanguage()

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>{t.hero.name}</h1>
        <div className="subtitle">{t.hero.subtitle}</div>
        <p className="hero-description">{t.hero.description}</p>

        <div className="stats">
          <div className="stat-card">
            <div className="stat-number">1+</div>
            <div className="stat-label">{t.hero.stats.years}</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">5+</div>
            <div className="stat-label">{t.hero.stats.systems}</div>
          </div>
        </div>

        <div className="cta-buttons">
          <a href="#projects" className="btn btn-primary" onClick={(e) => { e.preventDefault(); scrollToSection('projects') }}>
            {t.hero.buttons.viewWork}
          </a>
          <a href="#contact" className="btn btn-secondary" onClick={(e) => { e.preventDefault(); scrollToSection('contact') }}>
            {t.hero.buttons.connect}
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero

