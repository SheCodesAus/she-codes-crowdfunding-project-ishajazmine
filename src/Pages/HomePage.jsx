import React from "react";

// DATA
import { allProjects } from "../data";
import ProjectCard from "../Components/ProjectCard/ProjectCard";

function HomePage() {
    return (
        <div id="project-list">
            {allProjects.map((projectData, key) => {
                return<ProjectCard key={key} projectData={projectData}/>;
                // return <div key={key}>{projectData.title}</div>;

            })}
        </div>
    );
}

export default HomePage;