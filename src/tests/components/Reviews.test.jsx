import { describe, expect, test } from 'vitest'
import { render, fireEvent } from '@testing-library/react'
import ContextAndRouterProvider from '../test-utils'
import { Reviews } from '../../components'
import { reviews } from '../../constants'

describe('Reviews', () => {
  test('should render Reviews', () => {
    const { container } = render(
      <ContextAndRouterProvider>
        <Reviews />
      </ContextAndRouterProvider>
    )

    const reviews = container.querySelector('.Reviews')
    expect(reviews).toBeInTheDocument()
  })
  test('Reviews default snapshot', () => {
    const { asFragment } = render(
      <ContextAndRouterProvider>
        <Reviews />
      </ContextAndRouterProvider>
    )
    expect(asFragment()).toMatchSnapshot()
  })
  test('should render Reviews with shadow bg', () => {
    const { container } = render(
      <ContextAndRouterProvider>
        <Reviews shadowBg />
      </ContextAndRouterProvider>
    )

    const reviewsShadowBg = container.querySelector('.Reviews.shadow-bg-gray')
    expect(reviewsShadowBg).toBeInTheDocument()
  })
  test('should not feature shadow bg by default', () => {
    const { container } = render(
      <ContextAndRouterProvider>
        <Reviews />
      </ContextAndRouterProvider>
    )

    const reviewsShadowBg = container.querySelector('.Reviews.shadow-bg-gray')
    expect(reviewsShadowBg).not.toBeInTheDocument()
  })
})