// Sidebar.jsx
import { useState, useEffect } from "react";
import { ChevronDown, AtSign, Linkedin, Github, MapPin } from "lucide-react";
import { SiWhatsapp } from "@icons-pack/react-simple-icons";
import FlashIcon from "../components/ui/FlashIcon";
import avatar from "../assets/images/my-avatar.png";
import { useTheme } from "../app/providers/ThemeProvider";
import { useAccent } from "../app/providers/AccentProvider";

export default function Sidebar() {
    const [open, setOpen] = useState(false);
    const [openAccent, setOpenAccent] = useState(false);

    // ThemeProvider: solo theme
    const { theme, toggleTheme } = useTheme();

    // AccentProvider: solo accent (color UI)
    const { accent, setAccent } = useAccent();

    useEffect(() => {
        const handleResize = () => setOpen(window.innerWidth > 1024);
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <aside className="w-full lg:w-[25%]">
            <div
                className="
                relative rounded-2xl 
                bg-[color:var(--bg-sec)]
                border border-[color:var(--border)]
                shadow-[var(--shadow)]
                "
            >
                {/* Header */}
                <div className="flex items-center gap-4 p-5 relative">
                    {/* Avatar */}
                    <div className="w-16 h-16 rounded-2xl bg-[color:var(--bg-card)] border border-[color:var(--border)] flex items-center justify-center">
                        <img
                            src={avatar}
                            alt="Kevin Paniagua"
                            className="w-16 h-16 rounded-xl object-cover"
                        />
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                        <h1 className="text-xl font-semibold text-(--text) leading-tight truncate">
                            Kevin Paniagua
                        </h1>

                        <span className="inline-block mt-1 px-3 py-1 text-xs rounded-sm bg-[color:var(--bg-card)] border border-[color:var(--border)] text-(--text-muted)">
                            Desarrollador web
                        </span>

                    </div>

                    {/* Panel (recuadro) de controles */}
                    <div className="hidden lg:flex items-center gap-3">
                        <div className="px-3 py-2 rounded-xl bg-[color:var(--bg-card)] border border-[color:var(--border)]">
                            <p className="text-[10px] tracking-wider text-(--text-muted) uppercase">
                                Apariencia
                            </p>

                            <div className="mt-2 flex items-center gap-2">
                                <button
                                    onClick={toggleTheme}
                                    className="px-2.5 py-1.5 rounded-md border border-[color:var(--border)] bg-[color:var(--bg-sec)] text-(--text) text-xs"
                                >
                                    Tema: {theme}
                                </button>

                                <label className="flex flex-col">
                                    <span className="text-[10px] text-(--text-muted) mb-1">
                                        Color
                                    </span>
                                    <select
                                        value={accent}
                                        onChange={(e) => setAccent(e.target.value)}
                                        className="
                                        px-2.5 py-1.5 rounded-md
                                        border border-[color:var(--border)]
                                        bg-[color:var(--bg-sec)]
                                        text-(--text)
                                        text-xs
                                        outline-none
                                        "
                                    >
                                        <option value="cyan">Cyan</option>
                                        <option value="violet">Violet</option>
                                        <option value="yellow">Yellow</option>
                                        <option value="red">Red</option>
                                        <option value="neon">Neon</option>
                                    </select>
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* Toggle (mobile) */}
                    <button
                        onClick={() => setOpen(!open)}
                        aria-label="Toggle contacts"
                        className="
                        ml-auto absolute right-0 top-0 lg:hidden
                        p-2 rounded-bl-2xl rounded-tr-xl w-10 h-10 overflow-hidden
                        focus:outline-none focus-visible:outline-none
                        "
                        style={{
                        backgroundImage: "linear-gradient(135deg, var(--accent-soft) 0%, transparent 90%)"
                        }}
                    >
                        <span
                            aria-hidden="true"
                            className="pointer-events-none absolute inset-0 rounded-bl-2xl"
                            style={{
                                background: `
                                linear-gradient(to bottom right, rgb(var(--accent-rgb) / 0.95), rgb(var(--accent-rgb) / 0) 65%) top / 100% 1px no-repeat,
                                linear-gradient(to bottom right, rgb(var(--accent-rgb) / 0.95), rgb(var(--accent-rgb) / 0) 65%) left / 1px 100% no-repeat
                                `,
                            }}
                        />
                        <ChevronDown
                            style={{ color: "var(--accent-solid)" }}
                            className={`transition-transform duration-300 ${open ? "rotate-180" : "rotate-0"
                                }`}
                        />
                    </button>
                </div>

                {/* Divider */}
                <div className="h-px bg-[color:var(--border)] mx-5" />

                {/* Contacts */}
                <div
                    className={`
            transition-all duration-300 
            ${open ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"}
          `}
                >
                    <div className="p-5 space-y-5 text-sm">
                        {/* Email */}
                        <div className="flex items-start gap-4">
                            <div className="w-9 h-9 rounded-lg bg-[color:var(--bg-card)] border border-[color:var(--border)] flex items-center justify-center text-[color:var(--accent-solid)] shadow-[var(--accent-glow)]">
                                <AtSign />
                            </div>
                            <div className="min-w-0">
                                <p className="text-(--text-muted) text-xs">EMAIL</p>
                                <a
                                    href="mailto:kevin.paniagua@gmail.com"
                                    className="transition-colors"
                                    style={{ color: "var(--text)" }}
                                    onMouseEnter={(e) => e.target.style.color = "var(--accent-rgb)"}
                                    onMouseLeave={(e) => e.target.style.color = "var(--text)"}
                                >
                                    kevin.paniagua@gmail.com
                                </a>
                            </div>
                        </div>

                        {/* Location */}
                        <div className="flex items-start gap-4">
                            <div className="w-9 h-9 rounded-lg bg-[color:var(--bg-card)] border border-[color:var(--border)] flex items-center justify-center text-[color:var(--accent-solid)] shadow-[var(--accent-glow)]">
                                <MapPin />
                            </div>
                            <div>
                                <p className="text-(--text-muted) text-xs uppercase">
                                    Direccion
                                </p>
                                <p className="text-(--text)">Buenos Aires, Argentina.</p>
                            </div>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-[color:var(--border)] mx-5" />

                    {/* Social */}
                    <div className="p-5 flex justify-between text-(--text-muted)">
                        <div className="flex gap-4">
                            <FlashIcon flashColor="var(--accent-solid)">
                                <Linkedin />
                            </FlashIcon>
                            <FlashIcon flashColor="var(--accent-solid)">
                                <Github />
                            </FlashIcon>
                            <FlashIcon flashColor="var(--accent-solid)">
                                <SiWhatsapp />
                            </FlashIcon>
                        </div>
                        <div className="flex gap-4">
                            <FlashIcon flashColor="var(--accent-solid)">
                                <SiWhatsapp />
                            </FlashIcon>
                            <div className="relative">
                                {/* Trigger: solo color activo */}
                                <button
                                    type="button"
                                    onClick={() => setOpenAccent((v) => !v)}
                                    className="
      w-11 h-11 rounded-[18px]
      bg-[color:var(--bg-card)]
      border border-[color:var(--border)]
      shadow-[var(--shadow)]
      grid place-items-center
    "
                                    aria-label="Cambiar color"
                                    aria-expanded={openAccent ? "true" : "false"}
                                >
                                    <span
                                        className="w-8 h-8 rounded-full ring-2 ring-white/80"
                                        style={{
                                            backgroundColor: "rgb(var(--accent-rgb) / 1)",
                                            boxShadow: "0 0 16px rgb(var(--accent-rgb) / 0.35)",
                                        }}
                                        aria-hidden="true"
                                    />
                                </button>

                                {/* Dropdown absoluto */}
                                {openAccent && (
                                    <div
                                        className="
                                        absolute -left-2 z-50
                                        top-full mt-2
                                        lg:top-auto lg:mt-0 lg:bottom-full lg:mb-2
                                        w-14 rounded-[28px]
                                        bg-[color:var(--bg-card)]
                                        border border-[color:var(--border)]
                                        shadow-[var(--shadow)]
                                        py-3 flex flex-col items-center gap-3
                                        "
                                        role="listbox"
                                        aria-label="Elegir color"
                                    >
                                        {[
                                            { key: "cyan", rgb: "56 189 248" },
                                            { key: "red", rgb: "248 113 113" },
                                            { key: "yellow", rgb: "250 204 21" },
                                            { key: "violet", rgb: "167 139 250" },
                                            { key: "green", rgb: "34 197 94" },
                                        ].map((c) => {
                                            const active = accent === c.key;

                                            return (
                                                <button
                                                    key={c.key}
                                                    type="button"
                                                    onClick={() => {
                                                        setAccent(c.key);
                                                        setOpenAccent(false);
                                                    }}
                                                    className={`
                                                    relative w-9 h-9 rounded-full
                                                    transition-transform duration-150
                                                    ${active ? "scale-110" : "hover:scale-105"}
                                                    `}
                                                    role="option"
                                                    aria-selected={active ? "true" : "false"}
                                                    aria-label={c.key}
                                                >
                                                    {/* aro */}
                                                    <span
                                                        aria-hidden="true"
                                                        className={`
                                                            absolute inset-0 rounded-full
                                                            ${active ? "ring-2 ring-white/80" : "ring-1 ring-white/15"}
                                                        `}
                                                    />
                                                    {/* color */}
                                                    <span
                                                        aria-hidden="true"
                                                        className="absolute inset-[3px] rounded-full"
                                                        style={{
                                                            backgroundColor: `rgb(${c.rgb} / 1)`,
                                                            boxShadow: active
                                                                ? `0 0 16px rgb(${c.rgb} / 0.35)`
                                                                : `0 0 10px rgb(${c.rgb} / 0.18)`,
                                                        }}
                                                    />
                                                </button>
                                            );
                                        })}
                                    </div>
                                )}
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
}
