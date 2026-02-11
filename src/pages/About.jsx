// src/pages/About.jsx
import { PageContainer } from "../components/ui/primitives/PageContainer";
import AboutHeroSection from "../components/about/sections/AboutHeroSection.jsx";
import AboutApproachSection from "../components/about/sections/AboutApproachSection.jsx";
import AboutMapSection from "../components/about/sections/AboutMapSection.jsx";
import AboutClosingSection from "../components/about/sections/AboutClosingSection.jsx";
import AboutServicesSection from "../components/about/sections/AboutServicesSection.jsx";
import AboutStorySection from "../components/about/sections/AboutStorySection.jsx";



export default function About({ data }) {
    const {
        intro,
        map,
        shortcuts,
        oneLiner,
        story,
        approach,
        services,
        closing,
    } = data || {};

    return (
        <PageContainer className="relative flex flex-col gap-10 md:gap-12">

            <AboutHeroSection intro={intro} />

            <AboutMapSection
                map={map}
                shortcuts={shortcuts}
                oneLiner={oneLiner}
                closing={closing}
            />

            {story && <AboutStorySection story={story} />}

            {approach && <AboutApproachSection approach={approach} />}

            {!!services?.items?.length && (
                <AboutServicesSection services={services} />
            )}

            {closing && <AboutClosingSection closing={closing} />}

        </PageContainer>
    );
}

