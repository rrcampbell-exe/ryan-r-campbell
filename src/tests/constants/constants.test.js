import { awards, boasts, books, builds, featuredIn, popText, reviews, shortBio, skills } from '../../constants'
import { describe, expect, test } from 'vitest'

describe('constants should match snapshots', () => {
  test('awards', () => {
    expect(awards).toMatchSnapshot()
  })

  test('boasts', () => {
    expect(boasts).toMatchSnapshot()
  })

  test('books', () => {
    expect(books).toMatchSnapshot()
  })

  test('builds', () => {
    expect(builds).toMatchSnapshot()
  })

  test('featuredIn', () => {
    expect(featuredIn).toMatchSnapshot()
  })

  test('popText', () => {
    expect(popText).toMatchSnapshot()
  })

  test('reviews', () => {
    expect(reviews).toMatchSnapshot()
  })

  test('shortBio', () => {
    expect(shortBio).toMatchSnapshot()
  })

  test('skills', () => {
    expect(skills).toMatchSnapshot()
  })
})


