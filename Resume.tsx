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
            working for global brands in banking, insurance, e-commerce, and energy. Have a founder’s mentality and strong skillset across product management domain, 
            created new products and features from idea, discovery and tolaunch. 
          <br />
           Significant international experience and ability to work in a multi-national and multi-cultural environment (lived for 2 years in CIS, US, and EU, maintain regular contacts with a global network)
           <br />
           Anabin certified university and specialisation: Bachelor’s degree in Applied mathematics; Master in GSOM business school and University of St. Gallen (ranked #21 by the Financial Times globally) 
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
              position="Senior Digital Consultant"
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
                  set-up and new online bank development for big corporate bank in CIS
                </>,
                [
                "Led a discovery stream and helped to reduce time from idea validation to MVP from one year to three months", 
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
                <>
                 Product manager for BI / ML product in O&G upstream (geological exploration)
                </>,
                  [
                "Launch 2 MVPs ( exploration planner, tech scenario recommendation) from idea to production ready solutions",
                "Onboarded 100+ geological projects and 30 active users, pitch product on client demo sessions",
                ],
              ]}
            />

            <JobSection
              company={{
                name: "Deloitte Digital",
                link: "https://www.deloittedigital.com/",
              }}
              location="Moscow"
              position="Senior Consultant"
              dates={{
                from: "April 2017",
                to: "March 2018",
              }}
              bullets={[
                "Developed a digital strategy for top-3 insurance: lead a team of 3 people, was responsible for analyses of internal and external environment, company digital maturity and insurance value chain assessment",
                "Prepared quarterly fintech monitoring for Central Bank: lead a team, responsible for overall methodology, fintech index and delivery",
              ]}
            />
            
            <JobSection
              company={{
                name: "KPMG",
                link: "https://kpmg.com/ae/en/home/services/advisory/strategy.html",
              }}
              location="Moscow"
              position="Senior Associate"
              dates={{
                from: "November 2016",
                to: "April 2017",
              }}
              bullets={[
                "Operation efficiency improvement for Object of social infrastructure (hotels, recreation centers). Responsible for client & market research, financial model, client material preparation and presentation",
              ]}
            />

            <JobSection
              company={{
                name: "Sberbank",
                link: "https://programmes.sberuniversity.ru/rmacademy",
              }}
              location="Russia"
              position="Project manager"
              dates={{
                from: "October 2014",
                to: "November 206",
              }}
               bullets={[
                "PM for online education programs in risk management and finance, responsible for line and middle management of the bank",
                "Developed executive programs, risk game simulator in web/mobile for line management (7000+ students / year, NPS > 80%",
                "Operation efficiency improvement for Object of social infrastructure (hotels, recreation centers). Responsible for client & market research, financial model, client material preparation and presentation",
              ]}
            />

            <JobSection
              company={{
                name: "IBM",
                link: "https://www.ibm.com/consulting/",
              }}
              location="Russia"
              position="Consultant"
              dates={{
                from: "September 2013",
                to: "October 2014",
              }}
               bullets={[
              "Delivered lead generation analytics engine for US transportation company, responsible for engine logics, UX and product concept",
              ]}
            />
          </Section>

          <Section id="education" header="Education">
            <EducationSubsection
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
            
             <EducationSubsection
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
            
             <EducationSubsection
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

          <Section id="skills" header="Skills">
            <BulletedList
              bullets={[
                "Product Discovery",
                "Product strategy, roadmaping",
                "Storyboarding and storytelling",
                "Prototyping (Figma, Coda.io, Miro)",
                "Analytics and visualization (Excel, SQL, Amplitude, Python)",
                "Financial analysis and budgeting",
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
