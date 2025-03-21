import React from "react";
import avatar from "../../assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { FiDownloadCloud } from "react-icons/fi";
import { Button } from "@mui/material";

const linkedInURL = "https://www.linkedin.com/in/sai-kiran-bandari-91317871/";

const HomeBottomPage = () => {
  return (
    <div className="homeBottom">
      <h1 style={{ fontSize: "2.6rem", marginBottom: "3.5rem" }}>
        Some Things <span style={{ color: "#32CD30" }}>About Me</span>
      </h1>
      <div className="introduction">
        <div className="intro-text">
          <p>
            I am Sai Kiran Bandari, currently pursuing my Master's in Computer Science at the{" "}
            <span style={{ color: "#32CD30" }}>University of Central Missouri</span>.
          </p>
          <br />
          <p>
            I love working as a <span style={{ color: "#32CD30" }}>Data Analyst</span> and My tech stack includes
            Python, SQL, AWS, Azure, Power BI, and more. I am also familiar with Cloud technologies and 
            Data Visualization tools.
          </p>
          <br />
          <p>
            I have hands-on experience in developing data models, financial forecasting, and optimizing
            business performance with data-driven insights.
          </p>
          <br />
          <p>
            Check out my <span style={{ color: "#32CD30" }}>LinkedIn</span> profile for more about my background.
          </p>
        </div>
        <div className="intro-image">
          <Tilt>
            <img
              class="rounded w-36 h-36"
              src={avatar}
              alt="Avatar"
            ></img>
          </Tilt>
        </div>
      </div>
      <div className="downloadPdf">
        <a
          href={linkedInURL}
          target="_blank"
          rel="noreferrer"
        >
          <Button
            variant="contained"
            color="success"
            endIcon={<FiDownloadCloud />}
            style={{ marginBottom: "50px" }}
          >
            LinkedIn
          </Button>
        </a>
      </div>
    </div>
  );
};

export default HomeBottomPage;
