import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import { ThemeProvider } from "./app/providers/ThemeProvider.jsx";
import { AccentProvider } from './app/providers/AccentProvider.jsx';
import App from './app/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <AccentProvider>
        <App />
      </AccentProvider>
    </ThemeProvider>
  </StrictMode>,
)
