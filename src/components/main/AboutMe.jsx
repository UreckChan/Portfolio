import React from "react";
import { useLenguaje } from "../../hooks/useLenguaje";


const AboutMe = () => {
  const {lenguajeData,lenguaje} = useLenguaje();
  return (
    <section>
      <h2>{lenguajeData["aboutme-title"][lenguaje]}</h2>
      <p>{lenguajeData["aboutme-description"][lenguaje]}</p>
    </section>
  );
};

export default AboutMe;