# SWIFTSHIP — A-TO-Z CINEMATIC COURIER WEBSITE MASTER PROMPT

**For:** AntiGravity coding agent  
**Project:** SwiftShip — premium UK courier company website / portfolio demonstration  
**Input assets supplied by client:** (1) SwiftShip logo, (2) this master prompt, (3) five numbered ZIP archives containing ordered video-to-image frames.  
**Primary outcome:** A production-grade, visually extraordinary, responsive UK courier website with frame-sequence scroll cinematography, authentic SwiftShip branding and a complete Manchester-to-London parcel journey.

---

## 0. NON-NEGOTIABLE GLOBAL RULES

1. **NO WOMEN IN ANY WEBSITE VISUALS.** Never add, generate, select, or display photos, videos, illustrations, avatars, silhouettes, or background imagery containing women. This applies to every page, gallery, placeholder, testimonial portrait, team photo, and dynamically fetched asset. Use male-only people where people are necessary, or use objects/places without people. Do not substitute random stock images.
2. **ASSET-FIRST.** Inspect the real uploaded SwiftShip logo and all five ZIP archives before coding or making design decisions. Do not pretend to have inspected missing files. Report missing or broken archives and continue only with what is verifiably available.
3. **LOGO FIDELITY.** Use the supplied SwiftShip logo as the sole canonical brand mark. Do not redraw, rename, hallucinate, or substitute the emblem. Preserve its silver/blue wing mark and SwiftShip wordmark; derive colors from the actual file. For web navigation, create a carefully cropped/transparent derivative only if needed, retaining the original unmodified.
4. **UK ONLY.** All service geography, postcodes, visual architecture, road traffic, addresses and terminology must be British. Never show Pakistan, Lahore, PK-LHE codes, or non-UK routing. Demonstration shipment: Manchester → London; tracking reference **SS-UK-4587-21**. Treat example addresses as demo data, not verified customer information.
5. **TRUE FRAME-SEQUENCE CINEMATOGRAPHY.** Each ZIP contains images already extracted from a rendered video. They are **not** independent stills or slides. Play them in natural order, with correct aspect ratio and motion, so visitors perceive a continuous cinematic clip. Do not create a basic image carousel, GIF slideshow, or use only a few frames.
6. **ACTUAL ZIP CONTENT DETERMINES DURATION.** The five original clips were planned as 10 seconds each, but the owner may have trimmed any of them. Never assume a fixed duration, fixed 400 frames, or fixed frame rate. Inspect each archive and derive timing from reliable metadata, filenames, supplied manifest or owner-confirmed FPS. If FPS is unavailable, expose a per-sequence FPS setting, document the assumption, and ask for confirmation; do not assert guessed duration as fact.
7. **PIXEL QUALITY.** Keep original full-resolution masters. Never destructively downsample the only copies. Provide sharp 4K-capable desktop playback where actual source frames permit, with responsive image variants and mobile performance strategies. Do not claim a frame is native 4K if its source is smaller.
8. **SCROLL EXPERIENCE.** Hero → cinematic process scenes across the whole site, with elegant scroll transitions. Use context-aware right/left/full-bleed placement, not a rigid repetitive template. Video-like sequences are the primary storytelling medium; accompanying typography is minimal, premium and readable.
9. **NO UNAUTHORIZED CLAIMS.** This is a showcase brand unless actual company facts are supplied. Do not invent customer reviews, verified ratings, real depot addresses, guaranteed delivery times, coverage figures, accreditations, company registration numbers, or working shipment APIs. Mark sample tracking as a demonstration.
10. **NO BACKGROUND MUSIC.** Default all frame sequences to silent. Never add soundtrack, autoplay audio, or simulated sound effects. A future separately approved audio mode may be added but must default off.

---

## 1. MANDATORY EXECUTION ORDER

**DISCOVER → READ → AUDIT → INVENTORY → STORYBOARD → DESIGN → IMPLEMENT → OPTIMISE → TEST → FIX → DELIVER.**

Before changing files:
- Read repository tree, package manifests, configuration, existing pages, components, styles, asset folders and README.
- Identify the stack already present. Prefer Next.js + React + TypeScript + Tailwind CSS for a new project; do not destructively replace a working app without a reason.
- Locate all uploaded ZIPs and logo. List actual paths, filenames, image counts, image formats, dimensions, numbering schemes, potential duplicate/missing frames and any metadata.
- Inspect representative frames from **beginning, middle and end** of **every** ZIP, plus contact sheets. Confirm the real visual subject and action; do not blindly assign content based on ZIP names.
- Verify the five archives represent the intended stages. If ZIP ordering and visible content disagree, use visual evidence and ask for clarification before assigning a misleading section.
- Write a short `ASSET_AUDIT.md` with evidence-based inventory, uncertainties, exact proposed order and implementation plan.

### Expected narrative mapping (verify against actual ZIPs)

| Sequence | Expected story | Typical website treatment | Suggested headline |
|---|---|---|---|
| 01 | Parcel pickup from a UK business, scanning, loading | Full-screen cinematic hero → shrinks smoothly into editorial panel | **Every Journey Begins With Trust.** |
| 02 | Automated parcel sorting and scanning at UK distribution hub | Right-side film with left-side copy; scanning details | **Precision at Every Turn.** |
| 03 | Same navy SwiftShip van on British motorway, approaching London | Wide panoramic film / immersive roadway transition | **Moving Your World Forward.** |
| 04 | London Hub: courier unloads parcel to existing trolley; male worker pushes trolley inside | Left-side film with right-side copy; warehouse logistics | **The Final Mile, Perfectly Coordinated.** |
| 05 | Same courier delivers parcel to male customer at London doorstep | Expanding full-bleed film, graceful closing moment | **Delivered With Confidence.** |

This table is a **story hypothesis**, not permission to ignore actual ZIP contents. Video 04 may contain an edited shorter sequence; use its true final frames, not an invented continuation.

---

## 2. BRAND SYSTEM AND VISUAL ART DIRECTION

**Personality:** British, reliable, efficient, high-end, modern, cinematic; closer to an award-winning premium logistics brand than a generic parcel template.

- Primary palette: deep midnight/navy, cool steel/silver, electric blue accents sampled from supplied logo; restrained white/ivory typography.
- Typography: premium contemporary grotesk/display for headlines and readable neutral sans for body; excellent optical spacing, responsive fluid type scales.
- Layout: large intentional negative space, editorial grids, confident oversized headlines, subtle translucent navigation, refined separators and motion.
- Avoid neon overload, generic stock illustrations, cartoon delivery vans, fake 3D objects, excessive glassmorphism, and clutter.
- Brand emblem and wordmark should remain crisp on both light and dark backgrounds. Use appropriate real logo variants if supplied, or place the unchanged logo on a suitable contrast surface.
- All interface copy in polished British English. Use “parcel”, “postcode”, “collection”, “delivery”, “tracking”, and “depot”.

### Navigation
Home / Our Journey / Services / How It Works / Track a Parcel / About / Contact; prominent **Book a Collection** CTA. Build accessible mobile navigation and sticky navigation that remains legible over imagery.

---

## 3. SITE ARCHITECTURE — REAL PAGES, NOT JUST A LANDING PAGE

Build a complete coherent site, with at least:

1. **Home** — full cinematic five-stage scroll narrative, trust/value proposition, service highlights, CTAs.
2. **Services** — collection, domestic parcel delivery, business shipping, last-mile delivery and distribution, clearly described without unverified guarantees.
3. **How It Works / Our Journey** — interactive five-stage process, using existing frame sequences intelligently without forcing full sequence downloads multiple times.
4. **Track a Parcel** — beautifully designed demonstration UI. If no real backend/API is provided, show an explicit **Demo Tracking** state for SS-UK-4587-21; do not pretend real-time updates exist. Handle unknown numbers transparently.
5. **About** — company vision, operational principles, process and branding; no invented founder stories or fabricated metrics.
6. **Three dedicated service detail pages** — parcel collection, UK parcel delivery and business courier solutions (see Section 3A).
7. **Contact / Book a Collection** — polished validated forms with clearly identified demo submission behaviour unless a real endpoint is provided. No fake success or pretend email sending.

The Services index MUST link to all three detailed service pages, each with unique content and responsive premium design. Include thoughtful footer, privacy/terms placeholders clearly marked for owner review, 404 page, and meaningful internal links. All pages should feel like the same premium brand.

---

## 3A. MANDATORY DEDICATED SERVICE DETAIL PAGES — MINIMUM THREE

The Services index is **not** a substitute for service pages. Create **at least THREE fully designed, separately routable, SEO-ready service detail pages**, with unique copy, composition, CTAs and internal links:

1. **/services/parcel-collection** — UK parcel collection. Explain enquiry/booking, preparation and packaging, courier pickup, barcode scan and handoff; include a concise step-by-step process, a useful preparation checklist, FAQ, and a clearly labelled enquiry/collection CTA. Reuse relevant frames from Sequence 01 where performance permits.
2. **/services/uk-parcel-delivery** — UK domestic parcel delivery. Explain collection-to-delivery journey, scanning/sorting, transport and doorstep handover, demo tracking and appropriate FAQs. Use selective moments from Sequences 02, 03 and 05 without duplicating massive downloads.
3. **/services/business-courier-solutions** — B2B and recurring business shipping. Explain business collection enquiries, batch shipments, distribution, operational handoffs, last-mile delivery, and a business enquiry CTA; use relevant frames from Sequences 02 and 04.

Optional fourth dedicated page: **/services/last-mile-delivery** if it adds genuine substance. Ensure every page contains a differentiated cinematic hero, service overview, 3–5 useful content sections, clear process/benefit explanations, FAQs, related services, contextual CTA and accessible breadcrumb navigation. Write polished UK English; no lorem ipsum, fabricated operational promises, prices, guarantees, accreditations or fake service availability. Clearly label demo-only forms and tracking. All service pages must be linked from the Services index, navbar where suitable, footer, and relevant home sections.

## 3B. PREMIUM DESIGN SYSTEM — HIGH-END GLASS, MOTION & INTERACTIONS

Build an **outstanding, visually distinctive 2026 premium UK courier interface**, not a generic logistics template. The uploaded logo is the canonical visual identity; derive the exact brand palette from it. Recommended direction: **midnight navy / deep ink**, cool silver and pearl-white surfaces, carefully controlled **electric/cobalt blue highlights**, subtle luminous edge accents, elegant frosted-glass layers, premium bold display typography, generous spacing and disciplined hierarchy. Avoid garish neon, rainbow gradients or glass overlays that obscure film detail.

**Required component and interaction repertoire (use where appropriate, not indiscriminately):**
- High-fidelity **glassmorphism** navigation with genuine backdrop blur, translucent surfaces, fine hairline borders, physically plausible specular highlights, soft reflections and accessible text contrast.
- **Morphing glass cards** that gracefully expand, contract or transform into detail panels during scroll/hover; no layout shift or distracting perpetual morphs. Service cards should have distinctive visual content, subtle depth and legible copy.
- Premium **magnetic-feel buttons** with restrained pointer attraction on desktop, smooth spring response, luminous glass edge/hover treatment, tactile pressed state, visible keyboard focus and touch-safe fallbacks. Do not hijack clicks or make CTA targets move away from users.
- Interactive **glass-tinted service tiles**, animated border glows, refined reveal masks, staggered text, icon motion, scroll progress rail, cinematic chapter counters, micro-interactions and tasteful parallax.
- Film-to-panel **container morphing**: a hero frame-sequence can smoothly resize/reposition into a rounded cinematic glass-framed visual; alternating right/left layouts where narratively appropriate; occasional full-bleed interludes to avoid a monotonous zigzag.
- A distinctive premium **tracking interface** with crisp status states and meaningful progress visualization, always clearly labelled demo if unconnected.
- Polished sticky navigation, responsive mega-menu or clean dropdown, premium footer, floating contextual CTAs only when helpful, high-quality mobile menu and subtle loading/progress indicators.
- Consistent radius scale, spacing tokens, elevation, shadow softness, blur levels, animation curves, typography scale, button variants and card variants across **every page**.
- Light glass surfaces only where contrast works; deep/navy glass over film is preferred. Never let glass blur or animated overlays degrade perceived frame resolution.

**Motion architecture:** Use GSAP + ScrollTrigger for cinematic scroll choreography where justified, and CSS/Framer Motion for small component interactions where appropriate; avoid overlapping animation engines fighting for transforms. Keep motion synchronized to real ZIP frame count/duration. Respect `prefers-reduced-motion`, keyboard navigation, touch devices and low-powered devices. No heavy WebGL/Three.js merely for decoration; real-film frames remain the visual hero.

**Visual polish requirements:** The site must feel custom art-directed, not assembled from default component-library cards. Create a cohesive visual rhythm across homepage, Services index, all three service pages, About, Tracking and Contact. Make every CTA real and meaningful, with correct routes and form behavior. No dead buttons, fake interactions, inaccessible glass, or exaggerated effects that reduce usability.

## 4. FRAME ZIP INGESTION PIPELINE — TECHNICALLY CORRECT

Create a repeatable, documented ingestion script (Node.js or Python as appropriate) that:

1. Discovers five supplied ZIP files and maps them deterministically to sequences 01–05 (with an editable mapping file).
2. Securely extracts images only; rejects ZIP-slip paths, malformed files, unexpected file types, excessive decompression sizes and dangerous filenames.
3. Uses **natural numeric sorting** (e.g. `frame_2` before `frame_10`), never naive alphabetical sorting.
4. Verifies actual image dimensions, aspect ratios, decode integrity, gaps, duplicate names, corrupted frames and count.
5. Builds **per-sequence manifest JSON** including `id`, `title`, `frameCount`, `width`, `height`, `sourceFormat`, `fps`, `durationSeconds`, `poster`, `frames` or indexed URL template, and optional `timestamps` if supplied.
6. Derives FPS/duration only from verified metadata, file naming, accompanying timing documents or user-supplied settings. If metadata is absent, create configurable defaults in one clearly documented file; surface unresolved FPS assumptions in audit.
7. Keeps original high-resolution frames safely, generates responsive derivatives **without destroying originals**, and produces representative poster/contact sheet assets.
8. Generates optimised AVIF/WebP variants only when visually acceptable; compare sharpness, artefacts and file size. Preserve correct colour profiles, proportions and no stretched crops.
9. Outputs predictable file paths and checks the final manifest URLs actually resolve.
10. Allows re-running the pipeline after replacing any ZIP without rewriting website components.

**Critical:** 400 frames is merely an example; do not assume that count. A 6-second trimmed sequence is not automatically a 10-second sequence. Honour true count and validated FPS/timestamps.

### Playback duration and scroll mapping

- Use the actual sequence duration `frameCount / fps` when FPS is constant and verified, or timestamp-based duration when variable.
- If exact FPS cannot be determined, request confirmation or use a prominently documented editable setting rather than presenting a guess as fact.
- The scroll distance is an independent UX parameter; a 6-second original sequence can be scrubbed across a longer or shorter scroll interval while retaining **every original frame in order**.
- Never append fake frames or loop content just to fill an assumed 10 seconds.

---

## 5. PREMIUM SCROLL FILM ENGINE

Implement a robust reusable `FrameSequence` / `ScrollFilmScene` system, with:

- Scroll progress mapped deterministically to frame index: clamp progress to [0,1], then select the correct sequential frame based on verified timestamps or index.
- **Scroll-driven scrubbing** as the primary desktop experience: scrolling down advances the film; scrolling up reverses it naturally.
- Optional controlled auto-play for specifically approved hero moments, but no fighting between auto-play and user scroll; user interaction must take precedence.
- Frame rendering via canvas or equivalent efficient approach, using device-pixel-ratio-aware sizing capped by practical performance limits; preserve `object-fit: cover/contain` decisions and subject-safe crop.
- Smooth motion through `requestAnimationFrame`, frame decoding, adaptive prefetching and cancellation of stale work; never block main thread by decoding all full-size frames synchronously.
- Small initial preload window, progressive near-future/near-past prefetch, bounded LRU cache, memory budget and efficient `ImageBitmap`/image decode lifecycle where supported.
- Keep adjacent frames from flashing blank during network/decode gaps: hold last successfully decoded frame until the requested frame is ready.
- Mobile mode with appropriately sized sources, smaller cache and graceful reduced-motion/static poster fallback. Ensure meaningful experience even on midrange Android devices.
- IntersectionObserver or equivalent to pause off-screen prefetch and expensive work.
- Stable frame display on fast scroll, back-scroll, touch momentum, resize, orientation change, route transitions and tab backgrounding.
- No flicker, blank canvas, incorrect frame ordering, jump-to-first-frame, visible low-res blur, or giant layout shifts.
- Preserve accessibility: semantic page content independent of canvas; descriptive accessible text; reduced motion; keyboard navigation; focus visibility.

**Important technical truth:** frame sequences do not inherently improve file size or load time versus compressed video. Thousands of full-resolution frames can be far heavier. Engineer adaptive resolution, staged delivery, caching and performance budgets. Keep the highest-resolution source available for large displays, while avoiding downloading all 4K frames at once.

---

## 6. FULL HOME PAGE SCROLL CHOREOGRAPHY

### Section A — Opening / Hero / Sequence 01
- Full-viewport cinematic frame sequence, logo/nav overlay, striking British courier headline and a tasteful tracking/collection CTA.
- Cinematic scroll pinning as needed, with controlled progress and no scroll trap.
- As visitor moves down, the film transitions from full-bleed into a premium framed composition, revealing editorial copy without abruptly resetting the sequence.

### Section B — Sorting / Sequence 02
- Smoothly introduce the sorting hub film on the **right**, with concise headline, copy and subtle process index on the **left**.
- Scanning/conveyor visuals should remain legible; avoid overlaying text on parcel labels.

### Section C — On the Road / Sequence 03
- Expand into a cinematic full-width road section for spatial variety; optionally use a tasteful lateral framing shift or panoramic crop that does not alter the source footage.
- Show Manchester → London as a **clearly labelled illustrative route** only if desired; no fabricated real-time GPS data.

### Section D — London Hub / Sequence 04
- Frame sequence on **left**, process copy on **right**. Emphasise real action: parcel from van to existing trolley, then worker takes trolley into warehouse **if the actual frames show it**.
- Never use website animation to fake an action absent from the supplied frames.

### Section E — Final Delivery / Sequence 05
- Begin with a contained cinematic panel; grow elegantly into a broad closing scene as the parcel reaches the recipient.
- Premium end statement: **Every Journey Ends With Trust.**
- Strong CTAs: **Book a Collection** / **Explore Our Services**.

### Between-film transitions
- Use GSAP ScrollTrigger (or a comparably reliable framework) for pinned sections, scrub, transforms, opacity, and continuity.
- Use Lenis smooth scrolling only if it is stable with the scroll trigger system, touch interaction and accessibility. Avoid double smooth-scroll systems.
- Alternate right/left placements where appropriate but prioritise story rhythm; not every section must zigzag.
- Make film panels move naturally between layouts; avoid hard snapping, obvious gaps, jarring zooms and unrelated decorative effects.
- Avoid implying one unbroken camera shot across unrelated film sources. Aim for **seamless editorial continuity** using matched colors, visual motifs, camera direction and restrained transitions, while respecting the actual assets.
- Provide elegant section indices 01–05 and optional thin progress rail, without overpowering imagery.

---

## 7. CONTENT & INTERACTION DETAILS

Provide real, well-written service copy and useful UX:
- Hero: **From Your Door to Their World.**
- Brand promise: **Precision in Every Parcel.**
- Story steps: Collection → Sorting → On the Road → London Hub → Delivered.
- Services cards with credible generic descriptions (no invented SLA or geographic guarantees).
- Tracking demo, postcode field validation, enquiry and collection form validation, helpful error/empty states, confirmation only when a real operation succeeds.
- Subtle hover/press/focus feedback, polished form controls, tasteful loading skeletons and clear mobile interactions.
- No lorem ipsum, stock-photo filler, fabricated testimonials or meaningless statistics.
- All male-only imagery if any additional people imagery is necessary; preferably use provided assets.

---

## 8. RESPONSIVE, PERFORMANCE AND RESOLUTION REQUIREMENTS

- Desktop 1920px+ and 4K monitors: serve high-fidelity frames matched to source capability, sharp typography and appropriately capped pixel ratio.
- Laptop/tablet: maintain cinematic layouts without overflow.
- Mobile: recompose film panels for portrait screens; do not blindly crop away the courier, van, parcel or trolley. Provide safe-area focal-point configuration per sequence.
- Use modern compression and HTTP caching, lazy routes and code splitting, prioritise first visible frames and critical CSS.
- Avoid massive initial network transfer: do not preload five full ZIP-derived sequences on page load.
- Evaluate whether image sequences are viable at the supplied frame counts; report realistic storage/network trade-offs. Do not claim lossless 4K playback if bandwidth/device cannot sustain it.
- Maintain sharp output without upscaling small originals as if they were native 4K.
- Respect `prefers-reduced-motion`; disable heavy scroll pinning and offer poster + descriptive step summaries.
- Target excellent Core Web Vitals, but report measured results rather than claiming guaranteed 100/100 scores.
- Prevent CLS, broken images, horizontal scrollbars, runaway memory and mobile browser crashes.

---

## 9. SEO, ACCESSIBILITY, QUALITY AND SECURITY

- Page-specific titles/descriptions, semantic heading hierarchy, clean canonical URLs, Open Graph and social previews using owned assets.
- Appropriate Organization/Service structured data **only with verified details**; no fake address, review or rating schema.
- `robots.txt`, sitemap, favicons, branded metadata and meaningful alt text.
- WCAG-minded contrast, focus states, skip link, keyboard interactions, labelled inputs, reduced-motion support.
- Sanitize and validate forms, avoid exposing secrets, avoid third-party tracking without consent, handle demo data transparently.
- Protect the ingestion pipeline from unsafe ZIP extraction and untrusted files.

---

## 9A. VISUAL AND INTERACTION ACCEPTANCE CRITERIA

Before delivery, manually review desktop, tablet and mobile screenshots of the home page and **each of the three dedicated service pages**. Verify that glass layers, morphing cards, CTA hover/press/focus, scroll reveals, page transitions, and all navigation links behave correctly. Test touch without hover, reduced-motion settings, keyboard focus, text contrast over glass, menu usability and low-end mobile performance. Confirm no images or visual assets depict women anywhere on the site, including incidental backgrounds. Check all five frame archives remain in their actual source order and the cinematic panels do not become a slideshow. Verify the original supplied logo is used faithfully throughout.

## 10. MANDATORY TEST MATRIX

Run and fix issues, not merely write a checklist:

1. All five archives extracted and indexed in correct numerical order; no missing or duplicated frames.
2. First, middle, final frames match each original source; no reverse order or skipped segments.
3. All per-sequence durations derived from real evidence or explicitly configured assumptions.
4. Desktop scrub forward/backward, fast scroll, pause/resume, reload, resize and navigation.
5. Frame transitions show no blank frames, flashing, severe stutter or unexpected resets.
6. Test 4K-capable large viewport visual clarity and realistic load costs; report actual source dimensions.
7. Test representative mobile viewport and midrange Android-like constraints; no memory blowup.
8. All visible branding matches supplied SwiftShip logo and source film.
9. No images containing women anywhere on any page, including placeholders and third-party content.
10. No Pakistan-related labels or addresses; British English throughout.
11. Forms and demo tracking clearly indicate what is simulated.
12. Run typecheck, lint, production build and available automated/browser tests; fix failures.
13. Check navigation, CTAs, accessibility and metadata.
14. Verify that deployment instructions and asset paths work on production hosting.

---

## 11. REQUIRED DELIVERABLES

Provide:

- Complete working source code and polished pages.
- A reusable five-sequence image-frame playback engine.
- ZIP-to-frames ingestion/validation script and per-sequence manifests.
- `ASSET_AUDIT.md` containing actual counts, resolutions, duration evidence and visual mapping.
- `DESIGN_SYSTEM.md` documenting brand tokens, typography, motion and responsive rules.
- `README.md` with setup, asset placement, run/build/deploy, reimport and FPS configuration instructions.
- Explicit test/build results and unresolved issues; do not claim completion without verification.
- A concise handover listing exact file paths and how the owner can replace brand/logo/ZIP assets for a future client.

### Reusability requirement

Architect this as a **rebrandable cinematic business website framework**: brand configuration, copy, service data, colors, logos, scene metadata and frame manifests must be cleanly separated from playback and layout logic. Do not hardcode SwiftShip-specific data deep inside the frame engine. For future courier, transport, logistics, IT or construction projects, the owner should be able to supply new branded assets and a new storyboard without rebuilding the technical core.

---

## 11A. FINAL PREMIUM SITE COMPLETENESS CHECK

Do not mark the task complete unless all these exist and work: homepage five-chapter cinematic scroll experience; Services index; **at least three distinct service detail routes**; About; How It Works; demo Tracking; Contact/Collection enquiry; coherent brand/logo; premium glass navigation/cards/buttons; morphing cinematic containers; responsive and accessible motion; audited ZIP frame pipeline; honest demo labeling; working internal links; QA evidence and build validation. A homepage alone is a failure. Generic service cards without real service pages are a failure.

## 12. FINAL COMMAND TO ANTIGRAVITY

**Do not begin by producing a generic website. First inspect the supplied logo and five ZIP archives, prove you understand the actual frames, build an evidence-based asset manifest, then construct the complete premium UK SwiftShip website around those real cinematic sequences.**

The result should feel like a continuous, meticulously art-directed courier journey, with a hero film, contextual left/right/full-width scroll choreography, clear UK courier service messaging, accessible interactive pages, and crisp source-faithful visuals. Preserve every actual frame in order, respect real durations, use maximum practical resolution without crippling performance, never show women in imagery, never change the supplied logo, and never invent company facts or operational integrations.

**READ → AUDIT → PLAN → BUILD → TEST → FIX → VALIDATE → DELIVER.**
