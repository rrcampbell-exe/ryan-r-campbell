import { describe, expect, test } from 'vitest'
import Builds from '../../experiences/shared/components/Builds/Builds'
import { render } from '@testing-library/react'
import { builds } from '../../constants'

describe('Builds', () => {
  test('default snapshot', () => {
    const { asFragment } = render(<Builds />)
    expect(asFragment()).toMatchSnapshot()
  })

  test('should render all builds', () => {
    const { getAllByTestId } = render(<Builds />)
    const buildElements = getAllByTestId('build')
    expect(buildElements.length).toBe(builds.length)
  })

  test('should render a subset of builds', () => {
    const { getAllByTestId } = render(<Builds buildsToDisplay={2} />)
    const buildElements = getAllByTestId('build')
    expect(buildElements.length).toBe(2)
  })

})