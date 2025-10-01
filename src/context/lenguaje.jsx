import { createContext, useEffect, useState } from "react";
export const LenguajeContext = createContext();

export function LenguajeProvider({ children }) {
    const [lenguaje, setLenguaje] = useState("es");

    useEffect(() => {
        const savedLanguage = localStorage.getItem("lenguaje");
        if (savedLanguage) {
            setLenguaje(savedLanguage);
        }
        else{
            setLenguaje(window.navigator.language || navigator.browserLanguage);
        }

        if(!["es", "en"].includes(lenguaje)){
            setLenguaje("en");
        }else{
            setLenguaje(lenguaje);
        }

        localStorage.setItem("lenguaje", lenguaje);
    }, []);

    return (
        <LenguajeContext.Provider value={{ lenguaje, setLenguaje }}>
            {children}
        </LenguajeContext.Provider>
    );
}
