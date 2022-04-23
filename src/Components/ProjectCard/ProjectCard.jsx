import React from "react";
import { Link } from "react-router-dom";

// styles
import "./ProjectCard.css";

// function ProjectCard({projectData})
// ^ other way to write below. use instead of below as it's neater- explodes data open and accesses only the project data.

function ProjectCard(props) {
    const { projectData } = props;
    return (
        <div className="project-card">
            <Link to={`/project/${projectData.id}`}>
            <img src={projectData.image} alt="project image"/>
            <h3>{projectData.title}</h3>
            </Link>
        </div>
    );
}

export default ProjectCard;