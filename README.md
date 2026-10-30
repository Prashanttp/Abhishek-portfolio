# Abhishek Choudhary – Portfolio Website

A premium, modern portfolio website for **Abhishek Choudhary – Video Editor & Graphic Designer**.

Built with semantic HTML5, modern CSS3, and lightweight vanilla JavaScript. Zero dependencies, fast-loading, mobile-first responsive design, and ready for immediate deployment on **GitHub Pages**, **Vercel**, or **Netlify**.

---

## 🌟 Features & Highlights

- **Aesthetic**: Premium dark theme with deep blacks, charcoals, and subtle orange accents (`#ff6b35`).
- **Typography & Styling**: Clean typography (`Plus Jakarta Sans` & `Space Grotesk`), glassmorphism navigation, subtle glows, and hover micro-interactions.
- **3-Page Architecture**:
  1. **Home (`index.html`)**:
     - Hero section with headline, introduction, and quick stats.
     - Polished About section highlighting 3 years of visual storytelling experience.
     - Skills & Creative Services (Commercials, Podcasts, Lecture Clips, Thumbnails, Motion Graphics, Sound Design).
     - Toolset showcase (Premiere Pro, After Effects, Photoshop, Illustrator, DaVinci Resolve, CapCut Pro).
     - Portfolio pathway teasers.
     - Direct contact card with one-click email copy & zero-backend contact form.
  2. **Video Editing Portfolio (`video-editing.html`)**:
     - 4 Google Drive embed video cards (Advertisement, Podcast, Lecture Clip 1, Lecture Clip 2).
     - 16:9 responsive aspect ratio video player containers.
     - Fullscreen/direct drive links for each video.
  3. **Graphic Design Portfolio (`graphic-design.html`)**:
     - Automatically scans and displays all three thumbnails from `thumbnails/`:
       - `Podcast_thumbnail.png`
       - `education_thumbnail.png`
       - `tech_thumbnail.png`
     - Uses each thumbnail's actual filename as its section title.
     - Interactive Lightbox modal with click-to-enlarge, keyboard navigation (Arrow keys & Escape), counter, and image download option.
- **Production Ready**: Fully static, zero external build step needed.

---

## 📁 Project Structure

```
abhishek_portfolio/
├── index.html              # Home page
├── video-editing.html      # Video Editing portfolio page
├── graphic-design.html     # Graphic Design portfolio page
├── thumbnails/             # Local thumbnails folder
│   ├── Podcast_thumbnail.png
│   ├── education_thumbnail.png
│   └── tech_thumbnail.png
├── css/
│   └── style.css           # Premium dark theme stylesheet
├── js/
│   ├── data.js             # Centralized configuration (easy editing)
│   └── main.js             # Lightbox, mobile menu, email copy
└── README.md
```

---

## 🚀 Running Locally

You can preview the website locally using any static web server:

### Option 1: Python HTTP Server (Built-in)
```bash
python3 -m http.server 8000
```
Open [http://localhost:8000](http://localhost:8000) in your browser.

### Option 2: Node.js / npx serve
```bash
npx serve .
```

### Option 3: Direct File Preview
Simply double click `index.html` to open it in your web browser.

---

## 🌐 Deploying to GitHub Pages (Free & 2 Minutes)

1. Create a new repository on GitHub (e.g. `abhishek-portfolio`).
2. Push this folder to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Abhishek Choudhary Portfolio"
   git branch -M main
   git remote add origin https://github.com/<YOUR_USERNAME>/abhishek-portfolio.git
   git push -u origin main
   ```
3. In your GitHub repository:
   - Go to **Settings** > **Pages**.
   - Under **Build and deployment** > **Source**, choose **Deploy from a branch**.
   - Select branch `main` and folder `/ (root)`, then click **Save**.
4. Your site will be live at `https://<YOUR_USERNAME>.github.io/abhishek-portfolio/`!

---

## ✏️ How to Customize / Edit Content

All data is organized cleanly so anyone can update it:
- **Change Links & Details**: Edit `js/data.js` or directly edit the HTML files.
- **Add New Videos**: Add a new video object in `js/data.js` and add an article card inside `video-editing.html`.
- **Add New Thumbnails**: Drop your image into `thumbnails/` and add the card inside `graphic-design.html`.
