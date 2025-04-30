import { useState } from 'react';

import { Button } from '@/components/ui/button';

import { ExportDialog } from './components/export-dialog';

interface AnimationControlsProps {
  onToggleAnimation: (isAnimating: boolean) => void;
}

export default function AnimationControls({ onToggleAnimation }: AnimationControlsProps) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRunClick = () => {
    const newState = !isAnimating;
    setIsAnimating(newState);
    onToggleAnimation(newState);
  };

  return (
    <div className="absolute top-4 right-4 z-10 flex gap-2">
      <Button variant="outline" onClick={handleRunClick}>
        {isAnimating ? 'Stop' : 'Run'}
      </Button>
      <Button onClick={() => setIsModalOpen(true)}>Export</Button>

      <ExportDialog isOpen={isModalOpen} onOpenChange={setIsModalOpen} />
    </div>
  );
}
