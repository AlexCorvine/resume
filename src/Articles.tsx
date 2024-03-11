import React from 'react';
import { BulletedList } from './core/BulletedList';
import { Section } from './core/Section';


// Assuming BulletedList expects IBullet[] and IBullet has a mandatory href
type BulletItem = {
  label: string;
  href?: string; // Keep href optional in our local type definition
};

export const Articles: React.FC = () => {
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

  // Transform bullets to ensure href is always a string, providing a default value if necessary
  const transformedBullets = bullets.map(bullet => ({
    label: bullet.label,
    href: bullet.href || '' // Provide a default empty string if href is undefined
  }));

  return (
    <Section header="Articles & Speeches">
      <BulletedList bullets={transformedBullets} />
    </Section>
  );
};
