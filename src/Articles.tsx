import * as React from "react";
import { BulletedList } from "./core/BulletedList";
import { Section } from "./core/Section";

export const Articles: React.FC = () => {
  return (
    <Section header="Articles & Speeches">
      <BulletedList
        bullets={[
          {
            label: "Product storytelling using Gamification principles",
            href: "https://alexkorvin.medium.com/storytelling-3-0-gamification-strategies-79160e670b0b",
          },
          {
            label: "Speaker in Product Hunt 2022, Baku conference - Product storytelling ",
            href: "https://www.youtube.com/live/ObquU5MwrKM?feature=share&t=10023",
          },
          {
            label: "Storytelling and Presentation design (RU), open webinar to RANEPA master program: Digital product and visualisation",
            href: "https://ion.ranepa.ru/news/storytelling-i-oformlenie-prezentatsiy-vebinar-aleksandra-korovina-ibm-i-alekseya-mordasova-sberbank/",
          },
        ]}
      />
    </Section>
  );
};
