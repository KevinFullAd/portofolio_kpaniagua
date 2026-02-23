// src/layout/AppShell.jsx
import Sidebar from "./Sidebar.jsx";
import Navbar from "./Navbar.jsx";
import MobileNavbar from "./NavbarMobile.jsx";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect } from "react";

export default function AppShell() {
  const location = useLocation();
  const navigate = useNavigate();
  const reduce = useReducedMotion();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname]);

    const items = [
        { id: "about", path: "/about" },
        { id: "resume", path: "/resume" },
        { id: "portfolio", path: "/portfolio" },
        { id: "blog", path: "/blog" },
        { id: "contact", path: "/contact" },
    ];

    const activePage = (() => {
        const p = location.pathname;
        if (p.startsWith("/about")) return "about";
        if (p.startsWith("/resume")) return "resume";
        if (p.startsWith("/portfolio")) return "portfolio";
        if (p.startsWith("/blog")) return "blog";
        if (p.startsWith("/contact")) return "contact";
        return "about";
    })();

    const setActivePage = (id) => {
        const found = items.find((x) => x.id === id);
        navigate(found?.path || "/about");
    };

    const enterInitial = reduce ? { y: 0 } : { y: 10 };
    const enterAnimate = { y: 0 };
    const enterTransition = { duration: reduce ? 0 : 0.35, ease: [0.22, 1, 0.36, 1] };


    return (
        <motion.div
            className="
        min-h-screen
        bg-(--bg-main) text-(--text)
        flex flex-col lg:flex-row
        p-4 pb-24 lg:p-10 2xl:px-45
        gap-4
      "
            initial={enterInitial}
            animate={enterAnimate}
            transition={enterTransition}
            style={{ willChange: reduce ? "auto" : "opacity" }}
        >
            <Sidebar />

            <div
                className="flex flex-col flex-1 ml:flex-row"
                style={{ scrollbarWidth: "thin", scrollbarColor: "#4a4a4a transparent" }}
            >
                <main
                    className="
                        bg-(--bg-sec)
                        border border-(--border)
                        shadow-(--shadow)
                        z-10 flex-1 rounded-2xl
                        relative
                    "
                >
                    <Navbar activePage={activePage} setActivePage={setActivePage} />
                    <div className="overflow-hidden rounded-2xl">
                        <Outlet />
                    </div>
                </main>

                <span
                    className="
            lg:hidden
            pointer-events-none
            fixed inset-x-0 bottom-0
            h-24 z-40
            bg-linear-to-t
            from-(--bg-main)/60
            to-transparent
          "
                />

                <MobileNavbar activePage={activePage} setActivePage={setActivePage} />
            </div>
        </motion.div>
    );
}
