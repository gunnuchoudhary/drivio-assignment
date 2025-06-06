import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "build",
  },
  resolve: {
    alias: {
      '@': path.resolve('./src'),
      '@components': path.resolve('./src/components'),
      '@uicomponents': path.resolve('./src/components/ui'),
      '@commoncomponents': path.resolve('./src/components/common'),
      '@pages': path.resolve('./src/pages'),
      '@utils': path.resolve('./src/utils'),
      '@styles': path.resolve('./src/styles'),
    },
  },
  server: {
    port: "4028",
    host: "0.0.0.0",
    strictPort: true,
  }
});
