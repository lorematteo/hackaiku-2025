import { Handle, Node, NodeProps, Position } from '@xyflow/react';

import NodeIcon from '@/components/node-icons';
import { NodeType } from '@/const/nodes';

type AgentNodeType = Node<NodeType, 'agent'>;

const AgentNode: React.FC<NodeProps<AgentNodeType>> = ({ data, isConnectable }) => {
  return (
    <div
      className={`border rounded-full px-3 py-3 border-gray-300 ${data.isSelected ? 'bg-pink-base/20' : 'bg-white'} transition-colors`}
    >
      <div className="flex flex-row gap-2 items-center justify-center">
        <NodeIcon name={data.icon} />
        <p>{data.name}</p>
      </div>
      <Handle
        type="source"
        className="!bg-gray-400 !size-2 rounded-full"
        position={Position.Left}
        isConnectable={isConnectable}
      />
      <Handle
        type="source"
        className="!bg-gray-400 !size-2 rounded-full"
        position={Position.Right}
        isConnectable={isConnectable}
      />
    </div>
  );
};

export default AgentNode;
