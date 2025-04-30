import { ToolConfig } from '@/const/nodes';

import CallLLMMeshConfig from './configs/call-llm-mesh';
import SendMessageConfig from './configs/send-message';

interface DesignPanelProps {
  toolId: string;
  config: ToolConfig;
  updateConfig: (config: Partial<ToolConfig>) => void;
  isRunning: boolean;
}

const DesignPanel: React.FC<DesignPanelProps> = ({ toolId, config, updateConfig, isRunning }) => {
  const noConfig = [
    'lookup-dataset',
    'search-knowledge-bank',
    'append-to-dataset',
    'model-predict',
  ].includes(toolId);
  return (
    <div className="flex flex-col p-4 gap-4 w-full">
      <h2 className="text-lg font-source-sans-pro">Design</h2>
      {toolId === 'send-message' && (
        <SendMessageConfig config={config} updateConfig={updateConfig} isRunning={isRunning} />
      )}
      {toolId === 'call-from-llm-mesh' && (
        <CallLLMMeshConfig config={config} updateConfig={updateConfig} isRunning={isRunning} />
      )}
      {noConfig && (
        <div className="flex flex-col gap-2">
          <p className="text-sm text-gray-500">
            This tool does not have an editable configuration yet.
          </p>
        </div>
      )}
    </div>
  );
};

export default DesignPanel;
