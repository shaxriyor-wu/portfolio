import { Translations } from '../types'

export const translations: Record<string, Translations> = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      experience: 'Experience',
      projects: 'Projects',
      skills: 'Skills',
      certifications: 'Certifications',
      contact: 'Contact'
    },
    hero: {
      name: 'Shaxriyor Karimberdiyev',
      subtitle: 'Software Engineer',
      description: 'I build and evolve advanced software infrastructure. I design high‑performance backend systems, develop frontend concepts, understand UI/UX design, and contribute to engineering teams delivering production‑grade applications.',
      stats: {
        years: 'Years Engineering',
        companies: 'Worked in Companies',
        systems: 'Production Systems'
      },
      buttons: {
        viewWork: 'View My Work',
        connect: "Let's Connect"
      }
    },
    about: {
      title: 'About Me',
      description: "I'm a software engineer focused on building secure, scalable backends and automation. My core stack is Python (Django, Aiogram), SQLite and PostgreSQL. I care about clean architecture, performance, and pragmatic security.",
      education: {
        schoolStudent: {
          title: 'School Student',
          degree: 'Currently studying at school',
          age: '17 years old',
          description: "I don't have a university degree yet — I study at school and work on practical projects."
        }
      },
      skills: {
        title: 'Soft Skills',
        languages: 'Languages',
        softSkills: [
          'Leadership', 'Teamwork', 'Communication', 'Self-learning', 'Deep Work',
          'Creativity', 'Active Listening', 'Time Management', 'Decision Making', 'Mentoring'
        ],
        languageLevels: {
          native: 'Native',
          advanced: 'Advanced',
          basic: 'Basic'
        }
      }
    },
    experience: {
      title: 'Work Experience',
      freelance: {
        title: 'Freelance Software Engineer',
        company: 'Self‑employed — Remote (1+ year)',
        period: '2024 — Present',
        description: [
          'Completed 10+ client projects end‑to‑end from requirements to production',
          'Built Telegram bots (Aiogram) and Django backend APIs',
          'Implemented frontend integration, authentication, payments, and admin panels',
          'Managed client communication, technical documentation, and delivery timelines'
        ]
      }
    },
    projects: {
      title: 'Projects',
      javaefootball: {
        title: 'JavaE Football',
        description: 'Full-stack web application for football management. Built with ReactJS frontend, Django backend, SQLite database, and Docker containerization. Complete solution for managing football teams, players, and matches.',
        visit: 'Visit Site'
      },
      openDevUZ: {
        title: 'OpenDevUZ',
        description: 'A learning web platform offering free IT courses and job listings. Users can explore courses and apply to job postings.',
        visit: 'Visit Site'
      },
      shutupBot: {
        title: 'Shut up Telegram web-bot',
        description: 'A moderation bot that helps admins manage groups by tracking violations and applying appropriate restrictions.',
        viewCode: 'View Code'
      },
      cakeSellerBot: {
        title: 'Cake Seller Telegram web-bot',
        description: 'A bot designed for ordering cakes. Users can choose categories, place orders, and configure delivery.',
        viewCode: 'View Code'
      },
      pdfBooksBot: {
        title: 'PDF-books Telegram web-bot',
        description: 'A bot that helps find PDF versions of books. Includes search, categories, and fast delivery features.',
        viewCode: 'View Code'
      },
      stanfordacademy: {
        title: 'Stanford Academy',
        description: 'Educational center personal website. A modern and responsive website showcasing courses, teachers, and educational programs.',
        visit: 'Visit Site'
      },
      stanfordacademyCRM: {
        title: 'Stanford Academy CRM',
        description: 'CRM system for educational center. Comprehensive management system for students, courses, teachers, and administrative tasks.',
        visit: 'Visit Site'
      },
      tricorpCRM: {
        title: 'TriCorp CRM',
        description: 'CRM system for educational centers with documentation. Complete CRM solution with comprehensive documentation for managing multiple educational centers.',
        visit: 'Visit Site'
      },
      moreProjects: {
        title: 'More Work',
        description: 'In addition to these projects, I work on various small projects and experiments, continuously expanding my skills through hands-on practice and learning.',
        discuss: "Let's discuss your project"
      }
    },
    skills: {
      title: 'Full-Stack Development'
    },
    certifications: {
      title: 'Certifications'
    },
    contact: {
      title: 'Contact Me',
      sendMessage: 'Send me a message',
      name: 'Full Name',
      email: 'Email',
      message: 'Message',
      send: 'Send Message',
      info: {
        instagram: 'Instagram',
        github: 'GitHub',
        telegram: 'Telegram',
        email: 'Email',
        phone: 'Phone'
      }
    },
    footer: {
      copyright: '© 2025 Shaxriyor Karimberdiyev. All rights reserved.',
      links: {
        home: 'Home',
        about: 'About',
        experience: 'Experience',
        projects: 'Projects',
        skills: 'Skills',
        certifications: 'Certifications',
        contact: 'Contact'
      }
    }
  },
  uz: {
    nav: {
      home: 'Bosh sahifa',
      about: 'Men haqimda',
      experience: 'Ish tajribasi',
      projects: 'Loyihalar',
      skills: 'Ko\'nikmalar',
      certifications: 'Sertifikatlar',
      contact: 'Aloqa'
    },
    hero: {
      name: 'Shaxriyor Karimberdiyev',
      subtitle: 'Software engineer',
      description: "Ilg'or dasturiy infratuzilmalarni yaratish va rivojlantirish bilan shug'ullanaman. Yuqori samarali backend tizimlarini loyihalashtiraman, frontend g'oyalarini ishlab chiqaman.",
      stats: {
        years: 'Yillik tajriba',
        companies: 'Kompaniyalarda ishlagan',
        systems: 'Ishlab chiqarish tizimlari'
      },
      buttons: {
        viewWork: 'Ishlarimni ko\'rish',
        connect: 'Bog\'lanish'
      }
    },
    about: {
      title: 'Men haqimda',
      description: 'Men xavfsiz va kengaytiriladigan backend tizimlar va frontend dasturiy ta\'minot muhandisiman. Asosiy texnologiyalarim: Python (Django, Aiogram), SQLite va PostgreSQL. O\'zimdan kuchli bo\'lgan communitylarda ishlashni qadrlayman.',
      education: {
        schoolStudent: {
          title: 'Maktab o\'quvchisi',
          degree: 'Hozirda maktabda tahsil olaman',
          age: '17 yosh',
          description: 'Universitet darajam yo\'q — hozircha maktabda o\'qiyman va amaliy loyihalar ustida ishlayman.'
        }
      },
      skills: {
        title: 'Yumshoq ko\'nikmalar',
        languages: 'Tillar',
        softSkills: [
          'Liderlik', 'Jamoa ishi', 'Muloqot', 'O\'z-o\'zini o\'qitish', 'Chuqur ish',
          'Ijodkorlik', 'Faol tinglash', 'Vaqtni boshqarish', 'Qaror qabul qilish', 'Mentorlik'
        ],
        languageLevels: {
          native: 'Ona tili',
          advanced: 'Yuqori',
          basic: 'Boshlang\'ich'
        }
      }
    },
    experience: {
      title: 'Ish tajribasi',
      freelance: {
        title: 'Freelance Dasturiy ta\'minot muhandisi',
        company: 'O\'z‑o\'zini band qilgan — Masofadan (1+ yil)',
        period: '2024 — Hozirgacha',
        description: [
          'Talabdan ishlab chiqarishgacha 10+ mijoz loyihalarini yakunladim',
          'Telegram botlari (Aiogram) va Django backend API\'lar qurdim',
          'Frontend integratsiyasi, autentifikatsiya, to\'lov va admin panel funksiyalarini joriy qildim',
          'Mijozlar bilan rasmiy muloqot, texnik hujjatlar va timeline boshqaruvini olib bordim'
        ]
      }
    },
    projects: {
      title: 'Loyihalar',
      javaefootball: {
        title: 'JavaE Football',
        description: 'Futbol boshqaruvi uchun to\'liq funksional veb-ilova. ReactJS frontend, Django backend, SQLite ma\'lumotlar bazasi va Docker konteynerizatsiyasi bilan qurilgan. Futbol jamoalari, o\'yinchilar va o\'yinlarni boshqarish uchun to\'liq yechim.',
        visit: 'Saytni ko\'rish'
      },
      openDevUZ: {
        title: 'OpenDevUZ',
        description: 'O\'qish uchun mo\'ljallangan veb-platforma: bepul IT kurslar va ish e\'lonlari. Foydalanuvchilar kurslarni ko\'rib chiqishi va ish e\'lonlariga ariza topshirishi mumkin.',
        visit: 'Saytni ko\'rish'
      },
      shutupBot: {
        title: 'Shut up Telegram web-bot',
        description: 'Guruhlarni boshqarishni yengillashtiruvchi adminlar uchun moderatsiya boti. Qoidabuzarliklarni kuzatadi va kerakli cheklovlarni qo\'llaydi.',
        viewCode: 'Kodni ko\'rish'
      },
      cakeSellerBot: {
        title: 'Cake Seller Telegram web-bot',
        description: 'Tortlarni buyurtma qilish uchun mo\'ljallangan bot. Foydalanuvchi turli kategoriyalarni tanlab, buyurtma berishi va yetkazib berishni sozlashi mumkin.',
        viewCode: 'Kodni ko\'rish'
      },
      pdfBooksBot: {
        title: 'PDF-books Telegram web-bot',
        description: 'Kitoblarning PDF versiyalarini topishga yordam beradigan bot. Qidiruv, kategoriyalar va tezkor yuborish funksiyalari mavjud.',
        viewCode: 'Kodni ko\'rish'
      },
      stanfordacademy: {
        title: 'Stanford Academy',
        description: 'O\'quv markaz shaxsiy web-sayti. Zamonaviy va moslashuvchan dizayn bilan kurslar, o\'qituvchilar va ta\'lim dasturlarini namoyish etuvchi veb-sayt.',
        visit: 'Saytni ko\'rish'
      },
      stanfordacademyCRM: {
        title: 'Stanford Academy CRM',
        description: 'O\'quv markaz uchun CRM tizim. O\'quvchilar, kurslar, o\'qituvchilar va ma\'muriy vazifalarni boshqarish uchun keng qamrovli boshqaruv tizimi.',
        visit: 'Saytni ko\'rish'
      },
      tricorpCRM: {
        title: 'TriCorp CRM',
        description: 'O\'quv markazlar uchun CRM tizim hujjatlari. Bir nechta o\'quv markazlarini boshqarish uchun to\'liq CRM yechimi va keng qamrovli hujjatlar.',
        visit: 'Saytni ko\'rish'
      },
      moreProjects: {
        title: 'Yana boshqa ishlar',
        description: 'Bundan tashqari, turli kichik loyihalar va tajriba ishlarim ham bor. Texnologiyalarni o\'rganish va amalda qo\'llash orqali ko\'nikmalarimni kengaytirib boraman.',
        discuss: 'Loyihangizni muhokama qilamiz'
      }
    },
    skills: {
      title: 'To\'liq funksional dasturlash'
    },
    certifications: {
      title: 'Sertifikatlar'
    },
    contact: {
      title: 'Men bilan bog\'lanish',
      sendMessage: 'Menga xabar yuboring',
      name: 'To\'liq ism',
      email: 'Elektron pochta',
      message: 'Xabar',
      send: 'Xabarni yuborish',
      info: {
        instagram: 'Instagram',
        github: 'GitHub',
        telegram: 'Telegram',
        email: 'Email',
        phone: 'Telefon'
      }
    },
    footer: {
      copyright: '© 2025 Shaxriyor Karimberdiyev. Barcha huquqlar himoyalangan.',
      links: {
        home: 'Bosh sahifa',
        about: 'Men haqimda',
        experience: 'Ish tajribasi',
        projects: 'Loyihalar',
        skills: 'Ko\'nikmalar',
        certifications: 'Sertifikatlar',
        contact: 'Aloqa'
      }
    }
  },
  ru: {
    nav: { home: 'Главная', about: 'Обо мне', experience: 'Опыт работы', projects: 'Проекты', skills: 'Навыки', certifications: 'Сертификаты', contact: 'Контакты' },
    hero: {
      name: 'Shaxriyor Karimberdiyev',
      subtitle: 'Инженер-программист',
      description: 'Создаю и развиваю передовую программную инфраструктуру. Проектирую высокопроизводительные backend‑системы, разрабатываю концепции фронтенда, понимаю UI/UX‑дизайн и участвую в инженерных командах, поставляющих приложения производственного уровня.',
      stats: { years: 'Лет опыта', companies: 'Работал в компаниях', systems: 'Продакшн системы' },
      buttons: { viewWork: 'Посмотреть работы', connect: 'Связаться' }
    },
    about: {
      title: 'Обо мне',
      description: 'Я инженер-программист, сосредоточенный на создании безопасных и масштабируемых backend-систем и автоматизации. Основные технологии: Python (Django, Aiogram), SQLite и PostgreSQL. Также реализую автоматизацию Telegram с помощью Aiogram.',
      education: {
        schoolStudent: { title: 'Школьный ученик', degree: 'В настоящее время учусь в школе', age: '17 лет', description: 'У меня пока нет университетской степени — учусь в школе и работаю над практическими проектами.' }
      },
      skills: {
        title: 'Мягкие навыки',
        languages: 'Языки',
        softSkills: ['Лидерство', 'Командная работа', 'Коммуникация', 'Самообучение', 'Глубокая работа', 'Креативность', 'Активное слушание', 'Управление временем', 'Принятие решений', 'Менторство'],
        languageLevels: { native: 'Родной', advanced: 'Продвинутый', basic: 'Базовый' }
      }
    },
    experience: {
      title: 'Опыт работы',
      freelance: {
        title: 'Фриланс‑инженер по разработке ПО',
        company: 'Самозанятый — Удаленно (1+ год)',
        period: '2024 — Настоящее время',
        description: [
          'Выполнил 10+ клиентских проектов от требований до продакшена',
          'Разработал Telegram‑ботов (Aiogram) и backend API на Django',
          'Реализовал фронтенд‑интеграцию, аутентификацию, платежи и админ‑панели',
          'Вёл коммуникацию с заказчиками, техдокументацию и графики поставок'
        ]
      }
    },
    projects: {
      title: 'Проекты',
      javaefootball: { title: 'JavaE Football', description: 'Полнофункциональное веб‑приложение для управления футболом. Построено с ReactJS frontend, Django backend, базой данных SQLite и Docker контейнеризацией. Полное решение для управления футбольными командами, игроками и матчами.', visit: 'Перейти на сайт' },
      openDevUZ: { title: 'OpenDevUZ', description: 'Образовательная веб‑платформа с бесплатными IT‑курсами и вакансиями. Пользователи могут изучать курсы и откликаться на вакансии.', visit: 'Перейти на сайт' },
      shutupBot: { title: 'Shut up Telegram web-bot', description: 'Бот‑модератор, помогающий администраторам управлять группами: отслеживает нарушения и применяет необходимые ограничения.', viewCode: 'Посмотреть код' },
      cakeSellerBot: { title: 'Cake Seller Telegram web-bot', description: 'Бот для оформления заказов на торты. Пользователь выбирает категории, оформляет заказ и настраивает доставку.', viewCode: 'Посмотреть код' },
      pdfBooksBot: { title: 'PDF-books Telegram web-bot', description: 'Бот для поиска PDF‑версий книг. Включает поиск, категории и быстрые отправки.', viewCode: 'Посмотреть код' },
      stanfordacademy: { title: 'Stanford Academy', description: 'Личный веб‑сайт образовательного центра. Современный и адаптивный веб‑сайт, демонстрирующий курсы, преподавателей и образовательные программы.', visit: 'Перейти на сайт' },
      stanfordacademyCRM: { title: 'Stanford Academy CRM', description: 'CRM‑система для образовательного центра. Комплексная система управления для студентов, курсов, преподавателей и административных задач.', visit: 'Перейти на сайт' },
      tricorpCRM: { title: 'TriCorp CRM', description: 'CRM‑система для образовательных центров с документацией. Полное CRM‑решение с комплексной документацией для управления несколькими образовательными центрами.', visit: 'Перейти на сайт' },
      moreProjects: { title: 'Больше работ', description: 'Помимо этих проектов, я занимаюсь небольшими проектами и экспериментами, постоянно расширяя навыки на практике.', discuss: 'Обсудить ваш проект' }
    },
    skills: { title: 'Полнофункциональная разработка' },
    certifications: { title: 'Сертификаты' },
    contact: {
      title: 'Связаться со мной',
      sendMessage: 'Отправить мне сообщение',
      name: 'Полное имя',
      email: 'Электронная почта',
      message: 'Сообщение',
      send: 'Отправить сообщение',
      info: { instagram: 'Instagram', github: 'GitHub', telegram: 'Телеграм', email: 'Почта', phone: 'Телефон' }
    },
    footer: {
      copyright: '© 2025 Shaxriyor Karimberdiyev. Все права защищены.',
      links: { home: 'Главная', about: 'Обо мне', experience: 'Опыт работы', projects: 'Проекты', skills: 'Навыки', certifications: 'Сертификаты', contact: 'Контакты' }
    }
  }
}

