export const LLMS: {
  id: 'openai' | 'anthropic' | 'mistral' | 'meta';
  name: string;
  logo: string;
  description: string;
}[] = [
  {
    id: 'openai',
    name: 'GPT-4o Mini',
    logo: 'openai',
    description: "A smaller version of OpenAI's GPT-4 model, optimized for speed and efficiency.",
  },
  {
    id: 'anthropic',
    name: 'Claude 3 Sonnet',
    logo: 'anthropic',
    description: 'A powerful language model by Anthropic, designed for creative tasks.',
  },
  {
    id: 'mistral',
    name: 'Mistral 7B',
    logo: 'mistral',
    description: 'A versatile model with 7 billion parameters, suitable for various applications.',
  },
  {
    id: 'meta',
    name: 'LLaMA 3',
    logo: 'meta',
    description:
      "Meta's latest language model, known for its contextual understanding and generation.",
  },
];

export const SAMPLE_OUTPUT = `
Of course! I’ll gather the relevant information for your 3pm project sync.
### Meeting Brief
#### Attendees
- Alice Dupont (Project Manager)  
- Bob Martin (Developer)  
- You  
#### Key Points from Last Meeting
- Discussed project timeline adjustments  
- **Action item:** Bob to update module A by this week  
#### Recent Project Updates
- Module A update is in progress (see latest commit notes)  
- New documentation added on integration testing  
#### Suggested Agenda
1. Quick status update from each team member  
2. Review progress on module A  
3. Discuss integration testing plan  
4. Q&A and next steps  
`;
