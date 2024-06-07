// Import necessary dependencies and components.
"use client"; // This comment indicates that this code should run on the client side in Next.js.

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { PROJECTS_DATA } from "@/constants";
import { useSectionInView } from "@/lib/hooks";

import SectionHeading from "./section-heading";

// Define the ProjectProps type based on the PROJECTS_DATA structure.
type ProjectProps = (typeof PROJECTS_DATA)[number];

// Define the Project component for displaying individual projects.
const Project = ({
  title,
  description,
  tags,
  imageUrl,
  projectUrl,
}: ProjectProps) => {
  // Create a reference for the project element.
  const projectRef = useRef<HTMLElement>(null);

  // Use the useScroll hook to track scroll progress for animations.
  const { scrollYProgress } = useScroll({
    target: projectRef,
    offset: ["0 1", "1.33 1"],
  });

  // Define animations based on scroll progress.
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.article
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      ref={projectRef}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <div className="bg-gray-100 max-w-[42rem] sm:group-even:pl-8 border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[20rem] rounded-lg hover:bg-gray-200 transition dark:bg-white/10 dark:hover:bg-white/20">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>

          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>

          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, i) => (
              <li
                key={`${title}-tags-${i}`}
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <Link
          href={projectUrl}
          target="_blank"
          rel="noreferrer noopener"
          title={`Visit Project: ${title}`}
          className="group/project"
        >
          <Image
            src={imageUrl}
            alt={title}
            quality={95}
            className="absolute hidden sm:block top-8 -right-40 w-[28.25rem]
            rounded-t-lg shadow-2xl group-even:right-[initial] 
            group-even:-left-40 group-hover:-translate-x-3
            group-hover:translate-y-3 group-hover:-rotate-2

            group-focus/project:-translate-x-3
            group-focus/project:translate-y-3 group-focus/project:-rotate-2
            group-even:group-focus/project:translate-x-3
            group-even:group-focus/project:translate-y-3 group-even:group-focus/project:rotate-2
            
            group-focus/project:scale-[1.04]
            
            group-even:group-hover:translate-x-3
            group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2
            
            group-hover:scale-[1.04] transition"
          />
        </Link>
      </div>
    </motion.article>
  );
};

// Define the Projects component to display a list of projects.
const Projects = () => {
  // Use the 'useSectionInView' hook to track section visibility.
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
      <div>
        {PROJECTS_DATA.map((project, i) => (
          <Project key={`project-${i}`} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
