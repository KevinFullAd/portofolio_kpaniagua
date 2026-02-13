export const PageContainer = ({ children, className }) => {
    return (
        <section className={`${className}  p-10`}>
            {children}
        </section>
    )
}