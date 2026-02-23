import { useEffect, useMemo, useState } from "react"; 
import { useTheme } from "../app/providers/ThemeProvider";
import { useAccent } from "../app/providers/AccentProvider";

import SidebarHeader from "../components/sidebar/SidebarHeader";
import SidebarBody from "../components/sidebar/SidebarBody";

export default function Sidebar() {
    const [open, setOpen] = useState(false);
    const [openAccent, setOpenAccent] = useState(false);

    const { theme, toggleTheme } = useTheme();
    const { accent, setAccent } = useAccent();

    useEffect(() => {
        const handleResize = () => setOpen(window.innerWidth > 1024);
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const accentOptions = useMemo(
        () => [
            { key: "cyan", rgb: "56 189 248" },
            { key: "red", rgb: "248 113 113" },
            { key: "yellow", rgb: "250 204 21" },
            { key: "violet", rgb: "167 139 250" },
            { key: "green", rgb: "34 197 94" },
        ],
        []
    );

    return (
        <aside className="w-full  lg:max-w-90 lg:min-w-80 ">
            <div
                className="
                relative rounded-2xl
                bg-(--bg-sec)
                border border-(--border)
                shadow-(--shadow) 
                "
            >
                <SidebarHeader 
                    name="Kevin Paniagua"
                    role="Desarrollador web"
                    open={open}
                    onToggleOpen={() => setOpen((v) => !v)}
                />

                {/* Divider */}
                <div className={`h-px bg-(--border) mx-5 ${open ? 'block' : 'hidden'}`} />

                <SidebarBody
                    open={open}
                    theme={theme}
                    onToggleTheme={toggleTheme}
                    accent={accent}
                    onSetAccent={setAccent}
                    openAccent={openAccent}
                    onToggleAccent={() => setOpenAccent((v) => !v)}
                    onCloseAccent={() => setOpenAccent(false)}
                    accentOptions={accentOptions}
                />
            </div>
        </aside>
    );
}
