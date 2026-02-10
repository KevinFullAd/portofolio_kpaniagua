// src/lib/linking.js
export function getLinkBehavior(href) {
    const value = (href ?? "").trim();

    const isMail = /^mailto:/i.test(value);
    const isTel = /^tel:/i.test(value);
    const isExternalHttp = /^https?:\/\//i.test(value);

    const external = isExternalHttp; 

    return {
        isMail,
        isTel,
        external,
        target: external ? "_blank" : undefined,
        rel: external ? "noopener noreferrer" : undefined,
    };
}
