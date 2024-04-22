import podcasts from '../assets/podcasts/pinecast-podcasts'

const fetchEpisode = (slug) => {
    // Iterate through the podcasts array
    for (let i = 0; i < podcasts.length; i++) {
      const episode = podcasts[i]

      if (episode.link.includes(slug)) {
        return episode
      }
  }
  // Return null if no matching post is found
  // TODO: update this to return something meaningful for error handling
  return null
}

export default fetchEpisode
