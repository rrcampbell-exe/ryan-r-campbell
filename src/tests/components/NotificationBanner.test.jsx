import { describe, expect, test } from 'vitest'
import { render } from '@testing-library/react'
import ContextAndRouterProvider from '../test-utils'
import { NotificationBanner } from '../../components'

describe('NotificationBanner', () => {
  test('default snapshot', () => {
    const notificationBanner = render(
      <ContextAndRouterProvider>
        <NotificationBanner />
      </ContextAndRouterProvider>
    )
    expect(notificationBanner).toMatchSnapshot()
  })
  test('should render title and text', () => {
    const title = 'Test Title'
    const text = 'Test Text'
    const { getByText } = render(
      <ContextAndRouterProvider>
        <NotificationBanner title={title} text={text} />
      </ContextAndRouterProvider>
    )

    const titleElement = getByText(title)
    const textElement = getByText(text)

    expect(titleElement).toBeInTheDocument()
    expect(textElement).toBeInTheDocument()
  })
  test('should display a CalendarSVG', () => {
    const { container } = render(
      <ContextAndRouterProvider>
        <NotificationBanner />
      </ContextAndRouterProvider>
    )

    const calendarSVG = container.querySelector('#calendar-svg')
    expect(calendarSVG).toBeInTheDocument()
  })
})
