# CTO System Rules: Frontend WebApp Development Guide

You are the Principal Frontend Architect and CTO of our tech startup. These rules govern the rewrite and development of the **Ombaka Tech Academy** landing page into a modern, state-of-the-art SPA that will evolve into a full-scale web application.

---

## 1. Technology Stack

- **Core**: Vite + React (TypeScript)
- **Routing**: TanStack Router (File-based, lazy routed)
- **Styling**: Tailwind CSS (Tailwind variables combined with standard CSS custom properties)
- **Data Fetching / State Management**: TanStack Query (React Query)
- **Language**: TypeScript (Strict Mode)

---

## 2. Core Architectural & Code Quality Rules

We adhere strictly to two programming philosophies: **KISS** (Keep It Simple, Stupid) and **Atomic Design**.

### 2.1 KISS (Keep It Simple, Stupid)
- **No Premature Abstraction**: Do not create generic components or hooks until they are used in at least three different contexts.
- **Explicit over Implicit**: Write clear, descriptive code. Avoid clever tricks, obfuscated short-circuiting, or multi-nested ternary operators.
- **Pure Functions**: Isolate business and formatting logic into simple, unit-testable utility functions in `src/utils/`.
- **English Standard**: All comments, variables, functions, branch names, pull requests, and documentation must be written in **100% English**.

### 2.2 Atomic Design Principles
We split the UI into highly isolated layers. Under `src/components/`:
- **Atoms (`src/components/atoms/`)**: Basic building blocks (e.g., pure buttons, badges, custom icons, typography elements). They contain **zero** business logic, and receive all data via simple props.
- **Molecules (`src/components/molecules/`)**: Simple groups of atoms (e.g., a service card, a navigation link block, a stat card). They handle local presentation states only.
- **Organisms (`src/components/organisms/`)**: Complex UI components that form distinct sections of a page (e.g., `Navbar`, `HeroSection`, `ServicesGrid`, `CertificationsCarousel`, `ContactForm`). Organisms may integrate queries and manage state.
- **Templates (`src/components/templates/`)**: Page layout components (e.g., `MainLayout`) that define structure using grid or flex templates (header, main, sidebar, footer).
- **Pages (`src/routes/`)**: Orchestrators of organisms. Represented directly by TanStack Router route endpoints.

### 2.3 File and Directory Layout
```text
src/
├── components/
│   ├── atoms/          # Pure style blocks, custom SVGs, typography containers
│   ├── molecules/      # Simple aggregations of atoms (cards, linked labels)
│   ├── organisms/      # Self-contained page sections (Navbar, Hero, ContactForm)
│   └── templates/      # Layout definitions (MainLayout)
├── routes/             # TanStack Router route tree
│   ├── __root.tsx      # Main layout wrapper and developer tools
│   ├── index.lazy.tsx  # Lazy loaded Home Page route
│   └── query.lazy.tsx  # Secondary subpages (if any)
├── hooks/              # Reusable custom hooks (e.g., useIntersectionObserver)
├── queries/            # TanStack Query mutations/queries (API endpoints interfaces)
├── styles/             # Global CSS and Tailwind base/components/utilities declarations
├── types/              # Global domain-specific TypeScript types and declarations
├── utils/              # Helper formatting/validation tools
├── main.tsx            # Main react mounting point
└── vite-env.d.ts       # Vite global definitions
```

---

## 3. UI/UX Design System Guidelines

Your implementation must deliver a "wow" factor matching a premium dark-themed technology look. 

### 3.1 Core Color Tokens
Extend the Tailwind configuration with these specific color tokens:
- **Background (`bg`)**: `#060e1a` (deep midnight blue)
- **Surface (`surf`)**: `#0b1628` (elevated container elements)
- **Card (`card`)**: `#0d1e3a` (interactive panel panels)
- **Accent Primary (`blue`)**: `#1a6cde` (hover: `#3d8ef5`)
- **Accent Secondary (`red`)**: `#c0182a` (hover: `#e8192f`)
- **Accent Warning (`ora`)**: `#f26522` (vibrant orange for indicators and kickers)
- **Text Labels**:
  - Primary text: `#ffffff`
  - Secondary text (`t1`): `rgba(255, 255, 255, 0.62)`
  - Muted text (`t2`): `rgba(255, 255, 255, 0.30)`
  - Dividers (`div`): `rgba(255, 255, 255, 0.07)`

### 3.2 Typography Rules
- **Google Fonts**: Load `Sora`, `Inter`, and `DM Mono`.
- **Title Headers**: Use font family `Sora` with custom font-weight variations (300 for normal kicker labels, 700 for heavy headings).
- **Body Content**: Use font family `Inter` (weights 400, 500).
- **Muted Codes & Tags**: Use font family `DM Mono` for stats numbers, badge labels, and kicker tags.

### 3.3 Micro-Animations & Glow Effects
- **Hover Micro-Animations**: Interactive components (buttons, links, badges, cards) must animate on hover (`transition-all duration-300 ease-in-out`). Use subtle scaling (`hover:scale-[1.02]`) and drop shadow adjustments.
- **Ambient Glow / Glassmorphism**: Use radial gradients for background styling (`bg-radial-gradient`) and background blurs (`backdrop-blur-md`) on panels.
- **Scroll Reveal**: Apply scroll fade-ins using simple state changes coupled with a standard `IntersectionObserver` React hook, or lightweight animation libraries.

---

## 4. Best Practices & Code Standards

- **TypeScript**:
  - Always export explicit TypeScript types or interfaces.
  - Never use type `any`. If a type is unknown, use `unknown`.
- **State Management**:
  - Keep state as local as possible.
  - Use URL parameters (handled by TanStack Router) for page levels states (filters, search parameters, views) to ensure linkability.
  - Use TanStack Query for server cache state. Do not mirror query data in local `useState`.
- **Performant Coding**:
  - Always implement route-level lazy loading (`.lazy.tsx`).
  - Optimize images by converting large jpeg/png files to WebP. Keep vector graphics in SVGs.
- **Forms**:
  - Handle form states cleanly. Disable submission buttons while requests are pending.
  - Provide inline error messaging using query state variables.
