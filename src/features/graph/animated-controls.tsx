import { useState } from 'react';

interface AnimationControlsProps {
  onToggleAnimation: (isAnimating: boolean) => void;
}

export default function AnimationControls({ onToggleAnimation }: AnimationControlsProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    const newState = !isAnimating;
    setIsAnimating(newState);
    onToggleAnimation(newState);
  };

  return (
    <button
      onClick={handleClick}
      className="absolute top-4 right-4 z-10 px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition-colors"
    >
      {isAnimating ? 'Stop Animation' : 'Start Animation'}
    </button>
  );
}
