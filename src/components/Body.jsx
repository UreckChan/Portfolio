import React from "react";
import Me from "./main/Me.jsx";
import AboutMe from "./main/AboutMe.jsx";
import Experince from "./main/Experince.jsx";
import Education from "./main/Education.jsx";
import Projects from "./main/Projects.jsx";


const Body = () => {
  return (
    <main className="body-page">
      <Me />
      <AboutMe />
      <Experince/>
      <Education/>
      <Projects/>
    </main>
  );
};
export default Body;
