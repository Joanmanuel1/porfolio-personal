import { describe, it, expect } from 'vitest'
import { productionProjects, practiceProjects, allProjects, findProjectBySlug } from '../projects'

describe('projects data', () => {
  it('has at least one production project', () => {
    expect(productionProjects.length).toBeGreaterThan(0)
  })

  it('every project has a unique id and slug', () => {
    const ids = allProjects.map((p) => p.id)
    const slugs = allProjects.map((p) => p.slug)
    expect(new Set(ids).size).toBe(ids.length)
    expect(new Set(slugs).size).toBe(slugs.length)
  })

  it('every project has required i18n keys', () => {
    for (const p of allProjects) {
      expect(p.titleKey).toMatch(/^projects\.items\..+\.title$/)
      expect(p.descriptionKey).toMatch(/^projects\.items\..+\.description$/)
    }
  })

  it('every project has at least one technology', () => {
    for (const p of allProjects) {
      expect(Array.isArray(p.technologies)).toBe(true)
      expect(p.technologies.length).toBeGreaterThan(0)
    }
  })

  it('findProjectBySlug returns the right project', () => {
    const first = allProjects[0]
    expect(findProjectBySlug(first.slug)).toBe(first)
  })

  it('findProjectBySlug returns null for unknown slug', () => {
    expect(findProjectBySlug('does-not-exist')).toBeNull()
  })

  it('practice projects do not pollute production list', () => {
    const productionSlugs = new Set(productionProjects.map((p) => p.slug))
    for (const p of practiceProjects) {
      expect(productionSlugs.has(p.slug)).toBe(false)
    }
  })
})
