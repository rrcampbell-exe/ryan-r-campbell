const fetchPost = (year, month, day, slug, posts) => {
  // Iterate through the posts array
  for (let i = 0; i < posts.length; i++) {
      const post = posts[i]
      // Extract year, month, and day from the post's date
      const postDate = new Date(post.date)
      const postYear = postDate.getUTCFullYear().toString()
      const postMonth = (postDate.getUTCMonth() + 1).toString().padStart(2, '0')
      const postDay = postDate.getUTCDate().toString().padStart(2, '0')
      
      // Check if the post's date matches the provided year, month, and day
      if (postYear === year && postMonth === month && postDay === day) {
          // Check if the slug matches
          if (post.slug === slug) {
              // Return the content if both checks pass
              return post
          }
      }
  }
  // Return null if no matching post is found
  return null
}

export default fetchPost
