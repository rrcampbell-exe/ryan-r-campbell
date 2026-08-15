import { Sparkles, BookOpen, Users } from 'lucide-react'

const boasts = [
  {
    category: 'Building & Experimentation',
    description: [
      'Led the definition, design, and launch of Northwestern Mutual\'s enterprise AI Hub, including the NM Skills Library and MCP Registry',
      'Authored the organization\'s most-downloaded AI skill, contributing more than 15% of platform downloads',
      'Awarded "Most Innovative" in the 2024 Developer Experience Hackathon for an AI-powered application that analyzed internal Slack data',
      'Identified customer demand for a new pizza size and redesigned dough specifications and production workflows to support three sizes'
    ],
    image: <Sparkles />
  },
  {
    category: 'Leading & Enabling',
    description: [
      'Led cross-organizational research into AI adoption and translated findings into practical implementation recommendations',
      'Presented enterprise innovation strategy and organizational enablement recommendations to executive leadership, including the CEO',
      'Served as a primary mentor for interns and junior engineers through architecture reviews, onboarding, code reviews, and career conversations',
      'Co-chaired the Pathways Mentorship Program engagement committee to facilitate mentorship and talent development initiatives'
    ],
    image: <Users />
  },
  {
    category: 'Teaching & Communicating',
    description: [
      'Designed and delivered educational programming, workshops, and presentations for UW Continuing Studies, the UW Writers\' Institute, and Lakefly Writers Conference',
      'Built and grew the Writescast Network into a podcast platform producing 120+ episodes and reaching tens of thousands of listeners',
      'Published multiple award-recognized books while managing editing, production, marketing, distribution, and operations',
      'Founded and operated an independent publishing and education business, managing its strategy, technology, audience development, and day-to-day operations'
    ],
    image: <BookOpen />
  }
]

export default boasts
