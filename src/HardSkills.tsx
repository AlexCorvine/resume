import * as React from "react";
import { BulletedList } from "./core/BulletedList";
import { Section } from "./core/Section";

export const HardSkills: React.FC = () => {
  return (
    <Section header="Hard Skills">
      <BulletedList
        bullets={[
          "Product Discovery",
          "Product strategy, roadmaping",
          "Storyboarding and storytelling",
          "Prototyping (Figma, Coda.io, Miro)",
          "Analytics and visualization (Excel, SQL, Amplitude, Python)",
          "Financial analysis and budgeting",
        ]}
      />
    </Section>
  );
};
