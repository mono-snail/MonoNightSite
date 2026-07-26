import { Ear, Play, ScanLine } from 'lucide-react'
import { screenshots } from '../data/content'
import { PhoneFrame } from './PhoneFrame'

const steps = [
  {
    number: '01',
    title: 'Set it down',
    description: 'Start with one tap before you sleep.',
  },
  {
    number: '02',
    title: 'Let it listen',
    description: 'Keep an overnight sound record on your iPhone.',
  },
  {
    number: '03',
    title: 'Look back',
    description: 'Trace the shape of the night in a clear report.',
  },
]

export function EvidenceSection() {
  return (
    <section className="evidence-section section-shell" id="experience">
      <div className="evidence-copy">
        <p className="eyebrow">
          <ScanLine size={14} aria-hidden="true" />
          A night, in context
        </p>
        <h2>A record, not a guess.</h2>
        <p className="section-lede">
          MonoNight keeps the whole soundscape nearby, then helps you return to
          the moments worth understanding.
        </p>

        <ol className="process-list">
          {steps.map((step) => (
            <li key={step.number}>
              <span>{step.number}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className="evidence-visual">
        <div className="evidence-phone evidence-phone-back">
          <PhoneFrame
            src={screenshots.recording.src}
            alt={screenshots.recording.alt}
          />
        </div>
        <div className="evidence-phone evidence-phone-front">
          <PhoneFrame src={screenshots.report.src} alt={screenshots.report.alt} />
        </div>
        <div className="evidence-chip chip-ear">
          <Ear size={15} aria-hidden="true" />
          <span>On-device</span>
        </div>
        <div className="evidence-chip chip-play">
          <Play size={14} fill="currentColor" aria-hidden="true" />
          <span>Replay a moment</span>
        </div>
      </div>
    </section>
  )
}
