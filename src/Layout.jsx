import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useTheme } from "./context/ThemeContext";

// Ordered tab indices for determining slide direction
const ROUTE_ORDER = { "/": 0, "/about": 1, "/projects": 2, "/contact": 3 };

const slideVariants = {
  enter: (dir) => ({
    x: dir >= 0 ? "60%" : "-60%",
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
  },
  exit: (dir) => ({
    x: dir >= 0 ? "-60%" : "60%",
    opacity: 0,
    transition: { duration: 0.18, ease: "easeIn" },
  }),
};

const Layout = () => {
  const location = useLocation();
  const { theme } = useTheme();

  // Track previous path to compute slide direction before the effect runs
  const prevPathRef = useRef(location.pathname);
  const currOrder = ROUTE_ORDER[location.pathname] ?? 0;
  const prevOrder = ROUTE_ORDER[prevPathRef.current] ?? 0;
  const direction = currOrder >= prevOrder ? 1 : -1;

  useEffect(() => {
    prevPathRef.current = location.pathname;
  }, [location.pathname]);

  // Only animate on desktop (≥ 768px); mobile gets instant transitions
  const [isDesktop, setIsDesktop] = useState(
    () => window.matchMedia("(min-width: 768px)").matches,
  );
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const handler = (e) => setIsDesktop(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <div
      className={`min-h-screen justify-between flex-col flex ${theme.bg} overflow-x-hidden`}
    >
      <div className="mx-auto flex flex-col max-w-5xl w-full text-white px-4 lg:px-0">
        <Header />
        <main className="w-full">
          {isDesktop ? (
            <AnimatePresence mode="wait" initial={false} custom={direction}>
              <motion.div
                key={location.pathname}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
              >
                <Outlet />
              </motion.div>
            </AnimatePresence>
          ) : (
            <Outlet />
          )}
        </main>
      </div>
      <div className="static w-full bg-blue-950 bg-opacity-30 mt-24">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
