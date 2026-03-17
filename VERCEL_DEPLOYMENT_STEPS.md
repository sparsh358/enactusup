# Vercel Deployment - Step by Step Guide

## 🚀 Deploy Your Enactus App to Vercel in 5 Minutes

Vercel is the **easiest and fastest** way to deploy your React app. It's free, automatic, and gives you a live URL instantly.

---

## **STEP 1: Prepare Your Code** ✅

Your code is already ready! But first, ensure everything is pushed to GitHub.

### 1.1 Initialize Git (if not already done)

```bash
cd g:\enactus
git init
git add .
git commit -m "Initial commit - Enactus project ready for Vercel"
```

### 1.2 Create a GitHub Repository

1. Go to: **https://github.com/new**
2. Create repository name: `enactus` (or your choice)
3. **Do NOT initialize with README** (you already have code)
4. Click "Create repository"

### 1.3 Push Your Code to GitHub

```bash
cd g:\enactus

# Add remote (replace YOUR_USERNAME and YOUR_REPO)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git branch -M main
git push -u origin main
```

**Example:**

```bash
git remote add origin https://github.com/john-doe/enactus.git
git branch -M main
git push -u origin main
```

✅ **Done!** Your code is now on GitHub.

---

## **STEP 2: Create Vercel Account** 📝

### 2.1 Sign Up to Vercel

1. Go to: **https://vercel.com/signup**
2. Click **"Sign up with GitHub"**
3. Authorize Vercel to access your GitHub account
4. Verify your email

✅ **You now have a Vercel account!**

---

## **STEP 3: Import Project to Vercel** 🔗

### 3.1 Connect Your Repository

1. Go to: **https://vercel.com/dashboard**
2. Click **"Add New..."** → **"Project"**
3. Search for your repository: `enactus`
4. Click **"Import"**

---

## **STEP 4: Configure Build Settings** ⚙️

### 4.1 Vercel will auto-detect settings, but verify:

**Framework:** React (should be auto-selected)
**Build Command:** `npm run build` ✅
**Output Directory:** `build` ✅
**Install Command:** `npm install` ✅

### 4.2 Root Directory

- Click **"Root Directory"**
- Change to: `frontend`
- Click **"Select"**

This tells Vercel your React app is in the `frontend` folder.

---

## **STEP 5: Environment Variables** 🔑

### 5.1 Add Environment Variables

1. In the Vercel import screen, find **"Environment Variables"**
2. Click **"Add New"**

### 5.2 Configure Variables

Add these environment variables:

| Key                     | Value                             | Notes                        |
| ----------------------- | --------------------------------- | ---------------------------- |
| `REACT_APP_BACKEND_URL` | `https://your-backend-domain.com` | Update with your backend URL |
| `ENABLE_HEALTH_CHECK`   | `false`                           | Keep as is                   |

**Important:** If your backend is still on localhost, add it temporarily for testing:

```
REACT_APP_BACKEND_URL=http://localhost:8000
```

(Update this later when backend is deployed)

#### How to Add Variables:

1. Click **"Add New"**
2. Enter Key: `REACT_APP_BACKEND_URL`
3. Enter Value: `https://your-api.com` (or `http://localhost:8000` for testing)
4. Click **"Save"**
5. Repeat for each variable

---

## **STEP 6: Deploy!** 🎉

### 6.1 Click "Deploy"

- Vercel will automatically build your app
- This takes 2-3 minutes
- Watch the deploy logs

### 6.2 Wait for Success

You should see: ✅ **"Deployment Complete"**

### 6.3 Get Your Live URL

Once deployed, you'll see your live URL:

```
https://enactus-xxx.vercel.app
```

**Your app is now LIVE! 🚀**

---

## **STEP 7: Test Your Live App** 🧪

1. Click the URL or open in browser
2. Test all pages and functionality
3. Verify API connections work
4. Share the link with others!

---

## **STEP 8: Custom Domain (Optional)** 🌐

### 8.1 Add Custom Domain

1. In Vercel Dashboard, go to your project
2. Click **"Settings"** → **"Domains"**
3. Enter your domain: `yourdomain.com`
4. Follow DNS instructions
5. Wait 24 hours for DNS propagation

---

## **TROUBLESHOOTING**

### Build Fails with "index.html not found"

✅ **Solution:** We already configured this!

- Root Directory is set to `frontend`
- `index.html` is in `frontend/public/`

### API Connection Error

❌ **Problem:** API returning 404 or CORS error
✅ **Solution:**

1. Update `REACT_APP_BACKEND_URL` in Vercel environment variables
2. Ensure backend is deployed and accessible
3. Check CORS settings on backend

### Blank Page on Visit

❌ **Problem:** Shows 404 or blank
✅ **Solution:**

1. Check browser console for errors (F12)
2. Verify environment variables are correct
3. Try rebuilding: Go to **Deployments** → **Redeploy**

### Pages Show 404 (Except Home)

✅ **Already Fixed!** Vercel automatically handles SPA routing

---

## **AFTER DEPLOYMENT**

### 1. Set Up Auto-Deploys

✅ **Default:** Every push to main branch auto-deploys

### 2. Monitor Your App

- Watch deploy logs
- Check error tracking (Sentry integration optional)
- Monitor performance

### 3. Update Backend URL

Once backend is deployed:

1. Go to **Settings** → **Environment Variables**
2. Update `REACT_APP_BACKEND_URL` to production URL
3. Redeploy from **Deployments**

### 4. Enable Analytics (Optional)

1. In Vercel Dashboard
2. Go to **Analytics**
3. View your app traffic

---

## **QUICK REFERENCE CHECKLIST**

- ⬜ Push code to GitHub
- ⬜ Create Vercel account
- ⬜ Import repository
- ⬜ Set Root Directory to `frontend`
- ⬜ Add environment variables
- ⬜ Deploy
- ⬜ Test live app
- ⬜ Share URL

---

## **COMPLETE EXAMPLE: STEP BY STEP**

### Terminal Commands:

```bash
# 1. Navigate to project
cd g:\enactus

# 2. Commit everything
git add .
git commit -m "Ready for Vercel deployment"

# 3. Add GitHub remote (use YOUR details)
git remote add origin https://github.com/YOUR_USERNAME/enactus.git
git branch -M main

# 4. Push to GitHub
git push -u origin main
```

### Browser Steps:

1. **https://vercel.com/signup** → Sign in with GitHub
2. **https://vercel.com/dashboard** → Click "Add New..." → "Project"
3. Select `enactus` repository
4. Set Root Directory to `frontend`
5. Add environment variables
6. Click **Deploy**
7. Wait 2-3 minutes
8. Get your live URL!

---

## **YOUR VERCEL DASHBOARD**

Once deployed, you'll have:

- ✅ Live URL (e.g., `enactus-abc123.vercel.app`)
- ✅ Automatic redeploys on git push
- ✅ Deploy history
- ✅ Environment variables
- ✅ Analytics
- ✅ Custom domain option
- ✅ Free SSL/HTTPS

---

## **IMPORTANT NOTES**

1. **Root Directory:** Must be set to `frontend`
2. **Build Command:** Should be `npm run build`
3. **Output Directory:** Should be `build`
4. **Backend URL:** Update after backend deployment
5. **Environment Variables:** Set for production (not localhost)

---

## **SUPPORT**

- **Vercel Docs:** https://vercel.com/docs
- **Common Issues:** https://vercel.com/docs/frequently-asked-questions
- **Status Page:** https://www.vercel-status.com/

---

## **WHAT HAPPENS NEXT**

1. **Deployment:** Vercel builds your app automatically
2. **Live URL:** Your app is accessible at the Vercel URL
3. **Auto-Updates:** Every commit to main branch auto-deploys
4. **SSL:** HTTPS enabled automatically
5. **CDN:** Your app served globally from 200+ data centers

---

## **DEPLOYING BACKEND TOO (Optional)**

Once frontend is live, you can deploy backend:

1. Backend can go on:
   - **Railway** (MongoDB + API)
   - **Render** (Free tier available)
   - **Heroku** (Paid)
   - **AWS Lambda** (Complex but scalable)

2. Update `REACT_APP_BACKEND_URL` in Vercel to your backend URL
3. Redeploy frontend

---

**Ready to go live? Let's make it happen! 🚀**

Your app will be live in ~5 minutes and accessible worldwide!
