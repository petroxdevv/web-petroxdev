import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { LanguageProvider } from './context/LanguageContext.jsx'
import ProyectosPage from './pages/ProyectosPage.jsx'
import AvisoLegal from './pages/AvisoLegal.jsx'
import PoliticaPrivacidad from './pages/PoliticaPrivacidad.jsx'
import PoliticaCookies from './pages/PoliticaCookies.jsx'
import SoftwarePage from './pages/SoftwarePage.jsx'
import ServiciosPage from './pages/ServiciosPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LanguageProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/proyectos" element={<ProyectosPage />} />
        <Route path="/software" element={<SoftwarePage />} />
        <Route path="/servicios" element={<ServiciosPage />} />
        <Route path="/aviso-legal" element={<AvisoLegal />} />
        <Route path="/privacidad" element={<PoliticaPrivacidad />} />
        <Route path="/cookies" element={<PoliticaCookies />} />
      </Routes>
    </BrowserRouter>
    </LanguageProvider>
  </StrictMode>,
)
