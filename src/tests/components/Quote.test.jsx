import { describe, expect, test } from 'vitest'
import { render } from '@testing-library/react'
import ContextAndRouterProvider from '../test-utils'
import { Quote } from '../../experiences/shared/components'

describe('Quote', () => {
  test('default snapshot', () => {
    const quote = render(
      <ContextAndRouterProvider>
        <Quote />
      </ContextAndRouterProvider>
    )
    expect(quote).toMatchSnapshot()
  })
  test('should render quote', () => {
    const { getByText } = render(
      <ContextAndRouterProvider>
        <Quote text='This is a very famous quote' />
      </ContextAndRouterProvider>
    )

    const quote = getByText('This is a very famous quote')
    expect(quote).toBeInTheDocument()
  })
})