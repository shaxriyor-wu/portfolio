import { useState, useEffect } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { useTheme } from '../contexts/ThemeContext'
import { scrollToSection } from '../utils/scroll'
import './Navigation.css'

const Navigation = () => {
  const { t, language, setLanguage } = useLanguage()
  const { toggleTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (!target.closest('.language-switcher')) {
        setIsLangDropdownOpen(false)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId)
    setIsMenuOpen(false)
  }

  const languages = [
    { code: 'en' as const, name: 'English', flag: 'https://flagcdn.com/w320/gb.png' },
    { code: 'uz' as const, name: "O'zbek", flag: 'https://flagcdn.com/w320/uz.png' },
    { code: 'ru' as const, name: 'Русский', flag: 'https://flagcdn.com/w320/ru.png' }
  ]

  const currentLang = languages.find(l => l.code === language)

  return (
    <nav className={`nav ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="logo" onClick={() => handleNavClick('home')}>
          Shaxriyor Karimberdiyev
        </div>
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={(e) => { e.preventDefault(); handleNavClick('home') }}>{t.nav.home}</a></li>
          <li><a href="#about" onClick={(e) => { e.preventDefault(); handleNavClick('about') }}>{t.nav.about}</a></li>
          <li><a href="#experience" onClick={(e) => { e.preventDefault(); handleNavClick('experience') }}>{t.nav.experience}</a></li>
          <li><a href="#projects" onClick={(e) => { e.preventDefault(); handleNavClick('projects') }}>{t.nav.projects}</a></li>
          <li><a href="#skills" onClick={(e) => { e.preventDefault(); handleNavClick('skills') }}>{t.nav.skills}</a></li>
          <li><a href="#certifications" onClick={(e) => { e.preventDefault(); handleNavClick('certifications') }}>{t.nav.certifications}</a></li>
          <li><a href="#contact" onClick={(e) => { e.preventDefault(); handleNavClick('contact') }}>{t.nav.contact}</a></li>
        </ul>
        <div className="nav-controls">
          <div className="language-switcher">
            <button 
              className="language-toggle" 
              onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
              title="Change Language"
            >
              {currentLang?.code.toUpperCase() || 'EN'}
            </button>
            <div className={`language-dropdown ${isLangDropdownOpen ? 'active' : ''}`}>
              {languages
                .filter(lang => lang.code !== language)
                .map(lang => (
                  <div
                    key={lang.code}
                    className="language-option"
                    onClick={() => {
                      setLanguage(lang.code)
                      setIsLangDropdownOpen(false)
                    }}
                  >
                    <div className="language-flag">
                      <img src={lang.flag} alt={`${lang.name} flag`} />
                    </div>
                    <span className="language-name">{lang.name}</span>
                  </div>
                ))}
            </div>
          </div>
          <button className="theme-toggle" onClick={toggleTheme} title="Toggle Theme">
            <i className="fas fa-lightbulb"></i>
          </button>
          <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navigation

