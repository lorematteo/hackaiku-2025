import '@xyflow/react/dist/style.css';
import '@/index.css';

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

import { DnDProvider } from '@/context/DnDContext';
import AnimationControls from '@/features/graph/animated-controls';
import AnimatedEdge from '@/features/graph/animated-edge';

import MainAgentNode from './nodes/main-agent';

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
const nodeTypes = { 'main-agent': MainAgentNode };

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

      const nodeType = event.dataTransfer.getData('application/reactflow');
      if (!nodeType) return;

      const position = screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });

      const newNode: Node = {
        id: getId(),
        type: nodeType,
        position,
        data: { label: `${nodeType} node` },
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

  return (
    <div className="h-full w-full">
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
        >
          <Controls />
          <Background />
          <AnimationControls onToggleAnimation={handleToggleAnimation} />
        </ReactFlow>
      </div>
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
