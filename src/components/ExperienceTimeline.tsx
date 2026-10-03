import { experienceSteps } from "../data/siteConfig";

export function ExperienceTimeline() {
  return (
    <ol className="experience-timeline">
      {experienceSteps.map((step, index) => (
        <li key={step}>
          <span className="experience-timeline__number">0{index + 1}</span>
          <h3>{step}</h3>
        </li>
      ))}
    </ol>
  );
}
