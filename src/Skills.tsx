import * as React from "react";
import { Section } from "./core/Section";

const SkillGroup: React.FC<{ label: string; tags: string[]; variant?: "blue" | "gray" }> = ({
  label,
  tags,
  variant = "gray",
}) => (
  <div className="skill-group">
    <div className="skill-group-label">{label}</div>
    <div className="tags">
      {tags.map((tag) => (
        <span key={tag} className={`tag tag-${variant}`}>
          {tag}
        </span>
      ))}
    </div>
  </div>
);

export const Skills: React.FC = () => {
  return (
    <Section header="Skills">
      <SkillGroup
        label="Product & Strategy"
        tags={["OKRs", "User Research", "Roadmapping", "Jira", "Figma"]}
      />
      <SkillGroup
        label="Data & Analytics"
        tags={["SQL", "Python", "Amplitude", "Airtable"]}
        variant="blue"
      />
      <SkillGroup
        label="AI Pipelines"
        tags={["Content generation", "Databricks", "n8n", "Evals", "HITL design"]}
        variant="blue"
      />
      <SkillGroup
        label="Cloud & Infra"
        tags={["S3", "Kinesis", "Lambda", "DynamoDB"]}
      />
      <SkillGroup
        label="Languages"
        tags={["English (fluent)", "German (B1)"]}
      />
    </Section>
  );
};
