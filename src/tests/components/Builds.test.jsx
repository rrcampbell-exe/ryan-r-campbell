import { describe, expect, test } from 'vitest'
import { Builds } from '../../components'
import { render } from '@testing-library/react'
import { builds } from '../../constants'
import ContextAndRouterProvider from '../test-utils'

describe('Builds', () => {
  test('default snapshot', () => {
    const { asFragment } = render(
      <ContextAndRouterProvider>
        <Builds />
      </ContextAndRouterProvider>
    )
    expect(asFragment()).toMatchSnapshot()
  })

  test('should render all builds', () => {
    const { getAllByTestId } = render(
      <ContextAndRouterProvider>
        <Builds />
      </ContextAndRouterProvider>
    )
    const buildElements = getAllByTestId('build')
    expect(buildElements.length).toBe(builds.length)
  })

  test('should render a subset of builds', () => {
    const { getAllByTestId } = render(
      <ContextAndRouterProvider>
        <Builds items={builds.slice(0, 2)} />
      </ContextAndRouterProvider>
    )
    const buildElements = getAllByTestId('build')
    expect(buildElements.length).toBe(2)
  })

})