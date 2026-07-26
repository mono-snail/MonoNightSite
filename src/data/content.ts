export type FeatureIcon = 'moon' | 'signature' | 'replay' | 'sounds'

export type Feature = {
  icon: FeatureIcon
  number: string
  title: string
  description: string
}

export type PrivacyPromise = {
  title: string
  description: string
}

export const screenshots = {
  home: {
    src: '/images/mononight-home-release.jpg',
    alt: 'MonoNight ready to start an overnight recording on iPhone',
  },
  recording: {
    src: '/images/mononight-recording.jpg',
    alt: 'MonoNight recording screen with live waveform and hold-to-end control',
  },
  report: {
    src: '/images/mononight-report.jpg',
    alt: 'MonoNight Sound Report with Night Signature and replayable sound clip',
  },
} as const

export const features: Feature[] = [
  {
    icon: 'moon',
    number: '01',
    title: 'Let the whole night speak',
    description:
      'Place your iPhone by the bed and keep a quiet record of the sounds that rise and settle while you sleep.',
  },
  {
    icon: 'signature',
    number: '02',
    title: 'See a Night Signature',
    description:
      'A full-night sound profile puts moments of activity in context, instead of reducing the night to a single number.',
  },
  {
    icon: 'replay',
    number: '03',
    title: 'Return to the moment',
    description:
      'Review timestamped clips directly from your report when a sound deserves a second listen.',
  },
  {
    icon: 'sounds',
    number: '04',
    title: 'Settle in, then listen',
    description:
      'Choose rain, waves, leaves, or a gentle tone as you wind down. MonoNight stops it before recording begins.',
  },
]

export const privacyPromises: PrivacyPromise[] = [
  {
    title: 'No account',
    description: 'Open the app and start. There is no profile to create.',
  },
  {
    title: 'Stays on iPhone',
    description: 'Recordings, clips, and reports are kept on your device.',
  },
  {
    title: 'No cloud analysis',
    description: 'Your night is reviewed locally, without sending its audio away.',
  },
  {
    title: 'No tracking layer',
    description: 'No analytics SDK, ad network, or behavioural profile is involved.',
  },
]
