import { useEffect } from "react";
import CompletedProjects from "../components/CompletedProjects.jsx";
import ProjectsInDevelopment from "../components/ProjectsInDevelopment.jsx";

const Projects = () => {
  useEffect(() => {
    document.title = "Alex Kefer - Projects";
  }, []);

  return (
    <div className={"split-70-30"}>
      <CompletedProjects />
      <ProjectsInDevelopment />
    </div>
  );
};

export default Projects;
