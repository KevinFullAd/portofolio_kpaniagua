export function formatISODate(iso) {
    const [y, m, d] = (iso || "").split("-").map((x) => Number(x));
    if (!y || !m || !d) return iso;
    return `${String(d).padStart(2, "0")}/${String(m).padStart(2, "0")}/${y}`;
}