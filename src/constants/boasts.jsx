import { Sparkles, Layers, Users } from 'lucide-react'

const boasts = [
  {
    category: 'AI Enablement & Developer Experience',
    description: [
      'Authored the most-downloaded skill on the enterprise AI Hub — accounting for more than 15% of all skill interactions on the platform',
      'Drove 1,200+ weekly views to the AI Hub\'s Skills Library and MCP Registry through architecture decisions and content strategy',
      'Presented AI enablement initiatives directly to executive leadership at Northwestern Mutual',
      'Awarded "Most Innovative" in the 2024 Developer Experience Hackathon for an AI-powered sentiment analysis application'
    ],
    image: <Sparkles />
  },
  {
    category: 'Frontend Architecture & Platform',
    description: [
      'Developed and maintained React component architecture used across 12+ microapps in a microfrontend ecosystem',
      'Led GraphQL and Apollo Federation migration across enterprise platform services',
      'Produced Kubernetes documentation that became the organizational standard for namespace migration onboarding',
      'Finalist in 2022 Hack for Good with an augmented reality application to ease treatment for pediatric cancer patients'
    ],
    image: <Layers />
  },
  {
    category: 'Leadership & Culture',
    description: [
      'Selected as the only Software Engineer III in Northwestern Mutual\'s inaugural Pathways Mentorship pilot program',
      'Co-chaired the Engineering mentorship committee, expanding program reach across the engineering organization',
      'Accepted into the Aspiring Leaders program — an invitation-only leadership development cohort',
      'Presented at Revel in Tech and the company\'s internal podcast on technical craft and organizational communication'
    ],
    image: <Users />
  }
]

export default boasts
