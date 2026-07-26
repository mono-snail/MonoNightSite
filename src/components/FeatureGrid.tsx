import { AudioWaveform, CirclePlay, Moon, Sparkles, Waves } from 'lucide-react'
import { features, type FeatureIcon } from '../data/content'

const icons: Record<FeatureIcon, typeof Moon> = {
  moon: Moon,
  signature: AudioWaveform,
  replay: CirclePlay,
  sounds: Waves,
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
    </section>
  )
}
