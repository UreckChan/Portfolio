import React from "react";
import { useLenguaje } from "../../hooks/useLenguaje";


const AboutMe = () => {
  const {lenguajeData,lenguaje} = useLenguaje();
  return (
    <section id="aboutme" className="settings-section">
      <h2 className="title-section">{lenguajeData["aboutme-title"][lenguaje]}</h2>
      <p className="about-description">{lenguajeData["aboutme-description"][lenguaje]}</p>
    </section>
  );
};

export default AboutMe;