import { ArrowDownRight } from 'lucide-react'
import { problems } from '../data/content'

export function ProblemStrip() {
  return (
    <section className="problem-section" id="why" aria-labelledby="problem-heading">
      <div className="section-shell">
        <div className="problem-heading">
          <p className="section-kicker">Why MonoNight</p>
          <h2 id="problem-heading">Know what happened overnight.</h2>
        </div>

        <div className="problem-list">
          {problems.map((problem) => (
            <article className="problem-item" key={problem.number}>
              <span className="problem-number">{problem.number}</span>
              <div>
                <h3>{problem.title}</h3>
                <p>{problem.solution}</p>
              </div>
              <ArrowDownRight size={21} strokeWidth={1.6} aria-hidden="true" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
