import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/MGIP_Web",
  plugins: [react()],
  build: {
    outDir: 'build',
    // ... any other build options you want to specify
  },
})
