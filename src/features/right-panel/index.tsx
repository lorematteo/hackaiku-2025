import React from 'react';

import { Separator } from '@/components/ui/separator';
import { AgentConfig, LLMConfig, NodeType, ToolConfig } from '@/const/nodes';

import AgentDesignPanel from './components/agent/design';
import TestPanel from './components/agent/test';
import LLMDesignPanel from './components/llm/design';
import PanelTitle from './components/title';
import ToolDesignPanel from './components/tool/design';
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

  const config = nodeData?.config || { llm: '', instructions: '' };

  const renameNode = (newTitle: string) => {
    updateNodeData({ name: newTitle });
  };

  if (!nodeData) {
    return null;
  }

  return (
    <div className="flex flex-col bg-white min-w-2xl w-2xl border-l border-base-300 ml-auto max-h-screen overflow-y-auto">
      <PanelTitle
        icon={nodeData.icon}
        title={nodeData.name}
        setTitle={renameNode}
        onClose={onClose}
      />
      <div className="flex flex-row h-full">
        {nodeData.type === 'tool' && (
          <ToolDesignPanel
            toolId={nodeData.id}
            config={config as ToolConfig}
            updateConfig={updateNodeConfig}
            isRunning={isRunning}
          />
        )}
        {(nodeData.type === 'agent' || nodeData.type === 'main-agent') && (
          <AgentDesignPanel
            config={config as AgentConfig}
            updateConfig={updateNodeConfig}
            isRunning={isRunning}
          />
        )}
        {nodeData.type === 'llm' && (
          <LLMDesignPanel
            config={config as LLMConfig}
            updateConfig={updateNodeConfig}
            isRunning={isRunning}
          />
        )}
        <Separator orientation="vertical" className="h-full" />
        <TestPanel isRunning={isRunning} setIsRunning={setIsRunning} />
      </div>
    </div>
  );
};

export default RightPanel;
