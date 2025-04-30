import { Handle, type Node, type NodeProps, Position } from '@xyflow/react';

import ProcessStateIcon from '@/assets/icons/process-state';
import NodeIcon from '@/components/node-icons';
import type { NodeType } from '@/const/nodes';

type AgentNodeType = Node<NodeType, 'agent'>;

const AgentNode: React.FC<NodeProps<AgentNodeType>> = ({ data, isConnectable, id }) => {
  return (
    <div
      className={`border rounded-full px-3 py-3 border-gray-300 ${data.isSelected ? 'bg-pink-base/20' : 'bg-white'} transition-colors`}
    >
      <div className="flex flex-row gap-2 items-center justify-center">
        <NodeIcon name={data.icon} />
        <p>{data.name}</p>
        {data.processState && <ProcessStateIcon state={data.processState} />}
      </div>
      {/* Left handles superposés */}
      <Handle
        type="source"
        id={`${id}-left-source`}
        className="!bg-gray-400 !size-2 rounded-full"
        position={Position.Left}
        isConnectable={isConnectable}
        style={{ marginLeft: 0, zIndex: 2 }}
      />
      <Handle
        type="target"
        id={`${id}-left-target`}
        className="!bg-gray-400 !size-2 rounded-full"
        position={Position.Left}
        isConnectable={isConnectable}
        style={{ marginLeft: 0, zIndex: 1, pointerEvents: 'none' }}
      />
      {/* Right handles superposés */}
      <Handle
        type="source"
        id={`${id}-right-source`}
        className="!bg-gray-400 !size-2 rounded-full"
        position={Position.Right}
        isConnectable={isConnectable}
        style={{ marginRight: 0, zIndex: 2 }}
      />
      <Handle
        type="target"
        id={`${id}-right-target`}
        className="!bg-gray-400 !size-2 rounded-full"
        position={Position.Right}
        isConnectable={isConnectable}
        style={{ marginRight: 0, zIndex: 1, pointerEvents: 'none' }}
      />
    </div>
  );
};

export default AgentNode;
