import { describe, expect, test } from 'vitest'
import { render } from '@testing-library/react'
import ContextAndRouterProvider from '../test-utils'
import { SubNav } from '../../experiences/shared/components'

describe('SubNav', () => {
  test('default snapshot', () => {
    const subNav = render(
      <ContextAndRouterProvider>
        <SubNav sections={['section-1', 'section-2']} />
      </ContextAndRouterProvider>
    )
    expect(subNav).toMatchSnapshot()
  })
  test('should render SubNav', () => {
    const { getByText } = render(
      <ContextAndRouterProvider>
        <SubNav sections={['section-1', 'section-2']} />
      </ContextAndRouterProvider>
    )

    const section1 = getByText('section 1')
    const section2 = getByText('section 2')
    expect(section1).toBeInTheDocument()
    expect(section2).toBeInTheDocument()
  })
})
