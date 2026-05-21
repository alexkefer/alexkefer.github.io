import { createContext, useContext, useEffect, useState } from "react";

export const THEMES = [
  {
    id: "dark",
    label: "Dark Gradient",
    // Charcoal → dark grey → dark indigo
    bg: "bg-gradient-to-tl from-gray-900 via-gray-800 to-indigo-950 animated-background",
  },
  {
    id: "vibrant",
    label: "Vibrant Gradient",
    // Original bright gradient
    bg: "bg-gradient-to-tl from-cyan-400 via-sky-500 to-violet-600 animated-background",
  },
  {
    id: "grey",
    label: "Dark Grey",
    // Flat, no animation
    bg: "bg-slate-900",
  },
];

const ThemeContext = createContext(null);

// eslint-disable-next-line react/prop-types
export const ThemeProvider = ({ children }) => {
  const [themeIndex, setThemeIndex] = useState(() => {
    const saved = localStorage.getItem("portfolio-theme");
    const idx = THEMES.findIndex((t) => t.id === saved);
    return idx >= 0 ? idx : 0; // default: dark gradient
  });

  useEffect(() => {
    localStorage.setItem("portfolio-theme", THEMES[themeIndex].id);
  }, [themeIndex]);

  const cycleTheme = () => setThemeIndex((i) => (i + 1) % THEMES.length);

  return (
    <ThemeContext.Provider
      value={{ theme: THEMES[themeIndex], cycleTheme, themeIndex }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
