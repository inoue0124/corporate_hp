export interface TechItem {
  name: string;
  category: string;
}

export const techStack: TechItem[] = [
  { name: 'Next.js', category: 'Frontend' },
  { name: 'React', category: 'Frontend' },
  { name: 'TypeScript', category: 'Frontend' },
  { name: 'Tailwind CSS', category: 'Frontend' },
  { name: 'Flutter', category: 'Mobile' },
  { name: 'React Native', category: 'Mobile' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Python', category: 'Backend' },
  { name: 'Go', category: 'Backend' },
  { name: 'Ruby on Rails', category: 'Backend' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'Firebase', category: 'Database' },
  { name: 'Supabase', category: 'Database' },
  { name: 'AWS', category: 'Infra' },
  { name: 'GCP', category: 'Infra' },
  { name: 'Vercel', category: 'Infra' },
  { name: 'Docker', category: 'Infra' },
  { name: 'GitHub Actions', category: 'Infra' },
  { name: 'OpenAI API', category: 'AI' },
  { name: 'Claude API', category: 'AI' },
  { name: 'LangChain', category: 'AI' },
  { name: 'Figma', category: 'Design' },
];

export const categories = [
  'Frontend',
  'Mobile',
  'Backend',
  'Database',
  'Infra',
  'AI',
  'Design',
];
