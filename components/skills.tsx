"use client";

import { motion } from "framer-motion";

import { skillsData } from "@/constants";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const Skills = () => {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-8 text-center sm:mb-40"
    >
      <SectionHeading>My skills</SectionHeading>

      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, i) => (
          <motion.li
            id="skills"
            key={`skill-${i}`}
            className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={i}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
