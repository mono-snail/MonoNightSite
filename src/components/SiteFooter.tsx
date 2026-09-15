import { ArrowUp, ArrowUpRight, MoonStar } from 'lucide-react'
import { releaseLinks } from '../data/release'
import { MonoNightMoonMark } from './MonoNightMoonMark'

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="release-panel section-shell">
        <div>
          <p className="eyebrow">
            <MoonStar size={14} aria-hidden="true" />
            Start with tonight
          </p>
          <h2>Record the night. Keep the evidence.</h2>
          <p>
            MonoNight is available for iPhone. No account, no cloud audio
            analysis, and no mystery score between you and your recording.
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
        <p>A private night sound journal by MonoWare.</p>
        <nav aria-label="Footer navigation">
          <a href="#listen">Listen</a>
          <a href="#insights">Insights</a>
          <a href="#privacy">Privacy</a>
          {releaseLinks.privacyUrl ? (
            <a href={releaseLinks.privacyUrl} target="_blank" rel="noreferrer">
              Privacy policy
            </a>
          ) : null}
          {releaseLinks.supportUrl ? (
            <a href={releaseLinks.supportUrl} target="_blank" rel="noreferrer">
              Support
            </a>
          ) : null}
        </nav>
        <a className="back-to-top" href="#top" aria-label="Back to top">
          <ArrowUp size={17} aria-hidden="true" />
        </a>
        <span className="copyright">© 2026 MonoWare</span>
      </div>
    </footer>
  )
}
