import { Edge, Node } from '@xyflow/react';

export function meetingPrepNodes(id: string) {
  function addNewID(s: string): string {
    return s.replace(/(dndnode_\d+)/g, `$1_${id}`);
  }

  const nodes: Node[] = NODES.map((node) => {
    return {
      ...node,
      id: addNewID(node.id),
    };
  });

  const edges: Edge[] = EDGES.map((edge) => ({
    ...edge,
    source: addNewID(edge.source),
    sourceHandle: addNewID(edge.sourceHandle || ''),
    target: addNewID(edge.target),
    targetHandle: addNewID(edge.targetHandle || ''),
  }));

  return { nodes, edges };
}

const NODES: Node[] = [
  {
    id: 'dndnode_0',
    type: 'agent',
    position: {
      x: 115.23860777795898,
      y: -145.52671092193998,
    },
    data: {
      id: 'meeting-prep',
      type: 'agent',
      name: 'Meeting Prep',
      desc: 'Prepare a meeting, return any information you have and search the knowledge base for any project that could be related',
      icon: 'agent',
      config: {
        llm: 'openai',
        instructions:
          'Please retrieve relevant information from the meeting history and search through the project knowledge base (KB) to compile comprehensive meeting preparation notes. Ensure the notes include key discussion points, updates on current projects, action items, and any relevant background information for the upcoming meeting.',
      },
      isSelected: false,
    },
    measured: {
      width: 155,
      height: 50,
    },
    selected: false,
    dragging: false,
  },
  {
    id: 'dndnode_1',
    type: 'tool',
    position: {
      x: -167.20872107772436,
      y: -183.14470428619157,
    },
    data: {
      id: 'lookup-dataset',
      type: 'tool',
      name: 'LookupMeetingHistory',
      desc: 'Find a record based on conditions on one or several columns',
      icon: 'dataset',
      isSelected: false,
    },
    measured: {
      width: 222,
      height: 42,
    },
    selected: false,
    dragging: false,
  },
  {
    id: 'dndnode_2',
    type: 'tool',
    position: {
      x: -128.8231945272263,
      y: -96.00973636132444,
    },
    data: {
      id: 'search-knowledge-bank',
      type: 'tool',
      name: 'SearchProjectKB',
      desc: 'Search a Knowledge Bank for relevant information',
      icon: 'knowledge-bank',
      isSelected: false,
    },
    measured: {
      width: 180,
      height: 42,
    },
    selected: false,
    dragging: false,
  },
  {
    id: 'dndnode_3',
    type: 'tool',
    position: {
      x: 342.00974118595144,
      y: -141.15161112541847,
    },
    data: {
      id: 'call-from-llm-mesh',
      type: 'tool',
      name: 'CallPrepAgent',
      desc: 'Send a request to an LLM or Agent registered in the LLM Mesh',
      icon: 'ai-prompt',
      isSelected: false,
      config: {
        'llm-agent': 'meeting-prep',
        purpose:
          'You are called to lookup for information related to the meeting asked, return any information you have and search the knowledge base for any project that could be related',
      },
    },
    measured: {
      width: 161,
      height: 42,
    },
    selected: false,
    dragging: false,
  },
];

const EDGES: Edge[] = [
  {
    source: 'dndnode_1',
    sourceHandle: 'dndnode_1-right-source',
    target: 'dndnode_0',
    targetHandle: 'dndnode_0-left-target',
    type: 'animated',
    id: 'xy-edge__dndnode_1dndnode_1-right-source-dndnode_0dndnode_0-left-target',
  },
  {
    source: 'dndnode_2',
    sourceHandle: 'dndnode_2-right-source',
    target: 'dndnode_0',
    targetHandle: 'dndnode_0-left-target',
    type: 'animated',
    id: 'xy-edge__dndnode_2dndnode_2-right-source-dndnode_0dndnode_0-left-target',
  },
  {
    source: 'dndnode_0',
    sourceHandle: 'dndnode_0-right-source',
    target: 'dndnode_3',
    targetHandle: 'dndnode_3-left-target',
    type: 'animated',
    id: 'xy-edge__dndnode_0dndnode_0-right-source-dndnode_3dndnode_3-left-target',
  },
];
