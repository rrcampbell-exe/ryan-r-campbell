import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const ExternalRedirect = () => {
  const { slug, tag } = useParams();

  useEffect(() => {
    if (slug && slug !== 'all-blog-posts-now-on-substack') {
      window.location.replace(`https://ryanrcampbell.substack.com/p/${slug}`)
    } else if (tag) {
      window.location.replace(`https://ryanrcampbell.substack.com/t/${tag}`)
    } else {
      window.location.replace('https://ryanrcampbell.substack.com')
    }
  }, [slug, tag])

  return null
}

export default ExternalRedirect
