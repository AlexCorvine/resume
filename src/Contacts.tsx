import * as React from "react";
import { BulletedList } from "./core/BulletedList";
import { Phone } from "./core/Phone";

export const Contacts: React.FC = () => {
  return (
    <BulletedList className="contacts"
      bullets={[
        "Berlin, Germany",
        <Phone countryCode="+49" number="(163) 114-8220 " />,
        {
          label: "alexander.s.korovin@gmail.com",
          href: "mailto:alexander.s.korovin@gmail.com",
        },
        {
          label: "LinkedIn",
          href: "https://www.linkedin.com/in/aleksanderkorovin/",
        },
      ]}
    />
  );
};
