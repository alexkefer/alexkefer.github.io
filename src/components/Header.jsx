import { NavLink } from "react-router-dom";
import { useState } from "react";
import { HiMenu, HiMoon, HiX } from "react-icons/hi";
import { HiSparkles } from "react-icons/hi2";
import { TbColorSwatch, TbDropletOff } from "react-icons/tb";
import { useTheme } from "../context/ThemeContext";

const navLinks = [
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

// Icon + tooltip representing each mode so the user knows what they're currently on
const THEME_META = {
  dark: { icon: <HiMoon className="text-2xl" />, tip: "Dark Gradient" },
  vibrant: {
    icon: <HiSparkles className="text-2xl" />,
    tip: "Vibrant Gradient",
  },
  grey: { icon: <TbDropletOff className="text-2xl" />, tip: "Dark Grey" },
};

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, cycleTheme } = useTheme();
  const { icon, tip } = THEME_META[theme.id];

  const ThemeButton = () => (
    <button
      onClick={cycleTheme}
      className="flex items-center text-violet-100 p-2 rounded-lg hover:bg-black/20 transition"
      aria-label={`Current theme: ${tip}. Click to cycle.`}
      title={tip}
    >
      {icon}
    </button>
  );

  return (
    <div className="relative flex flex-row justify-between self-stretch max-lg:px-5 z-50 py-4">
      {/* Logo / home link */}
      <div className="flex-auto my-auto text-3xl font-bold text-violet-100">
        <NavLink
          to="/"
          className="px-2 rounded-t-2xl hover:border-b-4 transition"
          onClick={() => setMenuOpen(false)}
        >
          Alex Kefer
        </NavLink>
      </div>

      {/* Desktop nav */}
      <nav className="hidden md:flex gap-8 items-center text-2xl font-bold tracking-wide uppercase text-violet-100">
        {navLinks.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `whitespace-nowrap transition ${
                isActive ? "border-b-4 border-violet-100" : "hover:border-b-4"
              }`
            }
          >
            {label}
          </NavLink>
        ))}
        <ThemeButton />
      </nav>

      {/* Mobile: theme toggle + hamburger */}
      <div className="md:hidden flex items-center gap-1">
        <ThemeButton />
        <button
          className="flex items-center text-violet-100 p-2"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? (
            <HiX className="text-3xl" />
          ) : (
            <HiMenu className="text-3xl" />
          )}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-black/50 backdrop-blur-sm flex flex-col z-50 md:hidden rounded-2xl overflow-hidden shadow-xl">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `px-6 py-4 text-xl font-bold tracking-wide uppercase text-violet-100 border-b border-white/20 last:border-b-0 transition ${
                  isActive ? "bg-white/20" : "hover:bg-white/10"
                }`
              }
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
}
