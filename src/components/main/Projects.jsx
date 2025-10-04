import { useLenguaje } from "../../hooks/useLenguaje"
import Project from "./components/Project";

const Projects = () => {
    const { lenguajeData, lenguaje } = useLenguaje();
    return (
        <section id="projects" className="settings-section">
            <h2 className="title-section">{lenguajeData["projects-title"][lenguaje]}</h2>
            <div className="projects-container">
                {Array.isArray(lenguajeData["projects"]) && lenguajeData["projects"].length > 0 && (
                    lenguajeData["projects"].map((project, index) => (
                        <Project key={index} {...project} />
                    ))
                )}
            </div>
        </section>
    );
};

export default Projects;
