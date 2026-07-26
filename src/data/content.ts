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

export type AppTheme = {
  id: 'deep-blue' | 'sunset-glow' | 'moss-night' | 'petal-glow'
  name: string
  description: string
  primary: string
  secondary: string
  backgroundStart: string
  backgroundEnd: string
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

export const appThemes: AppTheme[] = [
  {
    id: 'deep-blue',
    name: 'Deep Blue',
    description: 'Cool blue for a clear, uninterrupted night.',
    primary: '#4ca6ff',
    secondary: '#73b8ff',
    backgroundStart: '#041136',
    backgroundEnd: '#0a2868',
  },
  {
    id: 'sunset-glow',
    name: 'Sunset Glow',
    description: 'A warm amber palette for a softer wind-down.',
    primary: '#ff8c33',
    secondary: '#ffb359',
    backgroundStart: '#26050a',
    backgroundEnd: '#66180a',
  },
  {
    id: 'moss-night',
    name: 'Moss Night',
    description: 'Natural green tones that stay quiet after dark.',
    primary: '#52c780',
    secondary: '#9ce8b2',
    backgroundStart: '#041c14',
    backgroundEnd: '#0a4529',
  },
  {
    id: 'petal-glow',
    name: 'Petal Glow',
    description: 'A soft pink glow with room for the night to settle.',
    primary: '#fa6ca6',
    secondary: '#ffb2cf',
    backgroundStart: '#260217',
    backgroundEnd: '#700b3c',
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
