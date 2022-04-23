import React from "react";
import { oneProject } from "../data";

function ProjectPage() {
    return (
        <>
            <h2>{oneProject.title}</h2>
            <h3>Created at: {oneProject.date_created}</h3>
            <h3>{`Status: ${oneProject.is_open}`}</h3>
            <h3>Pledges:</h3>
            <ul>
                {oneProject.pledges.map((pledgeData, key) => {
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
