const FEED_URL = 'https://www.r-on-everything.com/feed'

const unwrap = (value = '') =>
  value.replace(/^<!\[CDATA\[([\s\S]*?)\]\]>$/, '$1').trim()

const decodeEntities = (text) =>
  text
    .replace(/&#x([0-9a-f]+);/gi, (_, hex) => String.fromCodePoint(parseInt(hex, 16)))
    .replace(/&#(\d+);/g, (_, dec) => String.fromCodePoint(parseInt(dec, 10)))
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')

const getTag = (xml, tag) => {
  const match = xml.match(new RegExp(`<${tag}>([\\s\\S]*?)</${tag}>`))
  return match ? unwrap(match[1].trim()) : ''
}

export const parseFeed = (xml, limit = 2) =>
  [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)].slice(0, limit).map(([, item]) => {
    const link = getTag(item, 'link')
    return {
      id: getTag(item, 'guid') || link,
      date: new Date(getTag(item, 'pubDate')).toISOString(),
      slug: link.split('/').filter(Boolean).pop(),
      link,
      redirectToSubstack: true,
      title: { rendered: decodeEntities(getTag(item, 'title')) },
      excerpt: { rendered: decodeEntities(getTag(item, 'description')) },
      tags: []
    }
  })

export default async function handler(req, res) {
  try {
    const response = await fetch(FEED_URL)
    if (!response.ok) throw new Error(`Feed responded ${response.status}`)
    const posts = parseFeed(await response.text())
    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=86400')
    res.status(200).json(posts)
  } catch (error) {
    res.status(502).json({ error: 'Unable to load feed' })
  }
}
