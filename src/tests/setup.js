import { afterEach, beforeEach, vi } from 'vitest'
import { cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'

beforeEach(() => {
  window.scrollTo = vi.fn()
  window.open = vi.fn()
})

afterEach(() => {
  cleanup()
})
