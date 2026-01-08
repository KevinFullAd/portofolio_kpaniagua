export default function NotchSvg({
    width = 360,
    height = 64,
    notchRadius = 34,
    notchDepth = 22,
    notchX = 180 // centro por defecto
}) {
    const w = width
    const h = height
    const r = 0

    const cx = notchX
    const notchLeft = cx - notchRadius
    const notchRight = cx + notchRadius

    const d = `
    M ${r} ${h}
    H ${w - r}
    Q ${w} ${h} ${w} ${h - r}
    V ${r}
    Q ${w} 0 ${w - r} 0

    H ${notchRight}

    C ${notchRight - notchRadius * 0.15} 0
      ${cx + notchRadius * 0.55} ${notchDepth}
      ${cx} ${notchDepth}

    C ${cx - notchRadius * 0.55} ${notchDepth}
      ${notchLeft + notchRadius * 0.15} 0
      ${notchLeft} 0

    H ${r}
    Q 0 0 0 ${r}
    V ${h - r}
    Q 0 ${h} ${r} ${h}
    Z
  `

    return (
        <svg
            viewBox={`0 0 ${w} ${h}`}
            width="100%"
            height="100%"
            preserveAspectRatio="none"
        >
            <path d={d} fill="white" />
        </svg>
    )
}
