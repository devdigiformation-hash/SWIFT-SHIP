# SwiftShip Design System & Brand Guidelines

**Version:** 1.0.0  
**Target:** British High-Performance Logistics & Courier Services  
**Canonical Identity:** SwiftShip Official Wing Emblem & Wordmark  

---

## 1. Color Palette

All colors are sampled directly from the provided SwiftShip logo and master cinematography:

| Token | Hex | RGB | Usage |
|---|---|---|---|
| `swift-dark` | `#000814` | `rgb(0, 8, 20)` | Base application background |
| `swift-midnight` | `#000B1F` | `rgb(0, 11, 31)` | Core brand canvas, hero containers & cards |
| `swift-navy` | `#051329` | `rgb(5, 19, 41)` | Glassmorphism surfaces & panel backgrounds |
| `swift-blue` | `#1E6BFF` | `rgb(30, 107, 255)` | Primary brand CTA, active tabs & glowing borders |
| `swift-accent` | `#00A3FF` | `rgb(0, 163, 255)` | Telematics highlights, tracking labels & badges |
| `swift-silver` | `#C7CAD3` | `rgb(199, 202, 211)` | Secondary text, wing metallic accents & borders |
| `swift-steel` | `#8E9BAE` | `rgb(142, 155, 174)` | Subtle captions, timestamps & divider lines |
| `status-verified` | `#10B981` | `rgb(16, 185, 129)` | Verified scans, electronic signatures & POD badges |

---

## 2. Typography Hierarchy

- **Display & Headline Font:** `Plus Jakarta Sans`
  - High-impact, contemporary British editorial geometry.
  - Weights: `700` (Bold), `800` (Extra Bold).
  - Letter-spacing: `-0.02em` to `-0.03em`.
- **Interface & Body Font:** `Inter`
  - Ultra-legible, crisp rendering at all screen sizes.
  - Weights: `400` (Regular), `500` (Medium), `600` (Semi-Bold).
- **Telematics & Code Font:** `JetBrains Mono`
  - Used for tracking references (`SS-UK-4587-21`), timestamps, depot codes, and frame counters.

---

## 3. Glassmorphism & Elevation Tokens

- **Surface Blur:** `backdrop-filter: blur(16px)` to `blur(24px)`.
- **Hairline Borders:** `1px solid rgba(255, 255, 255, 0.08)`.
- **Hover Transitions:** `300ms cubic-bezier(0.16, 1, 0.3, 1)` with blue border glow (`rgba(30, 107, 255, 0.35)`).
- **Shadow Scale:** `box-shadow: 0 12px 36px 0 rgba(0, 11, 31, 0.45)`.

---

## 4. Frame Sequence Motion Architecture

1. **Deterministic Scrubbing:**
   - HTML5 Canvas rendering scaled to device pixel ratio (capped at 2x for memory safety).
   - Frame selection: `targetIndex = Math.min(totalFrames - 1, Math.floor(clampedProgress * (totalFrames - 1)))`.
2. **Zero Blank Flashes:**
   - Previous decoded frame is held in the buffer until the next requested frame is 100% loaded.
3. **Adaptive Preloading:**
   - First frame loads immediately for instant paint.
   - Remaining frames buffer progressively in the background without blocking main thread interaction.
4. **Touch & Reduced Motion Safety:**
   - Desktop: full interactive scrubbing and scroll-driven frame movement.
   - Mobile: touch-friendly scrubber controls, responsive aspect containment, and lightweight 1920px WebP assets.
