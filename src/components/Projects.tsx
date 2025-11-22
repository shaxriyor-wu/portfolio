import { useLanguage } from '../contexts/LanguageContext'
import './Projects.css'

const Projects = () => {
  const { t } = useLanguage()

  const projects = [
    {
      icon: 'fa-futbol',
      title: t.projects.javaefootball.title,
      description: t.projects.javaefootball.description,
      tags: ['ReactJS', 'Flask', 'SQLite', 'Docker', 'Full-Stack'],
      link: 'https://www.javaefootball.com',
      linkText: t.projects.javaefootball.visit,
      isExternal: true
    },
    {
      icon: 'fa-globe',
      title: t.projects.openDevUZ.title,
      description: t.projects.openDevUZ.description,
      tags: ['Python', 'Flask', 'Frontend', 'SQLite'],
      link: 'https://opendev.alwaysdata.net/',
      linkText: t.projects.openDevUZ.visit,
      isExternal: true
    },
    {
      icon: 'fa-comment-slash',
      title: t.projects.shutupBot.title,
      description: t.projects.shutupBot.description,
      tags: ['Python', 'Aiogram', 'Telegram Bot API', 'Moderation', 'Automation'],
      link: 'https://github.com/shaxriyor-wu/shut-up-web-bot',
      linkText: t.projects.shutupBot.viewCode,
      isExternal: true
    },
    {
      icon: 'fa-birthday-cake',
      title: t.projects.cakeSellerBot.title,
      description: t.projects.cakeSellerBot.description,
      tags: ['Python', 'Aiogram', 'Telegram Bot API', 'E-commerce', 'Automation'],
      link: 'https://github.com/shaxriyor-wu/cakesellerbot',
      linkText: t.projects.cakeSellerBot.viewCode,
      isExternal: true
    },
    {
      icon: 'fa-book',
      title: t.projects.pdfBooksBot.title,
      description: t.projects.pdfBooksBot.description,
      tags: ['Python', 'Aiogram', 'Telegram Bot API'],
      link: 'https://github.com/shaxriyor-wu/pdf-books',
      linkText: t.projects.pdfBooksBot.viewCode,
      isExternal: true
    }
  ]

  return (
    <section id="projects">
      <h2 className="section-title">{t.projects.title}</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image">
              <i className={`fas ${project.icon}`}></i>
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="project-tag">{tag}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.link} className="project-link project-link-primary" target="_blank" rel="noopener noreferrer">
                  {project.isExternal ? (
                    <>
                      <i className="fas fa-external-link-alt"></i> {project.linkText}
                    </>
                  ) : (
                    <>
                      <i className="fab fa-github"></i> {project.linkText}
                    </>
                  )}
                </a>
              </div>
            </div>
          </div>
        ))}

        <div className="project-card project-card-more">
          <div className="project-image">
            <i className="fas fa-code"></i>
          </div>
          <div className="project-content">
            <h3 className="project-title">{t.projects.moreProjects.title}</h3>
            <p className="project-description">{t.projects.moreProjects.description}</p>
            <div className="project-links">
              <a href="https://t.me/shaxriyorkarimberdiyev" target="_blank" rel="noopener noreferrer" className="project-link project-link-secondary">
                <i className="fas fa-envelope"></i> {t.projects.moreProjects.discuss}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects

