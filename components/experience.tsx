"use client";

import React, { useEffect, useState } from "react";

import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { experiencesData } from "@/constants";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useSectionInView } from "@/lib/hooks";

import "react-vertical-timeline-component/style.min.css";

const Experience = () => {
  const { ref } = useSectionInView("Experience", 0.5);
  const { activeSection } = useActiveSectionContext();

  const [isExperienceSectionActive, setIsExperienceSectionActive] =
    useState(false);

  useEffect((): void => {
    if (activeSection === "Experience") {
      setIsExperienceSectionActive(true);
    }
  }, [activeSection]);
  return (
    <section ref={ref} id="experience" className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My experience</SectionHeading>

      <VerticalTimeline lineColor="">
        {experiencesData.map((experience, i) => (
          <React.Fragment key={`experience-${i}`}>
            <VerticalTimelineElement
              visible={isExperienceSectionActive}
              contentStyle={{
                background: "#f3f4f6",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight: "0.4rem solid #9ca3af",
              }}
              date={experience.date}
              icon={experience.icon}
              iconStyle={{
                background: "#fff",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize">{experience.title}</h3>
              <p className="font-normal !mt-0">{experience.location}</p>
              <p className="!mt-1 !font-normal text-gray-700">
                {experience.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
