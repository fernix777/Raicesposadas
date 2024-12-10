import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    visualizer({
      filename: './stats.html',
      open: false
    })
  ],
  server: {
    port: 3000,
    strictPort: false,
    open: true,
    host: 'localhost'
  },
  preview: {
    port: 3000,
    strictPort: false
  },
  build: {
    // Reducir tamaño de chunks
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Separar librerías grandes en chunks separados
          if (id.includes('node_modules')) {
            return 'vendor'
          }
        }
      }
    },
    // Comprimir y minimizar
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  },
  optimizeDeps: {
    // Precargar dependencias
    include: [
      'react', 
      'react-dom', 
      'framer-motion', 
      'react-hook-form', 
      'react-icons'
    ]
  }
})
