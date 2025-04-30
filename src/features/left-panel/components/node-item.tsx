import clsx from 'clsx';

import NodeIcon from '@/components/node-icons';
import { NodeType } from '@/const/nodes';

interface NodeItemProps {
  data: NodeType;
  onDragStart: (event: React.DragEvent, data: NodeType) => void;
}

const NodeItem: React.FC<NodeItemProps> = ({ data, onDragStart }) => {
  return (
    <div
      className={clsx(
        'group flex flex-col rounded-lg border border-dashed border-gray-base bg-white p-3 shadow-sm',
        'hover:bg-accent cursor-move transition-colors'
      )}
      draggable
      onDragStart={(e) => onDragStart(e, data)}
    >
      <div className="flex items-center gap-3">
        <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
          <NodeIcon name={data.icon} />
        </div>
        <div className="font-semibold text-sm text-foreground">{data.name}</div>
      </div>
      <div className="text-xs text-muted-foreground mt-2">{data.desc}</div>
    </div>
  );
};

export default NodeItem;
