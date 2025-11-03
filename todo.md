# CycleScope Dashboard - TODO

## Completed Features ✅

- [x] Basic dashboard layout with dark theme
- [x] Display 18 market analysis charts organized in 6 categories
- [x] Category filtering system (MACRO, LEADERSHIP, BREADTH, CREDIT, VOLATILITY, SENTIMENT)
- [x] Individual chart download functionality
- [x] Download All as ZIP functionality
- [x] Update All Charts functionality (fetch from StockCharts.co)
- [x] Chart cropping system (remove top 260px navigation bars)
- [x] Python + Selenium screenshot system
- [x] All 18 charts pre-generated with correct cropping
- [x] tRPC backend API for chart operations
- [x] Cache busting for chart images

## Deployment Configuration ✅

- [x] Switch from Dockerfile to Nixpacks configuration
- [x] Create nixpacks.toml with Python + Chromium support
- [x] Create railway.toml for Railway deployment
- [x] Update RAILWAY_DEPLOY_GUIDE.md with Nixpacks instructions
- [x] Backup old Dockerfile as Dockerfile.backup
- [x] Configure pnpm with --no-frozen-lockfile flag
- [x] Configure Python packages with --break-system-packages flag
- [x] Add comprehensive Chromium dependencies to nixpacks.toml
- [x] Enhance Python script with 25+ production Chrome options
- [x] Optimize for Railway container environment

## Pending Tasks 📋

- [ ] Fix Nixpacks configuration for Railway deployment (Option 2 - Full features)
- [ ] Ensure Python + Chromium work correctly in Railway environment
- [ ] Test Railway deployment with complete functionality
- [ ] Verify all features work in production environment
- [ ] Create final deployment package for GitHub upload

## Known Issues 🐛

- [x] Railway using Railpack instead of Nixpacks - FIXED by removing railway.toml
- [x] client/src/lib folder missing on GitHub - FIXED by re-uploading
- [ ] drizzle folder missing on GitHub - need to upload database schema files

## Future Enhancements 💡

- [ ] Add scheduled chart updates (cron job)
- [ ] Add chart update history tracking
- [ ] Add custom date range selection for charts
- [ ] Add chart comparison feature
- [ ] Add email notifications for chart updates



## New Feature Request 🆕

- [x] Add last update timestamp display at the top of the dashboard
- [x] Show when charts were last updated
- [x] Store timestamp in JSON file (client/public/last-update.json)
- [x] Update timestamp when "Update All Charts" is triggered
- [x] Display success status indicator showing if all charts were updated successfully



## Bug Reports 🐛

- [x] Timestamp not updating after "Update All Charts" - FIXED by using refetch instead of page reload
- [ ] Chrome crashes when updating charts in Manus environment - Python/Selenium issue



- [ ] Success rate badge not showing on Railway deployment - need to update deployment files



- [x] Timestamp not updating after clicking "Update All Charts" - this is correct behavior when all updates fail
- [x] Implement dual timestamp display:
  - Show last update attempt time with success/failure count
  - Show last 18/18 successful update time separately
- [x] Add timestamp to each individual chart showing its last successful update
- [x] Add individual update button to each chart for single chart updates



## Railway Deployment Issues 🚨

- [x] Update All Charts fails on Railway - Chrome crashes in containerized environment
- [x] Individual chart update fails on Railway - same root cause (Chrome instability)
- [ ] Investigate alternative solutions: API-based chart fetching or pre-generated charts




## API-Based Chart Generation Exploration 🔬

- [x] Analyze existing 18 charts to understand data requirements
- [x] Research Yahoo Finance API capabilities for each chart type
- [x] Create proof-of-concept #1: SPX (S&P 500) line chart
- [x] Create proof-of-concept #2: XLY:XLP ratio chart
- [x] Test Yahoo Finance API rate limits and performance
- [x] Evaluate Chart.js implementation
- [ ] Design data transformation pipeline (API → Chart format)
- [ ] Implement API-based chart generation system for 12 easy charts
- [ ] Test and compare with original StockCharts images



- [x] Individual chart update fails on Railway Hobby plan - FOUND: python3.11 not found
- [x] Fix Python command detection in Railway environment - auto-detect python3.11/python3/python
- [ ] Improve error messages to show specific failure reasons (Chrome crash, timeout, network, etc.)



- [x] Create python3.11 symlink in nixpacks.toml to ensure compatibility



- [x] Railway ignoring nixpacks.toml - Python not being installed
- [x] Create railway.json to force nixpacks configuration



- [ ] Railway still using Dockerfile despite no Dockerfile in GitHub - investigate Railway cache
- [ ] Check Railway service settings for build configuration override



- [x] Nixpacks not loading Python provider despite python311 in nixPkgs
- [x] Railway only shows Node provider, missing Python
- [x] Fix nixpacks.toml configuration to properly load Python



- [x] Fixed nixpacks.toml providers syntax error - was using [providers] section instead of root-level array



- [x] Fix Nix package conflict - python311 and python311Packages.pip conflict
- [x] Remove python311Packages.pip from nixPkgs (python311 already includes pip)



- [x] Nix profile conflict persists even after removing python311Packages.pip - switched to Dockerfile
- [x] Consider switching from Nixpacks to Dockerfile for better control
- [ ] Alternative: Try using only Python provider without Node provider



- [ ] Investigate: Can we install Python at runtime instead of build time?
- [ ] Alternative approach: Use Nixpacks for Node.js build, install Python in start command
- [ ] Check if Railway runtime environment allows apt-get install



- [x] Dockerfile missing patches directory copy before pnpm install
- [x] Fix Dockerfile to copy patches/ directory along with package.json



- [x] Runtime error: python3.11 not found (Dockerfile installs python3, not python3.11)
- [x] Fix: Create python3.11 symlink in Dockerfile or update code to use python3



- [x] Update individual chart timestamp after successful update (both single and batch) - Already implemented
- [x] Modify updateChart endpoint to update timestamp on success - Already implemented
- [x] Modify updateAllCharts endpoint to update timestamp for each successful chart - Already implemented
- [x] Ensure timestamp reflects last successful update time - Already implemented



- [ ] Charts not displaying on mobile devices
- [ ] Investigate image loading issues on mobile
- [ ] Check if chart images are accessible from Railway deployment
- [ ] Verify image paths and CORS settings



- [ ] Charts showing broken image icon on mobile (and likely desktop too)
- [ ] Chart images not loading - investigate image path and storage
- [ ] Check if images are in /client/public/charts/ directory
- [ ] Verify image serving in production build



- [x] Implement API endpoint to serve chart images dynamically
- [x] Modify frontend to fetch images from API instead of static /charts/ path
- [x] Add getChartImage endpoint in chartRouter
- [x] Update Home.tsx to use ChartImage component with API



- [ ] Railway returning 502 error when updating charts
- [ ] Charts not displaying on production (showing "No image available")
- [ ] Investigate updateCharts API endpoint failure
- [ ] Check Deploy Logs for Python/Chromium errors



- [x] Filename mismatch between chartScreenshot.ts and getChartImage
- [x] chartScreenshot saves: `01_SPX_Secular_Trend.png`
- [x] getChartImage looks for: `01_SPX_Secular_Trend.png` (with underscores replacing special chars)
- [x] Fix: Make both use the same filename format - removed .replace() from getChartImage




## GitHub Actions Download Failure 🚨

- [x] Fix static file serving path in production (vite.ts)
- [x] Chart URLs returning 404 on Railway production - FIXED
- [x] GitHub Actions cannot download charts from Railway URLs - FIXED
- [x] Root cause: distPath calculation incorrect in production environment - IDENTIFIED
- [x] Expected path: /app/dist/public, Actual path: /app/server/_core/public - CORRECTED
- [x] User needs to update vite.ts file in both GitHub repositories - FIRST ATTEMPT FAILED
- [x] Identified root cause: path.resolve with import.meta.dirname incorrect in production
- [x] Fixed approach: Use process.cwd() instead of import.meta.dirname for production
- [ ] User to rollback Railway deployment first
- [ ] User to update vite.ts with corrected version (using process.cwd())
- [ ] Wait for Railway to redeploy after GitHub update
- [ ] Test chart URLs are accessible
- [ ] Re-run GitHub Actions workflow to verify downloads




## Plan A: Async Execution Implementation 🚀

### Phase 1: Code Implementation
- [x] Modify chartRouter.ts to use async execution with setImmediate
- [x] Add background update function (updateChartsInBackground)
- [x] Add status tracking (isUpdating flag and updateProgress object)
- [x] Add getUpdateStatus API endpoint
- [x] Update frontend to handle async responses and poll status

### Phase 2: Local Testing
- [x] Start local dev server (pnpm dev)
- [x] Test "Update All Charts" button
- [x] Verify API returns immediately (< 2 seconds)
- [x] Verify background update continues
- [x] Check console logs for completion
- [ ] Verify chart images are updated (skipped - no Chromium in local env)
- [ ] Verify timestamps are correct (skipped - no Chromium in local env)

### Phase 3: Railway Deployment
- [ ] Create checkpoint for async implementation
- [ ] Deploy to Railway
- [ ] Test manual update in production
- [ ] Verify Railway logs show background completion
- [ ] Verify no timeout errors

### Phase 4: GitHub Actions Update
- [ ] Modify workflow to trigger + wait + verify pattern
- [ ] Add status polling logic
- [ ] Add result verification
- [ ] Test manual workflow trigger
- [ ] Test scheduled cron execution

### Phase 5: Documentation
- [ ] Document async execution flow
- [ ] Document testing procedures
- [ ] Document rollback plan
- [ ] Create final checkpoint

