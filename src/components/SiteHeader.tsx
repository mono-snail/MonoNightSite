import { ArrowUpRight, Menu } from 'lucide-react'
import { releaseLinks } from '../data/release'
import { MonoNightMoonMark } from './MonoNightMoonMark'

const navigation = [
  { href: '#themes', label: 'Skins' },
  { href: '#experience', label: 'Experience' },
  { href: '#features', label: 'Features' },
  { href: '#privacy', label: 'Privacy' },
]

export function SiteHeader() {
  const appStoreUrl = releaseLinks.appStoreUrl

  return (
    <header className="site-header">
      <div className="nav-shell">
        <a className="brand" href="#top" aria-label="MonoNight home">
          <span className="brand-mark" aria-hidden="true">
            <MonoNightMoonMark size={17} />
          </span>
          <span>MonoNight</span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a
          className="nav-cta"
          href={appStoreUrl ?? '#experience'}
          target={appStoreUrl ? '_blank' : undefined}
          rel={appStoreUrl ? 'noreferrer' : undefined}
        >
          {appStoreUrl ? 'App Store' : 'See the app'}
          {appStoreUrl ? <ArrowUpRight size={15} aria-hidden="true" /> : null}
        </a>

        <details className="mobile-nav">
          <summary aria-label="Open navigation menu">
            <Menu size={19} aria-hidden="true" />
          </summary>
          <nav aria-label="Mobile navigation">
            {navigation.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
            {appStoreUrl ? (
              <a href={appStoreUrl} target="_blank" rel="noreferrer">
                App Store
              </a>
            ) : null}
          </nav>
        </details>
      </div>
    </header>
  )
}
