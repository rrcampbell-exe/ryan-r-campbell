import { describe, expect, test } from 'vitest'
import { buildNavURL, extractHTMLContent, fetchEpisode, fetchPost, findEpisodeUUID, formatDate } from '../../utils/index.js'
import podcasts from '../../assets/podcasts/pinecast-podcasts.js'
import posts from '../../assets/posts/posts.js'

describe('utils', () => {
  test('buildNavURL should return the correct URL', () => {
    const link = 'https://ryanrcampbell.com/2022/05/19/from-conference-to-coffee-on-the-beach/'
    const result = buildNavURL(link)
    expect(result).toBe('/2022/05/19/from-conference-to-coffee-on-the-beach/')
  })
  test('buildNavURL should return the correct URL when no .com is present', () => {
    const link = '/2022/05/19/from-conference-to-coffee-on-the-beach/'
    const result = buildNavURL(link)
    expect(result).toBe('/2022/05/19/from-conference-to-coffee-on-the-beach/')
  })

  test('extractHTMLContent should return the correct content', () => {
    const postsContentRendered = `\n<p>It's been a whirlwind couple of weeks.</p>`
    const result = extractHTMLContent(postsContentRendered)
    expect(result).toBe(`\n<p>It's been a whirlwind couple of weeks.</p>`)
  })
  test('extractHTMLContent should return the correct content when there are brackets', () => {
    const postsContentRendered = `\n<p>It's been a whirlwind couple of weeks.</p> <p>[caption id="attachment_1234" align="alignnone" width="300"]<img src="https://ryanrcampbell.com/wp-content/uploads/2022/05/IMG_1234.jpg" alt="A picture of a beach" width="300" height="200" /> A picture of a beach[/caption]</p>`
    const result = extractHTMLContent(postsContentRendered)
    expect(result).toBe(`\n<p>It's been a whirlwind couple of weeks.</p> <p><img src="https://ryanrcampbell.com/wp-content/uploads/2022/05/IMG_1234.jpg" alt="A picture of a beach" width="300" height="200" /> A picture of a beach</p>`)
  })
  test('extractHTMLContent should return the correct content when there are multiple brackets', () => {
    const postsContentRendered = `\n<p>It's been a whirlwind couple of weeks.</p> <p>[caption id="attachment_1234" align="alignnone" width="300"]<img src="https://ryanrcampbell.com/wp-content/uploads/2022/05/IMG_1234.jpg" alt="A picture of a beach" width="300" height="200" /> A picture of a beach[/caption]</p> <p>[caption id="attachment_5678" align="alignnone" width="300"]<img src="https://ryanrcampbell.com/wp-content/uploads/2022/05/IMG_5678.jpg" alt="A picture of a mountain" width="300" height="200" /> A picture of a mountain[/caption]</p>`
    const result = extractHTMLContent(postsContentRendered)
    expect(result).toBe(`\n<p>It's been a whirlwind couple of weeks.</p> <p><img src="https://ryanrcampbell.com/wp-content/uploads/2022/05/IMG_1234.jpg" alt="A picture of a beach" width="300" height="200" /> A picture of a beach</p> <p><img src="https://ryanrcampbell.com/wp-content/uploads/2022/05/IMG_5678.jpg" alt="A picture of a mountain" width="300" height="200" /> A picture of a mountain</p>`)
  })

  test('fetchEpisode should return the correct episode', () => {
    const slug = 'a-final-conversation-with-dan-schiro-writescast-100/'
    const result = fetchEpisode(slug)
    expect(result).toEqual(podcasts[0])
  })
  test('fetchEpisode should return null when no matching episode is found', () => {
    const slug = 'a-final-conversation-with-dan-schiro-writescast-101/'
    const result = fetchEpisode(slug)
    expect(result).toBe(null)
  })

  test('fetchPost should return the correct post', () => {
    const year = '2022'
    const month = '05'
    const day = '19'
    const slug = 'from-conference-to-coffee-on-the-beach'
    const result = fetchPost(year, month, day, slug, posts)
    expect(result).toEqual(posts[0])
  })
  test('fetchPost should return null when no matching post is found', () => {
    const year = '2022'
    const month = '05'
    const day = '20'
    const slug = 'from-conference-to-coffee-on-the-beach'
    const result = fetchPost(year, month, day, slug, posts)
    expect(result).toBe(null)
  })

  test('findEpisodeUUID should return the correct episode UUID', () => {
    const episode = podcasts[0]
    const result = findEpisodeUUID(episode)
    expect(result).toBe('eb296fea-035d-4d01-814a-687fd77b67a9')
  })

  test('formatDate should return the correct formatted date', () => {
    const date = '2022-05-19T00:00:00'
    const result = formatDate(date)
    expect(result).toBe('May 19, 2022')
  })
  
})