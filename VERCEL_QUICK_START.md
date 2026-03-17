# ⚡ Vercel Deployment - Quick Checklist

## Before You Start

- ✅ Frontend is built and ready
- ✅ GitHub account created
- ✅ Git repository initialized locally

---

## STEP 1: Push to GitHub (3 minutes)

### 1. Open PowerShell in your project folder

```powershell
cd g:\enactus
```

### 2. Commit your code

```powershell
git add .
git commit -m "Ready for Vercel deployment"
```

### 3. Create GitHub repository

- Go to: https://github.com/new
- Repository name: `enactus`
- Click "Create repository"

### 4. Push code to GitHub

```powershell
# Replace YOUR_USERNAME and YOUR_REPO below
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git branch -M main
git push -u origin main
```

✅ **Code is now on GitHub!**

---

## STEP 2: Create Vercel Account (2 minutes)

### Visit: https://vercel.com/signup

1. Click **"Sign up with GitHub"**
2. Authorize Vercel
3. Verify email

✅ **Vercel account created!**

---

## STEP 3: Deploy Project (5 minutes)

### Visit: https://vercel.com/dashboard

1. Click **"Add New..."** → **"Project"**
2. Find your repository (`enactus`)
3. Click **"Import"**
4. Change **"Root Directory"** → `frontend`
5. Click **"Deploy"**

✅ **Deployment started!**

---

## STEP 4: Add Environment Variables

Before deployment finishes:

1. Find **"Environment Variables"**
2. Click **"Add New"**
3. Add:
   - **Key:** `REACT_APP_BACKEND_URL`
   - **Value:** `http://localhost:8000` (for now)
4. Click save and continue

---

## STEP 5: Get Your Live URL

Once deployment completes (2-3 minutes):

```
https://your-project-name.vercel.app
```

✅ **Your app is LIVE! Share this URL!**

---

## STEP 6: Update Backend URL (Later)

Once backend is deployed:

1. Go to Vercel Dashboard → Your Project
2. Settings → Environment Variables
3. Update `REACT_APP_BACKEND_URL` to your backend URL
4. Vercel will **auto-redeploy** ✨

---

## 🎯 Summary

| Task                  | Time        | Status |
| --------------------- | ----------- | ------ |
| Push to GitHub        | 3 min       | ⭐     |
| Create Vercel Account | 2 min       | ⭐     |
| Import & Deploy       | 5 min       | ⭐     |
| Get Live URL          | Automatic   | ✅     |
| **Total Time**        | **~10 min** | ✅     |

---

## 📋 Helpful Links

- **Vercel Dashboard:** https://vercel.com/dashboard
- **Your Project:** https://vercel.com/dashboard/projects
- **Documentation:** https://vercel.com/docs

---

## 🚀 That's It!

Your app is now:

- ✅ Live on the internet
- ✅ Globally accessible
- ✅ Auto-updated on every git push
- ✅ HTTPS enabled
- ✅ Served from 200+ data centers

**Share the URL with anyone!**

---

**Need help?** See `VERCEL_DEPLOYMENT_STEPS.md` for detailed instructions.
