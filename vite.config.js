import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/MGIP_Web",
  plugins: [react()],
  build: {
    outDir: 'build',  // Change this from 'build' to 'dist'
    // ... any other build options you want to specify
    chunkSizeWarningLimit: 1600
  },
});