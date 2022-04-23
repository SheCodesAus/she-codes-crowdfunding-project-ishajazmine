import React, { useState, useEffect } from "react";

// allows us to access parameters in the url
import { useParams } from "react-router-dom";

// data
// import { oneProject } from "../data";

function ProjectPage() {

    // state
    const [projectData, setProjectData] = useState();
    // const [projectData, setProjectData] = useState({pledges: [] });

    // hooks
    const { id } = useParams();
    
    // actions and helpers
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}projects/${id}`)
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            setProjectData(data);
        });
    }, [id]);

    // loading state
    if (!projectData) {
        return <h3>Loading Project...</h3>;
    }

    return (
        <>
            <h2>{projectData.title}</h2>
            <h3>Created at: {projectData.date_created}</h3>
            <h3>{`Status: ${projectData.is_open}`}</h3>
            <h3>Pledges:</h3>
            <ul>
                {projectData.pledges.map((pledgeData, key) => {
                    return (
                    <li>
                    {pledgeData.amount} from {pledgeData.supporter}
                    </li>
                    );
                })}
            </ul>
        </>
    );
}
/* <react fragment></react> */
// can also use <> blank - and react will know it's a react fragment

// ` - back ticks inject values into strings put value inside ${}
// eg `${value}
export default ProjectPage;
