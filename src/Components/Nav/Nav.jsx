import React from "react";
import { Link } from "react-router-dom";

// commented out project in link as it no longer works
// function Nav() {
//     return (
//         <nav>
//         <Link to="/">Home</Link>
//         <Link to="/project">Project</Link>
//         </nav>
//     );
// }

function Nav() {
    return (
        <nav>
        <Link to="/">Home</Link>
        </nav>
    );
}

export default Nav;