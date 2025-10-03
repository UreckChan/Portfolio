import React from "react";
import { useLenguaje } from "../../hooks/useLenguaje";


const Me = () => {
const {lenguajeData,lenguaje} = useLenguaje();
  return (
    <section id="me" className="me-section settings-section">
        <h1 className="me-title">{lenguajeData["name"]}</h1>
        <p className="me-description">{lenguajeData["carrera-title"][lenguaje]}</p>
        <button className="button-projects">{lenguajeData["button-projects"][lenguaje]}</button>
    </section>
  );
};

export default Me;
