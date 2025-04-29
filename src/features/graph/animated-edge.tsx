import { EdgeProps, getBezierPath } from '@xyflow/react';

interface AnimatedEdgeProps extends EdgeProps {
  data?: {
    isAnimating?: boolean;
  };
}

export default function AnimatedEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  markerEnd,
  data,
}: AnimatedEdgeProps) {
  const [edgePath] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  return (
    <>
      <path
        id={id}
        style={style}
        className="react-flow__edge-path"
        d={edgePath}
        markerEnd={markerEnd}
      />
      <path
        d={edgePath}
        fill="none"
        strokeWidth={2}
        className="animated-edge"
        style={{
          stroke: '#b1b1b7',
          strokeDasharray: 5,
          animation: data?.isAnimating ? 'dashdraw 0.5s linear infinite' : 'none',
          opacity: data?.isAnimating ? 1 : 0,
        }}
      />
    </>
  );
}
