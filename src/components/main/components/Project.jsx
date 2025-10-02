import { useLenguaje } from "../../../hooks/useLenguaje";

const Project = ({image, title, description, technologies, button, link}) => {
    const { lenguaje } = useLenguaje();

    return (
        <div>
            <div>
                <img src={image} alt={title[lenguaje]} />
            </div>
            <div>
                <h3>{title[lenguaje]}</h3>
                <p>{description[lenguaje]}</p>
                 <ul>
                     {Array.isArray(technologies) && technologies.map((tech, index) => (
                         <li key={index}>{tech}</li>
                     ))}
                 </ul>
                 <a href={link}>
                     <button>{button[lenguaje]}</button>
                 </a>
             </div>
        </div>
    )
}
export default Project