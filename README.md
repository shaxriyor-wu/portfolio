# Portfolio Website - Shaxriyor Karimberdiyev

Modern, responsive portfolio website built with React, TypeScript, and Vite. Showcasing software engineering projects, skills, and experience.

## ✨ Features

- 🎨 **Modern Design** - Clean, minimalist design with GitHub-inspired theme
- 🌙 **Dark/Light Mode** - Toggle between light and dark themes
- 🌍 **Multi-language Support** - English, Uzbek, and Russian languages
- 📱 **Fully Responsive** - World-standard responsive design for all devices
- ⚡ **Fast Performance** - Optimized with Vite for lightning-fast load times
- 🔧 **TypeScript** - Full type safety throughout the codebase
- ♿ **Accessibility** - WCAG compliant with proper ARIA labels and keyboard navigation
- 🎯 **SEO Optimized** - Meta tags and semantic HTML structure

## 🛠️ Tech Stack

- **React 18** - Modern UI library with hooks
- **TypeScript** - Type-safe development
- **Vite** - Next-generation build tool and dev server
- **CSS3** - Modern CSS with CSS Variables and Flexbox/Grid
- **Font Awesome 6** - Icon library

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ (recommended: 20+)
- **npm**, **yarn**, or **pnpm** package manager

### Installation

1. **Clone the repository** (if applicable):
```bash
git clone <repository-url>
cd portfolio
```

2. **Install dependencies**:
```bash
npm install
```

3. **Start development server**:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

4. **Build for production**:
```bash
npm run build
```

5. **Preview production build**:
```bash
npm run preview
```

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/          # React components
│   │   ├── Navigation.tsx   # Header with language switcher and theme toggle
│   │   ├── Hero.tsx        # Hero section with stats
│   │   ├── About.tsx       # About section with education and languages
│   │   ├── Experience.tsx # Work experience timeline
│   │   ├── Projects.tsx    # Featured projects showcase
│   │   ├── Skills.tsx      # Technical skills display
│   │   ├── Certifications.tsx # Certifications list
│   │   ├── Contact.tsx     # Contact information
│   │   ├── Footer.tsx      # Footer with social links
│   │   └── ScrollToTop.tsx # Scroll to top button
│   ├── contexts/           # React Context providers
│   │   ├── ThemeContext.tsx    # Theme management (light/dark)
│   │   └── LanguageContext.tsx # Language management
│   ├── data/               # Static data
│   │   └── translations.ts # Multi-language translations
│   ├── types/              # TypeScript type definitions
│   │   └── index.ts        # Shared types and interfaces
│   ├── utils/              # Utility functions
│   │   └── scroll.ts       # Smooth scroll utilities
│   ├── App.tsx             # Main application component
│   ├── main.tsx            # Application entry point
│   └── index.css           # Global styles and CSS variables
├── index.html              # HTML template
├── package.json            # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
├── tsconfig.node.json      # TypeScript config for Node
├── vite.config.ts          # Vite configuration
└── README.md               # This file
```

## 🎨 Design System

### Color Palette

**Light Theme:**
- Primary: `#0969da` (GitHub Blue)
- Secondary: `#0550ae`
- Accent: `#1f883d` (GitHub Green)
- Background: `#f6f8fa`
- Text: `#24292f`

**Dark Theme:**
- Primary: `#58a6ff`
- Secondary: `#1f6feb`
- Accent: `#3fb950`
- Background: `#010409`
- Text: `#f0f6fc`

### Typography

- **Font Family**: Inter (with system font fallbacks)
- **Font Weights**: 400, 500, 600, 700, 800, 900
- **Responsive Sizing**: Using `clamp()` for fluid typography

### Spacing System

Based on 8px grid system:
- `--spacing-xs`: 0.5rem (8px)
- `--spacing-sm`: 1rem (16px)
- `--spacing-md`: 1.5rem (24px)
- `--spacing-lg`: 2rem (32px)
- `--spacing-xl`: 3rem (48px)
- `--spacing-2xl`: 4rem (64px)

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 768px
- **Desktop**: 768px - 1024px
- **Large Desktop**: > 1024px

## 🌍 Supported Languages

- **English** (en) - Default
- **O'zbek** (uz) - Uzbek
- **Русский** (ru) - Russian

Language preference is saved in localStorage.

## 📦 Key Projects Featured

1. **JavaE Football** - Full-stack football management system (ReactJS, Flask, SQLite, Docker)
2. **OpenDevUZ** - Learning platform with IT courses and job listings
3. **Telegram Bots** - Various automation and moderation bots

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Style

- TypeScript strict mode enabled
- ESLint configured for React and TypeScript
- Consistent code formatting

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

© 2025 Shaxriyor Karimberdiyev. All rights reserved.

## 👤 Author

**Shaxriyor Karimberdiyev**
- Software Engineer
- Full-Stack Developer
- Portfolio: [View Live](https://your-portfolio-url.com)

## 🤝 Contributing

This is a personal portfolio website. For suggestions or feedback, please contact via:
- Email: shaxriyorkarimberdiyev008@gmail.com
- Telegram: [@shaxriyorkarimberdiyev](https://t.me/shaxriyorkarimberdiyev)
- GitHub: [@shaxriyor-wu](https://github.com/shaxriyor-wu)

---

Built with ❤️ using React, TypeScript, and Vite
