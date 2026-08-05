---
name: ombaka-architecture
description: "Guidelines and instructions for implementing components using Atomic Design, TanStack Router routing files, and TanStack Query state caching patterns."
---

# Frontend Architecture Rules - Ombaka Tech Academy

These rules establish the structural standard for extending, rewriting, and organizing React modules. Use this skill when adding new files, editing routing logic, or wiring up API queries.

## 1. Directory Blueprint & Module Placement

Every new React component or type definition must reside in its designated layer. Do not place layout blocks inside atoms, nor business hooks inside presentation assets.

- **Atoms (`src/components/atoms/`)**: Zero logic, stateless presentation nodes. Examples:
  - `Button.tsx`: Handles primary/secondary button rendering.
  - `Badge.tsx`: Displays pill-shaped tags or labels.
  - `Logo.tsx`: Handles SVG vector brand graphics.
- **Molecules (`src/components/molecules/`)**: Composites of multiple atoms.
  - `ProgramCard.tsx`: Integrates custom icon, title, description, and action button components.
  - `StatCard.tsx`: Presents dynamic metrics alongside labels.
- **Organisms (`src/components/organisms/`)**: Standalone functional segments.
  - `Navbar.tsx`: Coordinates links, interactive menus, and mobile responsiveness.
  - `ContactForm.tsx`: Coordinates query handlers, error labels, and input validations.
- **Templates (`src/components/templates/`)**: Structure layers.
  - `MainLayout.tsx`: Coordinates grid placements for header, main body, and footer containers.

## 2. TypeScript and Component Interfaces

- **Explicit Component Types**: Use arrow functions with explicit React typing:
  ```typescript
  import React from 'react';

  interface ButtonProps {
    label: string;
    variant?: 'primary' | 'secondary';
    onClick?: () => void;
  }

  export const Button: React.FC<ButtonProps> = ({ label, variant = 'primary', onClick }) => {
    return (
      <button onClick={onClick} className={`btn-${variant}`}>
        {label}
      </button>
    );
  };
  ```
- **Type Guarding**: Avoid `any`. Define strong interface structures for data parameters (e.g. `interface ProgramDetails { id: string; title: string; description: string }`).

## 3. TanStack Router Routing Patterns

We use file-based routing. The main routing points are defined as follows:

1. **Root Configuration (`src/routes/__root.tsx`)**:
   - Houses global shell variables, devtools indicators, and layout structures.
   - Example:
     ```typescript
     import { createRootRoute, Outlet } from '@tanstack/react-router';
     import { TanStackRouterDevtools } from '@tanstack/router-devtools';

     export const Route = createRootRoute({
       component: () => (
         <>
           <Outlet />
           {process.env.NODE_ENV === 'development' && <TanStackRouterDevtools />}
         </>
       ),
     });
     ```
2. **Lazy Routes (`src/routes/index.lazy.tsx`)**:
   - Performance must be preserved using lazy-loaded route views.
   - Example:
     ```typescript
     import { createLazyFileRoute } from '@tanstack/react-router';
     import { Home } from '../components/pages/Home';

     export const Route = createLazyFileRoute('/')({
       component: Home,
     });
     ```

## 4. State Management and Query Fetching

- **Server Cache State (TanStack Query)**:
  - Separate React component view layers from network mutation requests. Place all query calls in `src/queries/`.
  - Disable buttons or inputs during loading mutations.
  - Example:
     ```typescript
     import { useMutation } from '@tanstack/react-query';

     export const useSubmitContactForm = () => {
       return useMutation({
         mutationFn: async (formData: ContactFormInput) => {
           const response = await fetch('/api/contact', {
             method: 'POST',
             headers: { 'Content-Type': 'application/json' },
             body: JSON.stringify(formData),
           });
           if (!response.ok) throw new Error('Form submission failed');
           return response.json();
         },
       });
     };
     ```
