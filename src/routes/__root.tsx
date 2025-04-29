import { createRootRoute, Outlet } from '@tanstack/react-router';

import DSSNavbar from '@/features/dss-navbar';
import { LeftPanel } from '@/features/left-panel';

export const Route = createRootRoute({
  component: () => (
    <div className="flex flex-col h-screen">
      <DSSNavbar />
      <div className="flex flex-1 min-h-0">
        <LeftPanel />
        <div className="flex-1 h-full min-h-0">
          <Outlet />
        </div>
      </div>
    </div>
  ),
});
