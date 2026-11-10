# SwiftShip — Cinematic UK Courier Website & Frame Engine

A high-performance, cinematic British courier website built with **React, TypeScript, Tailwind CSS, HTML5 Canvas**, and true **scroll-scrubbed frame cinematography**.

---

## 🚀 Key Features

1. **True Frame-Sequence Cinematography**:
   - 5 distinct chapters mapped to 196 extracted 4K master frames.
   - Canvas-based 60 FPS scrubbing: scrolling down advances the film, scrolling up reverses it.
   - Interactive manual playback controls, scrubbing slider, and frame counter overlay.
   - Zero blank flashing via buffered frame retention.
2. **Complete British Logistics Architecture**:
   - **`/` (Home)**: 5-chapter scroll film narrative (Collection &rarr; Sortation &rarr; M6/M1 Linehaul &rarr; London Hub &rarr; Doorstep Handover).
   - **`/services`**: Logistics service matrix, operational comparison, and pricing inquiry.
   - **`/services/parcel-collection`**: Dedicated service detail page with 4-step workflow, packing checklist, and FAQs.
   - **`/services/uk-parcel-delivery`**: Dedicated service detail page with motorway route map, delivery windows, and coverage.
   - **`/services/business-courier-solutions`**: Dedicated service detail page with roll-cage logistics, API details, and commercial account booking.
   - **`/how-it-works`**: Interactive 5-stage pipeline with selectable cinematic previews.
   - **`/track`**: Interactive parcel tracking system (Demo reference: `SS-UK-4587-21`).
   - **`/about`**: British logistics heritage, fleet specs, and Manchester/London depots.
   - **`/contact`**: Interactive collection booking form with UK postcode validation.
3. **100% Policy & Guideline Compliance**:
   - **Zero Women in Imagery**: Verified across all 196 frames and UI assets.
   - **Strict UK Localization**: British terminology (*parcel*, *postcode*, *depot*, *collection*), left-side driving, UK van registration.
   - **Canonical Brand Identity**: Official SwiftShip silver/blue wing logo preserved and showcased.

---

## 🛠️ Tech Stack & Scripts

- **Framework**: React 18 + Vite 6 + TypeScript
- **Styling**: Tailwind CSS + Glassmorphism Tokens
- **Icons**: Lucide React
- **Routing**: React Router DOM v6
- **Motion & Canvas**: HTML5 Canvas + requestAnimationFrame + DPR Scaling

### Available Scripts

```bash
# Install dependencies
npm install

# Run frame ingestion and optimization pipeline (re-extracts ZIPs to WebP)
node scripts/ingest_frames.js

# Start local development server
npm run dev

# Build production bundle with typecheck
npm run build

# Preview production build locally
npm run preview
```

---

## 🔄 Rebranding & Asset Replacement Guide

To reuse this cinematic engine for another client or logistics project:
1. Replace `1.mp4` – `5.mp4` and corresponding ZIP files in the root folder.
2. Replace `public/logo_original.jpg` and `public/logo_transparent.png`.
3. Update metadata in `scripts/ingest_frames.js` (`SEQUENCE_MAP`).
4. Re-run:
   ```bash
   node scripts/ingest_frames.js
   npm run build
   ```
The manifests in `public/sequences-manifest.json` and `src/data/sequences.json` will update automatically without needing to rewrite UI components.
