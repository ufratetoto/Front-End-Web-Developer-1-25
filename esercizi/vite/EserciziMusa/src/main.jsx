import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './Navbar.jsx'
import App from './App.jsx'
import Esercizio from './esercizio.jsx'

// Crea il root per la navbar fuori dalla root principale
createRoot(document.getElementById('navbar')).render(
  <StrictMode>
    <Navbar />
  </StrictMode>
)

// Crea il root principale con la tua app
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
createRoot(document.getElementById('rooot')).render(
  <StrictMode>
    <Esercizio />
  </StrictMode>
)

