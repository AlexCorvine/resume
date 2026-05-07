import * as React from "react";
import { Section } from "./core/Section";

export const Certifications: React.FC = () => {
  const certs = [
    "SAFe PO/PM",
    "Certified ScrumMaster",
    "ML course — Yandex",
    "IBM Enterprise Design Thinking",
    "Go-Practice Product Analytics",
  ];

  return (
    <Section header="Certifications">
      <div className="cert-list">
        {certs.map((cert) => (
          <div key={cert} className="cert-item">
            {cert}
          </div>
        ))}
      </div>
    </Section>
  );
};
