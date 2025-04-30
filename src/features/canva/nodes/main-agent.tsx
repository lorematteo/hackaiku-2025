import { Handle, type Node, type NodeProps, Position } from '@xyflow/react';

import AIAgentIcon from '@/assets/icons/ai-agent';
import ProcessStateIcon from '@/assets/icons/process-state';
import type { NodeType } from '@/const/nodes';

type MainAgentNodeData = NodeType & { title: string; nodeCount: number };
type MainAgentNodeType = Node<MainAgentNodeData, 'main-agent'>;

const MainAgentNode: React.FC<NodeProps<MainAgentNodeType>> = ({ data, isConnectable }) => {
  return (
    <div className="relative">
      <div
        className={`border border-pink-base rounded-lg px-5 py-4 ${data.isSelected ? 'bg-pink-base/20' : 'bg-white'} transition-colors`}
      >
        <div className="flex flex-row gap-4 items-center justify-center">
          <div className="p-2 bg-pink-base flex items-center justify-center rotate-45">
            <AIAgentIcon className="size-5 text-white -rotate-45" />
          </div>
          <p>{data.name}</p>
          {data.processState && <ProcessStateIcon state={data.processState} />}
        </div>
        <Handle
          type="source"
          id="top"
          className="!bg-pink-base !size-3 rounded-full"
          position={Position.Top}
          isConnectable={isConnectable}
        />
        <Handle
          type="source"
          id="left"
          className="!bg-pink-base !size-3 rounded-full"
          position={Position.Left}
          isConnectable={isConnectable}
        />
        <Handle
          type="source"
          id="right"
          className="!bg-pink-base !size-3 rounded-full"
          position={Position.Right}
          isConnectable={isConnectable}
        />
        <Handle
          type="source"
          id="bottom"
          className="!bg-pink-base !size-3 rounded-full"
          position={Position.Bottom}
          isConnectable={isConnectable}
        />
      </div>
      {/* Fake nodes */}
      {data.nodeCount < 2 && (
        <>
          {/* TOP */}
          <div className="absolute left-1/2 -translate-x-1/2 -top-17 flex flex-col items-center">
            <div className="px-4 py-2 rounded-lg border border-gray-200 text-gray-400 bg-white text-sm select-none whitespace-nowrap border-dashed">
              Drop a Node
            </div>
            <div className="h-6 border-l-2 border-dashed border-gray-300" />
          </div>
          {/* LEFT */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-36 flex items-center">
            <div className="px-4 py-2 rounded-lg border border-gray-200 text-gray-400 bg-white text-sm select-none whitespace-nowrap border-dashed">
              Drop a Node
            </div>
            <div className="w-6 border-t-2 border-dashed border-gray-300" />
          </div>
          {/* BOTTOM */}
          <div className="absolute left-1/2 -translate-x-1/2 -bottom-17 flex flex-col items-center">
            <div className="h-6 border-l-2 border-dashed border-gray-300" />
            <div className="px-4 py-2 rounded-lg border border-gray-200 text-gray-400 bg-white text-sm select-none whitespace-nowrap border-dashed">
              Drop a Node
            </div>
          </div>
          {/* RIGHT */}
          <div className="absolute top-1/2 -translate-y-1/2 -right-36 flex items-center">
            <div className="w-6 border-t-2 border-dashed border-gray-300" />
            <div className="px-4 py-2 rounded-lg border border-gray-200 text-gray-400 bg-white text-sm select-none whitespace-nowrap border-dashed">
              Drop a Node
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MainAgentNode;
