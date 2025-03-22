import React, { useEffect, useState } from "react";
import SingleProjectCard from "./SingleProjectCard";
import projectData from "./ProjectData";
import { Card } from "semantic-ui-react";

const Project = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Check if projectData is null, undefined, or not an array
  if (!Array.isArray(projectData) || projectData.length === 0) {
    console.error("Error: projectData is null, undefined, or empty.");
    return <p>Error: No project data available.</p>;
  }

  console.log("projectData:", projectData);  // To verify the data is loaded correctly

  return (
    <div className="projects">
      <h1
        style={{
          marginTop: "3rem",
          fontFamily: "Fira Code",
          fontWeight: "bold",
        }}
      >
        My Recent <span style={{ color: "#32CD30" }}>Projects</span>
      </h1>
      <p>These are some of the projects that I have been working on in my free time!</p>

      <div className="project-cards">
        <Card.Group itemsPerRow={width > 786 ? 3 : 1}>
          {projectData.map((data, index) => (
            <SingleProjectCard className="card" key={index} projectDetails={data} />
          ))}
        </Card.Group>
      </div>
    </div>
  );
};

export default Project;
