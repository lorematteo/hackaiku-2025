import { Handle, Node, NodeProps, Position } from '@xyflow/react';

import NodeIcon from '@/components/node-icons';
import { NodeType } from '@/const/nodes';

type LLMNodeType = Node<NodeType, 'llm'>;

const LLMNode: React.FC<NodeProps<LLMNodeType>> = ({ data, isConnectable }) => {
  return (
    <div className="bg-white border rounded-full px-3 py-2 border-gray-300">
      <div className="flex flex-row gap-2 items-center justify-center">
        <NodeIcon name={data.icon} />
        <p>{data.name}</p>
      </div>
      <Handle
        type="target"
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

export default LLMNode;
