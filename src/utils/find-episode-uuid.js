const findEpisodeUUID = (episode) => {
  const url = episode.enclosure._url
  const startIndex = url.indexOf('listen/') + 'listen/'.length
  const endIndex = url.indexOf('.mp3')
  
  if (startIndex !== -1 && endIndex !== -1) {
      return url.substring(startIndex, endIndex)
  } else {
      // TODO: log an error if this can't be found
      return null // Or you can return an empty string or handle it as per your requirement
  }
}

export default findEpisodeUUID
