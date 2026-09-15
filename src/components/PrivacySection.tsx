import {
  ArrowRight,
  CloudOff,
  FileCheck2,
  LockKeyhole,
  Mic2,
  ShieldCheck,
} from 'lucide-react'
import { privacyPromises } from '../data/content'

export function PrivacySection() {
  return (
    <section className="privacy-section" id="privacy">
      <div className="privacy-shell section-shell">
        <div className="privacy-intro">
          <p className="eyebrow">
            <ShieldCheck size={14} aria-hidden="true" />
            Private by architecture
          </p>
          <h2>Bedroom audio has no business leaving your iPhone.</h2>
          <p>
            MonoNight records, analyzes, organizes, and replays your night
            locally. Sharing happens only when you choose it.
          </p>

          <div className="privacy-flow" aria-label="MonoNight local data flow">
            <span>
              <Mic2 size={18} aria-hidden="true" />
              Record
            </span>
            <ArrowRight size={15} aria-hidden="true" />
            <span>
              <FileCheck2 size={18} aria-hidden="true" />
              Analyze
            </span>
            <ArrowRight size={15} aria-hidden="true" />
            <span>
              <LockKeyhole size={18} aria-hidden="true" />
              Keep local
            </span>
            <span className="cloud-off">
              <CloudOff size={18} aria-hidden="true" />
              No upload
            </span>
          </div>
        </div>

        <div className="privacy-grid">
          {privacyPromises.map((promise) => (
            <article className="privacy-stat" key={promise.label}>
              <span>{promise.value}</span>
              <h3>{promise.label}</h3>
              <p>{promise.description}</p>
            </article>
          ))}
        </div>
      </div>
      <p className="medical-boundary section-shell">
        MonoNight describes recorded sounds. It does not diagnose apnea,
        identify who snored in a shared room, or measure sleep stages.
      </p>
    </section>
  )
}
