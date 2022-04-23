import React from "react";

// DATA
import { allProjects } from "../data";

// COMPONENTS
import ProjectCard from "../Components/ProjectCard/ProjectCard";

function HomePage() {
    return (
        <div id="project-list">
            {allProjects.map((projectData, key) => {
                return <ProjectCard key={key} projectData={projectData}/>;
                // return <div key={key}>{projectData.title}</div>;

            })}
        </div>
    );
}

export default HomePage;
// {`projet-${key}`}
// ^other way to use the key in the fn above 
// instead of key, could put key={`project-${projectData.id}`} to make key more secure