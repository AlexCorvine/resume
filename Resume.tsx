import * as React from "react";

export const Resume: React.FC = () => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Aleksandr Korovin - Product Manager</title>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
        />
        <link rel="stylesheet" href="style.css" />
      </head>

      <body>
        <div id="layout">
          <h1 id="name">Aleksandr Korovin</h1>
          <p id="bio">
            Product Manager with 8+ years of experience in product focused companies and consulting, 
            working for global brands in banking, insurance, e-commerce, and energy. 
            Have a founder’s mentality and strong skillset across product management domain: developed and implemented digital 
            & transformation strategies, prepared financial models and budgets, managed teams, 
            created new products and features from idea to launch
          </p>

          <BulletedList
            id="contacts"
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

          <Section id="experience" header="Experience">
            <JobSection
              company={{
                name: "EPAM Continuum",
                link: "https://www.continuuminnovation.com/",
              }}
              location="Turkey"
              position="Product Manager"
              dates={{
                from: "March 2021",
                to: "Present",
              }}
              bullets={[
                <>
                  <Link
                    highlight
                    label="PM for Made Real Lab"
                    href="https://www.epam.com/services/engineer/made-real-lab"
                  />{" "}
                  Smart Locker (IoT solution for smart storage, launched in 25+ EPAM offices), led the product development and market launch 
                </>,
                [
                  "Pitched product to clients, stakeholders, and vendors, which lead to discovery and project initiation for big WE retailer",
                  "Organized product development process for 6 teams / 20+ people (incl. product requirements, roadmap, customer journeys)",
                ],
                   <>
                  PM of AI engineering platform, helped to develop Commercial solution from a proof-of-concept (PoC) stage
                </>,
                [
                  "Led development of two kernel teams (similarity engine, knowledge graph on StarDog), launched 3 PoCs for client",
                  "Implemented OKR approach to improve gaps between delivery and product management and decrease cycle time",
                  "Worked closely with the product and technical director on long-term strategy, on presales, discoveries, and platform vision",
                ],
                <>
                  Product coach for an online gambling platform, implemented product transformation strategy for a tribe (16 teams)
                </>,
                [
                  "Worked with business to unified product creation process and product management capability maturity model",
                  "Conducted PM capabilities assessment (20+ PMs) and run regular workshops to close the gap between delivery and product management teams",
                  "Develop and rollout a product decomposition framework for program level initiatives",
                ],
                <>
                Product manager for e-commerce seller portal discovery
                </>,
                <> 
                Business development initiatives: Presale support, new offerings design, practice development, upskilling & assessment of PdMs
                </>,
                    ]}
            />

            <JobSection
              company={{
                name: "IBM iX",
                link: "https://ibmix.de/en/",
              }}
              location="Russia"
              position="Seniot Digital Consultant"
              dates={{
                from: "March 2018",
                to: "March 2021",
              }}
              bullets={[
                 <>
                  <Link
                    highlight
                    label="Experience consultant / PO for Digital Lab"
                    href="https://www.ibm.com/services/ibmix/case-studies/pasha-bank.html"
                  />{" "}
                  set-up and new online bank development for big corporate bank 
                </>,
                [
                "Led a discovery stream and helped to reduce time from idea validation to MVP from one year to three months)", 
                "Worked as a PO on discovery and delivery of new products: daily banking, SME onboarding",
                "Responsible for MVP, and supported go-to-market of B2B marketplace (platform to connect buyer and suppliers), that resulted 1000+ clients, bid count in 80% of RFQs, 21% cost reduction for seller",
                ],
               <>
                 Product strategy for Personalised Campaigning platform for a biggest retail bank in Russia 
                </>,
                  [
                "Led a product stream to create a Campaign as a Service platform vision (+ Next Best Action engine) for business & marketing teams: conducted audit of personalisation process within bank, market research on similar product offerings", 
                "Prepared product pitching materials and presented it to tribe leads and CTO, which lead project to next phase, platform technical design and MVP preparation",
                ],
              ]}
            />

            <JobSection
              company={{
                name: "Meta",
                link: "https://meta.com",
              }}
              location="USA"
              position="Frontend Engineer"
              dates={{
                from: "August 2018",
                to: "May 2019",
              }}
              bullets={[
                "Quos inventore deserunt repellendus aliquam expedita quidem odit nobis possimus, assumenda perspiciatis. Beatae nihil dignissimos cum atque ut ratione ad, rerum ipsam quibusdam iusto ea officiis suscipit architecto voluptas corrupti officia.",
                "Libero accusamus quo facere nam iste deserunt quas autem atque dignissimos veniam velit",
                "Esse dolores ut praesentium excepturi",
              ]}
            />

            <JobSection
              company={{
                name: "Netflix",
                link: "https://netflix.com/",
              }}
              location="USA"
              position="Full-stack Engineer"
              dates={{
                from: "August 2015",
                to: "August 2018",
              }}
            />

            <JobSection
              company={{
                name: "Spotify",
                link: "https://spotify.com/",
              }}
              location="USA"
              position="Intern"
              dates={{
                from: "August 2014",
                to: "August 2015",
              }}
            />
          </Section>

          <Section id="education" header="Education">
            <EducationSubsection
              institution={{
                name: "MIT",
                href: "https://www.mit.edu/",
              }}
              location="Cambridge, USA"
              degree="Bachelor's degree"
              faculty="Computer Science and Engineering"
              dates={{
                from: "2010",
                to: "2014",
              }}
            />
          </Section>

          <Section id="product_skills" header="Product Skills">
            <BulletedList
              bullets={[
                "Product Discovery",
                "Product strategy, roadmaping",
                "Storyboarding and storytelling",
                "Prototyping (Figma, Coda.io, Miro)",
              ]}
            />
          </Section>
          
           <Section id="tech_skills" header="Technical Skills">
            <BulletedList
              bullets={[
                "Analytics and visualization (Excel, SQL, Amplitude, Python)",
                "Financial analysis, budgeting",
              ]}
            />
          </Section>

          <Section id="langs" header="Languages">
            <BulletedList bullets={["English(C1)", "Russian(native)", "German(A2)"]} />
          </Section>

          <Section id="articles" header="Articles">
            <BulletedList
              bullets={[
                {
                  label: "Product storytelling using Gamification principles",
                  href: "https://alexkorvin.medium.com/storytelling-3-0-gamification-strategies-79160e670b0b",
                },
                 {
                  label: "Storytelling and Presentation design (RU), open webinar to RANEPA master program: Digital product and visualisation",
                  href: "https://ion.ranepa.ru/news/storytelling-i-oformlenie-prezentatsiy-vebinar-aleksandra-korovina-ibm-i-alekseya-mordasova-sberbank/",
                },
              ]}
            />
          </Section>
        </div>
      </body>
    </html>
  );
};

const Section: React.FC<{
  header: React.ReactNode;
  children: React.ReactNode;
  id?: string;
}> = ({ header, children, id }) => {
  return (
    <section id={id} className="section">
      <header>{header}</header>
      {children}
    </section>
  );
};

const Subsection: React.FC<{
  header: React.ReactNode;
  children: React.ReactNode;
}> = ({ header, children }) => {
  return (
    <section className="subsection">
      <header>{header}</header>
      {children}
    </section>
  );
};

const JobSection: React.FC<{
  company: { name: React.ReactNode; link: string };
  location: string;
  position: string;
  dates: { from: string; to: string };
  description?: React.ReactNode;
  bullets?: IBullet[];
}> = ({ company, location, position, dates, description, bullets }) => {
  return (
    <Subsection
      header={
        <>
          <Link
            href={company.link}
            label={company.name}
            className="company-name"
          />
          , {location} — {position}
        </>
      }
    >
      <div className="dates">
        {dates.from} - {dates.to}
      </div>
      {description ? <div className="description">{description}</div> : null}
      {bullets ? <BulletedList bullets={bullets} /> : null}
    </Subsection>
  );
};

const EducationSubsection: React.FC<{
  institution: { name: string; href: string };
  location: string;
  degree: string;
  faculty: string;
  dates: { from: string; to: string };
}> = ({ institution, location, faculty, dates, degree }) => {
  return (
    <Subsection
      header={
        <>
          {faculty}, <Link label={institution.name} href={institution.href} />
        </>
      }
    >
      <div style={{ marginTop: "0.3rem" }}>
        {location} — {degree}
      </div>
      <div className="dates">
        {dates.from} - {dates.to}
      </div>
    </Subsection>
  );
};

interface ILink {
  label: React.ReactNode;
  href: string;
  target?: React.HTMLAttributeAnchorTarget;
  className?: string;
  highlight?: boolean;
}
function isLink(x: any): x is ILink {
  return x.label !== undefined;
}
const Link: React.FC<ILink> = ({
  label,
  href,
  className,
  highlight,
  target = "_blank",
}) => {
  const a = (
    <a target={target} href={href} className={className}>
      {label}
    </a>
  );
  return highlight ? <strong>{a}</strong> : a;
};

const Phone: React.FC<{ number: string; countryCode: string }> = ({
  number,
  countryCode,
}) => {
  return (
    <Link
      label={countryCode + " " + number}
      target="_self"
      href={"tel:" + countryCode + number}
    />
  );
};

type IBullet = React.ReactNode | ILink | IBullet[];
const BulletedList: React.FC<{ bullets: IBullet[]; id?: string }> = ({
  bullets,
  id,
}) => {
  return (
    <ul id={id}>
      {bullets.map((x, i) =>
        Array.isArray(x) ? (
          <BulletedList key={i} bullets={x} />
        ) : (
          <li key={i}>{isLink(x) ? <Link {...x} /> : x}</li>
        )
      )}
    </ul>
  );
};
