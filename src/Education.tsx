import * as React from "react";
import { EducationItem } from "./core/EducationItem";
import { Section } from "./core/Section";

export const Education: React.FC = () => {
  return (
    <Section header="Education">
      <EducationItem
        institution={{
          name: "St. Petersburg State University (GSOM)",
          href: "https://gsom.spbu.ru/en/",
        }}
        location="St.Petersburg, Russia"
        degree="Master's degree"
        faculty="Internaional Business"
        dates={{
          from: "2011",
          to: "2013",
        }}
      />

      <EducationItem
        institution={{
          name: "University of St. Gallen",
          href: "https://www.unisg.ch/en/",
        }}
        location="St. Gallen, Switzerland"
        degree="Exchange program"
        faculty="Banking and Finance"
        dates={{
          from: "2012",
          to: "2013",
        }}
      />

      <EducationItem
        institution={{
          name: "St. Petersburg State University",
          href: "https://apmath.spbu.ru/",
        }}
        location="St.Petersburg, Russia"
        degree="Bachelor's degree"
        faculty="Computer Science and Engineering"
        dates={{
          from: "2007",
          to: "2011",
        }}
      />
    </Section>
  );
};
