const posts = [
  {
    id: 10096,
    date: "2024-11-27T06:00:00",
    slug: "all-blog-posts-now-on-substack",
    link: "https://ryanrcampbell.com/2024/11/27/all-blog-posts-now-on-substack",
    title: {
      rendered: "All Blog Posts Now on Substack!"
    },
    content: {
      rendered:
        '',
      protected: false
    },
    excerpt: {
      rendered: "Click here to visit the new home for all of my blog posts.",
      protected: false
    },
    tags: ['Site Migration', 'Substack'],
    episode_featured_image: "/post-content/2024/11/all-blog-posts-now-on-substack-cover-img.png"
  },
  {
    id: 10095,
    date: "2024-11-26T06:00:00",
    slug: "strategic-passion-a-playbook-for-aligning-passion-with-mastery",
    link: "https://ryanrcampbell.com/2024/11/26/strategic-passion-a-playbook-for-aligning-passion-with-mastery",
    title: {
      rendered: "Strategic Passion: A Playbook for Aligning Passion with Mastery"
    },
    content: {
      rendered:
        '',
      protected: false
    },
    excerpt: {
      rendered: "Marrying passion and craft is paramount, but how do we do it strategically?",
      protected: false
    },
    tags: ['Passionate Craftsman', 'Professional Development', 'Strategy'],
    episode_featured_image: "/post-content/2024/11/strategic-passion-cover-img.png"
  },
  {
    id: 10094,
    date: "2024-11-25T06:00:00",
    slug: "passion-meets-craft-a-new-framework-for-loving-your-work",
    link: "https://ryanrcampbell.com/2024/11/25/passion-meets-craft-a-new-framework-for-loving-your-work",
    title: {
      rendered: "Passion Meets Craft: A New Framework for Loving Your Work"
    },
    content: {
      rendered:
        '',
      protected: false
    },
    excerpt: {
      rendered: 'Passion plus craft equals sustainability and fulfillment. Here\'s how to make it happen.',
      protected: false
    },
    tags: ['Passionate Craftsman', 'Professional Development', 'Identity'],
    episode_featured_image: "/post-content/2024/11/where-passion-meets-craft-cover-img.png"
  },
  {
    id: 10093,
    date: "2024-06-22T06:00:00",
    slug: "why-skill-triumphs-over-passion-the-craftsman-mindset",
    link: "https://ryanrcampbell.com/2024/06/22/why-skill-triumphs-over-passion-the-craftsman-mindset",
    title: {
      rendered: "Why Skill Triumphs Over Passion: The Craftsman Mindset"
    },
    content: {
      rendered:
        '',
      protected: false
    },
    excerpt: {
      rendered: '"Ask not what your career can do for you. Ask what you can do for your career."',
      protected: false
    },
    tags: ['Passionate Craftsman', 'Professional Development', 'Identity'],
    episode_featured_image: "/post-content/2024/06/craftsman-mindset-cover-img.png"
  },
  {
    id: 10092,
    date: "2024-06-08T06:00:00",
    slug: "new-feature-introducing-blog-tags",
    link: "https://ryanrcampbell.com/2024/06/08/new-feature-introducing-blog-tags",
    title: {
      rendered: "New Feature: Introducing Blog Tags!"
    },
    content: {
      rendered:
        '',
      protected: false
    },
    excerpt: {
      rendered: "Blog tags are now available for posts published in 2021 or later.",
      protected: false
    },
    tags: ['Web Development', 'New Features', 'Site Migration'],
    episode_featured_image: "/post-content/2024/06/new-feature-introducing-blog-tags-cover-img.png"
  },
  {
    id: 10091,
    date: "2024-05-31T06:00:00",
    slug: "dont-follow-your-passion-become-the-passionate-craftsman",
    link: "https://ryanrcampbell.com/2024/05/31/dont-follow-your-passion-become-the-passionate-craftsman",
    title: {
      rendered: "Don't Follow Your Passion. Become the Passionate Craftsman."
    },
    content: {
      rendered:
        '',
      protected: false
    },
    excerpt: {
      rendered: "There's something better than passion. There's something more than.",
      protected: false
    },
    tags: ['Passionate Craftsman', 'Professional Development', 'Identity'],
    episode_featured_image: "/post-content/2024/05/dont-follow-your-passion-part-one-cover-img.jpg"
  },
  {
    id: 10090,
    date: "2024-05-24T06:00:00",
    slug: "let-there-be-light-dark",
    link: "https://ryanrcampbell.com/2024/05/24/let-there-be-light-dark",
    title: {
      rendered: "Let There Be light-dark()"
    },
    content: {
      rendered:
        '',
      protected: false
    },
    excerpt: {
      rendered: "In the beginning, there was light mode, but lo! After a time, the retinas of webizens did cry out, yearning for reprieve.",
      protected: false
    },
    tags: ['CSS', 'Web Development', 'Site Migration'],
    episode_featured_image: "/post-content/2024/05/let-there-be-light-dark-cover-img.png"
  },
  {
    id: 10089,
    date: "2024-05-23T06:00:00",
    slug: "book-review-the-good-enough-job",
    link: "https://ryanrcampbell.com/2024/05/23/book-review-the-good-enough-job",
    title: {
      rendered: "Book Review: The Good Enough Job"
    },
    content: {
      rendered:
        '',
      protected: false
    },
    excerpt: {
      rendered: "The right book. The right time. Right on.",
      protected: false
    },
    tags: ['Book Review', 'Professional Development', 'Identity'],
    episode_featured_image: "/post-content/2024/05/book-review-the-good-enough-job-cover-img.png",
    featured_image_alt: "The book cover for The Good Enough Job rests on a white table alongside a green succulent plant."
  },
  {
    id: 10088,
    date: "2024-05-03T06:00:00",
    slug: "welcome-to-the-new-ryan-r-campbell",
    link: "https://ryanrcampbell.com/2024/05/03/welcome-to-the-new-ryan-r-campbell",
    title: {
      rendered: "Welcome to the New Ryan R. Campbell (Or at Least the New Website)"
    },
    content: {
      rendered:
        '',
      protected: false
    },
    excerpt: {
      rendered: "It's been a while—nearly two years, to be exact—but golly, do I have some updates.",
      protected: false
    },
    tags: ['Site Migration', 'Web Development', 'Writing'],
    episode_featured_image: "/post-content/2024/05/welcome-to-the-new-site-cover-img.png",
    featured_image_alt: "A cut-out image of Ryan R. Campbell next to text that welcomes visitors to the new website."
  }
];


export default posts
