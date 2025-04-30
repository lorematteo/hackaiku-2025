import NodeIcon from '@/components/node-icons';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { INTEGRATIONS } from '@/const/integrations';
import { ToolConfig } from '@/const/nodes';

interface SendMessageConfigProps {
  config: ToolConfig;
  updateConfig: (config: Partial<ToolConfig>) => void;
  isRunning: boolean;
}

const SendMessageConfig: React.FC<SendMessageConfigProps> = ({
  config,
  updateConfig,
  isRunning,
}) => {
  return (
    <>
      <div className="flex flex-col gap-2">
        <Label>Integration type</Label>
        <Select
          disabled={isRunning}
          value={config.integration}
          onValueChange={(value) => updateConfig({ integration: value })}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select an integration" />
          </SelectTrigger>
          <SelectContent>
            {INTEGRATIONS.map((item) => (
              <SelectItem key={item.id} value={item.id}>
                <NodeIcon name={item.logo} className="size-4 p-0 mr-1" />
                {item.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-col gap-2">
        <Label>Authorization token</Label>
        <Input
          disabled={isRunning}
          value={config.authorization}
          onChange={(e) => updateConfig({ authorization: e.target.value })}
          placeholder="Enter authorization token"
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label>Channel</Label>
        <Input
          disabled={isRunning}
          value={config.channel}
          onChange={(e) => updateConfig({ channel: e.target.value })}
          placeholder="Enter channel name"
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label>Username</Label>
        <Input
          disabled={isRunning}
          value={config.username}
          onChange={(e) => updateConfig({ username: e.target.value })}
          placeholder="Enter username"
        />
      </div>
      <div className="flex flex-col gap-2 max-h-96">
        <Label>Additional description</Label>
        <Textarea
          placeholder="Placeholder"
          disabled={isRunning}
          value={config['additional-description']}
          onChange={(e) => updateConfig({ 'additional-description': e.target.value })}
          className="resize-none"
        />
        <p className="text-sm text-muted-foreground">
          Provide additional information about the integration.
        </p>
      </div>
    </>
  );
};

export default SendMessageConfig;
