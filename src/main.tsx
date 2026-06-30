import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRouter, RouterProvider, createRoute } from '@tanstack/react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Route as rootRoute } from './routes/__root';
import './styles/global.css';

// Define routing mappings
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
}).lazy(() => import('./routes/index.lazy').then((m) => m.Route));

// Assemble route tree
const routeTree = rootRoute.addChildren([indexRoute]);

// Instantiate router & query client
const router = createRouter({ routeTree });
const queryClient = new QueryClient();

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

// Render components tree
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
