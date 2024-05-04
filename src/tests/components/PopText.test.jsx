import { describe, expect, test } from 'vitest'
import { render } from '@testing-library/react'
import ContextAndRouterProvider from '../test-utils'
import { PopText } from '../../experiences/shared/components'
import { popText } from '../../constants'

describe('PopText', () => {
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

    const content = getByText('author')
    expect(content).toBeInTheDocument()
  })
  test('should change content', () => {
    const { getByText } = render(
      <ContextAndRouterProvider>
        <PopText>          
          {popText.map((obj) => (
            <h2 key={obj.id}>{obj.text}</h2>
          ))}
        </PopText>
      </ContextAndRouterProvider>
    )
    const content = getByText('author')
    expect(content).toBeInTheDocument()

    setTimeout(() => {
      const newContent = getByText('technologist')
      expect(newContent).toBeInTheDocument()
    }, 500)
  })
})
