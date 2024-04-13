import React, { useEffect, useState } from 'react'
import posts from '../../../../assets/posts/posts'

const BlogPost = () => {
  const [postContent, setPostContent] = useState('')

  console.log('these are the posts', posts.slice(0, 3))

  console.log('this is the content of the first post', posts[0].content.rendered)

  const firstPostContent = posts[0].content.rendered

  return (
    <div dangerouslySetInnerHTML={{ __html: firstPostContent }}/>
  )
}

export default BlogPost
