import React from 'react';
import "../css/All.css"

export default function SelectedAwards() {
    const awards = [
        {
            text: "[2023, 2024] National Scholarship ",
            highlight: "(Top 1%)",
        },
        {
            text: "[2024] Bachelor's Degree with Honors for Undergraduates",
            highlight: "",
        },
        {
            text: "[2024] Meritorious Winner in COMAP's Mathematical Modeling Contest",
            highlight: "",
        },
    ];


    return (
        <div className="card" id="awards" style={{marginTop:"1rem"}}>
            <div className="card-title">Selected Awards</div>
            <div className="awards-list">
                {awards.map((award, index) => (
                    <div key={index} className="award-item">
                        <span className="award-icon">▸ </span>
                        <span className="award-text">
                            {award.text}
                            <span className="award-highlight">{award.highlight}</span>
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
