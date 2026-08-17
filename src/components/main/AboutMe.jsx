import React from "react";
import { useLenguaje } from "../../hooks/useLenguaje";


const AboutMe = () => {
  const {lenguajeData,lenguaje} = useLenguaje();
  return (
    <section id="aboutme" className="settings-section about-section">
      <h2 className="title-section">{lenguajeData["aboutme-title"][lenguaje]}</h2>
      {/* La biografía viene en varios párrafos separados por línea en blanco */}
      {lenguajeData["aboutme-description"][lenguaje]
        .split("\n\n")
        .map((parrafo, i) => (
          <p className="about-description" key={i}>
            {parrafo}
          </p>
        ))}
    </section>
  );
};

export default AboutMe;