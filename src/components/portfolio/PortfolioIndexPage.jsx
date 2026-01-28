// src/pages/Portfolio/PortfolioIndexPage.jsx
import { portfolioData } from "../../data/portfolio.data";
import { WorkCard } from "../../components/portfolio/WorkCard";

export function PortfolioIndexPage() {
    const { page, works } = portfolioData;

    return (
        <>
            <header className="space-y-4">
                <h2 className="text-3xl font-semibold text-(--text)">{page.title}</h2>
            </header>

            <section className="flex flex-col gap-4">
                {works.map((w) => (
                    <WorkCard
                        key={w.id}
                        id={w.id}
                        tag={w.tag}
                        title={w.title}
                        description={w.description}
                        stack={w.stack}
                        cta={w.cta}
                        coverVariant={w.coverVariant}
                    />
                ))}
            </section>
        </>
    );
}
