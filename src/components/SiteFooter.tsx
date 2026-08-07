import { ArrowUpRight, Sparkles } from 'lucide-react'
import { releaseLinks } from '../data/release'
import { MonoNightMoonMark } from './MonoNightMoonMark'

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="release-panel section-shell">
        <div>
          <p className="eyebrow">
            <Sparkles size={14} aria-hidden="true" />
            Made for quieter mornings
          </p>
          <h2>Keep the night close.</h2>
          <p>
            MonoNight is now available on the App Store. Start with one quiet
            tap, then let the night become a clear record.
          </p>
        </div>
        {releaseLinks.appStoreUrl ? (
          <a
            className="button button-primary"
            href={releaseLinks.appStoreUrl}
            target="_blank"
            rel="noreferrer"
          >
            Get MonoNight
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        ) : (
          <span className="release-status release-status-large" role="status">
            Coming to the App Store
          </span>
        )}
      </div>

      <div className="footer-shell section-shell">
        <a className="brand" href="#top" aria-label="Back to the top">
          <span className="brand-mark" aria-hidden="true">
            <MonoNightMoonMark size={17} />
          </span>
          <span>MonoNight</span>
        </a>
        <p>Quietly made for iPhone.</p>
        <nav aria-label="Footer navigation">
          <a href="#themes">Skins</a>
          <a href="#features">Features</a>
          <a href="#privacy">Privacy</a>
          {releaseLinks.privacyUrl ? (
            <a
              href={releaseLinks.privacyUrl}
              target="_blank"
              rel="noreferrer"
            >
              Privacy policy
            </a>
          ) : null}
          {releaseLinks.supportUrl ? (
            <a
              href={releaseLinks.supportUrl}
              target="_blank"
              rel="noreferrer"
            >
              Support
            </a>
          ) : null}
        </nav>
        <span className="copyright">© 2026 MonoNight</span>
      </div>
    </footer>
  )
}
