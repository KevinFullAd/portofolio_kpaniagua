import { createContext, useContext, useEffect, useMemo, useState } from "react";

const AccentContext = createContext(null);
const ACCENT_KEY = "accent"; // cyan | yellow | violet | etc

export default function AccentProvider({ children }) {
    const [accent, setAccent] = useState(
        () => localStorage.getItem(ACCENT_KEY) || "cyan"
    );

    useEffect(() => {
        const root = document.documentElement;
        root.setAttribute("data-accent", accent);
        localStorage.setItem(ACCENT_KEY, accent);
    }, [accent]);

    const value = useMemo(
        () => ({
            accent,
            setAccent,
            setCyan: () => setAccent("cyan"),
            setYellow: () => setAccent("yellow"),
            setViolet: () => setAccent("violet"),
            setRed: () => setAccent("red"),
            setNeon: () => setAccent("neon"),
        }),
        [accent]
    );

    return (
        <AccentContext.Provider value={value}>
            {children}
        </AccentContext.Provider>
    );
}

export function useAccent() {
    const ctx = useContext(AccentContext);
    if (!ctx) {
        throw new Error("useAccent debe usarse dentro de AccentProvider");
    }
    return ctx;
}
