import { useState } from "react";
import { useLenguaje } from "../../../hooks/useLenguaje";

const Project = ({image, title, description, technologies, button1, button2, link, link2}) => {
    const { lenguaje } = useLenguaje();
    const [imgError, setImgError] = useState(false);



    return (
        <div className="project-card">
            <div className="project-image">
      {!imgError ? (
        <img
          className="project-img"
          src={image}
          alt={title[lenguaje]}
          onError={() => setImgError(true)}
        />
      ) : (
        <img
          className="project-img"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzjR27rMqX4pCurY-4eY0YsqE4vPQpYTTYcJGFpiBxmkYFJZqcWdzebVUCQo139ctjP27MEMMs4Ya-S8pcqCXWCmyOBX46c-ge-a6HzlJa73aEpYHqPc6xGacXFvvOQIKZq2JeUBQYXD3b8ttw9FYFMyF6IReaLeoMcU6SYZ84ypWuoVLDInWynbjD2AVyuQNZCZPMCMSeh7UBK-VFQAMYGS2_1fUnFTkc5gvDiyA8zg_ZZ5OGI1yUAWZhKIIh3aBWjt2gfLzmqAAv"
          alt="Placeholder"
        />
      )}
            </div>

            <div className="project-info">
                <div className="project-header">
                <h3>{title[lenguaje]}</h3>
                <ul className="project-tech">
                {Array.isArray(technologies) && technologies.map((tech, index) => (
                <li className="technology-badges" key={index} style={{ color: tech.color }}>
                    <svg className="technology-badge" style={{ fill: tech.color }}>
                    <use xlinkHref={`/assets/${tech.img}`} />
                    </svg>
                </li>
                ))}

                </ul>
                </div>
                <p>{description[lenguaje]}</p>
                <div className="project-buttons">
                 <a href={link}>
                     <button>{button1[lenguaje]}</button>
                 </a>
                 <a href={link2}>
                     <button>{button2[lenguaje]}</button>
                 </a>
                </div>
             </div>
        </div>
    )
}
export default Project