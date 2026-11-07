export const publicProjects = [
  {
    logo: './builds/real-fake-birds-app-logo.png',
    alt: 'A cartoon bird on a forest-green background, the Real Fake Birds app logo',
    title: 'Real Fake Birds',
    teaser: 'Some are real. Some are fake. Tell them apart.',
    description: 'The real names come from eBird. The game saves progress on your device and can sync it if you sign in.',
    technologies: 'Next.js, TypeScript, eBird, OpenAI APIs',
    link: 'https://www.realfakebirds.app/',
    linkText: 'Play Real Fake Birds',
    gitHub: 'https://github.com/rrcampbell-exe/real-fake-birds',
    gitHubText: 'View source',
    gitHubAriaLabel: 'View source for Real Fake Birds on GitHub',
  },
  {
    logo: './2026-blue-favicon-ryan-r-campbell.png',
    alt: 'Blue favicon for Ryan R. Campbell',
    title: 'This website',
    teaser: 'The digital home for Ryan R. Campbell',
    description: 'This site brings together essays, books, a podcast, and public projects. I built it with React; its source is available to explore.',
    technologies: 'React, Vite, Sass, React Router, Vitest',
    gitHub: 'https://github.com/rrcampbell-exe/ryan-r-campbell',
    gitHubText: 'View source',
    gitHubAriaLabel: 'View source for This website on GitHub',
  },
]

export const otherProjects = [
  {
    logo: './builds/druids-den-winter-driveway.jpg',
    alt: 'A winter driveway at The Druids Den',
    title: 'The Druids Den',
    teaser: 'A cabin rental in northern Wisconsin.',
    description: 'The website for our cabin in the heart of Wisconsin\'s northwoods. Visitors can explore a photo gallery, a regional field guide, and learn more about how to book their stay.',
    link: 'https://www.druidsdenwi.com/',
    linkText: 'Visit The Druids Den',
    gitHub: 'https://github.com/rrcampbell-exe/druids-den',
    gitHubText: 'View source',
    gitHubAriaLabel: 'View source for The Druids Den on GitHub',
  },
  {
    logo: './podcasts/r-on-everything-podcast-cover-art.png',
    alt: 'Cover art for the R: On Everything podcast',
    title: 'R: On Everything',
    teaser: 'A podcast about technology, work, and culture.',
    description: 'I write and produce a podcast about technology, work, and culture.',
    link: '/podcasts',
    linkText: 'Listen to the podcast',
    isPodcast: true,
  },
]

const builds = [...publicProjects, ...otherProjects]

export default builds
