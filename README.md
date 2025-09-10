# 🎯 AI Career Mentor

An intelligent career roadmap generator that creates personalized learning paths based on your interests, skills, and experience level.

![AI Career Mentor](https://img.shields.io/badge/React-19.0.0-blue) ![Vite](https://img.shields.io/badge/Vite-6.3.5-646CFF) ![TypeScript](https://img.shields.io/badge/TypeScript-5.7.2-blue) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC)

## ✨ Features

- 🤖 **AI-Powered Analysis**: Intelligent career domain selection based on your interests
- 🛤️ **Structured Learning Paths**: Step-by-step progression from beginner to advanced
- 📚 **Curated Resources**: Both free and paid learning materials
- 💼 **Career Guidance**: Job roles, top companies, and interview preparation
- 🚀 **Project Ideas**: Hands-on projects for each learning phase
- 📱 **Mobile Responsive**: Works perfectly on all devices
- 📄 **Export Options**: Download your roadmap as a text file

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd ai-career-mentor

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run deploy` - Show deployment options
- `npm run deploy:surge` - Quick deploy with Surge
- `npm run deploy:netlify` - Deploy with Netlify CLI

## 🌐 Deployment

This project is ready to deploy to any static hosting platform. See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

### Quick Deploy Options:

1. **Netlify** (Recommended)
   - Drag & drop the `dist` folder to [netlify.com](https://netlify.com)

2. **Vercel**
   - Connect your GitHub repository to [vercel.com](https://vercel.com)

3. **Surge.sh** (Quick & Free)
   ```bash
   npm install -g surge
   npm run deploy:surge
   ```

## 🏗️ Project Structure

```
src/
├── components/          # React components
│   ├── CareerForm.tsx   # User input form
│   ├── Layout.tsx       # App layout wrapper
│   └── RoadmapDisplay.tsx # Results display
├── pages/              # Page components
│   ├── Index.tsx       # Main page
│   └── NotFound.tsx    # 404 page
├── services/           # Business logic
│   └── careerMentor.ts # AI career analysis
├── types/              # TypeScript definitions
│   └── career.ts       # Career-related types
└── App.tsx            # Main app component
```

## 🎨 Tech Stack

- **Frontend**: React 19, TypeScript, Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React, React Icons
- **Animation**: Framer Motion
- **Routing**: React Router DOM

## 🔧 Configuration

The project uses Vite with optimized build settings:
- Code splitting for better performance
- Tree shaking to reduce bundle size
- Terser minification for production
- Relative paths for easy deployment

## 📱 Mobile Support

Fully responsive design that works on:
- 📱 Mobile phones
- 📱 Tablets  
- 💻 Desktop computers
- 🖥️ Large screens

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Vite](https://vitejs.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons by [Lucide](https://lucide.dev/)

---

**Ready to discover your dream career?** 🚀

[Deploy Now](./DEPLOYMENT.md) | [View Live Demo](#) | [Report Bug](#)