---
name: ombaka-ui-ux
description: "Guidelines and instructions for implementing the premium dark-mode B2B tech UI/UX elements, typography, animations, and color tokens for Ombaka Tech Academy."
---

# UI/UX Style & Component Rules - Ombaka Tech Academy

These rules ensure the high-end dark-themed visual language from the HTML prototype is maintained across all UI components and page segments. Use this skill whenever building or refining user interface elements.

## 1. Color System Configuration

We use custom HSL values mapped to variables. The following Tailwind config overrides must be used for colors:

- `bg` / Background: `#060e1a` (Deep Midnight Blue)
- `surf` / Surface: `#0b1628` (Primary Container Backdrop)
- `card` / Card: `#0d1e3a` (Inner panels and interactive nodes)
- `blue` / Accent Primary: `#1a6cde` (Active/Action Blue, Hover: `#3d8ef5`)
- `red` / Accent Secondary: `#c0182a` (CTA Red, Hover: `#e8192f`)
- `ora` / Warning/Highlight: `#f26522` (Orange kicker indicators & glow dots)
- `wh` / Text Pure: `#ffffff`
- `t1` / Text Body: `rgba(255, 255, 255, 0.62)`
- `t2` / Text Muted: `rgba(255, 255, 255, 0.30)`
- `div` / Divider: `rgba(255, 255, 255, 0.07)`

## 2. Typography Rules

Use specific weights and styling matches for typography items:
1. **Header Elements (`h1`, `h2`, `h3`)**:
   - Font Family: `Sora` (sans-serif)
   - Style: Font weight `300` (light) for main copy, nested bold `700` (`<b>` tags) for punchy terms or focus words.
   - Example: `<h2 className="font-sora font-light">Corporate Training,<br/><b>Built for IT Teams</b></h2>`
2. **Kicker / Overline Badges**:
   - Font Family: `DM Mono` (monospace)
   - Style: uppercase, tracking-wider (`letter-spacing: 0.18em` to `0.2em`), small size (`text-xs` / `9.5px` to `10.5px`).
   - Example: `<span className="font-mono text-xs uppercase tracking-[0.2em] text-ora">B2B · Corporate IT Training · Global</span>`
3. **Body Paragraphs**:
   - Font Family: `Inter` (sans-serif)
   - Style: Font weight `400` or `500`, high line-height (`leading-relaxed` / `1.75`), color `text-white/60` (or `text-t1`).

## 3. High-Fidelity UI Features

### 3.1 Background Radial Gradients
The ambient lighting is created using stacked radial gradients. Mirror this on the main layout background:
```css
background:
  radial-gradient(ellipse 70% 80% at 0% 50%, rgba(13, 30, 58, 0.98) 0%, transparent 60%),
  radial-gradient(ellipse 50% 50% at 100% 20%, rgba(192, 24, 42, 0.08) 0%, transparent 55%),
  radial-gradient(ellipse 40% 60% at 55% 100%, rgba(26, 108, 222, 0.06) 0%, transparent 55%),
  #060e1a;
```

### 3.2 Hover Micro-Animations
- **General Buttons**:
  - `transition-all duration-300 ease-in-out hover:-translate-y-[2px]`
  - Red Buttons (`btn-r`): Background color shift + glow shadow enhancement (`shadow-[0_0_20px_rgba(192,24,42,0.35)]` to `shadow-[0_0_34px_rgba(232,25,47,0.5)]`).
- **Cards & Badges**:
  - Border adjustments or light reflection lines (`sv-shine`) that slide across panels on hover.
  - Accent colors changing slightly (e.g. gray to blue, border shifts).

### 3.3 Scroll Reveal Classes
Configure a dynamic CSS handler to reveal elements as they enter the viewport:
- Initial state: `opacity-0 translate-y-5 transition-all duration-500`
- Visible state: `opacity-100 translate-y-0`
- Use staggered transition delays (`delay-75`, `delay-150`, `delay-200`) for adjacent grid elements.
