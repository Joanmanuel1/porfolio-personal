import { describe, it, expect, vi, beforeEach } from 'vitest'
import { defineComponent, h, nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { useCountUp } from '../useCountUp'

const Wrapper = (target, options) =>
  defineComponent({
    setup() {
      return useCountUp(target, options)
    },
    render() {
      return h('span', this.display)
    },
  })

beforeEach(() => {
  // Force prefers-reduced-motion ON to make tests deterministic (no RAF needed)
  window.matchMedia = vi.fn().mockReturnValue({ matches: true, addListener: vi.fn(), removeListener: vi.fn() })
})

describe('useCountUp', () => {
  it('exposes display and start', () => {
    const w = mount(Wrapper(100))
    expect(w.vm.display).toBe('0')
    expect(typeof w.vm.start).toBe('function')
  })

  it('jumps to final value instantly on prefers-reduced-motion', async () => {
    const w = mount(Wrapper(42))
    w.vm.start()
    await nextTick()
    expect(w.vm.display).toBe('42')
  })

  it('appends suffix to the displayed value', async () => {
    const w = mount(Wrapper(3, { suffix: '+' }))
    expect(w.vm.display).toBe('0+')
    w.vm.start()
    await nextTick()
    expect(w.vm.display).toBe('3+')
  })

  it('respects decimals option', async () => {
    const w = mount(Wrapper(1.5, { decimals: 1 }))
    w.vm.start()
    await nextTick()
    expect(w.vm.display).toBe('1.5')
  })
})
