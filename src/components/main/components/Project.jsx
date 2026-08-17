import { useEffect, useState } from "react";
import { useLenguaje } from "../../../hooks/useLenguaje";
import { useTheme } from "../../../hooks/useTheme";

const svgCache = {};

const TechnologyBadge = ({ tech, fillColor }) => {
  const [content, setContent] = useState(null);
  const cacheKey = tech.img;

  useEffect(() => {
    if (svgCache[cacheKey]) {
      setContent(svgCache[cacheKey]);
      return;
    }
    fetch(`/Portfolio/assets/${tech.img}`)
      .then((r) => r.text())
      .then((text) => {
        const svgMatch = text.match(/<svg\s+([^>]*)>([\s\S]*?)<\/svg>/);
        if (svgMatch) {
          const attrs = svgMatch[1];
          const inner = svgMatch[2].replace(/ fill="[^"]*"/g, "");
          const vbMatch = attrs.match(/viewBox="([^"]+)"/);
          const viewBox = vbMatch ? vbMatch[1] : "0 0 24 24";
          const cleaned = inner.replace(/<g[^>]*>/g, "").replace(/<\/g>/g, "");
          const data = { inner: cleaned, viewBox };
          svgCache[cacheKey] = data;
          setContent(data);
        }
      })
      .catch(() => {});
  }, [cacheKey]);

  if (!content) return null;

  return (
    <svg className="technology-badge" style={{ fill: fillColor }} viewBox={content.viewBox}>
      <g dangerouslySetInnerHTML={{ __html: content.inner }} />
    </svg>
  );
};

const Project = ({image, title, description, highlights, technologies, button1, button2, link, link2}) => {
    const { lenguaje } = useLenguaje();
    const { theme } = useTheme();
    const [imgError, setImgError] = useState(false);

    const getTechColor = (tech) => {
      if (tech.name === "NextJS") {
        return theme === "dark" ? "#FFFFFF" : "#000000";
      }
      return tech.color;
    };


    return (
        <div className="project-card">
            <div className="project-image">
      {!imgError ? (
        <img
          className="project-img"
          src={`/Portfolio/assets/${image}` || `/assets/${image}`}
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
                <li className="technology-badges" key={index} style={{ color: getTechColor(tech) }}>
                    <TechnologyBadge tech={tech} fillColor={getTechColor(tech)} />
                </li>
                ))}

                </ul>
                </div>
                <p>{description[lenguaje]}</p>
                {highlights && highlights[lenguaje] && (
                  <ul className="project-highlights">
                    {highlights[lenguaje].map((punto, i) => (
                      <li key={i}>{punto}</li>
                    ))}
                  </ul>
                )}
                <div className="project-buttons">
                 <a href={link}>
                     <button>{button1[lenguaje]}</button>
                 </a>
                 {link2 && button2 && (
                     <a href={link2}>
                         <button>{button2[lenguaje]}</button>
                     </a>
                 )}
                </div>
             </div>
        </div>
    )
}
export default Project