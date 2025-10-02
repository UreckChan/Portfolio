import { useLenguaje } from "../../hooks/useLenguaje";
import Timeline from "./components/Timeline";


const Education = ()=>{
    const {lenguajeData,lenguaje} = useLenguaje();
    return(<>
        <h2>{lenguajeData["education-title"][lenguaje]}</h2>
        <Timeline 
            Duration={lenguajeData["education-1"][lenguaje].duration}
            Title={lenguajeData["education-1"][lenguaje].degree}
            Place={lenguajeData["education-1"][lenguaje].institution}
        />
    </>)

}

export default Education;