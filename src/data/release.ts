export type ReleaseLinks = {
  appStoreUrl?: string
  privacyUrl?: string
  supportUrl?: string
}

export function asHttpsUrl(value: string | undefined): string | undefined {
  if (!value) {
    return undefined
  }

  const url = new URL(value)
  if (url.protocol !== 'https:') {
    throw new Error('Release links must use HTTPS.')
  }

  return url.toString()
}

const configuredLinks: ReleaseLinks = {
  appStoreUrl: undefined,
  privacyUrl: undefined,
  supportUrl: undefined,
}

export const releaseLinks = {
  appStoreUrl: asHttpsUrl(configuredLinks.appStoreUrl),
  privacyUrl: asHttpsUrl(configuredLinks.privacyUrl),
  supportUrl: asHttpsUrl(configuredLinks.supportUrl),
}
