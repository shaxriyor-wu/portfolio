export type Language = 'en' | 'uz' | 'es' | 'ru'
export type Theme = 'light' | 'dark'

export interface Translations {
  nav: {
    home: string
    about: string
    experience: string
    projects: string
    skills: string
    certifications: string
    contact: string
  }
  hero: {
    name: string
    subtitle: string
    description: string
    stats: {
      years: string
      companies: string
      systems: string
    }
    buttons: {
      viewWork: string
      connect: string
    }
  }
  about: {
    title: string
    description: string
    education: {
      schoolStudent: {
        title: string
        degree: string
        age: string
        description: string
      }
    }
    skills: {
      title: string
      languages: string
      softSkills: string[]
      languageLevels: {
        native: string
        advanced: string
        basic: string
      }
    }
  }
  experience: {
    title: string
    freelance: {
      title: string
      company: string
      period: string
      description: string[]
    }
  }
  projects: {
    title: string
    javaefootball: {
      title: string
      description: string
      visit: string
    }
    openDevUZ: {
      title: string
      description: string
      visit: string
    }
    shutupBot: {
      title: string
      description: string
      viewCode: string
    }
    cakeSellerBot: {
      title: string
      description: string
      viewCode: string
    }
    pdfBooksBot: {
      title: string
      description: string
      viewCode: string
    }
    moreProjects: {
      title: string
      description: string
      discuss: string
    }
  }
  skills: {
    title: string
  }
  certifications: {
    title: string
  }
  contact: {
    title: string
    sendMessage: string
    name: string
    email: string
    message: string
    send: string
    info: {
      instagram: string
      github: string
      telegram: string
      email: string
      phone: string
    }
  }
  footer: {
    copyright: string
    links: {
      home: string
      about: string
      experience: string
      projects: string
      skills: string
      certifications: string
      contact: string
    }
  }
}

