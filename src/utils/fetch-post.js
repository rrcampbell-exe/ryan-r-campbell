import { posts as newPosts, legacyPosts } from '../assets/posts'

const fetchPost = (year, month, day, slug, posts) => {
  // Iterate through the posts array
  for (let i = 0; i < posts.length; i++) {
    const post = posts[i]
    // Extract year, month, and day from the post's date
    const postDate = new Date(post.date)
    const postYear = postDate.getUTCFullYear().toString()
    const postMonth = (postDate.getUTCMonth() + 1).toString().padStart(2, '0')
    const postDay = postDate.getUTCDate().toString().padStart(2, '0')
    
    // Check if the post's date matches the provided year, month, and day; verify slug matches
    if (postYear === year && postMonth === month && postDay === day && post.slug === slug) {
			// create an all posts array by combining the new posts with the legacy posts
			const allPosts = [...newPosts, ...legacyPosts]
			// find the post object in the all posts array
			const post = allPosts.find(post => post.slug === slug)
			// find index of post in all posts
			const postIndex = allPosts.indexOf(post)
      // Add the post's index to the post object and return it
      post.postIndex = postIndex
      return post
    }
  }
  // Return null if no matching post is found
  return null
}

export default fetchPost
