import Canva from '@/features/canva';
import { LeftPanel } from '@/features/left-panel';
import RightPanel from '@/features/right-panel';

function Home() {
  return (
    <div className="bg-zinc-50 h-screen flex flex-row">
      <LeftPanel />
      <Canva />
      <RightPanel />
    </div>
  );
}

export default Home;
