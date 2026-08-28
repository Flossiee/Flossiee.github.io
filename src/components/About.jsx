import React from 'react';
import "../css/All.css"
import face from '../assets/face.jpg';
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaGoogleScholar } from "react-icons/fa6";

function About() {
    const links = [
        { icon: <MdEmail />, url: "mailto:cgao2@nd.edu" },
        { icon: <FaGoogleScholar />, url: "https://scholar.google.com/citations?user=1AqAngQAAAAJ" },
        { icon: <FaGithub />, url: "https://github.com/Flossiee" },
    ];

    return (
        <div className="about" id="about">
            <div className="card-title">About Me</div>
            <div className="about-layout">
                <div className="about-profile">
                    <img
                        src={face}
                        alt="Profile"
                        className="profile-pic"
                    />
                    <div className="hero-meta">
                        <div className="meta-name">Chujie Gao</div>
                        <div className="meta-subtitle">University of Notre Dame</div>
                        <div className="contact-small">
                            {links.map((item, index) => (
                                <a
                                    key={index}
                                    href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="icon-link"
                                >
                                    {item.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="about-text">
                    <div className="intro-text">
                        Hi, I'm <strong>Chujie Gao</strong>, a first-year Ph.D. student in Computer Science and Engineering at the <a href="https://nd.edu/" target="_blank" rel="noopener noreferrer">
                        University of Notre Dame
                    </a>, co-advised by <a href="https://sites.nd.edu/xiangliang-zhang/" target="_blank"
                             rel="noopener noreferrer">
                        Prof. Xiangliang Zhang
                    </a> and <a href="https://niteshchawla.nd.edu/" target="_blank"
                                rel="noopener noreferrer">
                        Prof. Nitesh V. Chawla
                    </a>.
                        I received my B.Eng. in Software Engineering from <a href="https://en.scu.edu.cn/" target="_blank"
                                rel="noopener noreferrer">
                        Sichuan University
                    </a> in Jun. 2026.
                        <br/><br/>
                        My previous research focused on <strong>understanding where and why generative models fail, and how to fix it</strong> — through large-scale benchmarking and alignment methods (<em>TrustGen</em>, <em>ICLR 2026</em>; <em>HonestLLM</em>, <em>NeurIPS 2024</em>; <em>Think it Image by Image</em>, <em>CIKM 2025</em>). My current research interests focus on <strong>personalized AI</strong>, <strong>pluralistic value alignment</strong>, and <strong>AI for scientific discovery</strong>.

                        <div className="callout">I am actively seeking research collaborations and internship opportunities. If you are interested, feel free to <a href="mailto:cgao2@nd.edu">reach out</a>.</div>
                        </div>
                </div>
            </div>
        </div>
    );
}

export default About;
