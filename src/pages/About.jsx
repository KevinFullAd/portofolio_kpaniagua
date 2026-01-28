import { PageContainer } from "../components/ui/PageContainer"

export default function AboutPage({ data }) {
    return (
        <PageContainer className="max-w-5xl mx-auto  space-y-12">

            {/* Header */}
            <header className="space-y-4">
                <h2 className="text-3xl font-semibold text-(--text)">
                    {data.intro.title}
                </h2>

                <div className="space-y-3 text-(--text-muted) leading-relaxed">
                    {data.intro.paragraphs.map((text, i) => (
                        <p key={i}>{text}</p>
                    ))}
                </div>
            </header>

            {/* Services */}
            <section className="space-y-6">
                <h3 className="text-2xl font-medium text-white">
                    What I&apos;m doing
                </h3>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {data.services.map(service => (
                        <li
                            key={service.id}
                            className="bg-slate-900/60 border border-white/10 rounded-xl p-6 flex gap-4 hover:border-cyan-400/40 transition"
                        >
                            {/* Icon */}
                            <div className="shrink-0">
                                <img
                                    src={service.icon}
                                    alt={service.title}
                                    className="w-10 h-10"
                                />
                            </div>

                            {/* Content */}
                            <div className="space-y-1">
                                <h4 className="text-lg font-semibold text-white">
                                    {service.title}
                                </h4>
                                <p className="text-sm text-slate-400 leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>

        </PageContainer>
    )
}
