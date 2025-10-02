import { useContext } from "react";
import { LenguajeContext } from "../context/lenguaje";
import lenguajeData from "../lenguaje/lenguaje.json"

export function useLenguaje(){

    const {lenguaje, setLenguaje } = useContext(LenguajeContext)

    return{lenguajeData,lenguaje, setLenguaje}
}