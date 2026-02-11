// src/pages/Resume.jsx

import { PageContainer } from "../components/ui/primitives/PageContainer";
import { resumeData } from "../data/resume.data";

import ResumeHeroSection from "../components/resume/sections/ResumeHeroSection.jsx";
import ResumeTimelineSection from "../components/resume/sections/ResumeTimelineSection.jsx";
import ResumeStrengthsSection from "../components/resume/sections/ResumeStrengthsSection.jsx";
import ResumeCertificationsSection from "../components/resume/sections/ResumeCertificationsSection.jsx";
import ResumeClosingSection from "../components/resume/sections/ResumeClosingSection.jsx";

export default function Resume({ className = "" }) {
    const { hero, timeline, strengths, certifications, closing } = resumeData;

    return (
        <PageContainer className={`flex flex-col gap-10 md:gap-12 ${className}`}>
            <ResumeHeroSection hero={hero} />

            <ResumeTimelineSection timeline={timeline} />

            <ResumeStrengthsSection strengths={strengths} />

            <ResumeCertificationsSection certifications={certifications} />

            {closing && <ResumeClosingSection closing={closing} />}
        </PageContainer>
    );
}
