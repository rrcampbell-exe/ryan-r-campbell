const findEpisodeUUID = (episode) => {
  if (!episode) return null

  const url = episode.enclosure._url
  const startIndex = url.indexOf('listen/') + 'listen/'.length
  const endIndex = url.indexOf('.mp3')
  
  if (startIndex !== -1 && endIndex !== -1) {
      return url.substring(startIndex, endIndex)
  } else {
      return null
  }
}

export default findEpisodeUUID
