import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    emptyOutDir: true // Agrega esta línea para limpiar la carpeta de salida antes de la construcción
  }
});

console.log('Configuración de Vite cargada.');
 // Agregar un console.log para verificar si la configuración se carga correctamente






