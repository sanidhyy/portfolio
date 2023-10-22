import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { useActiveSectionContext } from "@/context/active-section-context";
import type { SectionName } from "./types";

// Custom hook for tracking if a section is in view
export const useSectionInView = (
  sectionName: SectionName,
  threshold = 0.75
) => {
  // Use the `useInView` hook from react-intersection-observer
  const { ref, inView } = useInView({
    threshold,
  });

  // Access the active section context for setting the active section
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  // Use `useEffect` to update the active section when a section comes into view
  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      // Set the active section only if it's in view and the user hasn't recently clicked
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  // Return a ref to attach to the section element
  return {
    ref,
  };
};
