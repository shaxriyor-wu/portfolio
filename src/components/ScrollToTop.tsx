import { useState, useEffect } from 'react'
import { scrollToSection } from '../utils/scroll'
import './ScrollToTop.css'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className={`scroll-to-top ${isVisible ? 'visible' : ''}`}
      onClick={() => scrollToSection('home')}
      aria-label="Scroll to top"
    >
      <i className="fas fa-arrow-up"></i>
    </div>
  )
}

export default ScrollToTop

