import { CopyIcon, HeadsetIcon, MessagesSquareIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';

export const ExportDialog = ({
  isOpen,
  onOpenChange,
}: {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Export agent</DialogTitle>
        </DialogHeader>
        <div className="space-y-6">
          <div>
            <div className="text-sm font-semibold mb-2">Create an assistant</div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 p-3 border rounded-lg hover:bg-muted cursor-pointer">
                {/* Replace with your icon */}
                {/* <span className="text-pink-500"><SimpleAssistantIcon /></span> */}
                <MessagesSquareIcon className="w-6 h-6 text-pink-base" />

                <div>
                  <div className="font-medium">Simple Assistant</div>
                  <div className="text-xs text-muted-foreground">
                    Full-featured Chat interface for creating chatbots based on your internal
                    knowledge
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 border rounded-lg hover:bg-muted cursor-pointer">
                {/* Replace with your icon */}
                {/* <span className="text-pink-500"><AgentConnectIcon /></span> */}
                <HeadsetIcon className="w-6 h-6 text-pink-base" />
                <div>
                  <div className="font-medium">Agent Connect</div>
                  <div className="text-xs text-muted-foreground">
                    Multi-agent chat interface for unified user access to multiple Generative AI use
                    cases.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="text-sm font-semibold mb-2">Use through API</div>
            <div className="flex items-center gap-2">
              <Input
                className="font-mono"
                value="7ca44868d2ba977a0bc38cbb548909a6d72cdf94"
                readOnly
                tabIndex={-1}
              />
              <Button
                variant="outline"
                size="icon"
                onClick={() => {
                  navigator.clipboard.writeText('7ca44868d2ba977a0bc38cbb548909a6d72cdf94');
                }}
              >
                <CopyIcon className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
