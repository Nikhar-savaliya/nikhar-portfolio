"use client";

import React, { useState } from "react";
import { Project, projects } from "./projectList2";
import { Badge } from "@/components/ui/badge";
import { Github, Globe, Youtube } from "lucide-react";
import Project2 from "@/components/ui/project";
import projects2 from "@/lib/projects";

const ProjectSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project>(projects[0]);

  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
  };

  return (
    <section className="container h-1/4">
      <p className="text-center text-2xl font-serif mt-20 mb-8 mx-2">
        Presenting a Comprehensive List of My Projects
      </p>
      <div className="hidden lg:grid grid-cols-9 gap-4 p-4 h-[75vh]">
        <div className="col-span-3 scrollbar-none overflow-y-scroll px-2">
          <ul>
            {projects.map((project, index) => (
              <ProjectListItem
                handleProjectClick={handleProjectClick}
                selectedProject={selectedProject}
                project={project}
                key={project.name}
              />
            ))}
          </ul>
        </div>
        <div className="col-span-6 bg-popover rounded-lg p-4 h-full border-2">
          {selectedProject ? (
            <>
              <ProjectDetails project={selectedProject} />
            </>
          ) : (
            <p>Select a project to see the details</p>
          )}
        </div>
      </div>
      <ul className="lg:hidden md:px-16 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects2.map((proj: any) => (
          <Project2
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
    </section>
  );
};

const ProjectListItem: React.FC<{
  selectedProject: Project;
  project: Project;
  handleProjectClick: (project: any) => void;
}> = ({ selectedProject, project, handleProjectClick }) => {
  return (
    <li
      key={project.name}
      className={`mb-2 p-4 bg-card border-2 rounded-lg cursor-pointer flex items-start gap-4 ${
        selectedProject.name === project.name
          ? "text-foreground border-primary/50"
          : "text-muted-foreground/60 hover:text-foreground/80 hover:border-primary/20"
      }`}
      onClick={() => handleProjectClick(project)}
    >
      <project.icon className="mt-1 pl-1 w-7 h-7" />
      <div>
        <p className="flex items-center gap-2 text-lg font-semibold tracking-tight leading-5">
          {project.name}
        </p>
        <p className="text-sm leading-6">{project.shortDescription}</p>
      </div>
    </li>
  );
};

const ProjectDetails: React.FC<{ project: Project }> = ({ project }) => {
  const IconComponent = project.icon;
  const {
    name,
    shortDescription,
    longDescription,
    techstack: { backend, frontend },
    features,
    livePreviewLink,
    youtubeDemoLink,
    GithubRepoLink,
  } = project;
  return (
    <div className="flex flex-col gap-6 items-start p-2 text-justify rounded w-full">
      <div className="flex items-center gap-2">
        <IconComponent />
        <h2 className="text-2xl font-semibold">{name}</h2>
      </div>
      <hr className="border-1 w-full" />
      <div className="flex flex-col gap-1">
        <p className="font-bold text-lg">Description:</p>
        <p className="text-muted-foreground">{longDescription}</p>
      </div>
      <div className="flex flex-col gap-1">
        <p className="font-bold text-lg">Tech Stack:</p>{" "}
        <div className="flex items-center gap-1">
          <p className="mr-2 font-semibold text-muted-foreground">Backend:</p>
          {backend.map((itc, index) => (
            <Badge variant={"secondary"} key={index}>
              {itc}
            </Badge>
          ))}
        </div>
        <div className="flex items-center gap-1">
          <p className="mr-2 font-semibold text-muted-foreground">Frontend:</p>
          {frontend.map((itc, index) => (
            <Badge variant={"secondary"} key={index}>
              {itc}
            </Badge>
          ))}
        </div>
      </div>
      <div>
        <p className="font-bold text-lg">Features:</p>
        <ul className="list-disc pl-6 text-muted-foreground">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
      <div className="text-primary/90">
        <p className="font-bold text-lg text-foreground">Links:</p>
        <div className="flex items-center gap-4 py-2">
          {project.livePreviewLink && (
            <a
              href={livePreviewLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4 flex items-center gap-1 hover:underline leading-7"
            >
              <Globe width={20} />
              Live
            </a>
          )}
          {project.youtubeDemoLink && (
            <a
              href={youtubeDemoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4 flex items-center gap-1 hover:underline leading-7"
            >
              <Youtube width={20} />
              Demo
            </a>
          )}
          <a
            href={GithubRepoLink}
            className="mr-4 flex items-center gap-1 hover:underline leading-7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github width={20} />
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
