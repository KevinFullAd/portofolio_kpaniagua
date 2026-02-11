

import { Reveal } from "../../ui/animations/Reveal";
import { SoftCard } from "../../ui/cards/SoftCard";
import { Divider } from "../../ui/primitives/Divider";
import HeadlineItem from "../HeadlineItem";

export default function BlogSidebar({ blog }) {
    const { headlines, openFromHeadline } = blog;

    return (
        <Reveal className="space-y-4">
            <SoftCard className="p-5">
                <div className="font-semibold">Titulares</div>

                <Divider className="my-4 opacity-60" />

                <div className="divide-y divide-[rgb(255_255_255/0.08)]">
                    {headlines.map((i, idx) => (
                        <Reveal key={i.id} delay={0.04 * idx}>
                            <HeadlineItem
                                item={i}
                                onOpen={() => openFromHeadline(i.id)}
                            />
                        </Reveal>
                    ))}
                </div>
            </SoftCard>
        </Reveal>
    );
}
