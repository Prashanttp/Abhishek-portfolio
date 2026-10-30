# Abhishek Choudhary – Video Editor & Graphic Designer Portfolio

A premium, modern portfolio website built with **React**, **Vite**, and clean **CSS**.

Live Repository: [https://github.com/Prashanttp/Abhishek-portfolio](https://github.com/Prashanttp/Abhishek-portfolio)

---

## 🛠️ Tech Stack & Architecture

- **Framework**: React 18 + Vite 6
- **Routing**: React Router (`HashRouter` for zero-404 GitHub Pages reliability)
- **Base Path**: `/Abhishek-portfolio/` configured in `vite.config.js`
- **Styling**: Modern dark theme with deep blacks and subtle orange accents (`#ff6b35`)
- **Automated CI/CD**: GitHub Actions workflow (`.github/workflows/deploy.yml`) builds and deploys on every push to `main`

---

## 🚀 Local Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Preview production build locally**:
   ```bash
   npm run preview
   ```

---

## 🌐 How to Publish to GitHub Pages

1. **One-Time GitHub Settings Setup**:
   - Go to your repository on GitHub: [https://github.com/Prashanttp/Abhishek-portfolio/settings/pages](https://github.com/Prashanttp/Abhishek-portfolio/settings/pages)
   - Under **Build and deployment** > **Source**, select **GitHub Actions** (instead of "Deploy from a branch").

2. **Commit and Push to GitHub**:
   ```bash
   git add .
   git commit -m "Configure React + Vite and GitHub Pages deployment workflow"
   git push origin main
   ```

3. **Automatic Deployment**:
   - The GitHub Actions workflow will automatically trigger under the **Actions** tab.
   - It runs `npm ci` and `npm run build`, uploading the `dist` folder directly to GitHub Pages.
   - Once complete, your site will be live at:
     **https://prashanttp.github.io/Abhishek-portfolio/**
