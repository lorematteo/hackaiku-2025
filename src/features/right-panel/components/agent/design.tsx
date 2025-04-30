import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { LLMS } from '@/const/agents';

interface DesignPanelProps {
  isRunning: boolean;
  llm: (typeof LLMS)[number]['id'] | '';
  setLlm: React.Dispatch<React.SetStateAction<(typeof LLMS)[number]['id'] | ''>>;
  instructions: string;
  setInstructions: React.Dispatch<React.SetStateAction<string>>;
}

const DesignPanel: React.FC<DesignPanelProps> = ({
  isRunning,
  llm,
  setLlm,
  instructions,
  setInstructions,
}) => {
  return (
    <div className="flex flex-col p-4 gap-4 w-full">
      <h2 className="text-lg font-source-sans-pro">Design</h2>
      <Tabs defaultValue="settings">
        <TabsList className="w-full">
          <TabsTrigger value="settings">Settings</TabsTrigger>
          <TabsTrigger value="advanced">Advanced</TabsTrigger>
        </TabsList>
        <TabsContent value="settings">
          <div className="flex flex-col gap-4 py-4">
            <div className="flex flex-col gap-2">
              <Label>Large Language Model*</Label>
              <Select
                disabled={isRunning}
                value={llm}
                onValueChange={(value: (typeof LLMS)[number]['id']) => setLlm(value)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select an LLM" />
                </SelectTrigger>
                <SelectContent>
                  {LLMS.map((llm) => (
                    <SelectItem key={llm.id} value={llm.id}>
                      <img src={llm.logo} alt={llm.name} className="w-4 h-4 mr-1" />
                      {llm.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-2 max-h-96">
              <Label>Instructions*</Label>
              <Textarea
                placeholder="Placeholder"
                disabled={isRunning}
                value={instructions}
                onChange={(e) => setInstructions(e.target.value)}
                className="resize-none"
              />
              <p className="text-sm text-muted-foreground">
                Tell the AI what it will have to do. You can include personality, tone, and more.
              </p>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="advanced">
          <p className="text-sm text-muted-foreground">Coming soon...</p>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DesignPanel;
