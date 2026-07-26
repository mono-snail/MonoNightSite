import { useEffect } from 'react'
import { EvidenceSection } from './components/EvidenceSection'
import { FeatureGrid } from './components/FeatureGrid'
import { Hero } from './components/Hero'
import { PrivacySection } from './components/PrivacySection'
import { SiteFooter } from './components/SiteFooter'
import { SiteHeader } from './components/SiteHeader'

export default function App() {
  useEffect(() => {
    const scrollToHashTarget = () => {
      const targetID = window.location.hash.slice(1)
      if (!targetID) {
        return
      }

      const target = document.getElementById(targetID)
      target?.scrollIntoView()
    }

    if (window.location.hash) {
      requestAnimationFrame(scrollToHashTarget)
    }

    window.addEventListener('hashchange', scrollToHashTarget)
    return () => window.removeEventListener('hashchange', scrollToHashTarget)
  }, [])

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main-content">
        <Hero />
        <EvidenceSection />
        <FeatureGrid />
        <PrivacySection />
      </main>
      <SiteFooter />
    </div>
  )
}
