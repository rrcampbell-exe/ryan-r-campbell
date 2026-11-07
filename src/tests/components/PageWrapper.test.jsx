import { afterEach, describe, expect, test, vi } from 'vitest'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import ContextAndRouterProvider from '../test-utils'
import { PageWrapper } from '../../components'
import { Link, MemoryRouter, Route, Routes, useNavigate } from 'react-router-dom'
import { ThemeContext } from '../../Theme'

const NavigationControls = () => {
  const navigate = useNavigate()

  return (
    <>
      <button onClick={() => navigate(-1)}>Back</button>
      <button onClick={() => navigate(1)}>Forward</button>
    </>
  )
}

const renderRoutes = (initialEntries = ['/']) => {
  const scrollIntoView = vi.fn()
  const originalScrollIntoView = HTMLElement.prototype.scrollIntoView
  Object.defineProperty(HTMLElement.prototype, 'scrollIntoView', {
    configurable: true,
    value: scrollIntoView,
  })

  const view = render(
    <MemoryRouter initialEntries={initialEntries}>
      <ThemeContext.Provider value={{ theme: 'dark-theme', toggleTheme: vi.fn() }}>
        <NavigationControls />
        <Routes>
          <Route
            path='/'
            element={
              <PageWrapper>
                <main id='main-content' tabIndex={-1}>
                  <Link to='/work#money-movement-application-migration'>Financial migration</Link>
                </main>
              </PageWrapper>
            }
          />
          <Route
            path='/work'
            element={
              <PageWrapper>
                <main id='main-content' tabIndex={-1}>
                  <section id='money-movement-application-migration'>
                    <h2>Money-movement application migration</h2>
                  </section>
                </main>
              </PageWrapper>
            }
          />
        </Routes>
      </ThemeContext.Provider>
    </MemoryRouter>
  )

  return {
    ...view,
    scrollIntoView,
    restoreScrollIntoView: () => {
      if (originalScrollIntoView) {
        Object.defineProperty(HTMLElement.prototype, 'scrollIntoView', {
          configurable: true,
          value: originalScrollIntoView,
        })
      } else {
        delete HTMLElement.prototype.scrollIntoView
      }
    },
  }
}

afterEach(() => {
  vi.restoreAllMocks()
})

describe('PageWrapper', () => {
  test('default snapshot', () => {
    const pageWrapper = render(
      <ContextAndRouterProvider>
        <PageWrapper />
      </ContextAndRouterProvider>
    )
    expect(pageWrapper).toMatchSnapshot()
  })
  test('should render children', () => {
    const { getByTestId } = render(
      <ContextAndRouterProvider>
        <PageWrapper>
          <div data-testid='test-children' />
        </PageWrapper>
      </ContextAndRouterProvider>
    )

    const children = getByTestId('test-children')
    expect(children).toBeInTheDocument()
  })
  test('should render Analytics', () => {
    const { getByTestId } = render(
      <ContextAndRouterProvider>
        <PageWrapper />
      </ContextAndRouterProvider>
    )

    const analytics = getByTestId('analytics')
    expect(analytics).toBeInTheDocument()
  })
  test('should render SpeedInsights', () => {
    const { getByTestId } = render(
      <ContextAndRouterProvider>
        <PageWrapper />
      </ContextAndRouterProvider>
    )

    const speedInsights = getByTestId('speed-insights')
    expect(speedInsights).toBeInTheDocument()
  })
  test('should render Header', () => {
    const { container } = render(
      <ContextAndRouterProvider>
        <PageWrapper />
      </ContextAndRouterProvider>
    )

    const header = container.querySelector('Header')
    expect(header).toBeInTheDocument()
  })
  test('should render Footer', () => {
    const { container } = render(
      <ContextAndRouterProvider>
        <PageWrapper />
      </ContextAndRouterProvider>
    )

    const footer = container.querySelector('Footer')
    expect(footer).toBeInTheDocument()
  })

  test('measures the shared sticky header and section navigation heights', () => {
    vi.spyOn(HTMLElement.prototype, 'getBoundingClientRect').mockImplementation(function () {
      if (this.classList.contains('Header')) return { height: 53.42 }
      if (this.classList.contains('SubNav')) return { height: 48 }
      return { height: 0 }
    })

    const { unmount } = render(
      <ContextAndRouterProvider>
        <PageWrapper>
          <nav className='SubNav' />
          <main id='main-content' />
        </PageWrapper>
      </ContextAndRouterProvider>
    )

    expect(document.documentElement.style.getPropertyValue('--site-header-height')).toBe('53.42px')
    expect(document.documentElement.style.getPropertyValue('--site-subnav-height')).toBe('48px')

    unmount()
    expect(document.documentElement.style.getPropertyValue('--site-header-height')).toBe('')
    expect(document.documentElement.style.getPropertyValue('--site-subnav-height')).toBe('')
  })

  test('scrolls and focuses a cross-route fragment, then handles Back and Forward', async () => {
    const scrollTo = vi.spyOn(window, 'scrollTo').mockImplementation(() => {})
    const { scrollIntoView, restoreScrollIntoView } = renderRoutes()

    try {
      fireEvent.click(screen.getByRole('link', { name: 'Financial migration' }))

      const heading = await screen.findByRole('heading', { name: 'Money-movement application migration' })
      await waitFor(() => expect(scrollIntoView).toHaveBeenCalledWith({ behavior: 'instant', block: 'start' }))
      expect(heading).toHaveFocus()

      fireEvent.click(screen.getByRole('button', { name: 'Back' }))
      await waitFor(() => expect(scrollTo).toHaveBeenLastCalledWith({ top: 0, left: 0, behavior: 'instant' }))

      fireEvent.click(screen.getByRole('button', { name: 'Forward' }))
      await waitFor(() => expect(scrollIntoView).toHaveBeenCalledTimes(2))
      expect(await screen.findByRole('heading', { name: 'Money-movement application migration' })).toHaveFocus()
    } finally {
      restoreScrollIntoView()
    }
  })

  test('applies direct fragment URLs after the destination is rendered', async () => {
    vi.spyOn(window, 'scrollTo').mockImplementation(() => {})
    const { scrollIntoView, restoreScrollIntoView } = renderRoutes(['/work#money-movement-application-migration'])

    try {
      const heading = await screen.findByRole('heading', { name: 'Money-movement application migration' })
      await waitFor(() => expect(scrollIntoView).toHaveBeenCalledWith({ behavior: 'instant', block: 'start' }))
      expect(heading).toHaveFocus()
    } finally {
      restoreScrollIntoView()
    }
  })
})
