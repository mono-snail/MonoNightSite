import {
  ArrowDown,
  ArrowUpRight,
  Check,
  LockKeyhole,
  MoonStar,
} from 'lucide-react'
import { screenshots } from '../data/content'
import { releaseLinks } from '../data/release'
import { PhoneFrame } from './PhoneFrame'

const proofPoints = ['On-device analysis', 'Original audio attached', 'No account']

export function Hero() {
  const appStoreUrl = releaseLinks.appStoreUrl

  return (
    <section className="hero" id="top">
      <div className="hero-product-scene" aria-hidden="true">
        <PhoneFrame
          src={screenshots.home.src}
          alt=""
          priority
          className="hero-phone hero-phone-home"
        />
        <PhoneFrame
          src={screenshots.recording.src}
          alt=""
          priority
          className="hero-phone hero-phone-listen"
        />
      </div>

      <div className="hero-shade" aria-hidden="true" />

      <div className="hero-content section-shell">
        <div className="hero-copy reveal">
          <p className="eyebrow">
            <MoonStar size={14} aria-hidden="true" />
            Private night sound recorder
          </p>
          <h1>MonoNight</h1>
          <p className="hero-statement">
            Hear what happened.
            <span>Know what changed.</span>
          </p>
          <p className="hero-lede">
            Record the full night, find the sounds that matter, and compare
            them with nights that are genuinely comparable.
          </p>

          <div className="hero-actions">
            {appStoreUrl ? (
              <a
                className="button button-primary"
                href={appStoreUrl}
                target="_blank"
                rel="noreferrer"
              >
                Get MonoNight
                <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            ) : (
              <span className="release-status" role="status">
                Coming to the App Store
              </span>
            )}
            <a className="button button-secondary" href="#listen">
              See how it works
              <ArrowDown size={17} aria-hidden="true" />
            </a>
          </div>

          <ul className="hero-proof" aria-label="MonoNight privacy highlights">
            {proofPoints.map((point) => (
              <li key={point}>
                <Check size={13} strokeWidth={2.2} aria-hidden="true" />
                {point}
              </li>
            ))}
          </ul>
        </div>

        <p className="hero-privacy">
          <LockKeyhole size={14} aria-hidden="true" />
          Your recording stays on your iPhone.
        </p>
      </div>
    </section>
  )
}
