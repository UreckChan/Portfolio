import React, { use } from "react";
import { useLenguaje } from "../hooks/useLenguaje";

const Footer = () => {
const year = new Date().getFullYear();
const {lenguajeData,lenguaje} = useLenguaje();
  return (
    <footer id="contact" className="footer">
      <p>{lenguajeData["footer-title"][lenguaje]}</p>

      <a href={`mailto:${lenguajeData["mail"]}`}><strong>{lenguajeData["mail"]}</strong></a>

  <div class="social-icons">
    <a href="https://github.com/UreckChan/" target="_blank" class="icon github"></a>
    <a href="https://www.linkedin.com/in/uriel-gomez-becerril" target="_blank" class="icon linkedin"></a>
    <a href="https://ureckchan.github.io/Portfolio/" target="_blank" class="icon portfolio"></a>
  </div>

      <small> &copy; {year} {lenguajeData["footer-copyright"][lenguaje]}</small>
    </footer>
  );
}
export default Footer;