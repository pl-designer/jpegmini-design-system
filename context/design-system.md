# JPEGmini Design System — Token Reference

## Status: Partial (extracted from existing screens)
## Last Updated: February 2026

---

## Colors

### Surfaces (Dark Theme — Layered)
```
--surface-base:     #0a0a0a    /* Page background */
--surface-card:     #1a1a1a    /* Cards, panels, containers */
--surface-elevated: #1e1e1e    /* Modals, dropdowns, popovers */
--surface-hover:    #2a2a2a    /* Hover states, active surfaces */
--surface-input:    #2a2a2a    /* Input field backgrounds */
```

### Borders
```
--border-subtle:    #1e1e1e    /* Card borders, dividers */
--border-default:   #333333    /* Input borders, visible dividers */
--border-strong:    #3a3a3a    /* Active/focused borders */
```

### Text
```
--text-primary:     #E5E7EB    /* Primary body text (NOT pure white) */
--text-secondary:   #9CA3AF    /* Secondary labels, descriptions */
--text-muted:       #6B7280    /* Disabled, placeholder, helper text */
--text-inverse:     #FFFFFF    /* Text on colored backgrounds (buttons) */
```

### Interactive / Accent
```
--primary:          #3B82F6    /* Primary buttons, links, active states */
--primary-hover:    #2563EB    /* Primary hover */
--primary-muted:    rgba(59, 130, 246, 0.1)  /* Primary subtle backgrounds */
```

### Semantic
```
--success:          #22C55E    /* Success states, completed */
--success-muted:    rgba(34, 197, 94, 0.1)
--warning:          #F59E0B    /* Warnings, processing */
--warning-muted:    rgba(245, 158, 11, 0.1)
--error:            #EF4444    /* Errors, destructive */
--error-muted:      rgba(239, 68, 68, 0.1)
--info:             #3B82F6    /* Info states */
```

### Gradients (used sparingly)
```
--gradient-primary: linear-gradient(135deg, #3B82F6, #2563EB)  /* Primary buttons */
```

---

## Typography

### Font Family
```
--font-primary:     'Inter', -apple-system, BlinkMacSystemFont, sans-serif
```

### Scale
```
--text-xs:    12px / 1.4 line-height   /* Captions, badges, helper text */
--text-sm:    14px / 1.5               /* Table content, secondary info */
--text-base:  16px / 1.5               /* Body text, input values */
--text-lg:    18px / 1.5               /* Lead text, card titles */
--text-xl:    20px / 1.3               /* Section headings */
--text-2xl:   24px / 1.2               /* Page section titles */
--text-3xl:   30px / 1.2               /* Page titles */
```

### Weights
```
Regular (400):    Body text, descriptions
Medium (500):     Labels, table headers, secondary emphasis
Semibold (600):   Card titles, section headings, button labels
Bold (700):       Page titles, primary headings
```

---

## Spacing

### Base Unit: 8px
```
--space-1:    4px     /* Tight gaps, icon-to-text */
--space-2:    8px     /* Between related items */
--space-3:    12px    /* Small component padding */
--space-4:    16px    /* Default component padding */
--space-5:    20px    /* Medium gaps */
--space-6:    24px    /* Section padding, card padding */
--space-8:    32px    /* Between sections */
--space-10:   40px    /* Major section gaps */
--space-12:   48px    /* Page sections */
--space-16:   64px    /* Large gaps, page margins */
```

---

## Border Radius
```
--radius-sm:   4px     /* Small elements, badges */
--radius-md:   8px     /* Buttons, inputs */
--radius-lg:   12px    /* Cards, containers */
--radius-xl:   16px    /* Modals, large cards */
--radius-full: 9999px  /* Circles, pills */
```

---

## Shadows
```
--shadow-sm:   0 1px 2px rgba(0, 0, 0, 0.3)     /* Subtle elevation */
--shadow-md:   0 4px 6px rgba(0, 0, 0, 0.4)     /* Cards, dropdowns */
--shadow-lg:   0 10px 15px rgba(0, 0, 0, 0.5)   /* Modals, overlays */
```

Note: In dark themes, shadows are less visible. Rely more on border and surface color differentiation for elevation.

---

## Component Patterns (Established)

### Buttons
```
Primary:    bg-gradient(primary) text-white font-semibold px-6 py-3 rounded-lg
Secondary:  bg-transparent border-[#3a3a3a] text-[#E5E7EB] font-medium px-4 py-2 rounded-lg
Ghost:      bg-transparent text-[#9CA3AF] hover:text-[#E5E7EB] hover:bg-[#2a2a2a]
Danger:     bg-[#EF4444] text-white
```

### Cards
```
Container:  bg-[#1a1a1a] border border-[#1e1e1e] rounded-xl p-6
Hover:      hover:border-[#333333] transition-colors
```

### Inputs
```
Default:    bg-[#2a2a2a] border-2 border-[#3a3a3a] rounded-lg px-4 py-3 text-white
Focus:      focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6]
```

### Badges / Tags
```
Status:     px-3 py-1 rounded-full text-xs font-medium
Ready:      bg-[rgba(34,197,94,0.1)] text-[#22C55E]
Processing: bg-[rgba(245,158,11,0.1)] text-[#F59E0B]
Shared:     bg-[rgba(59,130,246,0.1)] text-[#3B82F6]
```

---

## Existing Screens Reference

1. **Video Landing Page** — Recipient view after receiving shared link
2. **Video Player** — Full player with controls overlay
3. **Share Modal** — Link creation, email, social sharing
4. **Owner Share Flow** — Split view: video preview (40%) + share form (60%)

All screens follow dark theme. Desktop-first, responsive considerations noted but not fully implemented.
