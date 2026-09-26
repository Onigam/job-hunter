import { fileURLToPath } from 'node:url';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const sharedDir = fileURLToPath(new URL('../shared', import.meta.url));
const srcDir = fileURLToPath(new URL('./src', import.meta.url));

// Static site with relative asset paths by default, so the build can be served from any
// sub-folder (GitHub Pages, S3, a plain file server...). Override with VITE_BASE=/terra-leman/.
export default defineConfig({
  base: process.env.VITE_BASE ?? './',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@shared': sharedDir,
      '@': srcDir,
    },
  },
  server: {
    // The data contract lives outside the web root (../shared).
    fs: { allow: [fileURLToPath(new URL('..', import.meta.url))] },
  },
  build: {
    target: 'es2022',
    chunkSizeWarningLimit: 1600,
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            { name: 'maplibre', test: /node_modules[\\/]maplibre-gl/ },
            { name: 'react', test: /node_modules[\\/](react|react-dom|scheduler)[\\/]/ },
          ],
        },
      },
    },
  },
});
