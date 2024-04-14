const extractHTMLContent = (inputString) => {
  // Define the regular expression pattern to match HTML content
  var pattern = /<[^>]*>|(\[.*?\])/g

  // Use the replace() method to remove any content inside brackets
  var cleanedString = inputString.replace(pattern, function(match, p1) {
      // If the match is inside brackets, replace it with an empty string
      if (p1) return ''
      // Otherwise, keep the HTML tag intact
      return match
  })

  return cleanedString
}


export default extractHTMLContent
