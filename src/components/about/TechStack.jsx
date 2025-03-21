import React, { useState, useEffect } from "react";
import { Card } from "semantic-ui-react";
import {
  DiJava,
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiAngularSimple,
} from "react-icons/di";
import { CgCPlusPlus } from "react-icons/cg";
import { SiMysql, SiSpringboot } from "react-icons/si";
import { FaAws, FaDocker } from "react-icons/fa";

const TechStack = () => {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div className="techstack">
      <h1
        style={{
          fontSize: "2.5rem",
          fontWeight: "bold",
          marginTop: "3rem",
          fontFamily: "Fira Code",
        }}
      >
        My{" "}
        <span style={{ color: "#32CD30" }}>
          Skill<span style={{ fontWeight: "bold" }}>Set</span>
        </span>
      </h1>
      <div className="techstack-row">
        <Card.Group itemsPerRow={width > 768 ? 5 : 2}>
          <Card raised className="item">
            <DiAngularSimple style={{ width: "100%", height: "auto", color: "red" }} />
          </Card>
          <Card raised className="item">
            <DiJava style={{ width: "100%", height: "auto", color: "red" }} />
          </Card>
          <Card raised className="item">
            <DiJavascript1 style={{ width: "100%", height: "auto", color: "#FFC300" }} />
          </Card>
          <Card raised className="item">
            <DiReact style={{ width: "100%", height: "auto", color: "#61DBFB" }} />
          </Card>
          <Card raised className="item">
            <DiNodejs style={{ width: "100%", height: "auto", color: "green" }} />
          </Card>
          <Card raised className="item">
            <DiMongodb style={{ width: "100%", height: "auto", color: "green" }} />
          </Card>
          <Card raised className="item">
            <SiMysql style={{ width: "100%", height: "auto", color: "#00758f" }} />
          </Card>
          <Card raised className="item">
            <SiSpringboot style={{ width: "100%", height: "auto", color: "green" }} />
          </Card>
          <Card raised className="item">
            <FaAws style={{ width: "100%", height: "auto", color: "orange" }} />
          </Card>
          <Card raised className="item">
            <FaDocker style={{ width: "100%", height: "auto", color: "#0db7ed" }} />
          </Card>
        </Card.Group>
      </div>
    </div>
  );
};

export default TechStack;
