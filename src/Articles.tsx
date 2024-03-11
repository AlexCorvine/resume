import React from 'react';
import { BulletedList } from './core/BulletedList';
import { Section } from './core/Section';

// Define a type for the bullets to ensure type safety
type BulletItem = {
  label: string;
  href?: string;
};

export const Articles: React.FC = () => {
  // Pre-defined bullets array to keep the JSX clean
  const bullets: BulletItem[] = [
    {
      label: 'Guest lecturer on product management in British Higher School of Art & Design and PWC',
    },
    {
      label: 'Speaker in Product Hunt 2022, Baku conference - Product storytelling',
      href: 'https://www.youtube.com/live/ObquU5MwrKM?feature=share&t=10023',
    },
    {
      label: 'Launched product storytelling course. Conducted of 10+ trainings in EPAM, IBM and clients',
      href: 'https://ion.ranepa.ru/news/storytelling-i-oformlenie-prezentatsiy-vebinar-aleksandra-korovina-ibm-i-alekseya-mordasova-sberbank/',
    },
  ];

  return (
    <Section header="Articles & Speeches">
      <BulletedList bullets={bullets} />
    </Section>
  );
};
