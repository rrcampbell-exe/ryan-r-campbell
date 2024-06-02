import { useEffect } from 'react'

const useMetaTags = (tags) => {
  useEffect(() => {
    const previousTags = {}

    const setMetaTag = (name, content) => {
      if (content === undefined) return

      let element = document.querySelector(`meta[name="${name}"]`)
      if (!element) {
        element = document.createElement('meta')
        element.setAttribute('name', name)
        document.head.appendChild(element)
      }
      previousTags[name] = element.getAttribute('content')
      element.setAttribute('content', content)
    }

    const setPropertyMetaTag = (property, content) => {
      if (content === undefined) return

      let element = document.querySelector(`meta[property="${property}"]`)
      if (!element) {
        element = document.createElement('meta')
        element.setAttribute('property', property)
        document.head.appendChild(element)
      }
      previousTags[property] = element.getAttribute('content')
      element.setAttribute('content', content)
    }

    tags.forEach(({ type, name, content }) => {
      if (type === 'name') {
        setMetaTag(name, content)
      } else if (type === 'property') {
        setPropertyMetaTag(name, content)
      }
    })

    return () => {
      tags.forEach(({ type, name }) => {
        if (type === 'name') {
          setMetaTag(name, previousTags[name])
        } else if (type === 'property') {
          setPropertyMetaTag(name, previousTags[name])
        }
      })
    }
  }, [tags])
}

export default useMetaTags
