import { useLenguaje } from "../../hooks/useLenguaje";
import Timeline from "./components/Timeline";


const Experince = () => {
    const {lenguajeData,lenguaje} = useLenguaje();
    return (
        <section>
            <h2>{lenguajeData["experience-title"][lenguaje]}</h2>
            <Timeline 
                Duration={lenguajeData["experience-1"][lenguaje].duration}
                Title={lenguajeData["experience-1"][lenguaje].role}
                Place={lenguajeData["experience-1"][lenguaje].company}
                Dates={lenguajeData["experience-1"][lenguaje].dates}
            />
            <Timeline 
                Duration={lenguajeData["experience-2"][lenguaje].duration}
                Title={lenguajeData["experience-2"][lenguaje].role}
                Place={lenguajeData["experience-2"][lenguaje].company}
                Dates={lenguajeData["experience-2"][lenguaje].dates}
            />  
        </section>
    );
}

export default Experince;