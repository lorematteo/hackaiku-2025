import { Handle, type Node, type NodeProps, Position } from '@xyflow/react';

import ProcessStateIcon from '@/assets/icons/process-state';
import NodeIcon from '@/components/node-icons';
import type { NodeType } from '@/const/nodes';

type ToolNodeType = Node<NodeType, 'tool'>;

const ToolNode: React.FC<NodeProps<ToolNodeType>> = ({ data, isConnectable, id }) => (
  <div className="bg-white border rounded-full px-3 py-2 border-gray-300">
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

export default ToolNode;
