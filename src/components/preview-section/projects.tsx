import Project from "@/components/ui/project";
import { projects } from "@/lib/projects";

const Preview_Projects = () => {
  let size: number = 1;
  return (
    <>
      <p className="text-center text-2xl font-serif mt-24">
        Featured Projects I`ve Build
      </p>
      <ul className="p-6 md:p-16 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((proj) => {
          if (size <= 4) {
            size++;
            return (
              <Project
                icon={proj.img}
                projectName={proj.projectName}
                projectLink={proj.projectLink}
                projectDescription={proj.projectDetail}
                techStack={proj.techStack}
                repository={proj.repository}
                key={proj.projectLink}
              />
            );
          } else return "";
        })}
      </ul>
    </>
  );
};

export default Preview_Projects;
