# Gravity Pause

> A shared moment the entire world reaches at the same time. Nothing is required of you.

**Live at:** [pause.quantummerlin.com](https://pause.quantummerlin.com)

## About

Gravity Pause is an experiment in shared temporal experience. It marks specific moments throughout each day that occur simultaneously for everyone on Earth, creating opportunities for collective awareness without requiring any action or belief.

This project studies how people relate to shared moments in time — not as a meditation app, productivity tool, or spiritual practice, but simply as moments that exist.

## The Experiment

- **Primary Experience:** Daily Gravity Pause at UTC midnight (12:00 AM)
- **Purpose:** To observe organic traffic patterns and user engagement with temporal experiences
- **Duration:** 90-day observation period
- **Approach:** No marketing, no claims, no forced engagement — purely organic discovery

### Variant Experiences

The project includes several temporal variants:
- **Daily Reset:** Local midnight countdown
- **Before Sleep:** 10 PM pause (dark theme)
- **Start of Day:** 6 AM pause (warm theme)
- **Collective Breath:** Hourly pause moments
- **Random Pause:** Pseudo-random daily timing
- **Gravity Pause 2026:** Historical anchor (August 12, 2026)

## Features

- ⏱️ **Real-time countdowns** to specific moments in time
- 🌍 **Timezone-aware** — works globally
- 📱 **Progressive Web App** — installable on mobile/desktop
- 🎨 **Calm, minimal design** inspired by behavioral science principles
- 🔒 **Privacy-first** — no accounts, no data collection beyond analytics
- 📊 **Google Analytics** integration for traffic observation (G-VW4LGE7L1T)

## Technology Stack

- Pure HTML/CSS/JavaScript (no frameworks)
- Service Worker for offline support
- Web App Manifest for PWA functionality
- Google Analytics 4 for traffic tracking
- Cloudflare Pages for hosting

## File Structure

```
pause/
├── index.html              # Main Gravity Pause page
├── styles.css              # Shared calm design system
├── app.js                  # Core countdown engine (UTC midnight)
├── personal.js             # Birthdate result bucket system
├── service-worker.js       # PWA offline support
├── manifest.json           # PWA manifest
├── about.html              # About page
├── privacy.html            # Privacy policy
├── terms.html              # Terms of use
├── gravity-pause-2026.html # August 2026 alignment
├── daily-reset.html        # Local midnight variant
├── before-sleep.html       # 10 PM variant (dark theme)
├── start-of-day.html       # 6 AM variant (warm theme)
├── collective-breath.html  # Hourly pause variant
├── random-pause.html       # Random timing variant
├── DEPLOYMENT.md           # Deployment guide
└── APPRAISAL.md           # Project appraisal notes
```

## Deployment

This project is deployed on **Cloudflare Pages** at `pause.quantummerlin.com`.

### Quick Setup

1. **Fork/Clone this repository**
   ```bash
   git clone https://github.com/yourusername/pause.git
   ```

2. **Deploy to Cloudflare Pages**
   - Connect your GitHub repository to Cloudflare Pages
   - Set build command: (none - static site)
   - Set build output directory: `/`
   - Add custom domain: `pause.quantummerlin.com`

3. **Configure DNS**
   - Add CNAME record: `pause` → your Cloudflare Pages URL
   - Enable automatic HTTPS

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed deployment instructions.

## Design Philosophy

This project follows strict behavioral science principles:

### What We Never Do
- ❌ No login/signup requirements
- ❌ No push notifications
- ❌ No claims about outcomes or benefits
- ❌ No urgency language ("Don't miss out!")
- ❌ No gamification or streak tracking
- ❌ No feature additions without data justification

### What We Do
- ✅ Observe without interference (90-day rule)
- ✅ Keep ads as "furniture, not billboards"
- ✅ Make no promises about what the pause "does"
- ✅ Allow people to assign their own meaning
- ✅ Track behavior, not beliefs

## Analytics & Observation

**Key Metrics Being Tracked:**
- Return visits within 7 days
- Session duration (target: >40s)
- Pages per session (target: >1.5)
- Scroll depth
- Variant engagement patterns

**90-Day Observation Framework:**
- **Days 1-30:** No changes. Observe only.
- **Days 31-60:** Minor copy adjustments if needed.
- **Days 61-90:** Consider variants based on data.

## Privacy & Data

- No personal data collected beyond standard Google Analytics
- No cookies except GA session tracking
- No user accounts or registration
- All data anonymous and aggregated
- See [privacy.html](privacy.html) for full policy

## Contributing

This is a **closed experiment** during the 90-day observation period. We're not accepting contributions that would alter the user experience during this time.

After the observation period, we may open it up for:
- Bug fixes
- Performance improvements
- Accessibility enhancements

## License

MIT License - See LICENSE file for details

## Contact

Created by Quantum Merlin as a behavioral science experiment.

Questions or feedback? Observe the data, then we'll talk.

---

**Current Status:** 🟢 Active Experiment (90-day observation in progress)

**Started:** January 28, 2026
