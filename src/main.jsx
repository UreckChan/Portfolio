import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { LenguajeProvider } from './context/lenguaje.jsx'
import { ThemeProvider } from './context/theme.jsx'
import './styles/index.css'

createRoot(document.getElementById('root')).render(
  <ThemeProvider>
  <LenguajeProvider>
    <App />
  </LenguajeProvider>
  </ThemeProvider>
)
