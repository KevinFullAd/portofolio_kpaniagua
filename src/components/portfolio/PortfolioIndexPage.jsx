// src/components/portfolio/PortfolioIndexPage.jsx
import React from "react";
import { portfolioData } from "../../data/portfolio.data";
import { WorkCard } from "./WorkCard";

import { H2 } from "../ui/primitives/typography/H2";
import { Muted } from "../ui/primitives/typography/Muted";

export function PortfolioIndexPage() {
    const { page, works } = portfolioData;

    return (
        <>
            <header className="space-y-2">
                <H2>{page?.title || "Mis trabajos"}</H2>
                {page?.subtitle ? <Muted>{page.subtitle}</Muted> : null}
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
