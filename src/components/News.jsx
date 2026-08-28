import React from 'react';
import "../css/All.css"

function News() {
    const news =[
        {
            time: "2025.11",
            content: <>Delivered a tutorial at CIKM 2025 on "Socially Responsible and Trustworthy Generative Foundation Models".</>
        },
        {
            time: "2025.09",
            content: <>Paper <em>Adaptive Distraction</em> accepted to NeurIPS 2025.</>
        },
        {
            time: "2025.08",
            content: <>Paper <em>Think It Image by Image</em> accepted to CIKM 2025 as a short research paper.</>
        },
        {
            time: "2025.06",
            content: <>Selected to attend the iSURE Research Program at the University of Notre Dame.</>
        },
        {
            time: "2025.01",
            content: <>Papers <em>DataGen</em> and <em>GUI-World</em> accepted to ICLR 2025.</>
        },
        {
            time: "2024.09",
            content: <>Paper <em>HonestLLM</em> accepted to NeurIPS 2024.</>
        },
        {
            time: "2024.05",
            content: <>Paper <em>TrustLLM</em> accepted to ICML 2024.</>
        },
        {
            time: "2024.03",
            content: <>Paper <em>LLM-as-a-Coauthor</em> accepted to Findings of NAACL 2024.</>
        },
    ]

    const handleNewsRefClick = (e) => {
        if (e.target.classList.contains('news-ref')) {
            e.preventDefault();
            const id = e.target.getAttribute('href').slice(1);
            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="News" id="news">
            <div className="card-title">News
            </div>
            <div className="news-list" onClick={handleNewsRefClick}>
                {news.map((item, index) => (
                    <div key={index} className="news-item">
                        <span className="news-icon">▸ </span>
                        <div>
                            <span className="news-time">{item.time}</span>
                            <span className="news-content">{item.content}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default News;
