import { CircleStop, PlayIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { LLMS } from '@/const/agents';

interface TestPanelProps {
  isRunning: boolean;
  setIsRunning: React.Dispatch<React.SetStateAction<boolean>>;
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  llm: (typeof LLMS)[number]['id'] | '';
  instructions: string;
}

const TestPanel: React.FC<TestPanelProps> = ({
  isRunning,
  setIsRunning,
  message,
  setMessage,
  llm,
  instructions,
}) => {
  const handleClick = () => {
    if (!isRunning) {
      setIsRunning(true);
      // Simulate a delay for the running state
      setTimeout(() => {
        setIsRunning(false);
      }, 2000);
    } else {
      setIsRunning(false);
    }
  };

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
            disabled={!isRunning && (!llm || !instructions || !message)}
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
        <TabsContent value="full-response"></TabsContent>
        <TabsContent value="trace"></TabsContent>
      </Tabs>
    </div>
  );
};

export default TestPanel;
