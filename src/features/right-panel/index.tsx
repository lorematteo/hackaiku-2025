import React from 'react';

import { Separator } from '@/components/ui/separator';
import { NodeType } from '@/const/nodes';

import DesignPanel from './components/agent/design';
import TestPanel from './components/agent/test';
import PanelTitle from './components/title';
import ToolConfigPanel from './components/tool/design';
interface RightPanelProps {
  nodeData: NodeType | null;
  updateNodeData: (data: Partial<NodeType>) => void;
  updateNodeConfig: (config: Partial<NodeType['config']>) => void;
  onClose: () => void;
}

const RightPanel: React.FC<RightPanelProps> = ({
  nodeData,
  updateNodeData,
  updateNodeConfig,
  onClose,
}) => {
  const [isRunning, setIsRunning] = React.useState(false);
  const [message, setMessage] = React.useState('');

  const config = nodeData?.config || { llm: '', instructions: '' };

  const renameNode = (newTitle: string) => {
    updateNodeData({ name: newTitle });
  };

  if (!nodeData) {
    return null;
  }

  return (
    <div className="flex flex-col bg-white min-w-2xl w-2xl border-l border-base-300 ml-auto max-h-screen overflow-y-auto">
      <PanelTitle title={nodeData.name} setTitle={renameNode} onClose={onClose} />
      <div className="flex flex-row h-full">
        {nodeData.type === 'tool' ? (
          <ToolConfigPanel />
        ) : (
          <DesignPanel
            isRunning={isRunning}
            llm={config.llm}
            setLlm={(newLlm) => updateNodeConfig({ llm: newLlm })}
            instructions={config.instructions}
            setInstructions={(newInstructions) =>
              updateNodeConfig({ instructions: newInstructions })
            }
          />
        )}
        <Separator orientation="vertical" className="h-full" />
        <TestPanel
          isRunning={isRunning}
          setIsRunning={setIsRunning}
          message={message}
          setMessage={setMessage}
          llm={config.llm}
          instructions={config.instructions}
        />
      </div>
    </div>
  );
};

export default RightPanel;
