import { useLenguaje } from "../../hooks/useLenguaje";
import Timeline from "./components/Timeline";


const Education = ()=>{
    const {lenguajeData,lenguaje} = useLenguaje();
    return(
    <section id="education" className="settings-section">
        <h2 className="title-section">{lenguajeData["education-title"][lenguaje]}</h2>
        <div className="timeline">
        <Timeline 
            Duration={lenguajeData["education-1"][lenguaje].duration}
            Title={lenguajeData["education-1"][lenguaje].degree}
            Place={lenguajeData["education-1"][lenguaje].institution}
        />
        </div>
    </section>);

}

export default Education;