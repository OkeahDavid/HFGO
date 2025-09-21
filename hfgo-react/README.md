# His Family Global Outreach - React Application# React + TypeScript + Vite



A modern React application built with Vite, TypeScript, and Material-UI for His Family Global Outreach church website.This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.



## 🚀 FeaturesCurrently, two official plugins are available:



- **Modern React**: Built with React 18 and TypeScript for type safety- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh

- **Vite**: Lightning-fast development and build tool- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

- **Material-UI**: Modern, accessible UI components with consistent design

- **Responsive Design**: Mobile-first approach that works on all devices## Expanding the ESLint configuration

- **React Router**: Client-side routing for smooth navigation

- **Typewriter Effect**: Interactive text animation on the homepageIf you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

- **Custom Theme**: Branded colors and typography matching the original design

```js

## 📁 Project Structureexport default defineConfig([

  globalIgnores(['dist']),

```  {

src/    files: ['**/*.{ts,tsx}'],

├── components/          # Reusable React components    extends: [

│   └── Layout.tsx      # Main layout with navigation and footer      // Other configs...

├── pages/              # Page components

│   ├── Home.tsx        # Homepage with hero section      // Remove tseslint.configs.recommended and replace with this

│   ├── About.tsx       # About page      tseslint.configs.recommendedTypeChecked,

│   ├── Contact.tsx     # Contact information      // Alternatively, use this for stricter rules

│   ├── History.tsx     # Church history      tseslint.configs.strictTypeChecked,

│   └── Fellowship.tsx  # Fellowship activities      // Optionally, add this for stylistic rules

├── hooks/              # Custom React hooks      tseslint.configs.stylisticTypeChecked,

│   └── useTypewriter.ts # Typewriter text effect

├── utils/              # Utility functions      // Other configs...

│   └── navigation.ts   # Navigation menu configuration    ],

├── types/              # TypeScript type definitions    languageOptions: {

│   └── index.ts        # Common interfaces      parserOptions: {

├── assets/             # Static assets        project: ['./tsconfig.node.json', './tsconfig.app.json'],

│   └── images/         # Image files        tsconfigRootDir: import.meta.dirname,

├── theme.ts            # Material-UI theme configuration      },

└── App.tsx             # Main application component      // other options...

```    },

  },

## 🛠️ Installation & Setup])

```

1. **Install dependencies**

   ```bashYou can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

   npm install

   ``````js

// eslint.config.js

2. **Start development server**import reactX from 'eslint-plugin-react-x'

   ```bashimport reactDom from 'eslint-plugin-react-dom'

   npm run dev

   ```export default defineConfig([

  globalIgnores(['dist']),

3. **Build for production**  {

   ```bash    files: ['**/*.{ts,tsx}'],

   npm run build    extends: [

   ```      // Other configs...

      // Enable lint rules for React

4. **Preview production build**      reactX.configs['recommended-typescript'],

   ```bash      // Enable lint rules for React DOM

   npm run preview      reactDom.configs.recommended,

   ```    ],

    languageOptions: {

## 📦 Dependencies      parserOptions: {

        project: ['./tsconfig.node.json', './tsconfig.app.json'],

### Core        tsconfigRootDir: import.meta.dirname,

- **React 18** - UI library      },

- **TypeScript** - Type safety      // other options...

- **Vite** - Build tool and dev server    },

  },

### UI & Styling])

- **@mui/material** - Material-UI components```

- **@emotion/react** - CSS-in-JS styling
- **@emotion/styled** - Styled components
- **@mui/icons-material** - Material Design icons

### Routing
- **react-router-dom** - Client-side routing

## 🎨 Original to React Conversion

This project was converted from a static HTML/CSS website to a modern React application:

### Key Improvements
- **Component-based architecture** for better maintainability
- **TypeScript** for enhanced development experience
- **Material-UI** for consistent design system
- **React Router** for smooth navigation
- **Responsive design** improvements
- **Modern tooling** with Vite for faster development

### Preserved Features
- Original design and branding
- Navigation structure
- Content layout
- Interactive elements (typewriter effect)
- Social media links
- Contact information

## 🌐 Pages

- **Home** (`/`) - Hero section with typewriter effect
- **About** (`/about`) - Mission and vision
- **Values** (`/values`) - What we do (placeholder)
- **History** (`/history`) - Church history and foundation
- **Beliefs** (`/beliefs`) - Core beliefs (placeholder)
- **Founder** (`/founder`) - Dennis & Rita Okeah (placeholder)
- **Donations** (`/donations`) - Giving information (placeholder)
- **Fellowship** (`/fellowship`) - Community events and activities
- **Contact** (`/contact`) - Contact information and social links

## 🔧 Development

### Adding New Pages
1. Create a new component in `src/pages/`
2. Add the route in `src/App.tsx`
3. Update navigation in `src/utils/navigation.ts` if needed

### Customizing Theme
Edit `src/theme.ts` to modify colors, typography, and component styles.

### Adding Images
Place images in `src/assets/images/` and import them in components:
```typescript
import myImage from '../assets/images/my-image.jpg';
```

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- **xs**: 0px and up (mobile)
- **sm**: 600px and up (tablet)
- **md**: 900px and up (desktop)
- **lg**: 1200px and up (large desktop)

## 🚀 Deployment

The application can be deployed to any static hosting service:

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy the `dist` folder** to your hosting service

### Recommended Hosting
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

## 📄 License

This project is created for His Family Global Outreach church website.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For questions or support, please contact the development team or church administration.