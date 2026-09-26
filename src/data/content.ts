export const expertise = [
  { number: '01', title: 'AI Governance', description: 'Risk management, governance frameworks, controls and responsible deployment.' },
  { number: '02', title: 'AI Ethics', description: 'Fairness, bias, transparency, accountability and human impact.' },
  { number: '03', title: 'AI Safety', description: 'AI risk identification, harm prevention, safety considerations and implementation.' },
  { number: '04', title: 'AI Security', description: 'AI security, privacy, access controls and responsible data practices.' },
  { number: '05', title: 'AI Strategy', description: 'AI adoption, business alignment, transformation and responsible strategy.' },
  { number: '06', title: 'Responsible AI', description: 'Practical principles and controls for trustworthy AI systems.' },
];

export const frameworks = [
  { title: 'NIST AI Risk Management Framework', items: 'Govern · Map · Measure · Manage' },
  { title: 'EU AI Act', items: 'Risk Classification · Compliance · Governance' },
  { title: 'Responsible AI', items: 'Fairness · Transparency · Accountability' },
  { title: 'AI Security & Governance', items: 'Privacy · Security · Access Controls' },
];

export const projects = [
  {
    number: '01',
    title: 'Enterprise AI Risk & Governance Assessment',
    category: 'ISO 42001 · NIST AI RMF · Governance',
    description: 'Mapped high-risk decision models (credit scoring/hiring) against ISO 42001 and NIST AI RMF to build risk treatment plans, Model Cards, and HITL oversight controls.',
    tags: ['Risk Assessment', 'Model Cards', 'HITL Oversight'],
    href: 'https://github.com/Nisarga0104/NIST_AI_RMF_Risk_Assessment',
  },
  {
    number: '02',
    title: 'Algorithmic Bias Audit & Analysis',
    category: 'AI Ethics · Fairness · Algorithmic Risk',
    description: 'Audited real-world discriminatory AI failures (COMPAS/hiring algorithms) to identify lifecycle vulnerabilities and establish Disparate Impact Ratio testing.',
    tags: ['Bias Audit', 'Disparate Impact', 'Fairness'],
    href: 'https://github.com/Nisarga0104/compas-bias-audit',
  },
  {
    number: '03',
    title: 'Enterprise Responsible AI Policy & Shadow AI Governance',
    category: 'AI Governance · Policy · Security',
    description: 'Authored a company-level usage policy regulating Shadow AI, data privacy, prompt injection security, and tiered risk-classification pathways.',
    tags: ['Shadow AI', 'Privacy', 'Prompt Injection'],
    href: 'https://github.com/Nisarga0104/Responsible-AI-Policy-Northstar-FinTech-Services',
  },
  {
    number: '04',
    title: 'Cross-Jurisdiction AI Regulatory & Compliance Brief',
    category: 'AI Regulation · Compliance · Policy',
    description: 'Developed a comparative compliance matrix analyzing high-risk AI tools across the EU AI Act, US State Laws, and India’s DPDP Act.',
    tags: ['EU AI Act', 'US State Laws', 'India DPDP Act'],
    href: 'https://github.com/Nisarga0104/Global-AI-Regulatory-Comparison-Brief-EU-US-India-',
  },
  {
    number: '05',
    title: 'Third-Party AI Vendor Risk Assessment & Vetting Framework',
    category: 'AI Security · Vendor Risk · ISO 42001',
    description: 'Architected a quantitative vendor vetting template to audit external AI tools on data provenance, model lineage, and ISO 42001 compliance.',
    tags: ['Vendor Risk', 'Data Provenance', 'Model Lineage'],
    href: 'https://github.com/Nisarga0104/NIST_AI_RMF_Risk_Assessment',
  },
];

import certi1 from '@/assets/images/Certi1.jpeg';
import certi2 from '@/assets/images/Certi2.jpeg';
import certi6 from '@/assets/images/Certi6.png';
import certi7 from '@/assets/images/Certi7.png';
import certi8 from '@/assets/images/Certi8.png';
import certi12 from '@/assets/images/Certi12.png';

export const certifications = [
  { organization: 'Microsoft', name: 'Azure Fundamentals — AZ-900', type: 'Certification', image: certi1, href: certi1 },
  { organization: 'Securiti AI', name: 'AI Security and Governance', type: 'Certification', image: certi6, href: certi6 },
  { organization: 'IBM', name: 'Ethical Considerations for Generative AI', type: 'Certification', image: certi7, href: certi7 },
  { organization: 'Salesforce', name: 'Agentblazer Champion 2026', type: 'Badge', image: certi12, href: 'https://www.salesforce.com/trailblazer/profile' },
  { organization: 'HubSpot', name: 'HubSpot Reporting Certified', type: 'Certification', image: certi8, href: certi8 },
  { organization: 'Outskill', name: 'Generative AI Mastermind', type: 'Course', image: certi2, href: certi2 },
];

export const experience = [
  {
    period: 'Early experience',
    company: 'GPT Softwares',
    role: 'Software Development Intern',
    context: 'Frontend development exposure',
    description: 'Built practical foundations across HTML, CSS, JavaScript and Java, with exposure to frontend development and the structured thinking that supports technology delivery.',
  },
];
