import { describe, it, expect } from 'vitest'
import { useImageUrl } from '../useImageUrl'

describe('useImageUrl', () => {
  it('returns a function', () => {
    expect(typeof useImageUrl()).toBe('function')
  })

  it('returns null for unknown image names', () => {
    const get = useImageUrl()
    expect(get('does-not-exist.png')).toBeNull()
  })

  it('returns null for empty input', () => {
    const get = useImageUrl()
    expect(get('')).toBeNull()
    expect(get(null)).toBeNull()
    expect(get(undefined)).toBeNull()
  })
})
