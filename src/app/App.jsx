// src/app/App.jsx
import ThemeProvider from "./providers/ThemeProvider.jsx";
import AccentProvider from "./providers/AccentProvider.jsx";
import { AppRoutes } from "./router/AppRoutes.jsx"; 

export default function App() {
  return ( 
      <ThemeProvider>
        <AccentProvider>
          <AppRoutes />
        </AccentProvider>
      </ThemeProvider> 
  )
}
