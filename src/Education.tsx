import * as React from "react";
import { Section } from "./core/Section";

type EduEntry = {
  institution: string;
  href: string;
  degree: string;
  faculty: string;
  from: string;
  to: string;
};

const entries: EduEntry[] = [
  {
    institution: "Graduate School of Management, SPbU",
    href: "https://gsom.spbu.ru/en/",
    degree: "M.Sc.",
    faculty: "International Business",
    from: "2011",
    to: "2013",
  },
  {
    institution: "University of St. Gallen (exchange)",
    href: "https://www.unisg.ch/en/",
    degree: "Exchange",
    faculty: "Banking & Finance",
    from: "2012",
    to: "2013",
  },
  {
    institution: "St. Petersburg University",
    href: "https://apmath.spbu.ru/",
    degree: "B.Sc.",
    faculty: "Applied Mathematics & Programming",
    from: "2006",
    to: "2011",
  },
];

export const Education: React.FC = () => {
  return (
    <Section header="Education">
      {entries.map((e) => (
        <div key={e.institution} className="subsection">
          <header>
            <a href={e.href}>{e.institution}</a>
          </header>
          <div className="dates">
            {e.degree} {e.faculty} &nbsp;·&nbsp; {e.from}–{e.to}
          </div>
        </div>
      ))}
    </Section>
  );
};
