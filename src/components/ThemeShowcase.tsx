import { useState, type CSSProperties } from 'react'
import { Check, Palette } from 'lucide-react'
import { appThemes, type AppTheme } from '../data/content'
import { MonoNightMoonMark } from './MonoNightMoonMark'

export function ThemeShowcase() {
  const [selectedTheme, setSelectedTheme] = useState<AppTheme>(appThemes[0]!)
  const previewStyle = {
    '--theme-primary': selectedTheme.primary,
    '--theme-secondary': selectedTheme.secondary,
    '--theme-background-start': selectedTheme.backgroundStart,
    '--theme-background-end': selectedTheme.backgroundEnd,
  } as CSSProperties

  return (
    <section
      className="theme-section section-shell"
      id="themes"
      aria-labelledby="themes-heading"
    >
      <div className="theme-section-heading">
        <p className="eyebrow">
          <Palette size={14} aria-hidden="true" />
          Four night skins
        </p>
        <h2 id="themes-heading">Keep the calm. Make it yours.</h2>
        <p className="section-lede">
          MonoNight carries the same focused interface through four distinct
          night palettes. Choose the one that feels most at home by your bed.
        </p>
      </div>

      <div className="theme-stage">
        <div className="theme-picker">
          <div>
            <p className="theme-picker-label">Choose a night skin</p>
            <p className="theme-picker-note">
              The palette reaches the background, recording glow, timelines,
              and highlights.
            </p>
          </div>
          <div
            className="theme-options"
            role="group"
            aria-label="MonoNight skin preview"
          >
            {appThemes.map((theme) => {
              const isSelected = theme.id === selectedTheme.id

              return (
                <button
                  className={`theme-option${isSelected ? ' is-selected' : ''}`}
                  key={theme.id}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => setSelectedTheme(theme)}
                >
                  <span
                    className="theme-swatch"
                    aria-hidden="true"
                    style={{
                      background: `linear-gradient(135deg, ${theme.backgroundStart}, ${theme.backgroundEnd})`,
                    }}
                  >
                    <span
                      className="theme-swatch-glow"
                      style={{ background: theme.primary }}
                    />
                  </span>
                  <span className="theme-option-copy">
                    <strong>{theme.name}</strong>
                    <small>{theme.description}</small>
                  </span>
                  {isSelected ? (
                    <Check className="theme-option-check" size={17} aria-hidden="true" />
                  ) : null}
                </button>
              )
            })}
          </div>
        </div>

        <div className="theme-preview-wrap">
          <div
            className="theme-preview"
            style={previewStyle}
            aria-label={`${selectedTheme.name} MonoNight skin preview`}
          >
            <div className="theme-preview-aura" aria-hidden="true" />
            <div className="theme-preview-topline">
              <span>MONONIGHT</span>
              <span className="theme-preview-live">
                <i aria-hidden="true" />
                READY
              </span>
            </div>

            <div className="theme-preview-copy">
              <p>Sunday, Jul 26</p>
              <h3>Good evening.</h3>
            </div>

            <div className="theme-preview-action">
              <MonoNightMoonMark size={30} />
              <span>START</span>
            </div>

            <div className="theme-preview-card">
              <div className="theme-preview-card-topline">
                <span>TONIGHT'S SOUND</span>
                <span>00:00</span>
              </div>
              <div className="theme-preview-wave" aria-hidden="true">
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
              </div>
              <p>Ready when you are</p>
            </div>
          </div>

          <div className="theme-preview-caption" aria-live="polite">
            <span className="theme-preview-caption-icon">
              <Palette size={15} aria-hidden="true" />
            </span>
            <div>
              <strong>{selectedTheme.name}</strong>
              <p>{selectedTheme.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
