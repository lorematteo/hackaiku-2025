import type { Node } from '@xyflow/react';
import React from 'react';

import { Separator } from '@/components/ui/separator';
import { LLMS } from '@/const/agents';

import DesignPanel from './components/agent/design';
import TestPanel from './components/agent/test';
import PanelTitle from './components/title';
import ToolConfigPanel from './components/tool/design';
interface RightPanelProps {
  node: Node;
  onClose: () => void;
  onRename: (newLabel: string) => void;
}

const RightPanel: React.FC<RightPanelProps> = ({ node, onClose, onRename }) => {
  const [isRunning, setIsRunning] = React.useState(false);
  const [llm, setLlm] = React.useState<(typeof LLMS)[number]['id'] | ''>('');
  const [instructions, setInstructions] = React.useState('');
  const [message, setMessage] = React.useState('');

  return (
    <div className="flex flex-col bg-white min-w-2xl w-2xl border-l border-base-300 ml-auto max-h-screen overflow-y-auto">
      <PanelTitle node={node} onClose={onClose} onRename={onRename} />
      <div className="flex flex-row h-full">
        {node.data.type === 'tool' ? (
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
