import { Handle, Node, NodeProps, Position } from '@xyflow/react';

import NodeIcon from '@/components/node-icons';
import { NodeType } from '@/const/nodes';

type ToolNodeType = Node<NodeType, 'tool'>;

const ToolNode: React.FC<NodeProps<ToolNodeType>> = ({ data, isConnectable }) => {
  return (
    <div className="bg-white border border-pink-base rounded-full px-5 py-4">
      <div className="flex flex-row gap-4 items-center justify-center">
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
        className="!bg-gray-400 !size-3 rounded-full"
        position={Position.Right}
        isConnectable={isConnectable}
      />
    </div>
  );
};

export default ToolNode;
