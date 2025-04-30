import NodeIcon from '@/components/node-icons';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { LLMS } from '@/const/agents';
import { NODES, ToolConfig } from '@/const/nodes';

interface CallLLMMeshConfigProps {
  config: ToolConfig;
  updateConfig: (config: Partial<ToolConfig>) => void;
  isRunning: boolean;
}

const CallLLMMeshConfig: React.FC<CallLLMMeshConfigProps> = ({
  config,
  updateConfig,
  isRunning,
}) => {
  const agentNodes = NODES.agents.map((node) => ({
    id: node.id,
    name: node.name,
    logo: node.icon,
  }));

  return (
    <>
      <div className="flex flex-col gap-2">
        <Label>LLM / Agent</Label>
        <Select
          disabled={isRunning}
          value={config['llm-agent']}
          onValueChange={(value) => updateConfig({ 'llm-agent': value })}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select an integration" />
          </SelectTrigger>
          <SelectContent>
            {[...LLMS, ...agentNodes].map((item) => (
              <SelectItem key={item.id} value={item.id}>
                <NodeIcon name={item.logo} className="size-4 p-0 mr-1" />
                {item.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-col gap-2 max-h-96">
        <Label>Purpose</Label>
        <Textarea
          placeholder="Placeholder"
          disabled={isRunning}
          value={config.purpose}
          onChange={(e) => updateConfig({ purpose: e.target.value })}
          className="resize-none"
        />
        <p className="text-sm text-muted-foreground">
          Describe what the LLM or Agent to call does, why it should be called, what kind of
          question it expects, ...
        </p>
      </div>
      <div className="flex flex-col gap-2 max-h-96">
        <Label>System prompt</Label>
        <Textarea
          placeholder="Placeholder"
          disabled={isRunning}
          value={config['system-prompt']}
          onChange={(e) => updateConfig({ 'system-prompt': e.target.value })}
          className="resize-none"
        />
        <p className="text-sm text-muted-foreground">
          System prompt that will be prepended to the LLM / Agent invocation
        </p>
      </div>
    </>
  );
};

export default CallLLMMeshConfig;
