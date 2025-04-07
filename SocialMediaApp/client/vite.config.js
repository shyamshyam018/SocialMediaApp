import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})


// installation of tailwind css 
// npm install tailwindcss@3
// npx tailwindcss init -p