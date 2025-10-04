import React, { use } from "react";
import { useLenguaje } from "../hooks/useLenguaje";

const Footer = () => {
const year = new Date().getFullYear();
const {lenguajeData,lenguaje} = useLenguaje();
  return (
    <footer id="contact" className="footer">
      <p>{lenguajeData["footer-title"][lenguaje]}</p>
      <a href={`mailto:${lenguajeData["mail"]}`}><strong>{lenguajeData["mail"]}</strong></a>
      <small> &copy; {year} {lenguajeData["footer-copyright"][lenguaje]}</small>
    </footer>
  );
}
export default Footer;