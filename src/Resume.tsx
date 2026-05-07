import * as React from "react";
import { Achievements } from "./Achievements";
import { Bio } from "./Bio";
import { Certifications } from "./Certifications";
import { Contacts } from "./Contacts";
import { Education } from "./Education";
import { Experience } from "./Experience";
import { Interests } from "./Interests";
import { Projects } from "./Projects";
import { Skills } from "./Skills";

const name = "Aleksandr Korovin";
const position = "Sr. Data/AI Product Manager";

const DesktopLayout: React.FC = () => (
  <div className="desktop layout">
    <div className="resume-header">
      <h1 className="name">{name}</h1>
      <div className="tagline">
        {position} &nbsp;·&nbsp; Berlin &nbsp;·&nbsp;{" "}
        <a href="mailto:alexander.s.korovin@gmail.com">alexander.s.korovin@gmail.com</a>
        {" "}&nbsp;·&nbsp;{" "}
        <a href="https://www.linkedin.com/in/aleksanderkorovin/">LinkedIn</a>
      </div>
      <Bio />
    </div>

    <div className="two-col">
      <div className="col-left">
        <Experience />
        <Education />
      </div>
      <div className="col-right">
        <Contacts />
        <Skills />
        <Certifications />
        <Achievements />
      </div>
    </div>

    <div className="full-width-sections">
      <Projects />
      <Interests />
    </div>
  </div>
);

const MobileLayout: React.FC = () => (
  <div className="mobile layout">
    <div className="resume-header">
      <h1 className="name">{name}</h1>
      <div className="tagline">{position} · Berlin</div>
      <Bio />
    </div>
    <Contacts />
    <Skills />
    <Experience />
    <Education />
    <Certifications />
    <Achievements />
    <Projects />
    <Interests />
  </div>
);

export const Resume: React.FC = () => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{name + " — " + position}</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
        />
        <link rel="stylesheet" href="./style.css" />
      </head>
      <body>
        <DesktopLayout />
        <MobileLayout />
      </body>
    </html>
  );
};
