import { describe, expect, test } from 'vitest'
import { render } from '@testing-library/react'
import ContextAndRouterProvider from '../test-utils'
import { TextAndImage } from '../../components'

describe('TextAndImage', () => {
  test('default snapshot', () => {
    const textAndImage = render(
      <ContextAndRouterProvider>
        <TextAndImage />
      </ContextAndRouterProvider>
    )
    expect(textAndImage).toMatchSnapshot()
  })
  test('should render text, image, and caption', () => {
    const { getByText } = render(
      <ContextAndRouterProvider>
        <TextAndImage jsx='<p>This is a very famous quote</p>' src='https://www.example.com/image.jpg' caption='This is a caption' />
      </ContextAndRouterProvider>
    )

    const text = getByText('This is a very famous quote')
    const caption = getByText('This is a caption')
    const image = document.querySelector('img')
    expect(text).toBeInTheDocument()
    expect(caption).toBeInTheDocument()
    expect(image).toHaveAttribute('src', 'https://www.example.com/image.jpg')
  })
})