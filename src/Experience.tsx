import * as React from "react";
import { JobItem } from "./core/JobItem";
import { Link } from "./core/Link";
import { Section } from "./core/Section";

export const Experience: React.FC = () => {
  return (
    <Section header="Experience">
      <JobItem
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

      <JobItem
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

      <JobItem
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

      <JobItem
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

      <JobItem
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

      <JobItem
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
  );
};