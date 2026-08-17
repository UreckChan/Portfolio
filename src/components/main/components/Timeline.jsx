import React from "react";


 const Timeline = ({ Duration, Title, Place, Note, Dates = [] }) => {
        return (
            <div className="timeline-item">
                <small>{Duration}</small>
                <h2>{Title}</h2>
                <p>{Place}</p>
                {Note && <p className="timeline-note">{Note}</p>}
                {Array.isArray(Dates) && Dates.length > 0 && (
                <ul>
                    {Dates.map((date, index) => (
                    <li key={index}>{date}</li>
                    ))}
                </ul>
                )}
            </div>
        )
    }

export default Timeline;
 