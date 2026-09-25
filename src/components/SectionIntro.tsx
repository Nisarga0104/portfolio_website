type SectionIntroProps = {
  eyebrow: string;
  title: string;
  description?: string;
  dark?: boolean;
};

export function SectionIntro({ eyebrow, title, description, dark = false }: SectionIntroProps) {
  return (
    <div className={`section-intro ${dark ? 'section-intro-dark' : ''}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}
