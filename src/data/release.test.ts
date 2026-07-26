import { describe, expect, it } from 'vitest'
import { asHttpsUrl } from './release'

describe('asHttpsUrl', () => {
  it('keeps an unconfigured release link empty', () => {
    expect(asHttpsUrl(undefined)).toBeUndefined()
  })

  it('accepts HTTPS links', () => {
    expect(asHttpsUrl('https://apps.apple.com/app/mononight')).toBe(
      'https://apps.apple.com/app/mononight',
    )
  })

  it('rejects insecure links', () => {
    expect(() => asHttpsUrl('http://example.com')).toThrow(
      'Release links must use HTTPS.',
    )
  })
})
