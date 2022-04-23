import React from "react";
import { BrowserRouter as Router, Routes, Route } from"react-router-dom";

// STYLES
import "./App.css";

// COMPONENTS
import Nav from "./Components/Nav/Nav";

// PAGES
import HomePage from "./Pages/HomePage";
import ProjectPage from "./Pages/ProjectPage";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/project/:id" element={<ProjectPage />} />
          {/* dynamic path parameter url/ project/:id <- can be anything name, number, etc. */}
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

