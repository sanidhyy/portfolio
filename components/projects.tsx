import SectionHeading from "./section-heading";
import { projectsData } from "@/constants";
import Project from "./project";

const Projects = () => {
  return (
    <section id="projects" className="scroll-mt-28">
      <SectionHeading>My projects</SectionHeading>
      <div className="">
        {projectsData.map((project, i) => (
          <Project key={`project-${i}`} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
