export type FeatureIcon = 'moon' | 'signature' | 'replay' | 'import'

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
  screenshot: string
  primary: string
  secondary: string
  backgroundStart: string
  backgroundEnd: string
}

export type RecordingScreen = {
  src: string
  alt: string
}

export const screenshots = {
  home: {
    src: '/images/mononight-home-release.jpg',
    alt: 'MonoNight ready to start an overnight recording on iPhone',
  },
  settings: {
    src: '/images/mononight-settings.jpg',
    alt: 'MonoNight settings screen on iPhone',
  },
} as const

export const recordingScreens: RecordingScreen[] = [
  {
    src: '/images/mononight-recording-flow-01.jpg',
    alt: 'MonoNight recording interface, screen 1 of 6',
  },
  {
    src: '/images/mononight-recording-flow-02.jpg',
    alt: 'MonoNight recording interface, screen 2 of 6',
  },
  {
    src: '/images/mononight-recording-flow-03.jpg',
    alt: 'MonoNight recording interface, screen 3 of 6',
  },
  {
    src: '/images/mononight-recording-flow-04.jpg',
    alt: 'MonoNight recording interface, screen 4 of 6',
  },
  {
    src: '/images/mononight-recording-flow-05.jpg',
    alt: 'MonoNight recording interface, screen 5 of 6',
  },
  {
    src: '/images/mononight-recording-flow-06.jpg',
    alt: 'MonoNight recording interface, screen 6 of 6',
  },
]

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
    icon: 'import',
    number: '04',
    title: 'Bring a recording with you',
    description:
      'Share an audio file from another app, then keep its analysis and resulting report on your iPhone.',
  },
]

export const appThemes: AppTheme[] = [
  {
    id: 'deep-blue',
    name: 'Deep Blue',
    description: 'Cool blue for a clear, uninterrupted night.',
    screenshot: '/images/mononight-home-release.jpg',
    primary: '#4ca6ff',
    secondary: '#73b8ff',
    backgroundStart: '#041136',
    backgroundEnd: '#0a2868',
  },
  {
    id: 'sunset-glow',
    name: 'Sunset Glow',
    description: 'A warm amber palette for a softer wind-down.',
    screenshot: '/images/mononight-theme-moss-night.jpg',
    primary: '#ff8c33',
    secondary: '#ffb359',
    backgroundStart: '#26050a',
    backgroundEnd: '#66180a',
  },
  {
    id: 'moss-night',
    name: 'Moss Night',
    description: 'Natural green tones that stay quiet after dark.',
    screenshot: '/images/mononight-theme-sunset-glow.jpg',
    primary: '#52c780',
    secondary: '#9ce8b2',
    backgroundStart: '#041c14',
    backgroundEnd: '#0a4529',
  },
  {
    id: 'petal-glow',
    name: 'Petal Glow',
    description: 'A soft pink glow with room for the night to settle.',
    screenshot: '/images/mononight-theme-petal-glow.jpg',
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
