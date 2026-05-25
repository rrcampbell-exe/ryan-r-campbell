// Weighted string used by the SkillsCloud word-cloud visualization.
// Higher repetition = larger display in the cloud.
const skills = `react react react react react react react react typescript typescript typescript typescript
javascript javascript javascript javascript javascript javascript
node node node node GraphQL GraphQL GraphQL GraphQL apollo apollo apollo apollo
HTML5 HTML5 HTML5 CSS CSS CSS CSS sass sass sass sass
REST REST REST REST vite vite vite vitest vitest vitest
Docker Docker Docker kubernetes kubernetes kubernetes
github-copilot github-copilot github-copilot
CI/CD CI/CD CI/CD microfrontend microfrontend microfrontend
express express express MongoDB SQL SQL
redux redux react-router-dom react-router-dom vercel vercel`

// Structured skill list for use in components and hiring-focused displays.
export const skillCategories = [
  {
    category: 'Frontend',
    skills: ['React', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS / Sass', 'Redux']
  },
  {
    category: 'API & Data',
    skills: ['GraphQL', 'Apollo Federation', 'REST', 'Node.js', 'Express', 'MongoDB', 'SQL']
  },
  {
    category: 'AI & DevEx',
    skills: ['GitHub Copilot', 'AI Enablement', 'Developer Experience', 'Microfrontend Architecture']
  },
  {
    category: 'Platform & Infrastructure',
    skills: ['Docker', 'Kubernetes', 'CI/CD', 'Vite', 'Vercel']
  },
  {
    category: 'Testing',
    skills: ['Vitest', 'Jest', 'React Testing Library']
  }
]

export default skills
