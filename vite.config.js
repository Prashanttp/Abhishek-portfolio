import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Vercel and Netlify host from the root '/', while GitHub Pages hosts under repository subpath '/Abhishek-portfolio/'
  base: process.env.VERCEL || process.env.NETLIFY ? '/' : '/Abhishek-portfolio/',
  build: {
    outDir: 'dist',
  },
});
