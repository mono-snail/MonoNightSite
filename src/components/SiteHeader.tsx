import { Menu, Moon } from 'lucide-react'

const navigation = [
  { href: '#experience', label: 'Experience' },
  { href: '#features', label: 'Features' },
  { href: '#privacy', label: 'Privacy' },
]

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="nav-shell">
        <a className="brand" href="#top" aria-label="MonoNight home">
          <span className="brand-mark" aria-hidden="true">
            <Moon size={15} fill="currentColor" />
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

        <a className="nav-cta" href="#experience">
          See the app
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
          </nav>
        </details>
      </div>
    </header>
  )
}
