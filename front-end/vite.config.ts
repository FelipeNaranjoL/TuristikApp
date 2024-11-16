import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/TuristikApp/', // Reemplaza con el nombre de tu repositorio
  plugins: [react()],
});
