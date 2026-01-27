export const PageContainer = ({ children, className }) => {
    return (
        <section className={`${className}`}>
            {children}
        </section>
    )
}