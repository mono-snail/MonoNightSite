import { CloudOff, LockKeyhole, ShieldCheck } from 'lucide-react'
import { privacyPromises } from '../data/content'

export function PrivacySection() {
  return (
    <section className="privacy-section" id="privacy">
      <div className="privacy-shell section-shell">
        <div className="privacy-intro">
          <p className="eyebrow">
            <ShieldCheck size={14} aria-hidden="true" />
            Private by design
          </p>
          <h2>Your night is yours.</h2>
          <p>
            The point of a night record is to let you notice your own patterns,
            not to create one more place for your audio to go.
          </p>
          <div className="privacy-art" aria-hidden="true">
            <LockKeyhole size={24} />
            <CloudOff size={20} />
          </div>
        </div>

        <div className="privacy-grid">
          {privacyPromises.map((promise) => (
            <article className="privacy-card" key={promise.title}>
              <h3>{promise.title}</h3>
              <p>{promise.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
