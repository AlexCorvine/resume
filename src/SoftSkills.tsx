import * as React from "react";
import { BulletedList } from "./core/BulletedList";
import { Section } from "./core/Section";

export const SoftSkills: React.FC = () => {
  return (
    <Section header="Soft skills">
      <BulletedList
        bullets={[
          "Leadership and ability to take initiative",
          "Teamwork",
          "Top-down communication and storytelling",
          "Critical thinking",
          "Creativity",
          "Empathy"
        ]}
      />
    </Section>
  );
};
