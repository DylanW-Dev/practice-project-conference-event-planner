import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/practice-project-conference-event-planner",
  plugins: [react()],
})
