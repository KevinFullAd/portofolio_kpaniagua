import { Reveal } from "../../ui/animations/Reveal.jsx";
import { H3 } from "../../ui/primitives/typography/H3";
import { CertificationCard } from "../CertificationCard";
import { Divider } from "../../ui/primitives/Divider";

export default function ResumeCertificationsSection({ certifications }) {
    return (
        <>
            <Reveal as="section" className="space-y-5">
                <H3>{certifications.title}</H3>

                <div className="grid gap-4 md:grid-cols-2">
                    {certifications.items.map((c, i) => (
                        <Reveal key={c.id} delay={0.04 * i}>
                            <CertificationCard
                                title={c.title}
                                org={c.org}
                                year={c.year}
                                description={c.description}
                                href={c.link}
                            />
                        </Reveal>
                    ))}
                </div>
            </Reveal>

            <Reveal y={6} duration={0.35}>
                <Divider className="opacity-70" />
            </Reveal>
        </>
    );
}
