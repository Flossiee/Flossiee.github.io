import React from "react";
import "../css/Internship.css";

export default function Internship() {
    const experiences = [
        {
            type: "Research",
            organization: {
                name: "iSURE Program, University of Notre Dame",
                link: "https://nd.edu/",
            },
            period: ["2025.06 –", "2025.07"],
            role: <span>Advisor: <a href={"https://xiangliang.github.io/"}>Prof. Xiangliang Zhang</a></span>,
            location: "Notre Dame, USA",
            projects: [
                { name: <span>Automated Generation of Logical and Aesthetic Scientific Pipeline Diagrams</span> },
            ]
        },
        {
            type: "Research",
            organization: {
                name: "MINE Lab, University of Notre Dame",
                link: "https://nd.edu/",
            },
            period: ["2024.08 –", "2026.07"],
            role: <span>AI research intern, working with <a href={"https://xiangliang.github.io/"}>Prof. Xiangliang Zhang</a></span>,
            location: "Remote",
            projects: [
                { name: <span>Research on Trustworthiness in GenFMs and AGI approaches</span> },
            ]
        },
        {
            type: "Research",
            organization: {
                name: "LAIR Lab, Lehigh University",
                link: "https://www.lehigh.edu/",
            },
            period: ["2023.10 –", "2024.08"],
            role: <span>AI research intern, working with <a href={"https://lichao-sun.github.io/"}>Prof. Lichao Sun</a></span>,
            location: "Remote",
            projects: [
                { name: <span>Research on Trustworthy LLMs and AI-generated text detection</span> },
            ]
        },
    ];

    return (
        <div className="card" id="internship" style={{ marginTop: "1rem" }}>
            <div className="card-title">Internship</div>

            <div className="exp-list" style={{ marginTop: "0.2rem" }}>
                {experiences.map((exp, index) => (
                    <div key={index} className="exp-row">
                        <div className="exp-row-period">
                            {exp.period.map((line, i) => (
                                <span key={i}>{line}</span>
                            ))}
                        </div>
                        <div className="exp-row-body">
                            <a
                                className="exp-row-org"
                                href={exp.organization.link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {exp.organization.name}
                            </a>
                            <div className="exp-row-role">{exp.role}</div>
                            {exp.projects && exp.projects.length > 0 && (
                                <ul className="exp-row-projects">
                                    {exp.projects.map((proj, i) => (
                                        <li key={i}>{proj.name}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
