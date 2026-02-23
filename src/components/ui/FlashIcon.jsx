import { useState } from "react"

export default function FlashIcon({
    children,
    flashColor = '#facc15',       
    baseColor = 'rgb(161 161 170)', 
    duration = '0.6s',
    className = '',
    href = '#',
}) {
    const [pressed, setPressed] = useState(false)
 

    return (
        <a
            href={href}
            onMouseDown={() => setPressed(true)}
            onMouseUp={() => setPressed(false)}
            onMouseLeave={() => setPressed(false)}
            onTouchStart={() => setPressed(true)}
            onTouchEnd={() => setPressed(false)}
            target="_blank"
            onContextMenu={(e) => e.preventDefault()}
            className={`inline-flex items-center transition-colors ${className}`}
            style={{  
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