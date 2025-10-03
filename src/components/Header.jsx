import React, { useState } from "react";
import { useLenguaje } from "../hooks/useLenguaje";
import { useTheme } from "../hooks/useTheme";

const Header = () => {
  const { lenguajeData, lenguaje, setLenguaje } = useLenguaje();
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);

    const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

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
        <nav className="navigation">
          <a href="#aboutme">{lenguajeData["header-aboutme"][lenguaje]}</a>
          <a href="#experience">{lenguajeData["header-experience"][lenguaje]}</a>
          <a href="#projects">{lenguajeData["header-projects"][lenguaje]}</a>
          <a href="#contact">{lenguajeData["header-contact"][lenguaje]}</a>
        </nav>
        <div className="settings">
 {/* Botón toggle tema */}
          <button onClick={toggleTheme} className="theme-toggle">
            {theme === "light" ? (
              
              // ☀️ Sol
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 18a6 6 0 100-12 6 6 0 000 12zm0-16a1 1 0 011 1v2a1 1 0 01-2 0V3a1 1 0 011-1zm0 18a1 1 0 011 1v2a1 1 0 01-2 0v-2a1 1 0 011-1zm10-9a1 1 0 01-1 1h-2a1 1 0 110-2h2a1 1 0 011 1zM6 12a1 1 0 01-1 1H3a1 1 0 110-2h2a1 1 0 011 1zm12.364 7.364a1 1 0 01-1.414 1.414l-1.414-1.414a1 1 0 011.414-1.414l1.414 1.414zm-12.728 0l1.414-1.414a1 1 0 011.414 1.414L7.05 20.778a1 1 0 01-1.414-1.414zM17.778 7.05a1 1 0 11-1.414 1.414L14.95 7.05A1 1 0 0116.364 5.636l1.414 1.414zM7.05 7.05a1 1 0 000 1.414L8.464 9.88A1 1 0 109.88 8.464L8.464 7.05A1 1 0 007.05 7.05z" />
              </svg>
            ) : (
              // 🌙 Luna
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M21.75 15.5a9 9 0 01-12.25-12.25A9 9 0 1021.75 15.5z" />
              </svg>
            )}
          </button>
          <div className="lang-toggle">
            <button
              onClick={() => setLenguaje("es")}
              className={lenguaje === "es" ? "active" : ""}
            >
              🇲🇽
            </button>
            <button
              onClick={() => setLenguaje("en")}
              className={lenguaje === "en" ? "active" : ""}
            >
              🇺🇸
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
