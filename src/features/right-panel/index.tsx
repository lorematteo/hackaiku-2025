import React from 'react';

import { Separator } from '@/components/ui/separator';
import { LLMS } from '@/const/agents';

import DesignPanel from './components/agent/design';
import TestPanel from './components/agent/test';
import PanelTitle from './components/title';

const RightPanel: React.FC = () => {
  const [isRunning, setIsRunning] = React.useState(false);
  const [llm, setLlm] = React.useState<(typeof LLMS)[number]['id'] | ''>('');
  const [instructions, setInstructions] = React.useState('');
  const [message, setMessage] = React.useState('');

  return (
    <div className="flex flex-col bg-white w-[744px] border-l border-base-300 h-screen ml-auto">
      <PanelTitle />
      <div className="flex flex-row h-full">
        <DesignPanel
          isRunning={isRunning}
          llm={llm}
          setLlm={setLlm}
          instructions={instructions}
          setInstructions={setInstructions}
        />
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
