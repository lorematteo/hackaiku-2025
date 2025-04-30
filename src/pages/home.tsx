import Canva from '@/features/canva';
import { LeftPanel } from '@/features/left-panel';

function Home() {
  return (
    <div className="bg-zinc-50 h-screen flex flex-row">
      <LeftPanel />
      <Canva />
    </div>
  );
}

export default Home;
