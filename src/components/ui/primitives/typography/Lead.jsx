export function Lead({ children }) {
    return (
        <p className="text-(--text) text-base md:text-lg leading-relaxed max-w-prose">
            {children}
        </p>
    );
}