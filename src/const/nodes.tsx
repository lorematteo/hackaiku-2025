import AIAgentIcon from '@/assets/icons/ai-agent';
import AIPromptIcon from '@/assets/icons/ai-prompt';
import DataTableRowIcon from '@/assets/icons/data-table-row';
import DatasetIcon from '@/assets/icons/dataset';
import KnowledgeBankIcon from '@/assets/icons/knowledge-bank';
import ModelizeIcon from '@/assets/icons/modelize';
import UserEmailIcon from '@/assets/icons/user-email';

export const NODES = {
  tools: [
    {
      id: 'lookup-dataset',
      name: 'Lookup Dataset',
      desc: 'Find a record based on conditions on one or several columns',
      icon: <DatasetIcon className="size-6 text-white bg-green-base rounded-full p-1" />,
      color: 'cyan-blue-base',
    },
    {
      id: 'search-knowledge-bank',
      name: 'Search Knowledge Bank',
      desc: 'Search a Knowledge Bank for relevant information',
      icon: <KnowledgeBankIcon className="size-6 text-white bg-green-base rounded-full p-1" />,
      color: 'cyan-blue-base',
    },
    {
      id: 'call-from-llm-mesh',
      name: 'Call from LLM Mesh',
      desc: 'Send a request to an LLM or Agent registered in the LLM Mesh',
      icon: <AIPromptIcon className="size-6 text-white bg-green-base rounded-full p-1" />,
      color: 'cyan-blue-base',
    },
    {
      id: 'append-to-dataset',
      name: 'Append to Dataset',
      desc: 'Search a Knowledge Bank for relevant information',
      icon: <DataTableRowIcon className="size-6 text-white bg-green-base rounded-full p-1" />,
      color: 'cyan-blue-base',
    },
    {
      id: 'send-message',
      name: 'Send message',
      desc: 'Send a message through a Dataiku Messaging Channel (email, Slack,…) ',
      icon: <UserEmailIcon className="size-6 text-white bg-green-base rounded-full p-1" />,
      color: 'cyan-blue-base',
    },
    {
      id: 'model-predict',
      name: 'Model Predict',
      desc: 'Predict a record from a dataset with a Dataiku model',
      icon: <ModelizeIcon className="size-6 text-white bg-green-base rounded-full p-1" />,
      color: 'cyan-blue-base',
    },
  ],
  agents: [
    {
      id: 'agent-1',
      name: 'Agent 1',
      desc: 'Description for Agent 1',
      icon: (
        <div className="w-6 h-6 p-0 m-0 bg-pink-base flex items-center justify-center rotate-45">
          <AIAgentIcon className="size-4 text-white -rotate-45" />
        </div>
      ),
      color: 'green-base',
    },
    {
      id: 'agent-2',
      name: 'Agent 2',
      desc: 'Description for Agent 2',
      icon: (
        <div className="w-6 h-6 bg-pink-base flex items-center justify-center rotate-45">
          <AIAgentIcon className="size-4 text-white -rotate-45" />
        </div>
      ),
      color: 'green-base',
    },
  ],
  llm: [
    {
      id: 'openai',
      name: 'OpenAI',
      desc: 'Description for LLM 1',
      icon: <img src="./src/assets/logo/openai.png" alt="OpenAI" className="w-4 h-4 mr-1" />,
      color: '#D66F9E',
    },
    {
      id: 'anthropic',
      name: 'Anthropic',
      desc: 'Description for LLM 2',
      icon: <img src="./src/assets/logo/anthropic.png" alt="Anthropic" className="w-4 h-4 mr-1" />,
      color: '#D66F9E',
    },
    {
      id: 'mistral',
      name: 'Mistral',
      desc: 'Description for LLM 3',
      icon: <img src="./src/assets/logo/mistral.png" alt="Mistral" className="w-4 h-4 mr-1" />,
      color: '#D66F9E',
    },
    {
      id: 'meta',
      name: 'Meta',
      desc: 'Description for LLM 4',
      icon: <img src="./src/assets/logo/meta.png" alt="Meta" className="w-4 h-4 mr-1" />,
      color: '#D66F9E',
    },
  ],
};
