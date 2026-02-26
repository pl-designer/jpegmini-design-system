# Design Decisions Log — JPEGmini Video Sharing Platform

---

## October 2025 — Video Sharing Flow

### Decision: Dark Theme as Primary
- **Rationale**: Professional media/creative tool aesthetic. Consistent with industry tools (Frame.io, DaVinci Resolve). Reduces eye strain for users working with video content.
- **Alternatives considered**: Light theme (rejected — doesn't match the professional video tool positioning)
- **Impact**: All surfaces, text, and components follow dark theme token system.

### Decision: UI Inspiration from Frame.io, UX Inspiration from WeTransfer
- **Rationale**: Frame.io represents best-in-class professional video UI. WeTransfer represents best-in-class sharing simplicity. Combining both creates a professional tool that doesn't overcomplicate sharing.
- **Impact**: Component styling leans professional/dense (Frame.io). Sharing flows lean minimal/zero-friction (WeTransfer).

### Decision: One Link Per Video
- **Rationale**: Simplicity. Each video is a self-contained shareable unit. No need to select formats before sharing — all formats are included in the link.
- **Impact**: Share modal generates one link. Landing page shows all available formats.

### Decision: No Compression Stats in Shared View
- **Rationale**: Recipients don't care about compression ratios. They care about watching and downloading. Before/After stats are an internal owner feature.
- **Impact**: Landing page shows only final video metadata. Workspace (owner view) will show compression stats.

### Decision: Split Layout for Owner Share Flow (40/60)
- **Rationale**: Owner needs video context while configuring share settings. 40% for video preview gives enough visual context without competing with the share form.
- **Impact**: Share flow is a two-column layout, not a modal overlay.

---

## February 2026 — Workspace

### Decision: Card-Based Grid for Workspace
- **Rationale**: Video content is highly visual — card grid with 16:9 thumbnails gives owners instant recognition. 4-column responsive grid (1→2→3→4 cols) scales across breakpoints.
- **Alternatives considered**: Table/list view (rejected as primary — less visual, harder to scan thumbnails; could be added as toggle later), Kanban by status (rejected — not a workflow-oriented screen).
- **Impact**: Main workspace layout is a card grid. Each card contains thumbnail, metadata, status badge, and action buttons.

### Decision: Compression Stats Visible in Workspace Cards
- **Rationale**: Per earlier decision, compression stats are an owner-only feature. The workspace is the owner's view, so original→compressed size with percentage reduction is shown on each card.
- **Impact**: Cards display "1.8 GB → 612 MB -66%" with green accent on the ratio.

### Decision: Inline Status Filters (Pill Buttons)
- **Rationale**: Three status values (Processing/Ready/Shared) are few enough for inline pill filters rather than a dropdown. Faster scanning, one-click filtering, always visible.
- **Alternatives considered**: Dropdown filter (rejected — hides options behind a click for only 3 values), sidebar facets (rejected — overkill for single-dimension filtering).
- **Impact**: Filter bar uses pill-shaped toggle buttons with "All" as default.

### Decision: Disabled Actions for Processing Videos
- **Rationale**: Share and Download are not available while a video is still compressing. Buttons are visually dimmed (40% opacity) and disabled to prevent confusion.
- **Impact**: Processing cards show a spinner overlay on the thumbnail and disabled action buttons.

---

## February 2026 — Gallery Redesign & Popup Rethink

### Decision: Card Click Targets
- **Play button** → plays video inline on the card (no popup)
- **Card body (title & meta)** → opens popup with details, variants, and all actions
- **Variant badge** → opens popup scrolled to variant gallery
- **Hover actions** → "Crop" and "+ Add Formats" open their respective modals directly

### Decision: Hover Actions on Cards
- Cards show "Crop" and "+ Add Formats" buttons on thumbnail hover.
- Green button = dark text (`#0f0f0f`), always.
- Button is named "Crop" (not "Reframe").

### Decision: "+ Add Formats" Opens a Modal (Not Popup)
- Matches Figma node 5903:111108. Three format cards with checkboxes.

### Note: Popup & Modal Interaction Rethink (To Explore)
- **Single variant = optimized video only.** The current popup variant strip is too small and navigation-heavy for a single variant. The popup was designed for ~5 variants — not 1.
- **Proposed direction**: Download, Share, and similar actions should open as a **drawer/panel** (same pattern as the modal), not as a separate popup flow. Keep the interaction model consistent.
- **Crop wizard flow**: When the user is already inside the Crop modal and wants to create an additional crop, it should **navigate within the same modal as a wizard step** — not spawn a new popup on top.
- **Same pattern for Share and Download modals**: These should also open as drawer/panel overlays, consistent with the Crop and Output Formats modals.
- **Goal**: One consistent overlay pattern for all actions. Reduce popup nesting. Keep the user in context.
