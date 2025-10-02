import React from "react";
import { useLenguaje } from "../../hooks/useLenguaje";


const Me = () => {
const {lenguajeData,lenguaje} = useLenguaje();
  return (
    <section>
        <img src="https://via.placeholder.com/150" alt="Foto de Uriel Gomez Becerril" />
        <h1>{lenguajeData["name"]}</h1>
        <p>{lenguajeData["carrera-title"][lenguaje]}</p>
        <button>{lenguajeData["button-projects"][lenguaje]}</button>
    </section>
  );
};

export default Me;
