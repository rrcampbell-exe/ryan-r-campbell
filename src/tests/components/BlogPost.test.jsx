import { describe, expect, test } from 'vitest'
import posts from '../../assets/posts/new-posts'
import { formatDate } from '../../utils'

const latestPost = posts[posts.length - 1]

Object.defineProperty(window, 'location', {
  writable: true,
  value: { href: latestPost.link }
})

describe('The latest blog post', () => {
  test('should be found at an href that matches its link', () => {
    expect(window.location.href).toBe(latestPost.link)
  })
  test('should contain HTML content', async () => {
    expect(latestPost.content.rendered).toMatch(/<p>/)
  })
  test('should have a date that matches the date in its link', () => {
    const formattedDate = formatDate(latestPost.date)
    const linkDate = new Date(latestPost.link.split('/').slice(-4, -1).join('-'))
    linkDate.setUTCHours(12)
    const isoLinkDate = linkDate.toISOString()
    const formattedLinkDate = formatDate(isoLinkDate)

    expect(formattedDate).toBe(formattedLinkDate)
  })
  test('should have a unique id', () => {
    const ids = posts.map(post => post.id)
    const uniqueIds = new Set(ids)

    expect(uniqueIds.size).toBe(ids.length)
  })
  test('should have tags', () => {
    expect(latestPost.tags.length).toBeGreaterThan(0)
  })
  test('should have a unique featured image', () => {
    const featuredImages = posts.map(post => post.episode_featured_image)
    const uniqueImages = new Set(featuredImages)

    expect(uniqueImages.size).toBe(featuredImages.length)
  })
  test('should have a unique link', () => {
    const links = posts.map(post => post.link)
    const uniqueLinks = new Set(links)

    expect(uniqueLinks.size).toBe(links.length)
  })
  test('should have a slug that matches the last part of its link', () => {
    const slug = latestPost.link.split('/').pop()
    expect(latestPost.slug).toBe(slug)
  })
  test('should have a unique, non-empty excerpt', () => {
    const excerpts = posts.map(post => post.excerpt.rendered)
    const uniqueExcerpts = new Set(excerpts)

    expect(latestPost.excerpt.rendered).not.toBe('')
    expect(uniqueExcerpts.size).toBe(excerpts.length)
  })
})
