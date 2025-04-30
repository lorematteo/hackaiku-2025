import '@/index.css';
import '@xyflow/react/dist/style.css';

import {
  addEdge,
  Background,
  type Connection,
  Controls,
  type Edge,
  type Node,
  ReactFlow,
  ReactFlowProvider,
  useEdgesState,
  useNodesState,
  useReactFlow,
} from '@xyflow/react';
import { useCallback, useRef, useState } from 'react';

import { MAIN_AGENT, type NodeType } from '@/const/nodes';
import { DnDProvider } from '@/context/DnDContext';
import AnimationControls from '@/features/graph/animated-controls';
import AnimatedEdge from '@/features/graph/animated-edge';
import RightPanel from '@/features/right-panel';

import AgentNode from './nodes/agent';
import LLMNode from './nodes/llm';
import MainAgentNode from './nodes/main-agent';
import ToolNode from './nodes/tool';
import { propagateAnimation } from './utils/animation.utils';

const initialNodes: Node[] = [
  {
    id: '1',
    type: 'main-agent',
    data: MAIN_AGENT,
    position: { x: 0, y: 0 },
    draggable: false,
    deletable: false,
  },
];

// we define the nodeTypes outside of the component to prevent re-renderings
// you could also use useMemo inside the component
const nodeTypes = {
  'main-agent': MainAgentNode,
  tool: ToolNode,
  agent: AgentNode,
  llm: LLMNode,
};

let id = 0;
const getId = () => `dndnode_${id++}`;

const edgeTypes = {
  animated: AnimatedEdge,
};

const DnDFlow = () => {
  const reactFlowWrapper = useRef<HTMLDivElement>(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([]);
  const { screenToFlowPosition } = useReactFlow();
  const [isAnimating, setIsAnimating] = useState(false);
  const [selectedNode, setSelectedNode] = useState<string>('');

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge({ ...params, type: 'animated' }, eds)),
    [setEdges]
  );

  const onDragOver = useCallback((event: React.DragEvent) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onDrop = useCallback(
    (event: React.DragEvent) => {
      event.preventDefault();

      const jsonData = event.dataTransfer.getData('application/reactflow');
      const nodeData: NodeType = JSON.parse(jsonData) as NodeType;
      if (!nodeData) return;

      const position = screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });

      const newNode: Node = {
        id: getId(),
        type: nodeData.type,
        position,
        data: nodeData,
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [screenToFlowPosition, setNodes]
  );

  const handleToggleAnimation = useCallback(
    (animating: boolean) => {
      setIsAnimating(animating);
      if (animating) {
        // Reset all nodes
        setNodes((nds) =>
          nds.map((node) => ({
            ...node,
            data: { ...node.data, isAnimating: false },
          }))
        );
        // Start propagation from Main Agent
        propagateAnimation('1', edges, setNodes, 1000); // 1s delay
      } else {
        // Stop animation everywhere
        setNodes((nds) =>
          nds.map((node) => ({
            ...node,
            data: { ...node.data, isAnimating: false },
          }))
        );
      }
      setEdges((eds) =>
        eds.map((edge) => ({
          ...edge,
          data: { ...edge.data, isAnimating: animating },
        }))
      );
    },
    [setEdges, setNodes, edges]
  );

  const onNodeClick = useCallback(
    (_: React.MouseEvent, node: Node) => {
      setSelectedNode(node.id);
      setNodes((nds) =>
        nds.map((n) => ({
          ...n,
          data: {
            ...n.data,
            isSelected: n.id === node.id, // Only selected node gets true
          },
        }))
      );
    },
    [setNodes]
  );

  const handleUnselect = () => {
    setSelectedNode('');
    setNodes((nds) =>
      nds.map((n) => ({
        ...n,
        data: {
          ...n.data,
          isSelected: false, // Reset all nodes to not selected
        },
      }))
    );
  };

  const updateNodeData = useCallback(
    (nodeId: string, newData: Partial<Node['data']>) => {
      setNodes((nodes) =>
        nodes.map((node) =>
          node.id === nodeId
            ? {
                ...node,
                data: {
                  ...node.data,
                  ...newData,
                },
              }
            : node
        )
      );
    },
    [setNodes]
  );

  const updateNodeConfig = useCallback(
    (nodeId: string, newConfig: Partial<NodeType['config']>) => {
      setNodes((nodes) =>
        nodes.map((node) =>
          node.id === nodeId
            ? {
                ...node,
                data: {
                  ...node.data,
                  config: {
                    ...(node.data.config || {}),
                    ...newConfig,
                  },
                },
              }
            : node
        )
      );
    },
    [setNodes]
  );

  return (
    <div className="h-full w-full flex">
      <div className="flex-1 h-full" ref={reactFlowWrapper}>
        <ReactFlow
          nodes={nodes}
          edges={edges.map((edge) => ({
            ...edge,
            data: { ...edge.data, isAnimating },
          }))}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onDrop={onDrop}
          onDragOver={onDragOver}
          edgeTypes={edgeTypes}
          nodeTypes={nodeTypes}
          fitView
          style={{ width: '100%', height: '100%' }}
          onNodeClick={onNodeClick}
        >
          <Controls />
          <Background />
          <AnimationControls onToggleAnimation={handleToggleAnimation} />
        </ReactFlow>
      </div>
      {selectedNode && (
        <RightPanel
          nodeData={nodes.find((node) => node.id === selectedNode)?.data as NodeType | null}
          onClose={handleUnselect}
          updateNodeData={(data: Partial<NodeType>) => updateNodeData(selectedNode, data)}
          updateNodeConfig={(config: Partial<NodeType['config']>) =>
            updateNodeConfig(selectedNode, config)
          }
        />
      )}
    </div>
  );
};

const Canva = () => (
  <ReactFlowProvider>
    <DnDProvider>
      <DnDFlow />
    </DnDProvider>
  </ReactFlowProvider>
);

export default Canva;
