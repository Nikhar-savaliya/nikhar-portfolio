import Project from "@/components/ui/project";
import { projects } from "@/lib/projects";

const Projects = () => {
  return (
    <>
      <p className="text-center text-2xl font-serif mt-20 mb-8 mx-2">
        Presenting a Comprehensive List of My Projects
      </p>
      <ul className=" px-6 md:px-16 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((proj) => (
          <Project
            icon={proj.img}
            projectName={proj.projectName}
            projectLink={proj.projectLink}
            projectDescription={proj.projectDetail}
            techStack={proj.techStack}
            repository={proj.repository}
            key={proj.projectLink}
          />
        ))}
      </ul>
    </>
  );
};

export default Projects;
