import React from 'react';
import "../css/All.css";

export default function More() {

    return (
        <div className="card" id="more" style={{marginTop:"1rem"}}>
            <div className="card-title">Academic Service</div>
            <div className="award-item">
                <span className="award-icon">▸ </span>
                <span className="award-text"><strong>Reviewer:</strong> AAAI (2025, 2026), ACL Rolling Review (2024), NeurIPS (2025, 2026), ICLR (2026), KDD (2026)</span>
            </div>
            <div className="award-item">
                <span className="award-icon">▸ </span>
                <span className="award-text"><strong>Talk:</strong> Socially Responsible and Trustworthy Generative Foundation Models: Principles, Challenges, and Practices @ CIKM 2025 (tutorial), Nov. 2025</span>
            </div>
        </div>
    );
}
