import AIAgentIcon from '@/assets/icons/ai-agent';
import AIPromptIcon from '@/assets/icons/ai-prompt';
import DataTableRowIcon from '@/assets/icons/data-table-row';
import DatasetIcon from '@/assets/icons/dataset';
import KnowledgeBankIcon from '@/assets/icons/knowledge-bank';
import ModelizeIcon from '@/assets/icons/modelize';
import UserEmailIcon from '@/assets/icons/user-email';
import { cn } from '@/lib/utils';

interface NodeIconProps {
  name: string;
  className?: string;
}

const NodeIcon: React.FC<NodeIconProps> = ({ name, className }) => {
  switch (name) {
    case 'agent':
      return (
        <div
          className={cn(
            'size-6 p-1 bg-pink-base flex items-center justify-center rotate-45',
            className
          )}
        >
          <AIAgentIcon className="text-white -rotate-45" />
        </div>
      );
    case 'dataset':
      return (
        <DatasetIcon
          className={cn('size-6 text-white bg-green-base rounded-full p-1', className)}
        />
      );
    case 'knowledge-bank':
      return (
        <KnowledgeBankIcon
          className={cn('size-6 text-white bg-green-base rounded-full p-1', className)}
        />
      );
    case 'ai-prompt':
      return (
        <AIPromptIcon
          className={cn('size-6 text-white bg-green-base rounded-full p-1', className)}
        />
      );
    case 'data-table-row':
      return (
        <DataTableRowIcon
          className={cn('size-6 text-white bg-green-base rounded-full p-1', className)}
        />
      );
    case 'user-email':
      return (
        <UserEmailIcon
          className={cn('size-6 text-white bg-green-base rounded-full p-1', className)}
        />
      );
    case 'model-predict':
      return (
        <ModelizeIcon
          className={cn('size-6 text-white bg-green-base rounded-full p-1', className)}
        />
      );
    case 'openai':
      return <img src="/logo/openai.png" alt="OpenAI" className={cn('size-6 p-1', className)} />;
    case 'anthropic':
      return <img src="/logo/anthropic.png" alt="Llama" className={cn('size-6 p-1', className)} />;
    case 'mistral':
      return <img src="/logo/mistral.png" alt="Llama2" className={cn('size-6 p-1', className)} />;
    case 'meta':
      return <img src="/logo/meta.png" alt="Meta" className={cn('size-6 p-1', className)} />;
    case 'slack':
      return <img src="/logo/slack.png" alt="Slack" className={cn('size-6 p-1', className)} />;
  }

  return <div>Not found</div>;
};

export default NodeIcon;
