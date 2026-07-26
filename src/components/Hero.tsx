import { ArrowDown, LockKeyhole, MoonStar } from 'lucide-react'
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
          MonoNight for iPhone
        </p>
        <h1>
          Hear the shape
          <span>of your night.</span>
        </h1>
        <p className="hero-lede">
          A quiet record of the sounds that fill your night, made for
          reflection, not interruption.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#experience">
            See how it works
            <ArrowDown size={17} aria-hidden="true" />
          </a>
          {appStoreUrl ? (
            <a
              className="button button-secondary"
              href={appStoreUrl}
              target="_blank"
              rel="noreferrer"
            >
              Get MonoNight
            </a>
          ) : (
            <span className="release-status" role="status">
              Coming to the App Store
            </span>
          )}
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
          One quiet tap, then let the night unfold.
        </p>
      </div>
    </section>
  )
}
