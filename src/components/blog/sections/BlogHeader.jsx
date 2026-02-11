import { Reveal } from "../../ui/animations/Reveal";
import { Eyebrow } from "../../about/Eyebrow";
import { H2 } from "../../ui/primitives/typography/H2";
import { Lead } from "../../ui/primitives/typography/Lead";
import { Chip } from "../../ui/primitives/Chip";
import FilterBar from "../FilterBar";

export default function BlogHeader({ blog }) {
    const {
        categories,
        projects,
        types,
        q, setQ,
        cat, setCat,
        proj, setProj,
        typ, setTyp,
        order, setOrder,
        from, setFrom,
    } = blog;

    return (
        <Reveal as="header" className="space-y-4">
            <div className="space-y-2">
                <Eyebrow>Blog</Eyebrow>
                <H2>Noticias cortas</H2>
                <Lead className="max-w-2xl">
                    Cambios, decisiones y avances de proyectos.
                </Lead>
            </div>

            <div className="flex flex-wrap gap-2">
                <Chip>Release</Chip>
                <Chip>Bugfix</Chip>
                <Chip>Decisión</Chip>
            </div>

            <Reveal> 
                <Reveal>
                    <FilterBar
                        q={q} setQ={setQ}
                        cat={cat} setCat={setCat}
                        proj={proj} setProj={setProj}
                        typ={typ} setTyp={setTyp}
                        order={order} setOrder={setOrder}
                        from={from} setFrom={setFrom}
                        categories={categories}
                        projects={projects}
                        types={types}
                    />
                </Reveal>

            </Reveal>
        </Reveal>
    );
}
