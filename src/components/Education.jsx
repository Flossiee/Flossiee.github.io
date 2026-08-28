import React from 'react';
import "../css/All.css";
import ndLogo from '../assets/logo/Notre_Dame.png';
import scuLogo from '../assets/logo/scu.png';

export default function Education() {
    const education = [
        {
            degree: "Ph.D. in Computer Science and Engineering",
            university: "University of Notre Dame",
            period: ["2026.08 –", "Present"],
            location: "Notre Dame, USA",
            logo: ndLogo,
        },
        {
            degree: "B.Eng. in Software Engineering",
            university: "Sichuan University",
            period: ["2021.09 –", "2026.06"],
            location: "Chengdu, China",
            logo: scuLogo,
        },
    ];

    return (
        <div className="card" id="education" style={{ marginTop: "1rem" }}>
            <div className="card-title">Education</div>
            <div className="education-list" style={{ marginTop: "0.2rem" }}>
                {education.map((edu, index) => (
                    <div key={index} className="edu-row">
                        <div className="edu-period">
                            {edu.period.map((line, i) => (
                                <span key={i}>{line}</span>
                            ))}
                        </div>
                        <div className="edu-body">
                            <div className="edu-degree">{edu.degree}</div>
                            <div className="edu-university-row">
                                <img src={edu.logo} alt={edu.university} className="edu-logo" />
                                <span className="edu-university-name">{edu.university}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
