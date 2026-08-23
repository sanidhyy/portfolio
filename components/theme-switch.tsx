"use client";

import { useThemeContext } from "@/context/theme-context";
import { BsMoon, BsSun } from "react-icons/bs";

const ThemeSwitch = () => {
  // Use the theme context to access the current theme and the toggleTheme function
  const { theme, toggleTheme } = useThemeContext();

  return (
    <button
      type="button"
      className="fixed bottom-5 right-5 bg-white/80 dark:bg-gray-950/80 w-12 h-12 backdrop-blur-[0.5rem] border border-white/40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all"
      onClick={toggleTheme} // Toggle the theme when the button is clicked
      aria-label="Toggle Dark/Light mode"
      title="Toggle Dark/Light mode"
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}{" "}
      {/* Render sun or moon icon based on the current theme */}
    </button>
  );
};

export default ThemeSwitch;
