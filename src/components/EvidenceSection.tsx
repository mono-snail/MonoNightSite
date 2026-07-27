import { useState } from 'react'
import { ScanLine } from 'lucide-react'
import { recordingScreens } from '../data/content'
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
  const [selectedScreen, setSelectedScreen] = useState(0)
  const currentScreen = recordingScreens[selectedScreen]!

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
        <div className="recording-flow-heading">
          <p>Recording flow</p>
          <strong>
            {String(selectedScreen + 1).padStart(2, '0')} / {String(recordingScreens.length).padStart(2, '0')}
          </strong>
        </div>

        <div
          className="recording-screen-picker"
          role="tablist"
          aria-label="MonoNight recording screens"
        >
          {recordingScreens.map((screen, index) => {
            const isSelected = index === selectedScreen

            return (
              <button
                className={`recording-screen-button${isSelected ? ' is-selected' : ''}`}
                key={screen.src}
                type="button"
                role="tab"
                aria-selected={isSelected}
                aria-label={`View recording screen ${index + 1} of ${recordingScreens.length}`}
                onClick={() => setSelectedScreen(index)}
              >
                <span>{String(index + 1).padStart(2, '0')}</span>
              </button>
            )
          })}
        </div>

        <div className="evidence-flow-phone">
          <PhoneFrame src={currentScreen.src} alt={currentScreen.alt} />
          <p aria-live="polite">
            <span aria-hidden="true" />
            A quiet, focused recording experience.
          </p>
        </div>
      </div>
    </section>
  )
}
