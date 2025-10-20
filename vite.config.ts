// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react-swc'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server:{
// host: "0.0.0.0", 
// }
// });

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [react(),
    
  tailwindcss(),
  ],
  server: {
    host: '0.0.0.0',  // Permite conexiones externas
    port: 5173,       // Puerto por defecto de Vite
    watch: {
      usePolling: true  // Necesario para hot reload en Docker
    }
  }
})
