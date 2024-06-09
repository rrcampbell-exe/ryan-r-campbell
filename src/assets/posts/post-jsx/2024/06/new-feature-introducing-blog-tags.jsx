import React from 'react'
import { CodeBlock } from '../../../../../components'

const NewFeatureIntroducingBlogTags = () => {
  const transformTag = (tag) => {
    return tag.replace(/ /g, '-').toLowerCase()
  }
  return (
    <>
      <h2>Tag It, Search It</h2>
      <p>Blog tags are now available for all blog posts dated 2021 or later. These tags can be found at the top (and, depending on post length, the bottom!) of each blog post, sorting it into up to three categories.</p>
      <p>Each tag is clickable and, when clicked, will present you with posts that have been similarly categorized.</p>
      <p>Want to see more posts about <em>Web Development</em>? Click the tag! Want to see only the posts related to <em>Writing</em>? Give it a click!</p>
      <p>Remember, as of this blog post, only posts published in 2021 or later have this feature available, but I'll be updating older posts over time to ensure all posts are eventually categorized appropriately.</p>
      <p>In the meantime, if you're interested in some of the code that went into making this possible, you can check out the code specific to the tags below (up-to-date as of the time of this post) or visit <a href='https://github.com/rrcampbell-exe/ryan-r-campbell/blob/main/src/components/Blog/BlogTags.jsx' rel='noopener noreferrer' target='_blank'>the GitHub repository</a> for this project to follow the BlogTag code where it leads!</p>
      <CodeBlock 
        code={`import React from 'react'
import { useNavigate } from 'react-router-dom'

const BlogTags = ({ tags }) => {
  const navigate = useNavigate()

  const transformTag = (tag) => {
    return tag.replace(/ /g, '-').toLowerCase()
  }
  return (
    <div className='Blog-tags'>
      <div className='content-post-underline' />
      <p>FILED UNDER:</p>
      <div className='tags-container'>
        {tags.map(tag => (
          <span key={tag} className='tag grow-on-hover' onClick={() => navigate(\`/blog/\${transformTag(tag)}\`)}>{tag}</span>
        ))}
      </div>
    </div>
  )
}

export default BlogTags
`}
      />
    </>
  )
}

export default NewFeatureIntroducingBlogTags
