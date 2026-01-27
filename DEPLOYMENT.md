# Gravity Pause - Deployment Guide

## Subdomain Configuration
**Target:** `pause.quantummerlin.com`

## File Structure
```
gravity-pause/
├── index.html              # Main Gravity Pause page
├── styles.css              # Shared calm design system
├── app.js                  # Core countdown engine (UTC midnight)
├── personal.js             # Birthdate result bucket system
├── service-worker.js       # PWA offline support
├── manifest.json           # PWA manifest
├── about.html              # About this experiment
├── privacy.html            # Privacy policy
├── terms.html              # Terms of use
├── gravity-pause-2026.html # Historical anchor (August 12, 2026)
├── daily-reset.html        # Variant: Local midnight countdown
├── before-sleep.html       # Variant: 10 PM countdown (dark theme)
├── start-of-day.html       # Variant: 6 AM countdown (warm theme)
├── collective-breath.html  # Variant: Hourly pause
└── random-pause.html       # Variant: Pseudo-random daily pause
```

## Deployment Options

### Option 1: Cloudflare Pages (Recommended)
1. Push files to a GitHub repository
2. Connect to Cloudflare Pages
3. Set custom domain: `pause.quantummerlin.com`
4. Enable automatic HTTPS

### Option 2: Netlify
1. Drag and drop the `gravity-pause` folder
2. Configure custom domain
3. Enable HTTPS

### Option 3: Vercel
1. Import from Git or upload
2. Configure domain settings
3. Deploy

## DNS Configuration
Add a CNAME record:
- **Name:** `pause`
- **Target:** Your hosting provider's URL
- **TTL:** Auto or 3600

## Post-Deployment Checklist
- [ ] Verify all pages load correctly
- [ ] Test countdown accuracy in multiple timezones
- [ ] Verify PWA install prompt works
- [ ] Test offline functionality
- [ ] Submit to Google Search Console
- [ ] Apply for Google AdSense (after traffic stabilizes)

## AdSense Integration
When approved, replace the placeholder `<div class="ad-slot">` elements with actual AdSense code:

```html
<div class="ad-slot">
  <ins class="adsbygoogle"
       style="display:block"
       data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
       data-ad-slot="XXXXXXXXXX"
       data-ad-format="auto"
       data-full-width-responsive="true"></ins>
  <script>
       (adsbygoogle = window.adsbygoogle || []).push({});
  </script>
</div>
```

## Analytics Setup
**Configured:** Google Analytics 4 (G-VW4LGE7L1T)

The GA4 tracking code has been added to all HTML pages. Track these key metrics:
- Return visits within 7 days
- Session duration (target: >40s)
- Pages per session (target: >1.5)
- Scroll depth

## 90-Day Observation Framework
**Days 1-30:** Do not change anything. Observe only.
**Days 31-60:** Minor copy adjustments if needed.
**Days 61-90:** Consider adding variants based on data.

## Important Rules (Chase Hughes Approved)
1. Never add features without data justification
2. Never add login/signup requirements
3. Never add push notifications
4. Never add urgency language
5. Never make claims about outcomes
6. Keep ads as "furniture, not billboards"