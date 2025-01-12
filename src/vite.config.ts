import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 3000, // Default port for the dev server
    open: true, // Automatically open the browser on start
  },
  build: {
    outDir: 'dist', // Output directory for the build
  },
});
