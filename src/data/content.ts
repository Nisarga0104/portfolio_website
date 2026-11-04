export const expertise = [
  { number: '01', title: 'Data Analysis', description: 'Data cleaning, exploratory analysis, trend identification and insight generation.' },
  { number: '02', title: 'Business Intelligence', description: 'Interactive dashboards, KPI reporting and visual storytelling for decision-makers.' },
  { number: '03', title: 'Business Analysis', description: 'Customer behaviour, process thinking, requirements and business-focused recommendations.' },
  { number: '04', title: 'Data Tools', description: 'Python, Pandas, NumPy, SQL, MySQL, Power BI, Excel and data visualisation.' },
  { number: '05', title: 'AI Governance', description: 'Risk management, governance frameworks, controls and responsible deployment.' },
  { number: '06', title: 'AI Ethics', description: 'Fairness, bias, transparency, accountability and human impact.' },
  { number: '07', title: 'AI Safety', description: 'AI risk identification, harm prevention, safety considerations and implementation.' },
  { number: '08', title: 'AI Security', description: 'AI security, privacy, access controls and responsible data practices.' },
  { number: '09', title: 'AI Strategy', description: 'AI adoption, business alignment, transformation and responsible strategy.' },
  { number: '10', title: 'Responsible AI', description: 'Practical principles and controls for trustworthy AI systems.' },
];

export const frameworks = [
  { title: 'Analytics Workflow', items: 'Clean · Explore · Analyse · Communicate' },
  { title: 'Business Intelligence', items: 'KPIs · Dashboards · Trends · Actionable Insight' },
  { title: 'Data & Reporting Tools', items: 'Python · SQL · Power BI · Excel' },
  { title: 'Data Preparation & EDA', items: 'ETL · Exploratory Data Analysis (EDA)' },
  { title: 'Insight Delivery', items: 'Data Story Telling · AI-assisted Analytics' },
  { title: 'LLM & RAG', items: 'LLM Concepts · RAG Concepts' },
  { title: 'NIST AI Risk Management Framework', items: 'Govern · Map · Measure · Manage' },
  { title: 'EU AI Act', items: 'Risk Classification · Compliance · Governance' },
  { title: 'Responsible AI', items: 'Fairness · Transparency · Accountability' },
  { title: 'AI Security & Governance', items: 'Privacy · Security · Access Controls' },
];

export const projects = [
  {
    number: '01',
    title: 'Olist E-Commerce Customer Retention & Sales Analysis',
    category: 'Power BI · Excel',
    description: 'Built a 2-page interactive dashboard using 8 supporting datasets to analyse 93,358 unique customers; identified 2,801 repeat customers and a 3.0% repeat purchase rate.',
    tags: ['Customer Retention', 'Sales Analysis', 'Power BI'],
    href: 'https://github.com/Nisarga0104',
  },
  {
    number: '02',
    title: 'E-Commerce Sales & Customer Behaviour Analysis',
    category: 'Python · Pandas · NumPy · Matplotlib · Seaborn',
    description: 'Cleaned 541,909 transaction records to 524,878 and analysed £10.64M in revenue; developed 7 analytical views and identified a 65.58% repeat purchase rate across 4,338 customers.',
    tags: ['Python', 'Customer Behaviour', 'Data Cleaning'],
    href: 'https://github.com/Nisarga0104',
  },
  {
    number: '03',
    title: 'Retail Inventory & Supply Chain Performance Dashboard',
    category: 'Power BI · Excel',
    description: 'Developed an interactive dashboard tracking sales revenue, units sold, low-stock products, late purchase orders and supplier on-time delivery to support inventory and procurement monitoring.',
    tags: ['Inventory', 'Supply Chain', 'Procurement'],
    href: 'https://github.com/Nisarga0104',
  },
  {
    number: '04',
    title: 'Retail Order Analytics & Performance Analysis',
    category: 'MySQL · SQL · Power BI',
    description: 'Designed a retail analytics database with SQL queries and analytical views; analysed 12 return records across 6 distinct returned order items and 13,148.30 in recorded refunds.',
    tags: ['MySQL', 'SQL Analysis', 'Returns'],
    href: 'https://github.com/Nisarga0104',
  },
  {
    number: '05',
    title: 'Enterprise AI Risk & Governance Assessment',
    category: 'ISO 42001 · NIST AI RMF · Governance',
    description: 'Mapped high-risk decision models (credit scoring/hiring) against ISO 42001 and NIST AI RMF to build risk treatment plans, Model Cards, and HITL oversight controls.',
    tags: ['Risk Assessment', 'Model Cards', 'HITL Oversight'],
    href: 'https://github.com/Nisarga0104/NIST_AI_RMF_Risk_Assessment',
  },
  {
    number: '06',
    title: 'Algorithmic Bias Audit & Analysis',
    category: 'AI Ethics · Fairness · Algorithmic Risk',
    description: 'Audited real-world discriminatory AI failures (COMPAS/hiring algorithms) to identify lifecycle vulnerabilities and establish Disparate Impact Ratio testing.',
    tags: ['Bias Audit', 'Disparate Impact', 'Fairness'],
    href: 'https://github.com/Nisarga0104/compas-bias-audit',
  },
  {
    number: '07',
    title: 'Enterprise Responsible AI Policy & Shadow AI Governance',
    category: 'AI Governance · Policy · Security',
    description: 'Authored a company-level usage policy regulating Shadow AI, data privacy, prompt injection security, and tiered risk-classification pathways.',
    tags: ['Shadow AI', 'Privacy', 'Prompt Injection'],
    href: 'https://github.com/Nisarga0104/Responsible-AI-Policy-Northstar-FinTech-Services',
  },
  {
    number: '08',
    title: 'Cross-Jurisdiction AI Regulatory & Compliance Brief',
    category: 'AI Regulation · Compliance · Policy',
    description: 'Developed a comparative compliance matrix analyzing high-risk AI tools across the EU AI Act, US State Laws, and India’s DPDP Act.',
    tags: ['EU AI Act', 'US State Laws', 'India DPDP Act'],
    href: 'https://github.com/Nisarga0104/Global-AI-Regulatory-Comparison-Brief-EU-US-India-',
  },
  {
    number: '09',
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
    description: 'Built practical foundations across HTML, CSS, JavaScript and Java, strengthening structured problem solving, attention to detail and the clear communication needed for technology and business analysis.',
  },
];
