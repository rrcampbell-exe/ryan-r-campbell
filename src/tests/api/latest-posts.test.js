import { describe, expect, test } from 'vitest'
import { parseFeed } from '../../../api/latest-posts.js'

const feed = `<?xml version="1.0"?>
<rss><channel>
  <item>
    <title><![CDATA[Would You Be More Kind?]]></title>
    <description><![CDATA[An essay about kindness &amp; empathy.]]></description>
    <link>https://www.r-on-everything.com/p/kindness</link>
    <guid>https://www.r-on-everything.com/p/kindness</guid>
    <pubDate>Thu, 22 Oct 2026 14:04:33 GMT</pubDate>
  </item>
  <item>
    <title>Another essay</title>
    <description>A second excerpt.</description>
    <link>https://www.r-on-everything.com/p/another-essay</link>
    <pubDate>Thu, 8 Oct 2026 14:07:06 GMT</pubDate>
  </item>
  <item>
    <title>An older essay</title>
    <description>This should be omitted.</description>
    <link>https://www.r-on-everything.com/p/older-essay</link>
    <pubDate>Thu, 24 Sep 2026 14:07:06 GMT</pubDate>
  </item>
</channel></rss>`

describe('parseFeed', () => {
  test('maps the latest two RSS items into homepage post objects', () => {
    const posts = parseFeed(feed)

    expect(posts).toHaveLength(2)
    expect(posts[0]).toMatchObject({
      id: 'https://www.r-on-everything.com/p/kindness',
      slug: 'kindness',
      link: 'https://www.r-on-everything.com/p/kindness',
      redirectToSubstack: true,
      title: { rendered: 'Would You Be More Kind?' },
      excerpt: { rendered: 'An essay about kindness & empathy.' }
    })
    expect(posts[1].slug).toBe('another-essay')
    expect(posts.map(post => post.date)).toEqual([
      '2026-10-22T14:04:33.000Z',
      '2026-10-08T14:07:06.000Z'
    ])
  })

  test('honors a custom result limit', () => {
    expect(parseFeed(feed, 1)).toHaveLength(1)
  })
})
