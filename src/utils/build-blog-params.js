function buildBlogParams(link) {
  const dotComIndex = link.indexOf('.com');
  if (dotComIndex !== -1) {
      return link.substring(dotComIndex + 4)
  } else {
      return link
  }
}

export default buildBlogParams
