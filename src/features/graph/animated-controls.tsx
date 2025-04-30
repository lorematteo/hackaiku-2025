import { useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

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

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Export</DialogTitle>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
            <Button
              onClick={() => {
                // Add export logic here
                setIsModalOpen(false);
              }}
            >
              Export
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
