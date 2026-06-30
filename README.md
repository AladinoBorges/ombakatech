# Ombaka Tech Academy — Modern Frontend WebApp

This repository contains the source code for the modern frontend single-page application (SPA) of **Ombaka Tech Academy**. Built from a high-fidelity B2B corporate training prototype, this codebase is designed to be highly responsive, visually stunning, and modular, establishing a strong architectural foundation for future web application features.

---

## 🚀 Tech Stack

- **Framework**: [Vite](https://vitejs.dev/) + [React.js](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Routing**: [TanStack Router](https://tanstack.com/router) (file-based routing system)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (utility-first styling with custom corporate tokens)
- **State & Server Cache**: [TanStack Query](https://tanstack.com/query) (React Query)

---

## 📂 Architecture: Atomic Design

To maintain strict cleanliness, scalability, and code separation, components are structured following the **Atomic Design Pattern** under the `src/components/` directory:

1. **Atoms** (`src/components/atoms/`)
   - Pure styling, basic UI controls, and typography templates. They have no business logic and are stateless. Examples: `Button`, `Badge`, `Logo`, `GlowDot`.
2. **Molecules** (`src/components/molecules/`)
   - Simple combinations of atoms. Handles presentation logic and small states. Examples: `ProgramCard`, `StatCard`, `NavLink`.
3. **Organisms** (`src/components/organisms/`)
   - Complex functional groups that assemble visual modules on a page. Examples: `Navbar`, `HeroSection`, `ServicesGrid`, `CertificationsCarousel`, `ContactForm`.
4. **Templates** (`src/components/templates/`)
   - Layout layouts that dictate structural grid zones (e.g., placing header, footer, content columns). Examples: `MainLayout`.
5. **Pages** (`src/routes/`)
   - The final entry points wired up directly to routes via TanStack Router.

---

## 🛠️ Development & Installation

### Prerequisites
- Node.js (v18 or higher recommended)
- npm, yarn, or pnpm

### Getting Started

1. **Install dependencies:**
   ```bash
   bun install
   ```

2. **Run the local development server:**
   ```bash
   bun run dev
   ```

3. **Build the production bundle:**
   ```bash
   bun run build
   ```

4. **Preview the production build locally:**
   ```bash
   bun run preview
   ```

---

## 🎨 UI/UX Theme & Visual Language

The design preserves the dark-mode aesthetic with ambient glow effects, detailed hover micro-animations, and clean typography:
- **Fonts**: `Sora` (headings), `Inter` (body copy), and `DM Mono` (kicking labels, badges, statistics counters).
- **Core Accent Colors**: Blue (`#1a6cde`), Red (`#c0182a`), and Orange (`#f26522`).
- **Glow Elements**: Backdrops use smooth radial gradients and glassmorphic blur filters to illuminate sections.

---

## 📖 Development Rules

For details on coding styles, TypeScript configuration, routing setup, form handling, performance guidelines, and formatting standard rules, refer directly to [GEMINI.md](file:///c:/Users/home/engenharia/ombakatech/GEMINI.md). All code, variables, issues, pull requests, and comments must be **100% in English**.
