import { AtSign, Github, Linkedin, MapPin, Moon, Sun } from "lucide-react";
import { SiWhatsapp } from "@icons-pack/react-simple-icons";
import FlashIcon from "../ui/FlashIcon";

export default function SidebarBody({
    open,
    theme,
    onToggleTheme,
    accent,
    onSetAccent,
    openAccent,
    onToggleAccent,
    onCloseAccent,
    accentOptions,
}) {
    const isLight = theme === "light";

    return (
        <div
            className={`
            transition-all duration-300
            ${open ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"}
            `}
        >
            {/* Contacts */}
            <div className="p-5 space-y-5 text-sm">
                {/* Email */}
                <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-lg bg-[color:var(--bg-card)] border border-[color:var(--border)] flex items-center justify-center text-[color:var(--accent-solid)] shadow-[var(--accent-glow)]">
                        <AtSign />
                    </div>

                    <div className="min-w-0">
                        <p className="text-(--text-muted) text-xs">EMAIL</p>
                        <a href="mailto:kevin.paniagua@gmail.com" className="xg-link">
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
                        <p className="text-(--text-muted) text-xs uppercase">Direccion</p>
                        <p className="text-(--text)">Buenos Aires, Argentina.</p>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-(--border) mx-5" />

            {/* Footer */}
            <div className="p-5 flex items-center justify-between text-(--text-muted)">
                {/* Social */}
                <div className="flex gap-4">
                    <FlashIcon flashColor="var(--accent-solid)" href="https://www.linkedin.com/in/kevinpani">
                        <Linkedin />
                    </FlashIcon>
                    <FlashIcon flashColor="var(--accent-solid)" href="https://github.com/KevinFullAd">
                        <Github />
                    </FlashIcon> 
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    {/* Theme toggle */}
                    <button
                        type="button"
                        onClick={onToggleTheme}
                        aria-label="Cambiar tema"
                        className={`
                        w-11 h-11 rounded-[18px]
                        grid place-items-center
                        border-2
                        shadow-[var(--shadow)]
                        transition-colors
                        ${isLight ? "bg-[color:var(--bg-color)]" : "bg-[color:var(--bg-card)]"}
                        `}
                        style={{ borderColor: "var(--accent-solid)" }}
                        title={`Tema actual: ${theme}`}
                    >
                        {isLight ? (
                            <Sun style={{ color: "var(--accent-solid)" }} />
                        ) : (
                            <Moon style={{ color: "var(--accent-solid)" }} />
                        )}
                    </button>

                    {/* Accent picker */}
                    <div className="relative">
                        <button
                            type="button"
                            onClick={onToggleAccent}
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

                        {openAccent && (
                            <div
                                className="
                                absolute -left-2 z-100
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
                                {accentOptions.map((c) => {
                                    const active = accent === c.key;

                                    return (
                                        <button
                                            key={c.key}
                                            type="button"
                                            onClick={() => {
                                                onSetAccent(c.key);
                                                onCloseAccent();
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
                                            <span
                                                aria-hidden="true"
                                                className={`
                                            absolute inset-0 rounded-full
                                            ${active ? "ring-2 ring-white/80" : "ring-1 ring-white/15"}
                                            `}
                                            />
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
    );
}
