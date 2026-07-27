import {
  AudioWaveform,
  CirclePlay,
  FileAudio,
  Moon,
  Settings2,
  Sparkles,
} from 'lucide-react'
import { features, screenshots, type FeatureIcon } from '../data/content'
import { PhoneFrame } from './PhoneFrame'

const icons: Record<FeatureIcon, typeof Moon> = {
  moon: Moon,
  signature: AudioWaveform,
  replay: CirclePlay,
  import: FileAudio,
}

export function FeatureGrid() {
  return (
    <section className="feature-section section-shell" id="features">
      <div className="section-heading">
        <p className="eyebrow">
          <Sparkles size={14} aria-hidden="true" />
          What stays with you
        </p>
        <h2>Everything you need. Nothing between you and the night.</h2>
      </div>

      <div className="feature-grid">
        {features.map((feature) => {
          const Icon = icons[feature.icon]

          return (
            <article className="feature-card" key={feature.number}>
              <div className="feature-topline">
                <span className="feature-icon" aria-hidden="true">
                  <Icon size={21} strokeWidth={1.7} />
                </span>
                <span className="feature-number">{feature.number}</span>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          )
        })}
      </div>

      <aside className="settings-highlight" aria-labelledby="settings-highlight-heading">
        <div className="settings-highlight-copy">
          <span className="settings-highlight-icon" aria-hidden="true">
            <Settings2 size={19} strokeWidth={1.8} />
          </span>
          <p className="eyebrow">Made for your night</p>
          <h3 id="settings-highlight-heading">Set the details once, then rest.</h3>
          <p>
            Keep the recording experience simple, with the controls you need
            gathered in one quiet place.
          </p>
        </div>
        <PhoneFrame
          className="settings-highlight-phone"
          src={screenshots.settings.src}
          alt={screenshots.settings.alt}
        />
      </aside>
    </section>
  )
}
