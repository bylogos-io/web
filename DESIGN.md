# Design System: LogOS

## 1. Visual Theme & Atmosphere
LogOS is defined by a **Cinematic Dark Tech** aesthetic. It combines the technical precision of industrial computing with a premium, future-forward digital experience. The interface lives on a stark, lightless canvas that makes the vibrant brand accents feel energetic and luminous.

**Key Characteristics:**
- **Atmosphere:** Deep focus, industrial elegance, and high-performance feel.
- **Surface Strategy:** Layered glassmorphism. Components feel like physical glass panels floating over a void.
- **Atmospheric Glow:** The UI uses large, blurred radial gradients (Auras) to provide depth and emphasize key content, especially in hero sections.
- **Typography:** Modern Swiss-style sans-serif (Geist) for clarity, paired with monospace for technical data.

## 2. Color Palette & Roles
### Primary Brand
- **Logos Orange (`#e16e09`):** The heartbeat of the brand. Used for CTAs, active states, and critical highlights. It represents energy, industrial power, and visibility.
- **Logos Glow:** An alpha-blended version of Logos Orange (`rgba(225, 110, 9, 0.39)`) used for shadows and ambient lighting effects.

### Neutral Palette
- **Deep Black (`#070707`):** The primary background color. Provides infinite depth.
- **Surface Dark (`#111`):** Used for elevated cards and panels.
- **Steel Gray (`#5B6B7C`):** Muted text and secondary UI elements.

### Functional
- **Success:** Muted teal-green (`#1f8a65`) for positive confirmations.
- **Error (`#cf2d56`):** Warm crimson-rose for errors and destructive actions.

## 3. Typography Rules
- **Display & Headings:** `Geist Sans`, FontWeight 600. Designed for maximum legibility and a "tech-first" appearance. Features linear gradients (White to Logos Orange) in hero titles.
- **Body Context:** `Geist Sans`, FontWeight 400. Line-height 1.6 for comfortable reading of technical documentation and manifestos.
- **Data & Technical:** `Geist Mono`. Used for metrics, logs, hardware specifications, and code snippets.

## 4. Component Stylings
- **Buttons:** 12px radius. Primary buttons feature the "Logos Glow" shadow. Hovering triggers a `translateY(-1px)` lift and an intensified shadow.
- **Glass Panels (Cards):** 16px radius, `backdrop-filter: blur(12px)`, and a subtle `1px` border with `0.1` opacity white. This creates the signature "floating glass" effect.
- **Inputs:** 12px radius with a subtle dark background (`alpha(background.paper, 0.5)`). Focus states utilize a 2px outer glow in Logos Orange.

## 5. Layout & Interaction
- **Grid System:** 8px base unit. All margins, paddings, and component heights follow the 8px grid (8, 16, 24, 32...).
- **Motion:** 200ms `ease-in-out` transitions for interactive states. Framer Motion is used for scroll-triggered "reveal" animations.
- **Visual Depth:** Multi-layered radial gradients provide a sense of 3D space, with specific "aura" pulses (scaled 1 to 1.05) for organic growth feel.
