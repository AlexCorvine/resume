import * as React from "react";
import { BulletedList } from "./core/BulletedList";
import { Phone } from "./core/Phone";

export const Contacts: React.FC = () => {
  return (
    <BulletedList className="contacts"
      bullets={[
        "Izmir, Turkey",
        <Phone countryCode="+90" number="(554) 584-2758 " />,
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
