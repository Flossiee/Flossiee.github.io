import React, { useState } from "react";
import "../css/Publications.css";

import honestllm_img from "../assets/paper_image/honestllm.png";
import trustllm_img from "../assets/paper_image/trustllm.png";
import storytelling_img from "../assets/paper_image/storytelling.png";
import mixtext_img from "../assets/paper_image/mixtext.png";
import datagen_img from "../assets/paper_image/datagen.png";
import ood_img from "../assets/paper_image/ood.png";
import trustgen_img from "../assets/paper_image/trustgen.png";
import hhh_img from "../assets/paper_image/hhh.png";


const MY_NAME = "Chujie Gao";

const publications = [
    {
        id: "honestllm",
        title: "HonestLLM: Toward an Honest and Helpful Large Language Model",
        abstract: "Large Language Models (LLMs) have achieved remarkable success across various industries due to their exceptional generative capabilities. However, for safe and effective real-world deployments, ensuring honesty and helpfulness is critical. This paper addresses the question: Can we prioritize the helpfulness of LLMs while preserving their honesty? To begin with, we establish exhaustive principles aimed at guaranteeing the honesty of LLM. Additionally, we introduce a novel dataset, referred to as HONESET, comprising 930 queries spanning six categories meticulously crafted to assess an LLM's capacity for maintaining honesty. Subsequently, we present two approaches to augmenting honesty and helpfulness in LLMs: a training-free enhancement and a fine-tuning-based improvement. The training-free approach, which is based on curiosity-driven prompting, empowers LLMs to articulate internal confusion and uncertainty regarding queries, thereby optimizing their responses. Conversely, the fine-tuning-based method employs a two-stage process inspired by curriculum learning: initially instructing LLMs to discern between honest and dishonest responses, then refining their training to enhance helpfulness. Experiments conducted on nine prominent LLMs demonstrate a significant improvement in alignment with honesty across all models through the implementation of our proposed enhancements. Particularly noteworthy is the 65.3% enhancement observed in Llama3-8B and the remarkable 124.7% improvement in Mistral-7B, as measured by the H² (honest and helpful) assessment. We believe that our work can pave the way for developing more trustworthy LLMs for real-world applications.",
        authors: [
            {name: "Chujie Gao", role: "first"},
            {name: "Siyuan Wu", role: "first"},
            {name: "Yue Huang", role: "first"},
            {name: "Dongping Chen", role: "first"},
            {name: "Qihui Zhang", role: "first"},            
            {name: "Zhengyan Fu"},
            {name: "Yao Wan", role: "advisor"},
            {name: "Lichao Sun", role: "advisor"},
            {name: "Xiangliang Zhang", role: "advisor"},
        ],
        venues: [
            {name: "NeurIPS 2024", type: "conference"},
        ],
        links: {
            paper: "https://proceedings.neurips.cc/paper_files/paper/2024/hash/0d99a8c048befb6dd6e17d7684adacac-Abstract-Conference.html",
            github: "https://github.com/Flossiee/HonestyLLM",
        },
        image: honestllm_img,
        tags: ["Selected", "Trustworthiness"]
    },
    {
        id: "trustllm",
        title: "TrustLLM: Trustworthiness in Large Language Models",
        abstract: "Large language models (LLMs) have gained considerable attention for their excellent natural language processing capabilities. Nonetheless, these LLMs present many challenges, particularly in the realm of trustworthiness. This paper introduces TRUSTLLM, a comprehensive study of trustworthiness in LLMs, including principles for different dimensions of trustworthiness, established benchmark, evaluation, and analysis of trustworthiness for mainstream LLMs, and discussion of open challenges and future directions. Specifically, we first propose a set of principles for trustworthy LLMs that span eight different dimensions. Based on these principles, we further establish a benchmark across six dimensions including truthfulness, safety, fairness, robustness, privacy, and machine ethics. We then present a study evaluating 16 mainstream LLMs in TRUSTLLM, consisting of over 30 datasets. Our findings firstly show that in general trustworthiness and capability (i.e., functional effectiveness) are positively related. Secondly, our observations reveal that proprietary LLMs generally outperform most open-source counterparts in terms of trustworthiness, raising concerns about the potential risks of widely accessible open-source LLMs. However, a few open-source LLMs come very close to proprietary ones, suggesting that open-source models can achieve high levels of trustworthiness without additional mechanisms like moderator, offering valuable insights for developers in this field. Thirdly, it is important to note that some LLMs may be overly calibrated towards exhibiting trustworthiness, to the extent that they compromise their utility by mistakenly treating benign prompts as harmful and consequently not responding. Besides these observations, we've uncovered key insights into the multifaceted trustworthiness in LLMs. We emphasize the importance of ensuring transparency not only in the models themselves but also in the technologies that underpin trustworthiness. We advocate that the establishment of an AI alliance between industry, academia, and the open-source community to foster collaboration is imperative to advance the trustworthiness of LLMs.",
        authors: [
            {name: "Yue Huang"},
            {name: "Lichao Sun"},
            {name: "Haoran Wang"},
            {name: "Siyuan Wu"},
            {name: "Qihui Zhang"},
            {name: "Yuan Li"},
            {name: "Chujie Gao"},
            {name: "Yixin Huang"},
            {name: "Wenhan Lyu"},
            {name: "Yixuan Zhang"},
            {name: "Xiner Li"},
            {name: "et al."},
        ],
        venues: [
            {name: "ICML 2024", type: "conference"},
        ],
        links: {
            paper: "https://proceedings.mlr.press/v235/huang24x.html",
            github: "https://github.com/HowieHwong/TrustLLM",
            website: "https://trustllmbenchmark.github.io/TrustLLM-Website/",
        },
        image: trustllm_img,
        tags: ["Selected", "Trustworthiness"]
    },
    {
        id: "multiimage",
        title: "Think it Image by Image: Multi-Image Moral Reasoning of Large Vision-Language Models",
        abstract: "Vision Language Models (VLMs) have demonstrated remarkable success in downstream applications, yet they often exhibit biases, raising ethical concerns. While previous efforts have aimed to evaluate and improve the moral reasoning capabilities of VLMs, existing approaches are limited by simplified, unimodal settings or overly static visual scenarios. We propose a novel multi-image-based dataset pipeline MIST (Moral Inference through Storytelling with Text and Images) designed to assess moral reasoning in complex, dynamic scenarios to address these limitations. To ensure better alignment between these modalities, we introduce the concept of \"text-image flow,\" which seamlessly integrates visual and textual information across complex scenarios. Using this dataset, we evaluate seven widely used VLMs, offering critical insights into their performance in moral reasoning tasks.",
        authors: [
            {name: "Chujie Gao"},
            {name: "Yue Huang"},
            {name: "Xiangqi Wang"},
            {name: "Siyuan Wu"},
            {name: "Nitesh V. Chawla"},
            {name: "Xiangliang Zhang", role: "advisor"},
        ],
        venues: [
            {name: "CIKM 2025", type: "conference"},
        ],
        links: {
            paper: "https://dl.acm.org/doi/abs/10.1145/3746252.3760884",
        },
        image: storytelling_img,
        tags: ["AGI"]
    },
    {
        id: "coauthor",
        title: "LLM-as-a-Coauthor: Can Mixed Human-Written and Machine-Generated Text Be Detected?",
        abstract: "With the rapid development and widespread application of Large Language Models (LLMs), the use of Machine-Generated Text (MGT) has become increasingly common, bringing with it potential risks, especially in terms of quality and integrity in fields like news, education, and science. Current research mainly focuses on purely MGT detection without adequately addressing mixed scenarios, including AI-revised Human-Written Text (HWT) or human-revised MGT. To tackle this challenge, we define mixtext, a form of mixed text involving both AI and human-generated content. Then, we introduce MIXSET, the first dataset dedicated to studying these mixtext scenarios. Leveraging MIXSET, we executed comprehensive experiments to assess the efficacy of prevalent MGT detectors in handling mixtext situations, evaluating their performance in terms of effectiveness, robustness, and generalization. Our findings reveal that existing detectors struggle to identify mixtext, particularly in dealing with subtle modifications and style adaptability. This research underscores the urgent need for more fine-grain detectors tailored for mixtext, offering valuable insights for future research.",
        authors: [
            {name: "Qihui Zhang", role: "first"},
            {name: "Chujie Gao", role: "first"},
            {name: "Dongping Chen", role: "first"},
            {name: "Yue Huang"},
            {name: "Yixin Huang"},
            {name: "et al."},
        ],
        venues: [
            {name: "Findings of NAACL 2024", type: "conference"},
        ],
        links: {
            paper: "https://aclanthology.org/2024.findings-naacl.29/",
        },
        image: mixtext_img,
        tags: ["Selected", "Trustworthiness"]
    },
    {
        id: "datagen",
        title: "DataGen: Unified Synthetic Dataset Generation via Large Language Models",
        abstract: "Large Language Models (LLMs) such as GPT-4 and Llama3 have significantly impacted various fields by enabling high-quality synthetic data generation and reducing dependence on expensive human-generated datasets. Despite this, challenges remain in the areas of generalization, controllability, diversity, and truthfulness within the existing generative frameworks. To address these challenges, this paper presents DataGen, a comprehensive LLM-powered framework designed to produce diverse, accurate, and highly controllable datasets. DataGen is adaptable, supporting all types of text datasets and enhancing the generative process through innovative mechanisms. To augment data diversity, DataGen incorporates an attribute-guided generation module and a group checking feature. For accuracy, it employs a code-based mathematical assessment for label verification alongside a retrieval-augmented generation technique for factual validation. The framework also allows for user-specified constraints, enabling customization of the data generation process to suit particular requirements. Extensive experiments demonstrate the superior quality of data generated by DataGen, and each module within DataGen plays a critical role in this enhancement. Additionally, DataGen is applied in two practical scenarios: benchmarking LLMs and data augmentation. The results indicate that DataGen effectively supports dynamic and evolving benchmarking and that data augmentation improves LLM capabilities in various domains, including agent-oriented abilities and reasoning skills.",
        authors: [
            {name: "Yue Huang", role: "first"},
            {name: "Siyuan Wu", role: "first"},
            {name: "Chujie Gao"},
            {name: "Dongping Chen"},
            {name: "Qihui Zhang"},
            {name: "Yao Wan"},
            {name: "Tianyi Zhou"},
            {name: "Chaowei Xiao"},
            {name: "Jianfeng Gao"},
            {name: "Lichao Sun"},
            {name: "Xiangliang Zhang", role: "advisor"},
        ],
        venues: [
            {name: "ICLR 2025", type: "conference"},
        ],
        links: {
            paper: "https://openreview.net/pdf?id=F5R0lG74Tu",
            github: "https://github.com/HowieHwong/DataGen",
        },
        image: datagen_img,
        tags: ["AGI"]
    },
    {
        id: "breakingfocus",
        title: "Adaptive Distraction: Probing LLM Contextual Robustness with Automated Tree Search",
        abstract: "Large Language Models (LLMs) often struggle to maintain their original performance when faced with semantically coherent but task-irrelevant contextual information. Although prior studies have explored this issue using fixed-template or retrieval-based distractions, such static methods show limited effectiveness against contemporary models. To address this problem, we propose a dynamic distraction generation framework based on tree search, where the generation process is guided by model behavior. Without modifying the original question or answer, the method efficiently produces challenging adaptive distractions across multiple datasets, enabling systematic stress testing of LLMs' contextual robustness. Experiments on four benchmarks demonstrate that the generated distractions lead to an average performance drop of over 45% for mainstream models. Further comparisons of mitigation strategies show that prompt-based optimization methods yield limited gains, whereas post-training approaches (e.g., DPO) significantly enhance the model's contextual robustness. The results indicate that these issues do not stem from knowledge deficits in LLMs, but from a fundamental inability to maintain consistent reasoning under contextual distraction, posing a major challenge to the reliability of LLMs in real-world applications.",
        authors: [
            {name: "Yanbo Wang", role: "first"},
            {name: "Zixiang Xu", role: "first"},
            {name: "Yue Huang", role: "first"},
            {name: "Chujie Gao"},
            {name: "Siyuan Wu"},
            {name: "Jiayi Ye"},
            {name: "Pin-Yu Chen"},
            {name: "Xiuying Chen", role: "advisor"},
            {name: "Xiangliang Zhang", role: "advisor"},
        ],
        venues: [
            {name: "NeurIPS 2025", type: "conference"},
        ],
        links: {
            paper: "https://openreview.net/pdf?id=sWIbJWiEuA",
            github: "https://github.com/wyf23187/Adaptive_Distractions",
        },
        image: ood_img,
        tags: ["AGI"]
    },
    {
        id: "trustgenfm",
        title: "TrustGen: A Platform of Dynamic Benchmarking on the Trustworthiness of Generative Foundation Models",
        abstract: "Generative foundation models (GenFMs), such as large language models and text-to-image systems, have demonstrated remarkable capabilities in various downstream applications. As they are increasingly deployed in high-stakes applications, assessing their trustworthiness has become both a critical necessity and a substantial challenge. Existing evaluation efforts are fragmented, rapidly outdated, and often lack extensibility across modalities. This raises a fundamental question: how can we systematically, reliably, and continuously assess the trustworthiness of rapidly advancing GenFMs across diverse modalities and use cases? To address these gaps, we introduce TRUSTGEN, a dynamic and modular benchmarking system designed to systematically evaluate the trustworthiness of GenFMs across text-to-image, large language, and vision-language modalities. TRUSTGEN standardizes trust evaluation through a unified taxonomy of over 25 fine-grained dimensions—including truthfulness, safety, fairness, robustness, privacy, and machine ethics—while supporting dynamic data generation and adaptive evaluation through three core modules: Metadata Curator, Test Case Builder, and Contextual Variator. Taking TRUSTGEN into action to evaluate the trustworthiness of 39 models reveals four key insights. (1) State-of-the-art GenFMs achieve promising overall trust performance, yet significant limitations remain in specific dimensions such as hallucination resistance, fairness, and privacy preservation. (2) Contrary to prevailing assumptions, open-source models now rival and occasionally surpass proprietary systems in trustworthiness metrics. (3) The trust gap among top-performing models is narrowing, likely due to increased industry convergence on best practices. (4) Trustworthiness is not an isolated property; it interacts complexly with other behaviors, such as helpfulness and ethical decision-making. TRUSTGEN is a transformative step toward standardized, scalable, and actionable trustworthiness evaluation, supporting dynamic assessments across diverse modalities and trust dimensions that evolve alongside the generative AI landscape.",
        authors: [
            {name: "Yue Huang"},
            {name: "Chujie Gao"},
            {name: "Siyuan Wu"},
            {name: "Haoran Wang"},
            {name: "Xiangqi Wang"},
            {name: "Jiayi Ye"},
            {name: "Yujun Zhou"},
            {name: "Yanbo Wang"},
            {name: "et al."},
        ],
        venues: [
            {name: "ICLR 2026", type: "conference"},
        ],
        links: {
            paper: "https://openreview.net/pdf?id=Fcf5fLmaeG",
            dataset: "https://huggingface.co/datasets/TrustGen/Trustgen_dataset",
            github: "https://github.com/TrustGen/TrustEval-toolkit",
            website: "https://trustgen.github.io/",
        },
        image: trustgen_img,
        tags: ["Selected", "Trustworthiness"]
    },
    {
        id: "hhh",
        title: "Prioritization First, Principles Second: An Adaptive Interpretation of Helpful, Honest, and Harmless Principles",
        abstract: "The Helpful, Honest, and Harmless (HHH) principle is a foundational framework for aligning AI systems with human values. However, existing interpretations of the HHH principle often overlook contextual variability and conflicting requirements across applications. In this paper, we argue for an adaptive interpretation of the HHH principle and propose a reference framework for its adaptation to diverse scenarios. We first examine the principle's foundational significance and identify ambiguities and conflicts through case studies of its dimensions. To address these challenges, we introduce the concept of priority order, which provides a structured approach for balancing trade-offs among helpfulness, honesty, and harmlessness. Further, we explore the interrelationships between these dimensions, demonstrating how harmlessness and helpfulness can be jointly enhanced and analyzing their interdependencies in high-risk evaluations. Building on these insights, we propose a reference framework that integrates context definition, value prioritization, risk assessment, and benchmarking standards to guide the adaptive application of the HHH principle. This work offers practical insights for improving AI alignment, ensuring that HHH principles remain both ethically grounded and operationally effective in real-world AI deployment.",
        authors: [
            {name: "Yue Huang"},
            {name: "Chujie Gao"},
            {name: "Yujun Zhou"},
            {name: "Kehan Guo"},
            {name: "Xiangqi Wang"},
            {name: "Or Cohen-Sasson"},
            {name: "Max Lamparth"},
            {name: "Xiangliang Zhang", role: "advisor"},
        ],
        venues: [
            {name: "Preprint", type: "wip"},
        ],
        links: {
            paper: "https://arxiv.org/pdf/2502.06059",
        },
        image: hhh_img,
        tags: ["Trustworthiness"]
    },
];


const tagColors = {
    conference: "conference",
    wip: "wip",
};

export default function Publications() {
    const [selectedTag, setSelectedTag] = useState("");

    const filteredPublications = selectedTag
        ? publications.filter((p) => p.tags.includes(selectedTag))
        : publications;

    const handleTagClick = (tag) => {
        setSelectedTag(selectedTag === tag ? "" : tag);
    };

    return (
        <div className="publications" id="publications" style={{marginTop:"1rem"}}>
            <div className="publications-select">
                <div className="card-title">
                    Publications
                </div>

                <div className="tag-buttons-filter">
                    <button
                        className={`tag-button ${selectedTag === "" ? "active" : ""}`}
                        onClick={() => handleTagClick("")}
                        style={{ '--tag-color': '#2e5090' }}
                    >
                        All
                    </button>
                    <button
                        className={`tag-button ${selectedTag === "Selected" ? "active" : ""}`}
                        onClick={() => handleTagClick("Selected")}
                        style={{ '--tag-color': '#2e5090' }}
                    >
                        Selected
                    </button>
                </div>
            </div>

            <div className="publications-info">
                <div className="publications-info-small">* indicates equal contribution, and † denotes the advising
                    professor.</div>
            </div>


            <div className="publications-list">
                {filteredPublications.map((paper, index) => (
                    <div key={index} className="publication-card" id={paper.id}>
                        {paper.image && (
                            <img
                                src={paper.image}
                                alt={paper.title}
                                className="publication-image"
                                onClick={() => {
                                    if (paper.links.paper) {
                                        window.open(paper.links.paper, '_blank');
                                    } else if (paper.links.arxiv) {
                                        window.open(paper.links.arxiv, '_blank');
                                    }
                                }}
                            />
                        )}

                        <div className="publication-content">

                            <div className="publication-venue">
                                {paper.venues.map((v, vi) => (
                                    <span
                                        key={vi}
                                        className={`venue-tag ${tagColors[v.type]}`}
                                    >
                    {v.name}
                  </span>
                                ))}
                            </div>

                            <div className="publication-title-wrapper">
                                <div className="publication-title">{paper.title}</div>
                                {paper.abstract && <div className="abstract-popup">{paper.abstract}</div>}
                            </div>

                            <div className="publication-authors">
                                {paper.authors.map((author, i) => {
                                    let symbol = "";
                                    if (author.role === "first") symbol = "*";
                                    if (author.role === "second") symbol = "**";
                                    if (author.role === "advisor") symbol = "†";

                                    const isMe = author.name === MY_NAME;
                                    const authorName = isMe ? (
                                        <strong
                                            style={{color: "#2e5090", fontWeight: 900}}
                                        >
                                            {author.name + symbol}
                                        </strong>
                                    ) : (
                                        author.name + symbol
                                    );

                                    return (
                                        <span key={i}>
                      {author.link ? (
                          <a
                              href={author.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="author-link"
                          >
                              {authorName}
                          </a>
                      ) : (
                          authorName
                      )}
                                            {i < paper.authors.length - 1 && ", "}
                    </span>
                                    );
                                })}
                            </div>

                            <div className="publication-tags">
                                {paper.tags.map((tag, i) => {
                                        if (tag === "Selected") {
                                            return (
                                                <span
                                                    key={i}
                                                    className="tag-item-show rainbow-tag-all"
                                                >
                                            #{tag}
                                        </span>
                                            )
                                        } else return (
                                            <span
                                                key={i}
                                                className="tag-item-show"
                                                style={{color: "#888"}}
                                            >
                                            #{tag}
                                        </span>
                                        );
                                    }
                                )}
                            </div>

                            <div className="publication-links">
                                {paper.links.pdf && (
                                    <a href={paper.links.pdf} target="_blank" rel="noopener noreferrer">
                                        PDF
                                    </a>
                                )}
                                {paper.links.paper && (
                                    <a href={paper.links.paper} target="_blank" rel="noopener noreferrer">
                                        Paper
                                    </a>
                                )}
                                {paper.links.arxiv && (
                                    <a href={paper.links.arxiv} target="_blank" rel="noopener noreferrer">
                                        arXiv
                                    </a>
                                )}
                                {paper.links.github && (
                                    <a href={paper.links.github} target="_blank" rel="noopener noreferrer">
                                        Github
                                    </a>
                                )}
                                {paper.links.website && (
                                    <a href={paper.links.website} target="_blank" rel="noopener noreferrer">
                                        Website
                                    </a>
                                )}
                                {paper.links.video && (
                                    <a href={paper.links.video} target="_blank" rel="noopener noreferrer">
                                        Presentation
                                    </a>
                                )}
                                {paper.links.dataset && (
                                    <a href={paper.links.dataset} target="_blank" rel="noopener noreferrer">
                                        Dataset
                                    </a>
                                )}
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
