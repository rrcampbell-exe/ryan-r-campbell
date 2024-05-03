import AuthorLanding from '../../experiences/author/pages/Landing/AuthorLanding'
import { describe, expect, test } from 'vitest'
import { screen, render, fireEvent } from '@testing-library/react'
import ContextAndRouterProvider from '../test-utils'

describe('AuthorLanding', () => {
  test('default snapshot', () => {
    const authorLanding = render(
      <ContextAndRouterProvider>
        <AuthorLanding />
      </ContextAndRouterProvider>
    )
    expect(authorLanding).toMatchSnapshot()
  })
  test('should redirect to the about page when the about link is clicked', () => {
    render(
      <ContextAndRouterProvider>
        <AuthorLanding />
      </ContextAndRouterProvider>
    )
    const aboutLink = screen.getByTestId('about-link')
    fireEvent.click(aboutLink)
    expect(window.location.pathname).toBe('/about')
  })
  test('should open the correct awards information when award information is clicked', () => {
    const { getByTestId } = render(
      <ContextAndRouterProvider>
        <AuthorLanding />
      </ContextAndRouterProvider>
    )
    const intlBookAwards2022 = getByTestId('https://www.internationalbookawards.com/2022pressrelease.html')
    const readersFavorite = getByTestId('https://readersfavorite.com/book-review/scambait')
    const intlBookAwards2020 = getByTestId('https://ryanrcampbell.com/2020/07/23/imminent-dawn-named-as-finalist-in-2020-international-book-awards/')
    
    expect(intlBookAwards2022).toHaveAttribute('href', 'https://www.internationalbookawards.com/2022pressrelease.html')
    expect(readersFavorite).toHaveAttribute('href', 'https://readersfavorite.com/book-review/scambait')
    expect(intlBookAwards2020).toHaveAttribute('href', 'https://ryanrcampbell.com/2020/07/23/imminent-dawn-named-as-finalist-in-2020-international-book-awards/')
  })
  test('should open the correct featured in information when featured in information is clicked', () => {
    const { getByTestId } = render(
      <ContextAndRouterProvider>
        <AuthorLanding />
      </ContextAndRouterProvider>
    )

    const isthmus = getByTestId('https://isthmus.com/arts/books/rr-campbell-imminent-dawn/')
    const careerClarity = getByTestId('https://getcareerclarity.com/episode95/')
    const lifelongLearner = getByTestId('https://continuingstudies.wisc.edu/blog/isthmus-profiles-sci-fi-author-and-writers-institute-presenter-r-r-campbell/')
    const writescastNetwork = getByTestId('https://ryanrcampbell.com/podcasts/')
    const wrotePodcast = getByTestId('http://www.wrotepodcast.com/tag/r-r-campbell/')
    const columbusJournal = getByTestId('https://wiscnews.com/news/community/columbusjournal/news/local/columbus-books-and-beer-event-hosts-sci-fi-author-r-r-campbell/article_17aa664e-3791-57d1-b708-d69688534659.html')
    const appletonMonthly = getByTestId('https://ryanrcampbell.com/2019/08/06/appleton-monthly-features-imminent-dawn/')
    const neuroticNourishment = getByTestId('https://podcasters.spotify.com/pod/show/neuroticnourishment/episodes/Season-Three--Episode-1-Suicide--Silence-and-What-Comes-Next-ep0oqa')

    expect(isthmus).toHaveAttribute('href', 'https://isthmus.com/arts/books/rr-campbell-imminent-dawn/')
    expect(careerClarity).toHaveAttribute('href', 'https://getcareerclarity.com/episode95/')
    expect(lifelongLearner).toHaveAttribute('href', 'https://continuingstudies.wisc.edu/blog/isthmus-profiles-sci-fi-author-and-writers-institute-presenter-r-r-campbell/')
    expect(writescastNetwork).toHaveAttribute('href', 'https://ryanrcampbell.com/podcasts/')
    expect(wrotePodcast).toHaveAttribute('href', 'http://www.wrotepodcast.com/tag/r-r-campbell/')
    expect(columbusJournal).toHaveAttribute('href', 'https://wiscnews.com/news/community/columbusjournal/news/local/columbus-books-and-beer-event-hosts-sci-fi-author-r-r-campbell/article_17aa664e-3791-57d1-b708-d69688534659.html')
    expect(appletonMonthly).toHaveAttribute('href', 'https://ryanrcampbell.com/2019/08/06/appleton-monthly-features-imminent-dawn/')
    expect(neuroticNourishment).toHaveAttribute('href', 'https://podcasters.spotify.com/pod/show/neuroticnourishment/episodes/Season-Three--Episode-1-Suicide--Silence-and-What-Comes-Next-ep0oqa')
  })
})
