import { useLenguaje } from "../../hooks/useLenguaje"
import Project from "./components/Project";

const Projects = () => {
    const { lenguajeData, lenguaje } = useLenguaje();
    return (
        <section id="projects" className="settings-section">
            <h2 className="title-section">{lenguajeData["projects-title"][lenguaje]}</h2>

            {Array.isArray(lenguajeData["projects"]) && lenguajeData["projects"].length > 0 && (
                lenguajeData["projects"].map((project, index) => (
                    <Project key={index} {...project} />
                ))
            )}
        </section>
    );
};

export default Projects;
