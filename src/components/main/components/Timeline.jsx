import React from "react";


    const Timeline = (Start, End = "Actualmente" , Title, Place, Dates) => {
        
        return (
            <div className="timeline">
                <small>{Start} - {End}</small>
                <h2>{Title}</h2>
                <p>{Place}</p>
                {Dates.length > 0 && 
                <ul>
                    {Dates.map((date, index) => (
                        <li key={index}>{date}</li>
                    ))}
                </ul>
                }

            </div>
        )
    }

export default Timeline;
 