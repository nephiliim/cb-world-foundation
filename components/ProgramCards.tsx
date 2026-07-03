import Link from "next/link";
import { programs } from "@/data/site";

export function ProgramCards() {
  return (
    <div className="grid programs">
      {programs.map((program) => (
        <article className="card" key={program.title}>
          <div className="program-icon" aria-hidden="true">{program.icon}</div>
          <h3>{program.title}</h3>
          <p className="section-copy">{program.description}</p>
          <Link className="text-link" href={`/programs/${program.slug}`}>Read more →</Link>
        </article>
      ))}
    </div>
  );
}
