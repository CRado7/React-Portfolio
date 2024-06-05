import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'dist', // Specify your output directory
    rollupOptions: {
      input: {
        main: '../client/src/main.jsx' // Adjust the path to your main entry file
      }
    }
  }
});
