export const PageContainer = ({ children, className }) => {
    return (
        <section className={`${className} paggg p-10`}>
            {children}
        </section>
    )
}