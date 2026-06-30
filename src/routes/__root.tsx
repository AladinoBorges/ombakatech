import { createRootRoute, Outlet } from '@tanstack/react-router';
import { MainLayout } from '../components/templates/MainLayout';

export const Route = createRootRoute({
  component: () => (
    <MainLayout>
      <Outlet />
    </MainLayout>
  ),
});
