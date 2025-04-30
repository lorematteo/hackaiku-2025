import type { Edge, Node } from '@xyflow/react';

export const propagateAnimation = async (
  startNodeId: string,
  edges: Edge[],
  setNodes: (updater: (nds: Node[]) => Node[]) => void,
  delay = 1000
) => {
  // Tout à waiting sauf le startNode à processing
  setNodes((nds) =>
    nds.map((node) =>
      node.id === startNodeId
        ? { ...node, data: { ...node.data, processState: 'processing' } }
        : { ...node, data: { ...node.data, processState: 'waiting' } }
    )
  );

  const visited = new Set<string>();
  const queue: string[] = [startNodeId];

  while (queue.length > 0) {
    const currentId = queue.shift();
    if (!currentId) continue;
    if (visited.has(currentId)) continue;
    visited.add(currentId);

    // Passe à processing (déjà fait pour startNode, mais pas grave)
    setNodes((nds) =>
      nds.map((node) =>
        node.id === currentId
          ? { ...node, data: { ...node.data, processState: 'processing' } }
          : node
      )
    );

    await new Promise((res) => setTimeout(res, delay));

    // Passe à complete
    setNodes((nds) =>
      nds.map((node) =>
        node.id === currentId ? { ...node, data: { ...node.data, processState: 'complete' } } : node
      )
    );

    // Propage aux voisins
    const nextNodes = edges
      .filter((e) => e.source === currentId)
      .map((e) => e.target)
      .filter((id) => !visited.has(id));

    // Passe les voisins à waiting si pas déjà fait
    setNodes((nds) =>
      nds.map((node) =>
        nextNodes.includes(node.id) && node.data.processState === 'none'
          ? { ...node, data: { ...node.data, processState: 'waiting' } }
          : node
      )
    );

    queue.push(...nextNodes);
  }
};
