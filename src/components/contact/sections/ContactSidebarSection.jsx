// src/components/contact/sections/ContactSidebarSection.jsx
import { Reveal } from "../../ui/animations/Reveal.jsx";
import { SoftCard } from "../../ui/cards/SoftCard";
import { Divider } from "../../ui/primitives/Divider";
import { Muted } from "../../ui/primitives/typography/Muted";
import { ContactPill } from "../../ui/ContactPill";
import ActionRow from "../../ui/primitives/ActionRow";
import Bullet from "../../ui/primitives/Bullet";

export default function ContactSidebarSection({ email, sidebar }) {
    return (
        <div className="flex flex-col justify-between h-full gap-4">
            <Reveal as="section" amount={0.18} once>
                <SoftCard className="p-5 h-full">
                    <div className="text-(--text) font-semibold">{sidebar.channelsTitle}</div>
                    <Muted className="mt-1">{sidebar.channelsLead}</Muted>

                    <div className="mt-4 flex flex-wrap gap-2">
                        <ContactPill className="text-sm" href={`mailto:${email}`} label={email} />
                    </div>

                    <Divider className="my-4 opacity-60" />

                    <div className="space-y-2">
                        {sidebar.quickActions.map((a) => (
                            <ActionRow key={a.title} action={a} />
                        ))}
                    </div>
                </SoftCard>
            </Reveal>

            <Reveal as="section" amount={0.18} once>
                <SoftCard className="mt">
                    <div className="text-(--text) font-semibold">{sidebar.fastTitle}</div>
                    <Muted className="mt-1">{sidebar.fastLead}</Muted>

                    <Divider className="my-4 opacity-60" />

                    <div className="space-y-3">
                        {sidebar.bullets.map((b) => (
                            <Bullet key={b.title} title={b.title} desc={b.desc} />
                        ))}
                    </div>
                </SoftCard>
            </Reveal>
        </div>
    );
}
