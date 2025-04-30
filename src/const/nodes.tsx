export type NodeType = {
  id: string;
  type: 'main-agent' | 'tool' | 'llm' | 'agent';
  name: string;
  desc: string;
  icon: string;
  processState?: 'waiting' | 'processing' | 'complete' | 'warning' | 'error';
  config?: AgentConfig | ToolConfig;
  isSelected?: boolean;
};

export type AgentConfig = {
  llm: string;
  instructions: string;
};

export type LLMConfig = {
  instructions: string;
};

export type ToolConfig = {
  'llm-agent'?: string;
  purpose?: string;
  'system-prompt'?: string;
  integration?: string;
  authorization?: string;
  channel?: string;
  username?: string;
  'additional-description'?: string;
};

export const MAIN_AGENT: NodeType = {
  id: 'main-agent',
  type: 'main-agent',
  name: 'Main Agent',
  desc: 'The main agent that coordinates the other agents and tools',
  icon: 'agent',
};

export const NODES: {
  tools: NodeType[];
  agents: NodeType[];
  llm: NodeType[];
} = {
  tools: [
    {
      id: 'lookup-dataset',
      type: 'tool',
      name: 'Lookup Dataset',
      desc: 'Find a record based on conditions on one or several columns',
      icon: 'dataset',
    },
    {
      id: 'search-knowledge-bank',
      type: 'tool',
      name: 'Search Knowledge Bank',
      desc: 'Search a Knowledge Bank for relevant information',
      icon: 'knowledge-bank',
    },
    {
      id: 'call-from-llm-mesh',
      type: 'tool',
      name: 'Call from LLM Mesh',
      desc: 'Send a request to an LLM or Agent registered in the LLM Mesh',
      icon: 'ai-prompt',
    },
    {
      id: 'append-to-dataset',
      type: 'tool',
      name: 'Append to Dataset',
      desc: 'Search a Knowledge Bank for relevant information',
      icon: 'data-table-row',
    },
    {
      id: 'send-message',
      type: 'tool',
      name: 'Send message',
      desc: 'Send a message through a Dataiku Messaging Channel (email, Slack,…) ',
      icon: 'user-email',
    },
    {
      id: 'model-predict',
      type: 'tool',
      name: 'Model Predict',
      desc: 'Predict a record from a dataset with a Dataiku model',
      icon: 'model-predict',
    },
  ],
  agents: [
    {
      id: 'text-summarization',
      type: 'agent',
      name: 'Text Summarization',
      desc: 'Summarize a text',
      icon: 'agent',
      config: {
        llm: 'anthropic',
        instructions: 'Summarize the text',
      },
    },
    {
      id: 'text-classification',
      type: 'agent',
      name: 'Text Classification',
      desc: 'Classify a text into categories',
      icon: 'agent',
      config: {
        llm: 'meta',
        instructions: 'Classify the text into categories',
      },
    },
  ],
  llm: [
    {
      id: 'openai',
      type: 'llm',
      name: 'OpenAI',
      desc: 'Description for LLM 1',
      icon: 'openai',
    },
    {
      id: 'anthropic',
      type: 'llm',
      name: 'Anthropic',
      desc: 'Description for LLM 2',
      icon: 'anthropic',
    },
    {
      id: 'mistral',
      type: 'llm',
      name: 'Mistral',
      desc: 'Description for LLM 3',
      icon: 'mistral',
    },
    {
      id: 'meta',
      type: 'llm',
      name: 'Meta',
      desc: 'Description for LLM 4',
      icon: 'meta',
    },
  ],
};
