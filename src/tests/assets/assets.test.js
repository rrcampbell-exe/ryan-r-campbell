import podcasts from '../../assets/podcasts/pinecast-podcasts'
import { describe, expect, test } from 'vitest'

describe('assets should match snapshots', () => {
  test('podcasts', () => {
    expect(podcasts).toMatchSnapshot()
  })

})