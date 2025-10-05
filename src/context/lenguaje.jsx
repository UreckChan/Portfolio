import { createContext, useEffect, useState } from "react";

export const LenguajeContext = createContext();

export function LenguajeProvider({ children }) {
    const [lenguaje, setLenguaje] = useState("es");

    useEffect(() => {
        const savedLanguage = localStorage.getItem("lenguaje");

        // Detectar idioma del navegador (solo "es" o "en")
        let browserLang = (window.navigator.language || navigator.browserLanguage || "en")
            .split("-")[0]; 

        // Priorizar el guardado en localStorage, si no, usar el navegador
        let finalLang = savedLanguage || browserLang;

        // Validar que solo sea "es" o "en"
        if (!["es", "en"].includes(finalLang)) {
            finalLang = "en";
        }

        // Guardar en estado y localStorage
        setLenguaje(finalLang);
        localStorage.setItem("lenguaje", finalLang);

        console.log("Idioma detectado:", finalLang);
    }, []);

    useEffect(() => {
        // Guardar el lenguaje seleccionado en localStorage cada vez que cambie
        localStorage.setItem("lenguaje", lenguaje);
    }, [lenguaje]);

    return (
        <LenguajeContext.Provider value={{ lenguaje, setLenguaje }}>
            {children}
        </LenguajeContext.Provider>
    );
}
