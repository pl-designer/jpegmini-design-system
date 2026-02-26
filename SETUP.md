# 🚀 Setup Guide — JPEGmini Multi-Agent Design System on Claude Code

## מה יש כאן

```
jpegmini-design-system/
├── CLAUDE.md                          ← Master Agent (נקרא אוטומטית ע"י Claude Code)
├── .claude/
│   └── agents/
│       ├── ux-knowledge.md            ← Agent 1: UX/UI Knowledge Base
│       ├── visual-generation.md       ← Agent 2: Visual Code Generation
│       ├── context-engine.md          ← Agent 3: Prompt Engineering & Context
│       ├── iteration-engine.md        ← Agent 4: Surgical Iteration
│       └── ux-reviewer.md            ← Agent 5: UX Review & Validation
├── context/
│   ├── project-context.md             ← Background on JPEGmini project
│   ├── design-system.md              ← Color, typography, spacing tokens
│   └── decisions-log.md              ← Documented design decisions
├── outputs/                           ← Generated screens go here
└── SETUP.md                          ← This file
```

---

## Step-by-Step Setup

### Step 1: Copy the project folder
העתיקי את כל תיקיית `jpegmini-design-system` למקום נוח במחשב שלך.

```bash
# לדוגמה:
cp -r jpegmini-design-system ~/projects/jpegmini-design-system
```

### Step 2: Open Terminal & Navigate
```bash
cd ~/projects/jpegmini-design-system
```

### Step 3: Start Claude Code
```bash
claude
```

זהו. Claude Code יקרא אוטומטית את `CLAUDE.md` וידע:
- מי הוא (Master Design Partner)
- מה הפרויקט (JPEGmini)
- איפה ה-design system
- איפה ה-context
- אילו sub-agents זמינים

---

## How to Use — איך להשתמש

### 💬 Brief חדש (מסך חדש)
```
Design a workspace screen where the video owner can see all their uploaded 
and compressed videos. Include: video thumbnails in a card grid, file metadata 
(name, size, duration, compression ratio), status badges (processing/ready/shared), 
and action buttons (share, download) on each card. Include a search bar and 
filter options at the top.
```

### ✏️ שינוי בעיצוב קיים
```
Make the video cards larger — increase card width to show bigger thumbnails.
```

```
Change the grid from 4 columns to 3 columns.
```

```
Something feels off about the spacing — can you diagnose?
```

### 🔍 בקשת ביקורת
```
Review the workspace design for accessibility issues.
```

```
How does this look? Quick check.
```

### 🤔 שאלה אסטרטגית
```
Should the workspace use a sidebar navigation or top tabs? 
The app currently has: Workspace, Upload, Analytics, Settings.
```

### 🔄 Rollback
```
Go back to the previous version before we changed the grid.
```

---

## Important Notes

### 🧠 The system routes intelligently
לא כל brief מפעיל את כל הסוכנים. אם את שואלת שאלה אסטרטגית — רק Knowledge Base עובד. אם את מבקשת שינוי קטן — רק Iteration Engine. המאסטר מחליט.

### 📝 Decisions are tracked
כל החלטה שמתקבלת מתועדת ב-`context/decisions-log.md`. זה אומר שהסוכן לא שואל אותך את אותו דבר פעמיים.

### 🎨 Design system is respected
כל output משתמש בטוקנים מ-`context/design-system.md`. אם את רוצה לשנות צבע — עדכני את הקובץ ואמרי "I updated the design system."

### 📁 Outputs are saved
קבצים שנוצרים נשמרים ב-`outputs/`. את יכולה למצוא שם את כל המסכים שנוצרו.

### 🌐 Hebrew + English
דברי באיזו שפה שנוח לך. הסוכן עוקב אחרי השפה שלך.

---

## First Test — הניסוי הראשון

אחרי שפתחת Claude Code בתיקייה, נסי את ה-brief הזה:

```
Design the Workspace screen for JPEGmini. This is the owner's main dashboard 
where they see all their uploaded videos. Each video should be displayed as a card 
with a thumbnail, video title, file size (before and after compression), duration, 
status badge, and action buttons for Share and Download. Include a top bar with 
search and filter options (by status, date, format). The workspace should feel 
professional and efficient — this is where power users spend most of their time.
```

---

## Troubleshooting

### Claude doesn't seem to know the project context
→ Make sure you're running `claude` from inside the `jpegmini-design-system` folder. CLAUDE.md only works when Claude Code is launched from the folder where it exists.

### Sub-agents aren't being used
→ Claude Code reads `.claude/agents/` automatically. If they're not being invoked, try being more specific in your request: "Design a new screen" (triggers generation) vs "Review this" (triggers review).

### Design system not being applied
→ Check that `context/design-system.md` exists. You can also explicitly say: "Make sure to use the JPEGmini design system tokens."
