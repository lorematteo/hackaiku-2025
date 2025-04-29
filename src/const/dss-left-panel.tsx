import { Bot, Users, Wrench } from 'lucide-react';

export const DSSLeftPanelMenus = [
  {
    id: 'tools',
    name: 'Tools',
    icon: <Wrench size={16} />, // Remplace par ton icône custom si besoin
    color: 'cyan-blue-base',
  },
  {
    id: 'agents',
    name: 'Agents',
    icon: <Users size={16} />, // Remplace par ton icône custom si besoin
    color: 'green-base',
  },
  {
    id: 'llm',
    name: 'LLM',
    icon: <Bot size={16} />, // Remplace par ton icône custom si besoin
    color: '#D66F9E',
  },
];

export const DSSLeftPanelNodes = {
  tools: [
    {
      id: 'lookup-dataset',
      name: 'Lookup Dataset',
      desc: 'Find a record based on conditions on one or several columns',
      icon: <Wrench size={16} />, // Remplace par une icône spécifique si besoin
      color: 'cyan-blue-base',
    },
    {
      id: 'search-knowledge-bank',
      name: 'Search Knowledge Bank',
      desc: 'Search a Knowledge Bank for relevant information',
      icon: <Wrench size={16} />,
      color: 'cyan-blue-base',
    },
    {
      id: 'call-from-llm-mesh',
      name: 'Call from LLM Mesh',
      desc: 'Send a request to an LLM or Agent registered in the LLM Mesh',
      icon: <Wrench size={16} />,
      color: 'cyan-blue-base',
    },
    {
      id: 'append-to-dataset',
      name: 'Append to Dataset',
      desc: 'Search a Knowledge Bank for relevant information',
      icon: <Wrench size={16} />,
      color: 'cyan-blue-base',
    },
    {
      id: 'send-message',
      name: 'Send message',
      desc: 'Send a message through a Dataiku Messaging Channel (email, Slack,…) ',
      icon: <Wrench size={16} />,
      color: 'cyan-blue-base',
    },
    {
      id: 'model-predict',
      name: 'Model Predict',
      desc: 'Predict a record from a dataset with a Dataiku model',
      icon: <Wrench size={16} />,
      color: 'cyan-blue-base',
    },
  ],
  agents: [
    {
      id: 'agent-1',
      name: 'Agent 1',
      desc: 'Description for Agent 1',
      icon: <Users size={16} />,
      color: 'green-base',
    },
    {
      id: 'agent-2',
      name: 'Agent 2',
      desc: 'Description for Agent 2',
      icon: <Users size={16} />,
      color: 'green-base',
    },
  ],
  llm: [
    {
      id: 'llm-1',
      name: 'LLM 1',
      desc: 'Description for LLM 1',
      icon: <Bot size={16} />,
      color: '#D66F9E',
    },
    {
      id: 'llm-2',
      name: 'LLM 2',
      desc: 'Description for LLM 2',
      icon: <Bot size={16} />,
      color: '#D66F9E',
    },
  ],
};
