// src/pages/PortfolioPage.jsx
import { PageContainer } from "../components/ui/PageContainer";
import { WorkCard } from "../components/portfolio/WorkCard";
import { portfolioData } from "../data/portfolio.data";

export const PortfolioPage = ({ className = "" }) => {
    const { page, works } = portfolioData;

    return (
        <PageContainer className={`flex flex-col gap-4 ${className}`}>
            <header className="space-y-4">
                <h2 className="text-3xl font-semibold text-(--text)">{page.title}</h2>
            </header>

            {works.map((w) => (
                <WorkCard
                    id={w.id}
                    key={w.id}
                    tag={w.tag}
                    title={w.title}
                    description={w.description}
                    stack={w.stack}
                    cta={w.cta}
                    href={w.href}
                    variant={w.variant}
                    animated={w.animated}
                />
            ))}
        </PageContainer>
    );
};
