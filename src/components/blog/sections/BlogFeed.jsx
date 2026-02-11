import { Reveal } from "../../ui/animations/Reveal";
import { SoftCard } from "../../ui/cards/SoftCard";
import NewsAccordionItem from "../NewsAccordionItem";
import Paginator from "../Paginator";

export default function BlogFeed({ blog }) {
    const {
        paged,
        openId,
        setOpenId,
        page,
        pageCount,
        setPage,
    } = blog;

    return (
        <Reveal as="div" className="space-y-4" id="news-feed">
            <div className="grid gap-3">
                {paged.length === 0 ? (
                    <SoftCard className="p-4">
                        No hay resultados.
                    </SoftCard>
                ) : (
                    paged.map((i, idx) => (
                        <Reveal key={i.id} delay={0.04 * idx}>
                            <NewsAccordionItem
                                item={i}
                                open={openId === i.id}
                                onToggle={() =>
                                    setOpenId((cur) => (cur === i.id ? null : i.id))
                                }
                            />
                        </Reveal>
                    ))
                )}
            </div>

            <Reveal>
                <SoftCard className="p-4">
                    <Paginator page={page} pageCount={pageCount} onPage={setPage} />
                </SoftCard>
            </Reveal>
        </Reveal>
    );
}
