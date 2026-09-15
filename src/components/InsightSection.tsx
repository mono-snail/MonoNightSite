import {
  ArrowRight,
  CalendarRange,
  CheckCircle2,
  CircleSlash2,
} from 'lucide-react'
import { screenshots } from '../data/content'
import { PhoneFrame } from './PhoneFrame'

const comparisonRules = [
  'Missing nights stay missing, never zero.',
  'Interrupted or very short recordings are excluded.',
  'Different analysis settings are shown, not mixed.',
  'At least three comparable nights are required.',
]

export function InsightSection() {
  return (
    <section className="insight-section" id="insights">
      <div className="section-shell">
        <header className="insight-heading">
          <div>
            <p className="eyebrow">From morning to pattern</p>
            <h2>One night is evidence. More nights add context.</h2>
          </div>
          <p className="section-lede">
            MonoNight shows what was recorded, what can be compared, and what
            is still unknown. No invented sleep score.
          </p>
        </header>

        <div className="insight-stage">
          <div className="insight-copy">
            <span className="insight-index">02 / MORNING REPORT</span>
            <h3>Start with the answer. Keep the method visible.</h3>
            <p>
              See recorded duration, snoring per recorded hour, the clearest
              sound to review, and why a night does or does not belong in a
              comparison.
            </p>
            <div className="insight-path" aria-label="MonoNight review flow">
              <span>Summary</span>
              <ArrowRight size={15} aria-hidden="true" />
              <span>Listen</span>
              <ArrowRight size={15} aria-hidden="true" />
              <span>Details</span>
            </div>
          </div>
          <div className="insight-shot insight-shot-summary">
            <span>Example data</span>
            <PhoneFrame
              src={screenshots.summary.src}
              alt={screenshots.summary.alt}
              className="insight-phone"
            />
          </div>

          <div className="insight-shot insight-shot-trends">
            <span>Example data</span>
            <PhoneFrame
              src={screenshots.insights.src}
              alt={screenshots.insights.alt}
              className="insight-phone"
            />
          </div>
          <div className="comparison-copy">
            <span className="insight-index">03 / INSIGHTS</span>
            <h3>Compare nights without hiding the exclusions.</h3>
            <p>
              Review 7, 14, or 30 days. Add room, phone placement, bedtime
              factors, and morning feeling without turning correlation into a
              diagnosis.
            </p>
            <ul>
              {comparisonRules.map((rule, index) => (
                <li key={rule}>
                  {index === 1 ? (
                    <CircleSlash2 size={16} aria-hidden="true" />
                  ) : (
                    <CheckCircle2 size={16} aria-hidden="true" />
                  )}
                  {rule}
                </li>
              ))}
            </ul>
            <p className="comparison-window">
              <CalendarRange size={16} aria-hidden="true" />
              Previous 14 nights, with the selected night kept out of its own
              baseline.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
