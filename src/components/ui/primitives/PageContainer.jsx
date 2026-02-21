export const PageContainer = ({ children, className }) => {
    return (
        <section className={`${className}  p-4 md:p-6 lg:p-8`}>
            {children}
        </section>
    )
}