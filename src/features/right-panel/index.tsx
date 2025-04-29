import { Separator } from '@/components/ui/separator';

import DesignPanel from './components/agent/design';
import TestPanel from './components/agent/test';
import PanelTitle from './components/title';

const RightPanel: React.FC = () => {
  return (
    <div className="flex flex-col bg-white w-[744px] border-l border-base-300 h-screen ml-auto">
      <PanelTitle />
      <div className="flex flex-row h-full">
        <DesignPanel />
        <Separator orientation="vertical" className="h-full" />
        <TestPanel />
      </div>
    </div>
  );
};

export default RightPanel;
