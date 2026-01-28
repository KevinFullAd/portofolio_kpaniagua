// src/app/App.jsx
import ThemeProvider from "./providers/ThemeProvider.jsx";
import AccentProvider from "./providers/AccentProvider.jsx";
import { AppRoutes } from "./router/AppRoutes.jsx";
import { BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AccentProvider>
          <AppRoutes />
        </AccentProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}
