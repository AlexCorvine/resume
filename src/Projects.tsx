import * as React from "react";
import { Section } from "./core/Section";

type Project = {
  title: string;
  company: string;
  period: string;
  description: string;
  metrics: string[];
};

const projects: Project[] = [
  {
    title: "LLM Content Personalization Pipeline",
    company: "Babbel",
    period: "2024–Present",
    description:
      "LLM + Knowledge Tracing engine adapts lesson difficulty in real time. Automated pipeline generates 20K+ items/day across 18 languages.",
    metrics: ["€500K/y savings", "−70 days cycle", "+3% DALs"],
  },
  {
    title: "Customer 360° Profile",
    company: "Babbel",
    period: "2024–Present",
    description:
      "Unified Learner Data Model for real-time CRM segmentation and in-app personalisation. Dynamic pipeline generating 50M+ daily events.",
    metrics: ["+3% DAUs", "+4% CTR", "5 campaigns"],
  },
  {
    title: "Data Quality Framework & Contracts",
    company: "Babbel",
    period: "2024–Present",
    description:
      "Data contracts (schemas, SLAs, quality checks) between producers and consumers. Automated DQ monitors with alerting and runbooks.",
    metrics: ["−40% incidents", "2 teams"],
  },
  {
    title: "Seller Portal Discovery",
    company: "EPAM Continuum",
    period: "2022",
    description:
      "20+ merchant interviews across 4 countries. Unified product catalogue roadmap; discovery artefacts adopted as company-wide delivery blueprint.",
    metrics: ["−30% listing time"],
  },
  {
    title: "Next Best Action Platform",
    company: "IBM iX",
    period: "2020",
    description:
      "Product strategy for NBA platform at CIS's largest retail bank. 120+ business and UX requirements; facilitated cross-team user research sprints.",
    metrics: ["Fortune-500 bank"],
  },
  {
    title: "Digital Lab & Online Bank",
    company: "IBM iX",
    period: "2019",
    description:
      "Established region's first Digital Lab. Delivered SME online-bank MVP in <9 months. B2B marketplace onboarding 1000+ clients.",
    metrics: ["−21% seller costs"],
  },
];

export const Projects: React.FC = () => {
  return (
    <Section header="Selected Projects">
      <div className="project-grid">
        {projects.map((p) => (
          <div key={p.title} className="project-card">
            <h4>{p.title}</h4>
            <div className="project-meta">
              {p.company} &nbsp;·&nbsp; {p.period}
            </div>
            <p>{p.description}</p>
            <div>
              {p.metrics.map((m) => (
                <span key={m} className="metric">
                  {m}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
