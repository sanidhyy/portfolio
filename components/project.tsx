"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useTransform } from "framer-motion";
import { useScroll } from "framer-motion";

import { projectsData } from "@/constants";

type ProjectProps = (typeof projectsData)[number];

const Project = ({ title, description, tags, imageUrl }: ProjectProps) => {
  const projectRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: projectRef,
    offset: ["0 1", "1.33 1"],
  });
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
      <div className="bg-gray-100 max-w-[42rem] group-even:pl-8 border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[20rem] rounded-lg hover:bg-gray-200 transition">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700">{description}</p>

          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, i) => (
              <li
                key={`${title}-tags-${i}`}
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <Image
          src={imageUrl}
          alt={title}
          quality={95}
          className="absolute top-8 -right-40 w-[28.25rem]
         rounded-t-lg shadow-2xl group-even:right-[initial] 
        group-even:-left-40 group-hover:-translate-x-3
         group-hover:translate-y-3 group-hover:-rotate-2

         group-even:group-hover:translate-x-3
         group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2

          group-hover:scale-[1.04] transition"
        />
      </div>
    </motion.article>
  );
};

export default Project;
