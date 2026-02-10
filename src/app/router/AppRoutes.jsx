// src/app/router/AppRoutes.jsx
import { Routes, Route, Navigate } from "react-router-dom";

import AppShell from "../../layout/AppShell.jsx";

import About from "../../pages/About.jsx"; 
import Resume from "../../pages/Resume.jsx"; 
import Contact from "../../pages/Contact.jsx";

import { PortfolioLayout } from "../../components/portfolio/PortfolioLayout.jsx";
import { PortfolioProjectPage } from "../../components/portfolio/PortfolioProjectPage.jsx";

import Portfolio from "../../pages/Portfolio.jsx";
import { aboutData } from "../../data/about.data.js";
import Blog from "../../pages/Blog.jsx";

export function AppRoutes() {
    return (
        <Routes>
            <Route element={<AppShell />}>
                <Route path="/" element={<Navigate to="/about" replace />} />

                <Route path="/about" element={<About data={aboutData} />} />
                <Route path="/resume" element={<Resume />} />

                {/* Portfolio en su propia “rama” */}
                <Route path="/portfolio" element={<PortfolioLayout />}>
                    <Route index element={<Portfolio/>} />
                    <Route path=":id" element={<PortfolioProjectPage />} />
                </Route>

                <Route path="/blog"  element={<Blog/>}/>
                <Route path="/contact"  element={<Contact />} />

                <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
        </Routes>
    );
}
