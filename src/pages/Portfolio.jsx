import { PageContainer } from "../components/ui/PageContainer"
export const PortfolioPage = ({ className = "" }) => {
    return (
        <PageContainer className={`flex flex-col gap-4 ${className}`}>
            <header className="space-y-4 border border-red-500 ">
                <h2 className="text-3xl font-semibold text-(--text)">
                    Mis trabajos
                </h2>
            </header>

            <div className="
                h-50 w-full
                rounded-xl 
                border border-blue-500 text-black gap-4 flex flex-col
                p-4">     

                <div className="bg-white/20 uppercase px-6 py-1 text-(--text-muted) text-sm rounded-full w-fit">
                    App · UX/UI
                </div>

                <div>
                    <h3 className="text-2xl text-(--text) font-bold">Mil comidas</h3>
                    
                    <div className="w-[65%] text-(--text)">
                        <p>Aplicación móvil para pedir comida a domicilio.</p>
                        <div className={`h-px bg-[color:var(--border)] w-[80%] my-1`} />
                    </div>

                    <div className="min-h-4 flex justify-between align-middle items-center ">
                        <span className="text-(--text-muted)">
                            React · API · TailwindCSS
                        </span>

                        <button className="
                                w-35 h-8 
                                rounded-full 
                                bg-[color:var(--accent-solid)] 
                                text-(--text) 
                                font-medium 
                                hover:brightness-110 transition 
                                px-4 py-1"
                        >
                            Ver proyecto 
                        </button>
                    </div>
                </div>

            </div>
        </PageContainer>
    )
}