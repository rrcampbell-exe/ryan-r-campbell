import { afterEach, describe, expect, test, vi } from 'vitest'
import { act, render } from '@testing-library/react'
import ContextAndRouterProvider from '../test-utils'
import { PopText } from '../../components'
import { popText } from '../../constants'

describe('PopText', () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  test('default snapshot', () => {
    const popTextComponent = render(
      <ContextAndRouterProvider>
        <PopText>
          {popText.map((obj) => (
            <h2 key={obj.id}>{obj.text}</h2>
          ))}
        </PopText>
      </ContextAndRouterProvider>
    )
    expect(popTextComponent).toMatchSnapshot()
  })
  test('should render children', () => {
    const { getByText } = render(
      <ContextAndRouterProvider>
        <PopText>
          {popText.map((obj) => (
            <h2 key={obj.id}>{obj.text}</h2>
          ))}
        </PopText>
      </ContextAndRouterProvider>
    )

    const content = getByText('software engineer')
    expect(content).toBeInTheDocument()
  })
  test('should change content', () => {
    vi.useFakeTimers()

    const { getByText } = render(
      <ContextAndRouterProvider>
        <PopText>          
          {popText.map((obj) => (
            <h2 key={obj.id}>{obj.text}</h2>
          ))}
        </PopText>
      </ContextAndRouterProvider>
    )
    const content = getByText('software engineer')
    expect(content).toBeInTheDocument()

    act(() => {
      vi.advanceTimersByTime(2000)
    })

    const newContent = getByText('AI enablement builder')
    expect(newContent).toBeInTheDocument()
  })
})
