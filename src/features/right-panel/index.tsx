import React from 'react';

import { Separator } from '@/components/ui/separator';
import { LLMS } from '@/const/agents';
import { NodeType } from '@/const/nodes';

import DesignPanel from './components/agent/design';
import TestPanel from './components/agent/test';
import PanelTitle from './components/title';
import ToolConfigPanel from './components/tool/design';
interface RightPanelProps {
  nodeData: NodeType | null;
  updateNodeData: (data: Partial<NodeType>) => void;
  onClose: () => void;
}

const RightPanel: React.FC<RightPanelProps> = ({ nodeData, updateNodeData, onClose }) => {
  const [isRunning, setIsRunning] = React.useState(false);
  const [llm, setLlm] = React.useState<(typeof LLMS)[number]['id'] | ''>('');
  const [instructions, setInstructions] = React.useState('');
  const [message, setMessage] = React.useState('');

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
            llm={llm}
            setLlm={setLlm}
            instructions={instructions}
            setInstructions={setInstructions}
          />
        )}
        <Separator orientation="vertical" className="h-full" />
        <TestPanel
          isRunning={isRunning}
          setIsRunning={setIsRunning}
          message={message}
          setMessage={setMessage}
          llm={llm}
          instructions={instructions}
        />
      </div>
    </div>
  );
};

export default RightPanel;
