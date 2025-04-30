import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { LLMConfig } from '@/const/nodes';

interface DesignPanelProps {
  isRunning: boolean;
  config: LLMConfig;
  updateConfig: (config: Partial<LLMConfig>) => void;
}

const DesignPanel: React.FC<DesignPanelProps> = ({ config, updateConfig, isRunning }) => {
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
            <div className="flex flex-col gap-2 max-h-96">
              <Label>Instructions*</Label>
              <Textarea
                placeholder="Placeholder"
                disabled={isRunning}
                value={config.instructions}
                onChange={(e) => updateConfig({ instructions: e.target.value })}
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
