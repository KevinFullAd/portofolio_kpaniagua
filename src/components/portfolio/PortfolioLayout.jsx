// src/components/portfolio/PortfolioLayout.jsx
import { Outlet } from "react-router-dom";
import { PageContainer } from "../ui/primitives/PageContainer";

export function PortfolioLayout({ className = "" }) {
    return (
        <PageContainer className={`flex flex-col gap-4 ${className}`}>
            <Outlet />
        </PageContainer>
    );
}
