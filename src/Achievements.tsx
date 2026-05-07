import * as React from "react";
import { Section } from "./core/Section";

export const Achievements: React.FC = () => {
  const items = [
    { label: "Babbel Sci-Fi Book Club, Founder — 20 active readers", year: "2024" },
    { label: "Internal Storytelling Course, Creator — 10+ corporate runs", year: "2021–24" },
    { label: 'Product Hunt Baku, Speaker — "Product Storytelling"', year: "2022" },
    { label: "SberCode Hackathon, Winner — HR Portal MVP", year: "2021" },
  ];

  return (
    <Section header="Achievements">
      {items.map((item) => (
        <div key={item.label} className="achievement-item">
          <span>{item.label}</span>
          <span className="achievement-year">{item.year}</span>
        </div>
      ))}
    </Section>
  );
};
