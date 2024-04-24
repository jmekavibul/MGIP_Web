import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/",
  plugins: [react()],
  build: {
    outDir: 'dist',  // Change this from 'build' to 'dist'
    // ... any other build options you want to specify
  },
});