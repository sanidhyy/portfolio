// Import necessary dependencies and components.
"use client"; // This comment indicates that this code should run on the client side in Next.js.

import React, { useEffect, useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { EXPERIENCES_DATA } from "@/constants";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useThemeContext } from "@/context/theme-context";
import { useSectionInView } from "@/lib/hooks";

import SectionHeading from "./section-heading";

import "react-vertical-timeline-component/style.min.css";

// Define the Experience component.
const Experience = () => {
  const { ref } = useSectionInView("Experience", 0.5);
  const { theme } = useThemeContext();
  const { activeSection } = useActiveSectionContext();

  const [isExperienceSectionActive, setIsExperienceSectionActive] =
    useState(false);

  useEffect((): void => {
    // Set isExperienceSectionActive to true when the active section is "Experience".
    if (activeSection === "Experience") setIsExperienceSectionActive(true);
  }, [activeSection]);

  return (
    <section ref={ref} id="experience" className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My experience</SectionHeading>

      <VerticalTimeline lineColor="">
        {EXPERIENCES_DATA.map((experience, i) => (
          <React.Fragment key={`experience-${i}`}>
            <VerticalTimelineElement
              visible={isExperienceSectionActive}
              contentStyle={{
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              date={experience.date}
              icon={experience.icon}
              iconStyle={{
                background:
                  theme === "light" ? "#fff" : "rgba(255, 255, 255, 0.15)",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize">{experience.title}</h3>

              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                {experience.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
};

// Export the Experience component.
export default Experience;
