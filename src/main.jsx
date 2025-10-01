import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { LenguajeProvider } from './context/lenguaje.jsx'

createRoot(document.getElementById('root')).render(
  <LenguajeProvider>
    <App />
  </LenguajeProvider>,
)
