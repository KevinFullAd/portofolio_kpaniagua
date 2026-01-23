import { useState } from "react"

export default function FlashIcon({
    children,
    flashColor = '#facc15',        // yellow-400
    baseColor = 'rgb(161 161 170)', // zinc-400
    duration = '0.6s',
    className = '',
    href = '#',
}) {
    const [pressed, setPressed] = useState(false)

    // Eliminamos handleClick si no tienes el CSS de 'icon-flash' definido fuera
    // pero mantenemos la lógica de variables.

    return (
        <a
            href={href}
            onMouseDown={() => setPressed(true)}
            onMouseUp={() => setPressed(false)}
            onMouseLeave={() => setPressed(false)}
            onTouchStart={() => setPressed(true)}
            onTouchEnd={() => setPressed(false)}
            onContextMenu={(e) => e.preventDefault()}
            className={`inline-flex items-center transition-colors ${className}`}
            style={{ 
                // Usamos el estado 'pressed' para forzar el color, 
                // si no, dejamos que el CSS (hover) maneje el resto.
                color: pressed ? flashColor : undefined,
                '--base-color': baseColor,
                '--flash-color': flashColor,
                '--icon-duration': duration,
            }}
        >
            <style jsx>{`
                a {
                    color: var(--base-color);
                }
                a:hover {
                    color: var(--flash-color) !important;
                }
            `}</style>
            {children}
        </a>
    )
}