# ARCHITECTURE.md — Tresnojoyo (Grosir Semangka Pasar Induk Kramat Jati)

> Context & guardrail document for AI Coding Agents. Read this file **and** `.agent/skills/taste-skill/SKILL.md` before creating, modifying, or reviewing any code in this repository.

---

## 0. Rule Precedence (Conflict Resolution)

**`taste-skill` (`.agent/skills/taste-skill/SKILL.md`) WINS over `desain.md` on every conflict.**

- Whenever `desain.md` (or existing legacy JSX/CSS in `src/`) conflicts with `.agent/skills/taste-skill/SKILL.md` and its `references/`, **follow `taste-skill`**.
- `desain.md` remains in the repository only as historical context for the initial draft and brand copy/domain facts; it does **not** override `taste-skill` layout, color, radius, photography, motion, copy, or browser-gate rules.
- Real client-provided business facts (e.g., `Tresnojoyo`, `Bapak Sutrisno`, real WhatsApp/phone number, Pasar Induk Kramat Jati location) come from the client brief / `src/data/lapakData.js`. If `taste-skill` automated checks (`copy-lint.mjs` / `consistency.mjs`) flag legitimate client-supplied data (such as real phone format or street/market details), record an explicit waiver in `.taste-skill/waivers.json` with the client brief as the reason rather than fabricating fake contacts or gaming the checker (per `SKILL.md` §4 step 6).

---

## 1. Project Overview & Tech Stack

- **Project Name:** `tresnojoyo`
- **Business Classification (`taste-skill` §1):** `place` (`page-type: place`, `site-kind: other`, `page-kind: place`) — physical wholesale watermelon stall/agent (*lapak*) at Pasar Induk Kramat Jati, Jakarta Timur, where buyers visit in person or coordinate pickup/delivery via WhatsApp and phone.
- **Core Stack:**
  - **UI Library:** React `19.3.1` (`react`, `react-dom`) with JavaScript (`.jsx`/`.js`) and `StrictMode`.
  - **Bundler / Dev Server:** Vite `8.3.6` (`@vitejs/plugin-react`).
  - **Styling:** Tailwind CSS v4 (`tailwindcss` `4.3.5` + `@tailwindcss/vite`), configured in `src/index.css`.
  - **Typography:** Google Fonts `Figtree` (`--font-display`, weights 700/800) and `Golos Text` (`--font-sans`, weights 400/500/600), loaded in `index.html` (subject to `taste-skill` pairing rules when restyling via `start.mjs`).
  - **Linter:** `oxlint` (`1.90.0`) via `npm run lint`.
  - **Design & QA Skill Kit:** `.agent/skills/taste-skill/` (`design-taste-frontend` / `tasteskill 2.5.1`), which includes `assets/`, `library/`, `references/`, and Node verification scripts (`scripts/gate.mjs`, `scripts/consistency.mjs`, `scripts/copy-lint.mjs`, `scripts/perf.mjs`, `assets/layout/check.mjs`, `scripts/shoot.mjs`).
  - **Unused Package:** `lucide-react` (`1.77.0`) is installed in `package.json` but currently unused.
- **Key Scripts:**
  - `npm run dev` — Start Vite dev server
  - `npm run build` — Output production bundle to `dist/`
  - `npm run lint` — Run `oxlint`
  - `npm run preview` — Preview production build locally

---

## 2. Directory & File Responsibility

```text
Tresnojoyo/
├── .agent/
│   └── skills/taste-skill/    # Authoritative frontend skill, references, assets & QA scripts
├── index.html                  # Document shell, meta tags, Google Fonts, #root mount
├── vite.config.js              # Vite plugins: react() and tailwindcss()
├── package.json                # Dependencies & scripts (dev, build, lint, preview)
├── ARCHITECTURE.md             # This file — architecture & agent rule precedence
├── desain.md                   # Legacy UI spec (superseded by taste-skill on conflicts)
├── public/
│   ├── favicon.svg             # Site favicon
│   ├── robots.txt              # Search crawler directives
│   └── images/                 # Static public images served at /images/* (currently SVGs)
├── dist/                       # Production build output (DO NOT edit manually)
└── src/
    ├── main.jsx                # React root mount & global CSS entry
    ├── index.css               # Tailwind v4 @import and @theme tokens
    ├── App.jsx                 # Page composition & top hero wrapper
    ├── App.css                 # Unused Vite starter stylesheet (legacy, not imported)
    ├── assets/                 # Unused Vite starter assets (hero.png, react.svg, vite.svg)
    ├── data/
    │   └── lapakData.js        # Centralized business info, catalog data, & WA/Tel link helpers
    └── components/
        ├── Navbar.jsx          # Top navigation + brand wordmark + phone CTA
        ├── Hero.jsx            # Above-the-fold hero (`#hero`) headline, subheadline, WA & Phone CTAs
        ├── Keunggulan.jsx      # 3-column horizontal indexed fact strip (`01`–`03`)
        ├── Katalog.jsx         # 3-column watermelon variant cards with per-variant WA CTA
        ├── Galeri.jsx          # Asymmetric 12-col (7+5) operational documentation grid
        ├── LokasiKontak.jsx    # Store address, driver landmark copy, CTAs, Maps embed
        ├── Footer.jsx          # Footer with brand, address summary, anchor links
        └── StickyMobileBar.jsx # Fixed bottom 2-button bar on mobile (< md), shown after #hero
```

### File Placement Rules
- **Page Sections / UI Components (`src/components/`):** One component per section or distinct UI surface, PascalCase filename (`*.jsx`), default export. Every `<section>` inside `<main>` should map cleanly to a screen-sized section block.
- **Domain Content & Helpers (`src/data/`):** Business identity, contact numbers, location metadata, catalog arrays, gallery items, and URL builders (`getWaLink`, `getTelLink`) belong in `src/data/lapakData.js`.
- **Static Images (`public/images/`):** Served from `/images/<filename>`. When adopting the `taste-skill` asset kit in an existing Vite project, copy required kit assets into `public/assets/` as plain files (per `SKILL.md` §4 step 0) rather than editing files inside `.agent/skills/taste-skill/`.
- **Global Styles (`src/index.css`):** Define Tailwind v4 `@theme` variables, CSS custom properties, and base styling here. Do not add component-scoped CSS files.
- **Do Not Edit `dist/` or `.agent/skills/taste-skill/`:** Always regenerate `dist/` via `npm run build` and never modify skill kit files to silence checks.

---

## 3. Component Hierarchy & State Management

### Component Tree (Current Implementation)

```text
StrictMode (src/main.jsx)
└── App (src/App.jsx)
    ├── [Hero Background Wrapper: bg-cover + emerald-950 gradient overlay]
    │   ├── Navbar
    │   └── Hero
    ├── <main>
    │   ├── Keunggulan      (reads `daftarPilar` from lapakData.js)
    │   ├── Katalog         (reads `varianSemangka`, `getWaLink` from lapakData.js)
    │   ├── Galeri          (reads `fotoGaleri` from lapakData.js)
    │   └── LokasiKontak    (reads `lapakInfo`, `getWaLink`, `getTelLink`; local clipboard state)
    ├── Footer              (reads `lapakInfo`)
    └── StickyMobileBar     (reads `getWaLink`, `getTelLink`; local `tampilBar` state via `#hero` observer)
```

### Data Flow & State Architecture
- **Global State:** None. Pure client-side React SPA without Context API, external state stores, or REST/GraphQL fetching.
- **Primary Data Source (`src/data/lapakData.js`):**
  - `lapakInfo`: Store name, tagline, owner (`Bapak Sutrisno`), phone/WA numbers, default WA prefill message, address, region (`wilayah`), directions, hours, Google Maps URLs, and `heroImage`.
  - `varianSemangka`: Array of 3 watermelon variants (`id`, `nama`, `spesifikasi`, `deskripsi`, `kecocokanUsaha[]`, `gambar`).
  - `daftarPilar`: Array of 3 indexed pillars (`id`, `kode`, `judul`, `deskripsi`) for `Keunggulan.jsx`.
  - `fotoGaleri`: Array of 3 gallery entries for `Galeri.jsx`.
  - `getWaLink(customMessage?)` & `getTelLink()`: Pure helpers generating `https://wa.me/...` and `tel:` URLs.
- **Local Component State:**
  - `LokasiKontak.jsx` maintains `const [sudahSalin, setSudahSalin] = useState(false)` with a `useRef` timer cleanup for 2-second clipboard feedback (`navigator.clipboard.writeText`).
  - `StickyMobileBar.jsx` maintains `const [tampilBar, setTampilBar] = useState(false)` driven by `IntersectionObserver` on `#hero` (with `window.scrollY > 320` fallback).

---

## 4. Routing & Navigation Map

Single-page application (`/`) with no router library (`react-router` is not installed). Smooth anchor scrolling is set on `<html lang="id" class="scroll-smooth">` in `index.html`.

| Target / Route | Component | Navigation Trigger | Purpose |
| :--- | :--- | :--- | :--- |
| `/` (top) | `Navbar` + `Hero` | `href="#"` (Navbar wordmark) | Hero value proposition & primary WhatsApp/Phone conversion |
| *(no anchor)* | `Keunggulan` | Scroll flow | 3 wholesale value-proposition pillars |
| `/#katalog` | `Katalog` | `Navbar` & `Footer` (`href="#katalog"`) | 3 watermelon variants + per-variant WhatsApp inquiry |
| `/#galeri` | `Galeri` | `Navbar` & `Footer` (`href="#galeri"`) | Daily unloading & sorting photography |
| `/#lokasi` | `LokasiKontak` | `Navbar` & `Footer` (`href="#lokasi"`) | Address, driver landmark copy, Google Maps link & embed |
| External `wa.me` | `Hero`, `Katalog`, `LokasiKontak`, `StickyMobileBar` | `getWaLink(...)` (`target="_blank"`) | Direct WhatsApp chat with prefilled message |
| External `tel:` | `Navbar`, `Hero`, `LokasiKontak`, `StickyMobileBar` | `getTelLink()` | Direct phone call to `lapakInfo.nomorTelepon` |

---

## 5. Coding Standards & Guardrails (`taste-skill` Priority)

### Mandatory Rules (Do's)
1. **Follow `taste-skill` for `place` Sites:**
   - Declare `<html data-type ...>` and `<meta name="page-type">`, `<meta name="site-kind">`, `<meta name="page-kind" content="place">` per `SKILL.md` §1.
   - Read `.agent/skills/taste-skill/references/copy.md`, `copy-voice.md`, `system.md`, `layout-v4.md`, `sections.md`, `photos.md`, and `moments.md` before major UI/redesign work.
   - Use **real photographs** (or licensed stand-ins via `scripts/photos.mjs` when client photos are not ready) — never SVG illustrations/drawings for product or operational photography.
   - Use **flat light grounds**, square photo framing, crisp equal left/right content edges, and **one section per screen** (hero alone on the first screen; no second section heading peeking into screen 1).
   - Apply `taste-skill` hover micro-interactions (`2px` card lift, `1.02–1.03` photo zoom inside frame, button hover step & click press) and hero entrance (`data-enter`) + dealt photo/type moment(s), with zero scroll fade-ins on every card/section.
   - Use clear **verb + object** button copy (e.g., `"Chat WhatsApp"`, `"Telepon Lapak"`, `"Tanya Stok Varian Ini"`).
2. **Single Source of Truth for Business Info:** Import `lapakInfo`, `getWaLink`, and `getTelLink` from `src/data/lapakData.js` rather than duplicating contact numbers or addresses in components.
3. **Accessibility, Mobile Clearance & Link Safety:**
   - Maintain `44px+` tap targets (`min-h-[48px]` on mobile sticky bar) with `>= 8px` spacing and zero horizontal overflow down to `320px` width.
   - Preserve bottom clearance (`pb-24 md:pb-0` or equivalent) when `StickyMobileBar` is active so footer links/text are never covered.
   - Keep `loading="lazy"` on below-the-fold images/iframe and `rel="noopener noreferrer"` on `target="_blank"` links.
4. **Verification Before Finishing:**
   - Run `npm run lint` (`oxlint`) and `npm run build` after changes.
   - For UI/layout/copy work, run the `taste-skill` check pipeline against the built output (`dist/index.html --root dist`) using `copy-lint.mjs`, `consistency.mjs`, `layout/check.mjs`, `shoot.mjs`, `perf.mjs`, and `gate.mjs` until `GATE: PASS` / `GATE: OPEN` (or `GATE: DONE` if explicitly instructed to stop).

### Prohibitions (Don'ts)
1. **No Captions Under Images (`taste-skill` House Rule #1):** Do NOT place captions, labels, or descriptions underneath photographs or visuals (credits go in one footer line only if required by stand-in photos).
2. **No Dark Hero, Gradients, Shaders, or Effects on `place` (`taste-skill` §1–§2):** Do NOT use dark page backgrounds, dark hero gradient overlays, shader effects, CSS decorative grounds, or WebGL scenes on this `place` website.
3. **No Decorative Badges, Banners, or Glow:** Do NOT add pill badges (`"TERPOPULER"`, `"STOK RUTIN"`), text overlays over images, neon/pastel glow text, or violet/lavender accents.
4. **No Hero Overlap / Negative Margin Peeking (`taste-skill` House Rule #3):** Do NOT pull the second section over the hero with negative margins (`-mt-16 sm:-mt-24`).
5. **No Drawn Illustrations for Real Products/Places:** Do NOT ship `.svg` mock illustrations in place of real watermelon/market photographs.
6. **No Scroll-Reveal Fade-Ins or Parallax on Text:** Do NOT animate cards/rows into view on scroll (`SKILL.md` §6).
7. **No Kit Tampering:** Never edit files inside `.agent/skills/taste-skill/` to bypass a check.

---

## 6. Pending Migration Deltas (Current Codebase → `taste-skill`)

Because the current codebase was originally built against `desain.md`, the following existing patterns violate `taste-skill` and should be updated during the next UI refactor:

| File | Current State (`desain.md`) | Target State (`taste-skill`) |
| :--- | :--- | :--- |
| `index.html` | Missing `data-type`, `page-type`, `site-kind`, `page-kind` metas; `<body class="bg-emerald-950 ...">` | Add `place` metadata attributes/tags; light flat ground tokens |
| `src/App.jsx` | Dark hero wrapper with `from-emerald-950/85 ...` gradient overlay | Light `place` hero layout without dark gradient overlay |
| `src/components/Keunggulan.jsx` | Negative margin `-mt-16 sm:-mt-24`, `rounded-t-[40px]` | Separate full-screen-aligned section without overlapping hero |
| `src/components/Katalog.jsx` | `rounded-3xl` grey/green panels, `.svg` product illustrations (`varian-*.svg`) | Real/stand-in photographs in square/clean frames per `place` / `sections.md` |
| `src/components/Galeri.jsx` | `<figcaption>` rendered under each image per `desain.md`, `.svg` placeholders (`galeri-*.svg`) | Remove captions under images (House Rule #1); use real/stand-in photographs |
| `src/components/LokasiKontak.jsx` | Dark `bg-emerald-950` rounded card (`rounded-[32px] sm:rounded-[48px]`) | Flat light `place` visit/location block per `sections.md` §4 (`Place`) |
| `src/components/Navbar.jsx` & `StickyMobileBar.jsx` | Button text `"Telepon"` (single word) | Verb + object button copy (e.g., `"Telepon Lapak"`) |
| `src/App.css`, `src/assets/*`, `package.json` (`lucide-react`) | Unused Vite starter CSS/assets and unused icon dependency | Clean up unused starter files/deps when tidying the repo |
