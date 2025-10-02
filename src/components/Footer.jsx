import React, { use } from "react";
import { useLenguaje } from "../hooks/useLenguaje";

const Footer = () => {
const year = new Date().getFullYear();
const {lenguajeData,lenguaje} = useLenguaje();
  return (
    <footer>
      <a href="mailto:urielgomezbecerril@gmail.com">urielgomezbecerril@gmail.com</a>
      <small> &copy; {year} {lenguajeData["footer-copyright"][lenguaje]}</small>
    </footer>
)
}
export default Footer;