import ProjectCard from "../components/ProjectCard";
import { projectRepo } from "../../repo/projectRepo";
import { useAnimate, usePresence } from "framer-motion";
import { useEffect } from "react";

const Projects = () => {
  const [isPresent, safeToRemove] = usePresence();
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (isPresent) {
      const enterAnimation = async () => {
        await animate(
          scope.current,
          { opacity: [0, 1] },
          { duration: 0.5, delay: 0.1 }
        );
      };
      enterAnimation();
    } else {
      const exitAnimation = async () => {
        await animate(
          scope.current,
          { opacity: [1, 0] },
          { duration: 0.5, delay: 0.1 }
        );
        safeToRemove();
      };
      exitAnimation();
    }
  });

  return (
    <div
      ref={scope}
      className="flex flex-wrap justify-center items-stretch gap-5 p-5"
    >
      {projectRepo.map((project, index) => (
        <ProjectCard project={project} key={index} />
      ))}
    </div>
  );
};

export default Projects;
