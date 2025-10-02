import React, { useState } from "react";
import { useLenguaje } from "../hooks/useLenguaje";
import { useTheme } from "../hooks/useTheme";

const Header = () => {
  const { lenguajeData, lenguaje, setLenguaje } = useLenguaje();
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <header>
      <div className="logo">
        <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <path
            clipRule="evenodd"
            d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z"
            fill="currentColor"
            fillRule="evenodd"
          />
        </svg>
        <h2>{lenguajeData.name}</h2>
      </div>

      {/* Botón hamburguesa visible solo en pantallas pequeñas */}
      <button className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </button>

      {/* Menú normal en desktop y dropbar en mobile */}
      <div className={`menu ${open ? "open" : ""}`}>
        <nav>
          <a href="">{lenguajeData["header-aboutme"][lenguaje]}</a>
          <a href="">{lenguajeData["header-experience"][lenguaje]}</a>
          <a href="">{lenguajeData["header-projects"][lenguaje]}</a>
          <a href="">{lenguajeData["header-contact"][lenguaje]}</a>
        </nav>
        <div className="settings">
          <select
            name="theme"
            id="theme"
            onChange={(e) => setTheme(e.target.value)}
            value={theme}
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
          <select
            name="lenguaje"
            id="lenguaje"
            onChange={(e) => setLenguaje(e.target.value)}
            value={lenguaje}
          >
            <option value="es">Español</option>
            <option value="en">English</option>
          </select>
        </div>
      </div>
    </header>
  );
};

export default Header;
