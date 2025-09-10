# 🚀 Deployment Guide - AI Career Mentor

This guide will help you deploy your AI Career Mentor application to various hosting platforms.

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Git repository (optional but recommended)

## 🛠️ Build the Project

First, make sure your project builds successfully:

```bash
# Install dependencies
npm install

# Build for production
npm run build
```

The built files will be in the `dist/` folder.

## 🌐 Hosting Options

### 1. **Netlify (Recommended - Easiest)**

Since your project already has a `_redirects` file, Netlify is the most straightforward option.

#### Option A: Drag & Drop Deployment
1. Go to [netlify.com](https://netlify.com)
2. Sign up/Login
3. Drag and drop your `dist` folder to the deploy area
4. Your site will be live instantly!

#### Option B: Git Integration
1. Push your code to GitHub/GitLab/Bitbucket
2. Connect your repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Deploy!

**Netlify Configuration:**
- Build command: `npm run build`
- Publish directory: `dist`
- Node version: 18 (in Environment variables)

### 2. **Vercel**

1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login with GitHub
3. Import your repository
4. Vercel will auto-detect it's a Vite project
5. Deploy!

**Vercel Configuration:**
- Framework Preset: Vite
- Build Command: `npm run build`
- Output Directory: `dist`

### 3. **GitHub Pages**

1. Push your code to GitHub
2. Go to repository Settings → Pages
3. Select "GitHub Actions" as source
4. Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Setup Pages
        uses: actions/configure-pages@v4
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'
      
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### 4. **Firebase Hosting**

1. Install Firebase CLI: `npm install -g firebase-tools`
2. Login: `firebase login`
3. Initialize: `firebase init hosting`
4. Select your project and set `dist` as public directory
5. Deploy: `firebase deploy`

### 5. **Surge.sh (Quick & Free)**

1. Install Surge: `npm install -g surge`
2. Build your project: `npm run build`
3. Deploy: `surge dist/`
4. Follow the prompts

## 🔧 Environment Configuration

### For Production Builds

Update your `vite.config.ts` if needed:

```typescript
export default defineConfig({
  // ... other config
  base: './', // For relative paths
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false, // Disable sourcemaps in production
    minify: 'terser',
  },
});
```

## 📱 Mobile Optimization

Your app is already mobile-responsive thanks to Tailwind CSS, but you can add a PWA manifest:

1. Create `public/manifest.json`:

```json
{
  "name": "AI Career Mentor",
  "short_name": "Career Mentor",
  "description": "AI-powered career roadmap generator",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#3b82f6",
  "icons": [
    {
      "src": "/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

2. Add to `index.html`:

```html
<link rel="manifest" href="/manifest.json">
<meta name="theme-color" content="#3b82f6">
```

## 🚀 Quick Deploy Commands

```bash
# Build and preview locally
npm run build && npm run preview

# Deploy to Netlify (if you have Netlify CLI)
netlify deploy --prod --dir=dist

# Deploy to Vercel (if you have Vercel CLI)
vercel --prod

# Deploy to Surge
npm run build && surge dist/
```

## 🔍 Testing Your Deployment

After deployment, test these features:
- [ ] Form submission works
- [ ] Career roadmap generation
- [ ] Download functionality
- [ ] Mobile responsiveness
- [ ] All routes work (including 404 page)

## 🆘 Troubleshooting

### Common Issues:

1. **404 on refresh**: Make sure your hosting platform supports SPA routing
2. **Build fails**: Check Node.js version (use 16+)
3. **Assets not loading**: Verify `base` path in vite.config.ts
4. **CORS issues**: Check if you're using relative paths

### Need Help?

- Check the console for errors
- Verify all environment variables
- Test locally with `npm run preview`
- Check hosting platform documentation

## 📊 Performance Tips

Your app is already optimized with:
- Code splitting
- Tree shaking
- Minification
- Gzip compression (on most platforms)

For even better performance:
- Enable CDN on your hosting platform
- Add service worker for caching
- Optimize images (if you add any)

---

**Happy Deploying! 🎉**

Your AI Career Mentor is ready to help people discover their dream careers!
