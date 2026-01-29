// src/components/portfolio/PortfolioProjectPage.jsx
import React from "react";
import { useParams, Navigate } from "react-router-dom";
import { portfolioData } from "../../data/portfolio.data";
import { ProjectDetail } from "./ProjectDetail";

export function PortfolioProjectPage() {
    const { id } = useParams();
    const work = portfolioData.works.find((w) => w.id === id);

    // Sin loaders. Si no existe, volvemos a /portfolio.
    if (!work) return <Navigate to="/portfolio" replace />;

    return <ProjectDetail work={work} />;
}
