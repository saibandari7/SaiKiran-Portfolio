import React from "react";
import Typewriter from "typewriter-effect";

const TypeAnimation = () => {
  return (
    <Typewriter
      options={{
        strings: [
          "Data Analyst",
          "Machine Learning Enthusiast",
          "Cloud Computing Specialist",
          "Python & SQL Expert",
          "AWS Certified",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 60,
      }}
    />
  );
};

export default TypeAnimation;
