import { PlayIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';

const TestPanel: React.FC = () => {
  return (
    <div className="flex flex-col p-4 gap-4 w-full">
      <h2 className="text-lg font-source-sans-pro">Test</h2>
      <div className="flex flex-col gap-2">
        <Label>Message*</Label>
        <Textarea placeholder="Placeholder" className="resize-none" />
        <div className="flex justify-end">
          <Button className="w-auto hover:cursor-pointer" variant="outline">
            <PlayIcon className="size-4" />
            Run
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
