import GeneralLanding from '../../pages/Landing/GeneralLanding'
import { describe, expect, test } from 'vitest'
import { render, fireEvent } from '@testing-library/react'
import ContextAndRouterProvider from '../test-utils'

describe('GeneralLanding', () => {
  test('default snapshot', () => {
    const generalLanding = render(
      <ContextAndRouterProvider>
        <GeneralLanding />
      </ContextAndRouterProvider>
    )
    expect(generalLanding).toMatchSnapshot()
  })

  test('should render a subnav with the correct sections in order', () => {
    const { container } = render(
      <ContextAndRouterProvider>
        <GeneralLanding />
      </ContextAndRouterProvider>
    )

    const subnav = container.querySelector('.SubNav')

    expect(subnav).toBeInTheDocument()
    expect(subnav.children.length).toBe(4)
    expect(subnav.children[0].textContent).toBe('blog')
    expect(subnav.children[1].textContent).toBe('books')
    expect(subnav.children[2].textContent).toBe('builds')
    expect(subnav.children[3].textContent).toBe('contact')
  })

  test('should render a photo banner', () => {
    const { container } = render(
      <ContextAndRouterProvider>
        <GeneralLanding />
      </ContextAndRouterProvider>
    )

    const photoBanner = container.querySelector('.photo-banner')

    expect(photoBanner).toBeInTheDocument()
  })

  test('should render correct number of teasers', () => {
    const { container } = render(
      <ContextAndRouterProvider>
        <GeneralLanding />
      </ContextAndRouterProvider>
    )

    const teasers = container.querySelectorAll('.content-post')
    expect(teasers.length).toBe(1)
  })

  test('should take users to blog landing page when to the blog is clicked', () => {
    const { getByText } = render(
      <ContextAndRouterProvider>
        <GeneralLanding />
      </ContextAndRouterProvider>
    )

    const button = getByText('go to substack')
    fireEvent.click(button)

    expect(window.location.pathname).toBe('/blog')
  })

  test('should take users to author page when about the author is clicked', () => {
    const { getByText } = render(
      <ContextAndRouterProvider>
        <GeneralLanding />
      </ContextAndRouterProvider>
    )

    const button = getByText('about the author')
    fireEvent.click(button)

    expect(window.location.pathname).toBe('/author')
  })

  test('should take users to tech page when about the engineer is clicked', () => {
    const { getByText } = render(
      <ContextAndRouterProvider>
        <GeneralLanding />
      </ContextAndRouterProvider>
    )

    const button = getByText('about the engineer')
    fireEvent.click(button)

    expect(window.location.pathname).toBe('/tech')
  })
})
