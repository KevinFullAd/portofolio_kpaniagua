import { Link } from "react-router-dom";
import { Reveal } from "../../ui/animations/Reveal";

export default function ProjectFooter() {
    return (
        <Reveal as="footer" className="p-5 flex justify-end">
            <Link
                to="/portfolio"
                className="inline-flex items-center justify-center w-35 h-8 rounded-full font-semibold hover:brightness-110 transition px-4 py-1"
                style={{
                    background: "var(--accent-solid)",
                    color: "var(--text)",
                    boxShadow: "var(--accent-glow)",
                }}
            >
                Volver
            </Link>
        </Reveal>
    );
}
