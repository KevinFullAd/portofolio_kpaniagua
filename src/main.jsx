import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './app/App.jsx'
import './styles/index.css'
import { Analytics } from "@vercel/analytics/react";
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <App />
      <Analytics />
    </StrictMode>
  </BrowserRouter>

)
