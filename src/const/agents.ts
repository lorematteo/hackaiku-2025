export const LLMS: {
  id: 'openai' | 'anthropic' | 'mistral' | 'meta';
  name: string;
  logo: string;
  description: string;
}[] = [
  {
    id: 'openai',
    name: 'GPT-4o Mini',
    logo: './src/assets/logo/openai.png',
    description: "A smaller version of OpenAI's GPT-4 model, optimized for speed and efficiency.",
  },
  {
    id: 'anthropic',
    name: 'Claude 3 Sonnet',
    logo: './src/assets/logo/anthropic.png',
    description: 'A powerful language model by Anthropic, designed for creative tasks.',
  },
  {
    id: 'mistral',
    name: 'Mistral 7B',
    logo: './src/assets/logo/mistral.png',
    description: 'A versatile model with 7 billion parameters, suitable for various applications.',
  },
  {
    id: 'meta',
    name: 'LLaMA 3',
    logo: './src/assets/logo/meta.png',
    description:
      "Meta's latest language model, known for its contextual understanding and generation.",
  },
];
