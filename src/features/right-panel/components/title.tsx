import type { Node } from '@xyflow/react';
import { XIcon } from 'lucide-react';
import { useRef, useState } from 'react';

import AIAgentIcon from '@/assets/icons/ai-agent';
import PenIcon from '@/assets/icons/pen';
import { Button } from '@/components/ui/button';

interface PanelTitleProps {
  node: Node;
  onClose: () => void;
  onRename: (newLabel: string) => void;
}

const PanelTitle: React.FC<PanelTitleProps> = ({ node, onClose, onRename }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(
    typeof node.data?.title === 'string' ? node.data.title : node.id
  );
  const inputRef = useRef<HTMLInputElement>(null);

  const handleEdit = () => {
    setIsEditing(true);
    setTimeout(() => inputRef.current?.focus(), 0);
  };

  const handleBlur = () => {
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      inputRef.current?.blur();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setEditValue(newValue);
    onRename(newValue);
  };

  return (
    <div className="flex items-center justify-between px-3 py-2 bg-white border-b border-base-300">
      <div className="flex items-center gap-2">
        <AIAgentIcon className="size-6 text-pink-base" />
        {isEditing ? (
          <input
            ref={inputRef}
            className="text-lg font-normal font-inter text-black bg-transparent border-b border-gray-300 focus:outline-none"
            value={editValue}
            onChange={handleChange}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
          />
        ) : (
          <h2 className="text-lg font-normal font-inter text-black">
            {typeof node.data?.title === 'string' || typeof node.data?.title === 'number'
              ? node.data.title
              : node.id}
          </h2>
        )}
        <Button
          variant="ghost"
          className="rounded-full hover:cursor-pointer"
          size="icon"
          onClick={handleEdit}
        >
          <PenIcon className="size-4" />
        </Button>
      </div>

      <Button
        variant="ghost"
        className="rounded-full hover:cursor-pointer"
        size="icon"
        onClick={onClose}
      >
        <XIcon className="size-4" />
      </Button>
    </div>
  );
};

export default PanelTitle;
