import { Handle, Node, NodeProps, Position } from '@xyflow/react';

import AIAgentIcon from '@/assets/icons/ai-agent';
import { NodeType } from '@/const/nodes';

type MainAgentNodeData = NodeType;
type MainAgentNodeType = Node<MainAgentNodeData, 'main-agent'>;

const MainAgentNode: React.FC<NodeProps<MainAgentNodeType>> = ({ data, isConnectable }) => {
  return (
    <div
      className={`border border-pink-base rounded-lg px-5 py-4 ${data.selected ? 'bg-pink-base/20' : 'bg-white'} transition-colors`}
    >
      <div className="flex flex-row gap-4 items-center justify-center">
        <div className="p-2 bg-pink-base flex items-center justify-center rotate-45">
          <AIAgentIcon className="size-5 text-white -rotate-45" />
        </div>
        <p>{data.name}</p>
      </div>
      <Handle
        type="target"
        className="!bg-pink-base !size-3 rounded-full"
        position={Position.Top}
        isConnectable={isConnectable}
      />
      <Handle
        type="target"
        className="!bg-pink-base !size-3 rounded-full"
        position={Position.Left}
        isConnectable={isConnectable}
      />
      <Handle
        type="source"
        className="!bg-pink-base !size-3 rounded-full"
        position={Position.Right}
        isConnectable={isConnectable}
      />
      <Handle
        type="source"
        className="!bg-pink-base !size-3 rounded-full"
        position={Position.Bottom}
        isConnectable={isConnectable}
      />
    </div>
  );
};

export default MainAgentNode;
