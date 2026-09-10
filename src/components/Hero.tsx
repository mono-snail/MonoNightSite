import { ArrowDown, ArrowUpRight, LockKeyhole, MoonStar } from 'lucide-react'
import { screenshots } from '../data/content'
import { releaseLinks } from '../data/release'
import { PhoneFrame } from './PhoneFrame'

export function Hero() {
  const appStoreUrl = releaseLinks.appStoreUrl

  return (
    <section className="hero section-shell" id="top">
      <div className="hero-copy reveal">
        <p className="eyebrow">
          <MoonStar size={14} aria-hidden="true" />
          Private overnight audio
        </p>
        <h1>
          MonoNight
          <span>Snore recorder.</span>
        </h1>
        <p className="hero-lede">
          Hear your snoring. Find the moments that matter.
          A full-night recording and clear sound timeline, kept on your iPhone.
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
          <a className="button button-secondary" href="#experience">
            Explore the recordings
            <ArrowDown size={17} aria-hidden="true" />
          </a>
        </div>
        <p className="privacy-note">
          <LockKeyhole size={15} aria-hidden="true" />
          Recording and analysis stay on your device.
        </p>
      </div>

      <div className="hero-visual reveal reveal-delayed">
        <div className="orbit orbit-one" aria-hidden="true" />
        <div className="orbit orbit-two" aria-hidden="true" />
        <div className="moon-halo" aria-hidden="true" />
        <PhoneFrame
          src={screenshots.home.src}
          alt={screenshots.home.alt}
          priority
          className="hero-phone"
        />
        <p className="visual-caption">
          <span />
          Your night. Your recording. Your device.
        </p>
      </div>
    </section>
  )
}
