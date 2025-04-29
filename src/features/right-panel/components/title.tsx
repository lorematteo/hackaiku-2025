import { XIcon } from 'lucide-react';

import AIAgentIcon from '@/assets/icons/ai-agent';
import PenIcon from '@/assets/icons/pen';
import { Button } from '@/components/ui/button';

const PanelTitle: React.FC = () => {
  return (
    <div className="flex items-center justify-between px-3 py-2 bg-white border-b border-base-300">
      <div className="flex items-center gap-2">
        <AIAgentIcon className="size-6 text-pink-base" />
        <h2 className="text-lg font-normal font-inter text-black">Content reviewer</h2>
        <Button variant="ghost" className="rounded-full hover:cursor-pointer" size="icon">
          <PenIcon className="size-4" />
        </Button>
      </div>

      <Button variant="ghost" className="rounded-full hover:cursor-pointer" size="icon">
        <XIcon className="size-4" />
      </Button>
    </div>
  );
};

export default PanelTitle;
