import React, { useState, useEffect } from "react";

// DATA
import { allProjects } from "../data";

// COMPONENTS
import ProjectCard from "../Components/ProjectCard/ProjectCard";



function HomePage() {

    // states
    const [projectList, setProjectList] = useState([]);
    
    fetch(`${process.env.REACT_APP_API_URL}projects`)
    .then((results) => {
        return results.json();
    })
    .then((data) => {
        setProjectList(data);
    });
    
    // .then = asychronus loop 
    // useEffect(() => {
    //     setProjectList(allProjects);
    // }, []);

    return (
        <div id="project-list">
            {projectList.map((projectData, key) => {
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