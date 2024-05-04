import podcasts from '../../assets/podcasts/pinecast-podcasts'
import posts from '../../assets/posts/new-posts'
import legacyPosts from '../../assets/posts/legacy-posts'
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