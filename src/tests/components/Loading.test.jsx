import { describe, expect, test } from 'vitest'
import { render } from '@testing-library/react'
import ContextAndRouterProvider from '../test-utils'
import { Loading } from '../../components'

describe('Loading', () => {
  test('default snapshot', () => {
    const loading = render(
      <ContextAndRouterProvider>
        <Loading />
      </ContextAndRouterProvider>
    )
    expect(loading).toMatchSnapshot()
  })
  test('should render loading text', () => {
    const { getByText } = render(
      <ContextAndRouterProvider>
        <Loading />
      </ContextAndRouterProvider>
    )

    const loadingText = getByText('loading...')
    expect(loadingText).toBeInTheDocument()
  })
  test('should render MicrophoneSVG', () => {
    const { container } = render(
      <ContextAndRouterProvider>
        <Loading />
      </ContextAndRouterProvider>
    )

    const microphoneSVG = container.querySelector('#microphone-svg')
    expect(microphoneSVG).toBeInTheDocument()
  })
})
