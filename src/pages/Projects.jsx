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
          scope.current, // Animasyonun uygulanacağı element
          {
            opacity: [0, 1],
          }, // Animasyon özellikleri// Çıkış animasyon özellikleri
          { duration: 0.5, delay: 0.1 } // Çıkış animasyonunun süresi ve gecikmesi
        );
      };
      enterAnimation();
    } else {
      const exitAnimation = async () => {
        await animate(
          scope.current, // Animasyonun uygulanacağı element
          {
            opacity: [1, 0],
          }, // Çıkış animasyon özellikleri
          { duration: 0.5, delay: 0.1 } // Çıkış animasyonunun süresi ve gecikmesi
        );
        safeToRemove();
      };
      exitAnimation();
    }
  });
  return (
    <div>
      <div
        ref={scope}
        className="flex gap-5 w-auto flex-wrap p-5 justify-center"
      >
        {projectRepo.map((project, index) => (
          <ProjectCard project={project} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
