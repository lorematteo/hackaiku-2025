import { CircleStop, LoaderPinwheel, PlayIcon } from 'lucide-react';
import React, { useEffect } from 'react';

import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import LLMOutput from '@/components/ui/llm-output';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { SAMPLE_OUTPUT } from '@/const/agents';

interface TestPanelProps {
  isRunning: boolean;
  setIsRunning: React.Dispatch<React.SetStateAction<boolean>>;
}

const TestPanel: React.FC<TestPanelProps> = ({ isRunning, setIsRunning }) => {
  const [message, setMessage] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [isAborted, setIsAborted] = React.useState(false);

  const handleClick = () => {
    if (!isRunning) {
      setIsAborted(false);
      setIsRunning(true);
      setIsLoading(true);
      // Simulate a delay for the running state
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    } else {
      setIsAborted(true);
    }
  };

  useEffect(() => {
    if (isAborted) {
      setIsLoading(false);
      setIsRunning(false);
    }
  }, [isAborted, setIsLoading, setIsRunning]);

  return (
    <div className="flex flex-col p-4 gap-4 w-full">
      <h2 className="text-lg font-source-sans-pro">Test</h2>
      <div className="flex flex-col gap-2">
        <Label>Message*</Label>
        <Textarea
          placeholder="Placeholder"
          disabled={isRunning}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="resize-none h-24"
        />
        <div className="flex justify-end">
          <Button
            disabled={!isRunning && !message}
            className="w-auto hover:cursor-pointer"
            variant="outline"
            onClick={handleClick}
          >
            {isRunning ? (
              <>
                <CircleStop className="size-4" />
                Abort
              </>
            ) : (
              <>
                <PlayIcon className="size-4" />
                Run
              </>
            )}
          </Button>
        </div>
      </div>
      <Tabs defaultValue="full-response">
        <TabsList className="w-full">
          <TabsTrigger value="full-response">Full response</TabsTrigger>
          <TabsTrigger value="trace">Trace</TabsTrigger>
        </TabsList>
        <TabsContent value="full-response" className="pt-2">
          {isRunning || (isAborted && !isLoading) ? (
            <div
              ref={containerRef}
              className="w-full min-h-40 h-[calc(100vh-28rem)] overflow-auto bg-white rounded-xs border border-base-300 px-3 py-2"
            >
              {isLoading ? (
                <LoaderPinwheel className="size-6 animate-spin mx-auto mt-14" />
              ) : (
                <LLMOutput
                  fullText={SAMPLE_OUTPUT}
                  setFinished={setIsAborted}
                  containerRef={containerRef}
                  aborted={isAborted}
                />
              )}
            </div>
          ) : (
            <div className="w-full h-40 bg-zinc-100 rounded-xs flex items-center justify-center">
              <p className="text-sm text-muted-foreground">The agent’s response will appear here</p>
            </div>
          )}
        </TabsContent>
        <TabsContent value="trace"></TabsContent>
      </Tabs>
    </div>
  );
};

export default TestPanel;
