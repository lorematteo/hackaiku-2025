import AIAgentIcon from '@/assets/icons/ai-agent';
import LLMIcon from '@/assets/icons/llm';
import ToolWrenchIcon from '@/assets/icons/tool-wrench';

export const DSSLeftPanelMenus = [
  {
    id: 'tools',
    name: 'Tools',
    icon: <ToolWrenchIcon className="size-5" />,
    color: 'cyan-blue-base',
  },
  {
    id: 'agents',
    name: 'Agents',
    icon: <AIAgentIcon className="size-5" />,
    color: 'green-base',
  },
  {
    id: 'llm',
    name: 'LLM',
    icon: <LLMIcon className="size-6" />,
    color: '#D66F9E',
  },
];
