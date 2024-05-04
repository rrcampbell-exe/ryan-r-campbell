import { describe, expect, test } from 'vitest'
import { Footer } from '../../experiences/shared/components'
import { render } from '@testing-library/react'
import { builds } from '../../constants'

describe('Footer', () => {
  test('default snapshot', () => {
    const { asFragment } = render(<Footer />)
    expect(asFragment()).toMatchSnapshot()
  })
  test('should contain the site logo', () => {
    const { getByAltText } = render(<Footer />)
    const siteLogo = getByAltText('ryan r. campbell logo')
    expect(siteLogo).toBeInTheDocument()
  })
  test('should contain the current year', () => {
    const { getByText } = render(<Footer />)
    const currentYear = getByText(`© 2012 - ${new Date().getFullYear()} Ryan R. Campbell`)
    expect(currentYear).toBeInTheDocument()
  })
})
