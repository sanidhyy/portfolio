// Import necessary modules and types
"use client";
import React, { createContext, useContext, useState } from "react";

// Define the type for the props passed to the context provider
type ActiveSectionContextProviderProps = {
  children: React.ReactNode;
};

// Define the type for the active section name
type SectionName =
  | "Home"
  | "About"
  | "Projects"
  | "Skills"
  | "Experience"
  | "Contact";

// Define the type for the ActiveSectionContext
type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

// Create a context for managing the active section
const ActiveSectionContext = createContext<ActiveSectionContextType | null>(
  null
);

// Define the context provider component
const ActiveSectionContextProvider = ({
  children,
}: ActiveSectionContextProviderProps) => {
  // Initialize state for activeSection and timeOfLastClick
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState<number>(0);

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
};

// Custom hook to access the active section context
export const useActiveSectionContext = () => {
  const context = useContext(ActiveSectionContext);

  if (context === null) {
    throw new Error(
      "useActiveSectionContext must be used within an ActiveSectionContextProvider"
    );
  }

  return context;
};

// Export the context provider as the default export
export default ActiveSectionContextProvider;
