# GitHub & Cloudflare Setup Instructions

## ✅ What's Done

1. **Google Analytics (G-VW4LGE7L1T)** — Added to all 10 HTML pages
2. **Git Repository** — Initialized with initial commit
3. **README.md** — Comprehensive project documentation
4. **.gitignore** — Standard web project ignore file
5. **DEPLOYMENT.md** — Updated with GA4 info

## 🚀 Next Steps: Push to GitHub

### 1. Create GitHub Repository

Go to [github.com/new](https://github.com/new) and create a new repository:
- **Name:** `pause` (or `gravity-pause`)
- **Description:** "Gravity Pause — A shared moment the entire world reaches at the same time"
- **Visibility:** Public
- **DO NOT** initialize with README, .gitignore, or license (we already have these)

### 2. Connect Local Repository to GitHub

After creating the repo, run these commands in your terminal:

```bash
git remote add origin https://github.com/YOUR-USERNAME/pause.git
git branch -M main
git push -u origin main
```

Replace `YOUR-USERNAME` with your actual GitHub username.

## ☁️ Deploy to Cloudflare Pages

### 1. Login to Cloudflare
- Go to [dash.cloudflare.com](https://dash.cloudflare.com)
- Navigate to **Pages** in the left sidebar

### 2. Create New Project
1. Click **Create a project**
2. Click **Connect to Git**
3. Select **GitHub** and authorize Cloudflare
4. Select your `pause` repository
5. Configure build settings:
   - **Production branch:** `main`
   - **Build command:** (leave empty — static site)
   - **Build output directory:** `/` (root)
6. Click **Save and Deploy**

### 3. Add Custom Domain
1. After deployment completes, go to **Custom domains**
2. Click **Set up a custom domain**
3. Enter: `pause.quantummerlin.com`
4. Follow the DNS instructions (usually auto-configured if domain is on Cloudflare)

### 4. Verify DNS Settings
In your Cloudflare DNS settings for `quantummerlin.com`:
- Should have a **CNAME** record:
  - **Name:** `pause`
  - **Target:** `pause.pages.dev` (or similar)
  - **Proxy status:** Proxied (orange cloud)

## 📊 Verify Google Analytics

1. Go to [analytics.google.com](https://analytics.google.com)
2. Select property **G-VW4LGE7L1T**
3. Wait 24-48 hours for data to start appearing
4. Check **Realtime** view to see live visitors

## 🔍 Post-Deployment Checklist

After site is live at `pause.quantummerlin.com`:

- [ ] Visit main page and verify countdown works
- [ ] Test all variant pages (daily-reset, before-sleep, etc.)
- [ ] Test PWA install on mobile device
- [ ] Verify GA4 tracking in browser console (no errors)
- [ ] Submit sitemap to Google Search Console
- [ ] Test offline functionality (disconnect internet, reload page)
- [ ] Verify all internal links work
- [ ] Check page load speed with Lighthouse

## 📈 90-Day Observation

Remember the rules:
- **Days 1-30:** Change NOTHING. Observe only.
- **Days 31-60:** Minor copy adjustments only if absolutely necessary.
- **Days 61-90:** Consider variants based on data.

## 🆘 Troubleshooting

**Site not loading?**
- Check Cloudflare Pages deployment logs
- Verify DNS propagation (can take up to 48 hours)
- Try accessing via the default `.pages.dev` URL first

**GA not tracking?**
- Check browser console for errors
- Verify ad blockers aren't blocking GA
- Wait 24 hours — realtime data appears immediately, but reporting can lag

**PWA not installing?**
- Must be served over HTTPS (Cloudflare handles this)
- Check manifest.json is being served correctly
- Verify service-worker.js is registering (check DevTools > Application)

## 📝 Important Files

- **manifest.json** — PWA configuration
- **service-worker.js** — Offline caching
- **app.js** — Main countdown logic
- **styles.css** — All styling (shared across pages)

## 🎯 Success Metrics

After 30 days, look for:
- Return visitor rate > 15%
- Average session duration > 40 seconds
- Pages per session > 1.5
- Bounce rate < 70%

---

**Ready to deploy!** Once you push to GitHub and connect to Cloudflare, your experiment will be live.

Current date: January 28, 2026 — Experiment starts now!
