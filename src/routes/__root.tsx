import { createRootRoute, Outlet } from '@tanstack/react-router';

import DSSNavbar from '@/features/dss-navbar';

export const Route = createRootRoute({
  component: () => (
    <>
      <DSSNavbar />
      <Outlet />
    </>
  ),
});
