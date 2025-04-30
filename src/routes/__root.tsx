import { createRootRoute, Outlet } from '@tanstack/react-router';

import DSSNavbar from '@/features/dss-navbar';

export const Route = createRootRoute({
  component: () => (
    <div className="flex flex-col h-screen">
      <DSSNavbar />
      <Outlet />
    </div>
  ),
});
