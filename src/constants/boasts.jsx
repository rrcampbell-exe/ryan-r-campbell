import { BrowserSVG, LaptopSVG, ManagementSVG } from '../assets/svg'

const boasts = [
  {
    category: 'Hackathons',
    description: [
      'Finalist in 2022 Hack for Good with augmented reality project to ease treatment for pediatric cancer patients', 
      'Awarded "Most Innovative" in 2024 Developer Experience Hackathon for AI-powered sentiment analysis application'
    ],
    image: <LaptopSVG />
  },
  {
    category: 'Leadership & Culture',
    description: [
      'Founded company-internal podcast to better connect teams and discuss pressing technical topics',
      'Presented on organizational impact of well-crafted mission statements', 
      'Frequent contributor to company blog on topics related to sharpening technical and non-technical skills', 
      'Developed documentation for and trained others on Kubernetes namespace migration'
    ],
    image: <ManagementSVG />
  },
  {
    category: 'UI/UX', 
    description: ['Created React library of reusable components to streamline implementation of common design patterns', 
      'Led team initiative to migrate to modern enterprise design system', 
      'Contributed directly to the codebases of bandwidth-strained teams to squash bugs and improve client experience',
      'Exceeded organizational goal of 60% unit testing coverage by achieving 93.9% and 82.7% coverage for new applications' 
    ],
    image: <BrowserSVG />
  }
]

export default boasts
