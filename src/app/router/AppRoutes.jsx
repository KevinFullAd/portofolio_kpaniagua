// src/app/router/AppRoutes.jsx
import { Routes, Route, Navigate } from "react-router-dom";

import AppShell from "../../layout/AppShell.jsx";

import About from "../../pages/About.jsx"; 
import Resume from "../../pages/Resume.jsx"; 
// Portfolio (ya lo tenés en components/portfolio)
import { PortfolioLayout } from "../../components/portfolio/PortfolioLayout.jsx";
import { PortfolioIndexPage } from "../../components/portfolio/PortfolioIndexPage.jsx";
import { PortfolioProjectPage } from "../../components/portfolio/PortfolioProjectPage.jsx";

import { aboutData } from "../../data/about.data.js";

export function AppRoutes() {
    return (
        <Routes>
            <Route element={<AppShell />}>
                <Route path="/" element={<Navigate to="/portfolio" replace />} />

                <Route path="/about" element={<About data={aboutData} />} />
                <Route path="/resume" element={<Resume />} />

                {/* Portfolio en su propia “rama” */}
                <Route path="/portfolio" element={<PortfolioLayout />}>
                    <Route index element={<PortfolioIndexPage />} />
                    <Route path=":id" element={<PortfolioProjectPage />} />
                </Route>

                <Route path="*" element={<Navigate to="/portfolio" replace />} />
            </Route>
        </Routes>
    );
}
