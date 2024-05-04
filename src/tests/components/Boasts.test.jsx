import { describe, expect, test } from 'vitest'
import { render } from '@testing-library/react'
import ContextAndRouterProvider from '../test-utils'
import Boasts from '../../experiences/tech/pages/Landing/Boasts'

describe('Boasts', () => {
  test('should render Boasts', () => {
    const { getByTestId } = render(
      <ContextAndRouterProvider>
        <Boasts />
      </ContextAndRouterProvider>
    )

    const boasts = getByTestId('boasts')
    expect(boasts).toBeInTheDocument()
  })
  test('Boasts default snapshot', () => {
    const { asFragment } = render(
      <ContextAndRouterProvider>
        <Boasts />
      </ContextAndRouterProvider>
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
