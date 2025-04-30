import '@/index.css';
import '@xyflow/react/dist/style.css';

import {
  addEdge,
  Background,
  Connection,
  Controls,
  Edge,
  Node,
  ReactFlow,
  ReactFlowProvider,
  useEdgesState,
  useNodesState,
  useReactFlow,
} from '@xyflow/react';
import { useCallback, useRef, useState } from 'react';

import { NodeType } from '@/const/nodes';
import { DnDProvider } from '@/context/DnDContext';
import AnimationControls from '@/features/graph/animated-controls';
import AnimatedEdge from '@/features/graph/animated-edge';
import RightPanel from '@/features/right-panel';

import AgentNode from './nodes/agent';
import MainAgentNode from './nodes/main-agent';
import ToolNode from './nodes/tool';

const initialNodes: Node[] = [
  {
    id: '1',
    type: 'main-agent',
    data: { title: 'Main Agent' },
    position: { x: 0, y: 0 },
    draggable: false,
  },
];

// we define the nodeTypes outside of the component to prevent re-renderings
// you could also use useMemo inside the component
const nodeTypes = { 'main-agent': MainAgentNode, tool: ToolNode, agent: AgentNode };

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
  const [selectedNode, setSelectedNode] = useState<Node | null>(null);

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
      console.warn('animating', animating);
      setIsAnimating(animating);
      setEdges((eds) =>
        eds.map((edge) => ({
          ...edge,
          data: { ...edge.data, isAnimating: animating },
        }))
      );
    },
    [setEdges]
  );

  const onNodeClick = useCallback((_: React.MouseEvent, node: Node) => {
    setSelectedNode(node);
  }, []);

  const handleRename = (newLabel: string) => {
    console.warn('Renaming node to:', newLabel);
    // Add your logic here to rename the node
    setNodes((nds) =>
      nds.map((node) =>
        node.id === selectedNode?.id ? { ...node, data: { title: newLabel } } : node
      )
    );
    setSelectedNode((prev) => (prev ? { ...prev, data: { title: newLabel } } : null));
  };

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
          node={selectedNode}
          onClose={() => setSelectedNode(null)}
          onRename={handleRename}
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
