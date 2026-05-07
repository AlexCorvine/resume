import * as React from "react";
import { Section } from "./core/Section";

type Job = {
  company: string;
  href: string;
  position: string;
  location: string;
  from: string;
  to: string;
  bullets: string[];
};

const jobs: Job[] = [
  {
    company: "Babbel GmbH",
    href: "https://www.babbel.com/",
    position: "Sr. Data Product Manager",
    location: "Berlin",
    from: "Oct 2023",
    to: "Present",
    bullets: [
      "Shipped GenAI-powered pipelines for personalised content creation (text, audio, images), targeting 20% churn driver",
      "Led discovery for internal AI content platform, designing evaluation frameworks and Human-in-the-Loop workflows",
      "Launched 360° Learner Profile for 10+ teams; cut ad-hoc queries 50% and aligned 6 departments around data model",
      "Shipped engagement features (streaks, progress metrics) leveraging new data signals, driving a 10% growth in DAUs",
    ],
  },
  {
    company: "EPAM Continuum",
    href: "https://www.continuuminnovation.com/",
    position: "Sr. Product Manager",
    location: "Remote",
    from: "Mar 2021",
    to: "Oct 2023",
    bullets: [
      "Led a 15-member AI search team at a Fortune 500 company; new model lifted CTR 20%",
      "Redesigned fashion retailer's seller-portal; discovered new product catalogue that unified data, cut listing time 30%",
      "Launched a Smart Locker SaaS platform, driving go-to-market for 3 enterprises across 25+ sites",
    ],
  },
  {
    company: "IBM iX",
    href: "https://ibmix.de/en/",
    position: "Sr. Product Owner",
    location: "Moscow",
    from: "Mar 2018",
    to: "Mar 2021",
    bullets: [
      "Built region's first Digital Lab; shipped online-bank MVP in <9 months",
      "Rolled out discovery toolkit to 4 squads; trimmed idea-to-MVP cycle 75%",
      "Built digital platform (AI, RPA) to optimise oil-field geo exploration, saving 30% CAPEX",
    ],
  },
  {
    company: "Deloitte Digital",
    href: "https://www.deloittedigital.com/",
    position: "Sr. Consultant",
    location: "Moscow",
    from: "Dec 2016",
    to: "Mar 2018",
    bullets: [
      "Orchestrated €30M digital roadmap for top-5 insurer in CIS, board-approved in 8 weeks",
      "Published fintech index for Central Bank; adopted as national benchmark",
    ],
  },
  {
    company: "Sberbank",
    href: "https://programmes.sberuniversity.ru/rmacademy",
    position: "Project Manager",
    location: "Moscow",
    from: "Oct 2014",
    to: "Nov 2016",
    bullets: [
      "Delivered banking-risk simulator to 7000+ managers; cut training spend 35%",
      "Built learning analytics for 50K+ students; insights reshaped L&D strategy",
    ],
  },
  {
    company: "IBM",
    href: "https://www.ibm.com/consulting/",
    position: "Digital Consultant",
    location: "Moscow",
    from: "Sep 2013",
    to: "Oct 2014",
    bullets: [
      "Designed lead-gen analytics engine for US logistics firm; grew qualified leads 20%",
    ],
  },
];

export const Experience: React.FC = () => {
  return (
    <Section header="Experience">
      {jobs.map((job) => (
        <div key={job.company} className="subsection">
          <header>
            <a href={job.href}>{job.company}</a>
            {", "}
            {job.location} — {job.position}
          </header>
          <div className="dates">
            {job.from} – {job.to}
          </div>
          <ul>
            {job.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>
      ))}
    </Section>
  );
};
