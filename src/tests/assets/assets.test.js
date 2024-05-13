import podcasts from '../../assets/podcasts/pinecast-podcasts'
import { posts, legacyPosts } from '../../assets/posts'
import { describe, expect, test } from 'vitest'

describe('assets should match snapshots', () => {
  test('podcasts', () => {
    expect(podcasts).toMatchSnapshot()
  })

  test('posts', () => {
    expect(posts).toMatchSnapshot()
  })

  test('legacyPosts', () => {
    expect(legacyPosts).toMatchSnapshot()
  })
})