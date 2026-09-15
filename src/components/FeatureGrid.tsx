import {
  Archive,
  AudioLines,
  FileInput,
  FileOutput,
  Languages,
  Palette,
  ShieldCheck,
  SlidersHorizontal,
  Sunrise,
} from 'lucide-react'
import { capabilities, type CapabilityIcon } from '../data/content'

const icons: Record<CapabilityIcon, typeof ShieldCheck> = {
  shield: ShieldCheck,
  sunrise: Sunrise,
  library: Archive,
  sliders: SlidersHorizontal,
  import: FileInput,
  export: FileOutput,
}

const themes = [
  { name: 'Deep Blue', color: '#5da9ff' },
  { name: 'Sunset Glow', color: '#ff934f' },
  { name: 'Moss Night', color: '#72c996' },
  { name: 'Petal Glow', color: '#ef6ea7' },
]

export function FeatureGrid() {
  return (
    <section className="feature-section section-shell" id="features">
      <div className="feature-heading">
        <div>
          <p className="eyebrow">
            <AudioLines size={14} aria-hidden="true" />
            The complete night journal
          </p>
          <h2>Useful before bed. Clear in the morning. Better over time.</h2>
        </div>
        <p className="section-lede">
          The latest MonoNight release connects reliable recording, evidence
          review, organization, comparison, and export into one local workflow.
        </p>
      </div>

      <div className="feature-grid">
        {capabilities.map((capability, index) => {
          const Icon = icons[capability.icon]

          return (
            <article className="feature-card" key={capability.title}>
              <div className="feature-topline">
                <span className="feature-icon" aria-hidden="true">
                  <Icon size={20} strokeWidth={1.7} />
                </span>
                <span className="feature-number">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <h3>{capability.title}</h3>
              <p>{capability.description}</p>
            </article>
          )
        })}
      </div>

      <div className="personalization-strip">
        <div className="personalization-copy">
          <Palette size={19} strokeWidth={1.7} aria-hidden="true" />
          <div>
            <strong>Four night themes</strong>
            <p>Choose a calmer bedside palette without changing the workflow.</p>
          </div>
        </div>
        <div className="theme-swatches" aria-label="Available MonoNight themes">
          {themes.map((theme) => (
            <span key={theme.name}>
              <i style={{ backgroundColor: theme.color }} aria-hidden="true" />
              {theme.name}
            </span>
          ))}
        </div>
        <div className="language-note">
          <Languages size={19} strokeWidth={1.7} aria-hidden="true" />
          <span>English · 简体中文 · 繁體中文 · 日本語 · 한국어</span>
        </div>
      </div>
    </section>
  )
}
