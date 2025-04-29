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

const DesignPanel: React.FC = () => {
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
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select an LLM" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="openai">
                    <img src="./src/assets/logo/openai.png" alt="OpenAI" className="w-4 h-4 mr-1" />
                    OpenAI
                  </SelectItem>
                  <SelectItem value="anthropic">
                    <img
                      src="./src/assets/logo/anthropic.png"
                      alt="Anthropic"
                      className="w-4 h-4 mr-1"
                    />
                    Anthropic
                  </SelectItem>
                  <SelectItem value="mistral">
                    <img
                      src="./src/assets/logo/mistral.png"
                      alt="Mistral"
                      className="w-4 h-4 mr-1"
                    />
                    Mistral
                  </SelectItem>
                  <SelectItem value="meta">
                    <img src="./src/assets/logo/meta.png" alt="Meta" className="w-4 h-4 mr-1" />
                    Meta
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-2">
              <Label>Instructions*</Label>
              <Textarea placeholder="Placeholder" className="resize-none" />
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
