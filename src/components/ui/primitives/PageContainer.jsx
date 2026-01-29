export const PageContainer = ({ children, className }) => {
    return (
        <section className={`${className} py-4 px-4 `}>
            {children}
        </section>
    )
}