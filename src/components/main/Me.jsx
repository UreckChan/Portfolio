import React from "react";
import { useLenguaje } from "../../hooks/useLenguaje";


const Me = () => {
const {lenguajeData,lenguaje} = useLenguaje();
  return (
    <section id="me" className="me-section settings-section">
        <h1 className="me-title">{lenguajeData["name"]}</h1>
        <p className="me-description">{lenguajeData["carrera-title"][lenguaje]}</p>
        <a href="#projects" style={{ textDecoration: 'none' }}>
        <button className="button-projects"><strong>{lenguajeData["button-projects"][lenguaje]}</strong></button>
        </a>
    </section>
  );
};

export default Me;
