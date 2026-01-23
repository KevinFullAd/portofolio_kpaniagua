import { createContext, useContext, useEffect, useMemo, useState } from "react";

const ThemeContext = createContext(null);
const THEME_KEY = "theme"; // solo tema

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(
        () => localStorage.getItem(THEME_KEY) || "dark"
    ); // "dark" | "light"

    useEffect(() => {
        const root = document.documentElement;
        root.setAttribute("data-theme", theme);
        localStorage.setItem(THEME_KEY, theme);
    }, [theme]);

    const value = useMemo(
        () => ({
            theme,
            setTheme,
            toggleTheme: () =>
                setTheme(t => (t === "dark" ? "light" : "dark")),
        }),
        [theme]
    );

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const ctx = useContext(ThemeContext);
    if (!ctx) {
        throw new Error("useTheme debe usarse dentro de ThemeProvider");
    }
    return ctx;
}
