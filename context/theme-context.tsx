// Import necessary modules and types
"use client";
import { createContext, useContext, useEffect, useState } from "react";

// Define the available themes
type Theme = "light" | "dark";

// Define the type for the props passed to the context provider
type ThemeContextProviderProps = {
  children: React.ReactNode;
};

// Define the type for the ThemeContext
type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

// Create a context for managing the theme
const ThemeContext = createContext<ThemeContextType | null>(null);

// Define the context provider component
const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
  // Initialize state for the current theme
  const [theme, setTheme] = useState<Theme>("light");

  // Function to toggle between light and dark themes
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };

  // Check local storage and user's system preferences for theme
  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme") as Theme | null;

    if (localTheme) {
      setTheme(localTheme);

      if (localTheme === "dark") {
        document.documentElement.classList.add("dark");
      }
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to access the theme context
export const useThemeContext = () => {
  const context = useContext(ThemeContext);

  if (context === null) {
    throw new Error(
      "useThemeContext must be used within a ThemeContextProvider"
    );
  }

  return context;
};

// Export the context provider as the default export
export default ThemeContextProvider;
