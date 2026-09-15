import {
  ChevronsUp,
  Grid3X3,
  Layers3,
  LocateFixed,
  MousePointer2,
} from 'lucide-react'
import { screenshots } from '../data/content'
import { PhoneFrame } from './PhoneFrame'

const listenDetails = [
  {
    icon: LocateFixed,
    title: 'Keep the whole night in view',
    description:
      'The timeline and transport stay pinned while you move through the clips below.',
  },
  {
    icon: Grid3X3,
    title: 'Scan clips three at a time',
    description:
      'A compact grid replaces the endless one-clip-per-row list on long recordings.',
  },
  {
    icon: Layers3,
    title: 'Collapse noise. Page through volume.',
    description:
      'Fold categories you do not need and jump to the first or latest page of a busy night.',
  },
]

export function EvidenceSection() {
  return (
    <section className="evidence-section" id="listen">
      <div className="section-shell evidence-layout">
        <div className="evidence-visual reveal-on-scroll">
          <div className="evidence-screen-label">
            <span>Listen workspace</span>
            <strong>01</strong>
          </div>
          <PhoneFrame
            src={screenshots.listen.src}
            alt={screenshots.listen.alt}
            className="evidence-phone"
          />
          <div className="evidence-marker evidence-marker-top">
            <ChevronsUp size={15} aria-hidden="true" />
            Pinned context
          </div>
          <div className="evidence-marker evidence-marker-bottom">
            <MousePointer2 size={15} aria-hidden="true" />
            Tap any clip
          </div>
        </div>

        <div className="evidence-copy">
          <p className="eyebrow">Built for long recordings</p>
          <h2>Eight hours in. Seconds to the moment.</h2>
          <p className="section-lede">
            MonoNight turns a full night into a navigable map. Every result
            leads back to a timestamp and the audio that produced it.
          </p>

          <div className="evidence-details">
            {listenDetails.map(({ icon: Icon, title, description }) => (
              <article key={title}>
                <span className="detail-icon" aria-hidden="true">
                  <Icon size={19} strokeWidth={1.7} />
                </span>
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </article>
            ))}
          </div>

          <p className="evidence-boundary">
            Selection is passive. Playback starts only when you ask for it.
          </p>
        </div>
      </div>
    </section>
  )
}
