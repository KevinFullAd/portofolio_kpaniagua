import { useState } from "react"
export default function FlashIcon({
    children,
    flashColor = '#facc15',     // yellow-400 por defecto
    baseColor = 'rgb(161 161 170)', // zinc-400
    duration = '0.6s',
    className = '',
    href = '#',
}) {

    const [pressed, setPressed] = useState(false)

    const handleClick = (e) => {
        e.currentTarget.classList.remove('icon-flash')
        void e.currentTarget.offsetWidth // reflow para reiniciar animación
        e.currentTarget.classList.add('icon-flash')
    }

    return (
        <a
            href={href}

            onClick={handleClick}
            onMouseDown={() => setPressed(true)}
            onMouseUp={() => setPressed(false)}
            onMouseLeave={() => setPressed(false)}
            onTouchStart={() => setPressed(true)}
            onTouchEnd={() => setPressed(false)}
            onContextMenu={(e) => e.preventDefault()}
            className={`inline-flex items-center transition ${className}`}
            style={{
                color: pressed ? flashColor : baseColor,
                '--icon-base': baseColor,
                '--icon-flash': flashColor,
                '--icon-duration': duration,
            }}
        >
            {children}
        </a>
    )
}
