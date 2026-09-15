export type ProductShot = {
  src: string
  alt: string
}

export type Problem = {
  number: string
  title: string
  solution: string
}

export type CapabilityIcon =
  | 'shield'
  | 'sunrise'
  | 'library'
  | 'sliders'
  | 'import'
  | 'export'

export type Capability = {
  icon: CapabilityIcon
  title: string
  description: string
}

export type PrivacyPromise = {
  value: string
  label: string
  description: string
}

export const screenshots: Record<
  'home' | 'recording' | 'summary' | 'listen' | 'nights' | 'insights',
  ProductShot
> = {
  home: {
    src: '/images/mononight-home-2026.jpg',
    alt: 'MonoNight Tonight screen with the recording control and latest night',
  },
  recording: {
    src: '/images/mononight-recording-protection-2026.jpg',
    alt: 'MonoNight recording screen showing captured audio, storage, and protection status',
  },
  summary: {
    src: '/images/mononight-sound-report-2026.jpg',
    alt: 'MonoNight Sound Report showing an example comparable-night baseline',
  },
  listen: {
    src: '/images/mononight-listen-workspace-2026.jpg',
    alt: 'MonoNight Listen workspace with a pinned timeline and three-column sound clip grid',
  },
  nights: {
    src: '/images/mononight-nights-2026.jpg',
    alt: 'MonoNight searchable Nights archive',
  },
  insights: {
    src: '/images/mononight-insights-2026.jpg',
    alt: 'MonoNight Insights view showing example comparison data',
  },
}

export const problems: Problem[] = [
  {
    number: '01',
    title: 'Eight hours is too much audio to scrub.',
    solution: 'Jump from the full-night timeline straight to a detected moment.',
  },
  {
    number: '02',
    title: 'A score cannot tell you what actually happened.',
    solution: 'See the timestamp, category, duration, and original audio together.',
  },
  {
    number: '03',
    title: 'One unusual night is not a pattern.',
    solution: 'Compare only nights with compatible recordings and analysis settings.',
  },
]

export const capabilities: Capability[] = [
  {
    icon: 'shield',
    title: 'Recording protection',
    description:
      'See captured duration, free storage, power status, pauses, and successful recoveries while audio is written locally.',
  },
  {
    icon: 'sunrise',
    title: 'Morning context',
    description:
      'Wake to a factual sound summary, a first clip to review, and an honest explanation when evidence is limited.',
  },
  {
    icon: 'library',
    title: 'A usable night archive',
    description:
      'Search dates, notes, and factors. Filter favorites, imported recordings, or nights that still need attention.',
  },
  {
    icon: 'sliders',
    title: 'Conditions that matter',
    description:
      'Keep room, phone placement, bedtime factors, and morning feeling beside the night they describe.',
  },
  {
    icon: 'import',
    title: 'Bring existing audio',
    description:
      'Share an audio file into MonoNight for the same local analysis and evidence-linked report.',
  },
  {
    icon: 'export',
    title: 'Share on your terms',
    description:
      'Export a report card, text summary, CSV, or original audio. Private notes stay out by default.',
  },
]

export const privacyPromises: PrivacyPromise[] = [
  {
    value: '0',
    label: 'accounts',
    description: 'Open the app and record. No profile is required.',
  },
  {
    value: '0',
    label: 'cloud uploads',
    description: 'Recording and sound analysis stay on your iPhone.',
  },
  {
    value: '0',
    label: 'tracking SDKs',
    description: 'No ad network or behavioral profile sits behind the app.',
  },
  {
    value: '1',
    label: 'owner',
    description: 'Inspect, export, or delete your own records whenever you choose.',
  },
]
