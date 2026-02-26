# JPEGmini Video Sharing Platform — Project Context

## Product Overview

JPEGmini is a B2B SaaS platform for video compression and optimization. The core value proposition: reduce video file sizes dramatically (up to 68% compression) while maintaining visual quality. The video sharing feature allows users to share compressed videos with recipients via link, email, or social media.

## Target Users

### Primary: Video Owner (Content Creator / Marketing Team)
- Uploads videos for compression
- Manages compressed video library
- Shares videos with clients, stakeholders, team members
- Downloads compressed videos in multiple formats
- Needs efficient workflow — doesn't want to spend time figuring out how to share

### Secondary: Video Recipient
- Receives shared links
- Views and downloads shared videos
- Does NOT have a JPEGmini account
- Needs zero-friction experience (WeTransfer-like simplicity)

## Platform
- **Web application** (desktop-first, responsive)
- **Theme**: Dark UI (professional media/creative tool aesthetic)
- **Inspiration**: Frame.io (UI quality), WeTransfer (UX simplicity)

## Screens Designed So Far

### 1. Video Landing Page
- What recipients see when they click a shared link
- Video player, metadata (title, duration, format, size), download options
- All formats available for download from single link
- "Powered by JPEGmini" footer
- Dark theme, professional, minimal

### 2. Video Player
- Full playback controls: play/pause, volume, progress bar
- Playback speed control (0.5x - 2x)
- Settings, fullscreen
- Overlay design (controls appear on hover)

### 3. Share Modal
- Two modes: Create Link (default) / Send via Email
- Create Link: copy link, optional password, optional expiration, optional disable download
- Send Email: email input, optional message, optional password
- Social sharing: WhatsApp, Facebook, Twitter, LinkedIn
- Each video gets its own unique share link

### 4. Owner Share Flow
- Split layout: video preview (40%) + share form (60%)
- Owner sees this when clicking Share on a video
- Combines the share modal functionality with video preview context

## Key Design Decisions Already Made

1. **Dark theme** — Professional media tool aesthetic, reduces eye strain for prolonged use
2. **Each video = one share link** — No bulk sharing, each video has individual link with individual settings
3. **No Before/After in shared view** — Compression stats are internal (workspace only), recipients just see the final product
4. **All formats in one link** — Share link includes all format options, no format selection before sharing
5. **Download is separate from Share** — Download is a direct action, Share creates a link/sends email
6. **WeTransfer-inspired sharing** — Minimal fields, minimal friction, no login required for recipients

## What's NOT Designed Yet

- **Workspace** (owner's video management dashboard) — NEXT UP
- Upload flow
- Account/settings
- Billing
- Analytics/stats
- Team management
