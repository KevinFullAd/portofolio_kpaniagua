import { Divider } from "../ui/primitives/Divider";
import { Reveal } from "../ui/animations/Reveal";

import ProjectHeroSection from "./sections/ProjectHeroSection";
import ProjectContentSections from "./sections/ProjectContentSections";
import ProjectFlowSection from "./sections/ProjectFlowSection";
import ProjectDecisionsSection from "./sections/ProjectDecisionsSection";
import ProjectVisualSection from "./sections/ProjectVisualSection";
import ProjectFooter from "./sections/ProjectFooter";

export function ProjectDetail({ work }) {
    const d = work.detail;

    return (
        <div className="flex flex-col gap-6">

            <ProjectHeroSection work={work} />

            <ProjectContentSections sections={d?.sections} />

            {d?.flow && <ProjectFlowSection flow={d.flow} />}

            {d?.decisions && <ProjectDecisionsSection decisions={d.decisions} />}

            {d?.visual && <ProjectVisualSection visual={d.visual} />}

            <Reveal y={6} duration={0.35}>
                <Divider className="opacity-70" />
            </Reveal>

            <ProjectFooter />
        </div>
    );
}
