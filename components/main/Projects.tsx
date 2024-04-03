import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center mb-20 -mt-20 py-20 max-sm:py-2"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Mes Projets
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 z-30">
        <a href="https://ac2.website/" target="_blank">
          <ProjectCard
            src="/ac2.png"
            title="Coach d'AC2"
            description="Création du site web d'un coach en développement professionnel."
          />
        </a>
        <a href="https://driver-events.com/" target="_blank">
          <ProjectCard
            src="/driver-events.png"
            title="Driver Events"
            description="Création du site web du chauffeur VTC de luxe Driver Events."
          />
        </a>
        <a href="https://lesjardinsdeco.fr/" target="_blank">
          <ProjectCard
            src="/lesjardinsdeco.png"
            title="Les Jardins d'Eco"
            description="Création du site web du paysagiste Samuel Picard."
          />
        </a>
      </div>
    </div>
  );
};

export default Projects;
