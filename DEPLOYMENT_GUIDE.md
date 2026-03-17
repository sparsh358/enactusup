# Enactus Frontend - Deployment Guide

## Production Build Ready ✅

Your frontend has been successfully built for production! Here's everything you need to know:

### Build Statistics

- **Main JS Bundle**: 131.26 kB (gzipped)
- **CSS Bundle**: 12.36 kB (gzipped)
- **Build Location**: `frontend/build/` folder
- **Status**: Optimized and ready to deploy

### Quick Start - Local Testing

#### Option 1: Using Serve (Recommended for Quick Demo)

```bash
cd frontend
npm install -g serve
serve -s build -l 3000
```

Then open: **http://localhost:3000**

#### Option 2: Using Python HTTP Server

```bash
cd frontend/build
python -m http.server 8080
```

Then open: **http://localhost:8080**

### Deployment Options

#### 1. **Netlify (Recommended - Free & Easy)**

- Push your code to GitHub
- Connect to Netlify
- Set build command: `npm run build`
- Set publish directory: `build`
- Deploy automatically on push

#### 2. **Vercel (Recommended - Free & Easy)**

- Push your code to GitHub
- Import project in Vercel dashboard
- Auto-configure React apps
- Deploy with one click

#### 3. **Docker Deployment**

```bash
# Build Docker image
docker build -t enactus-frontend .

# Run container
docker run -p 3000:3000 enactus-frontend
```

Then open: **http://localhost:3000**

#### 4. **AWS S3 + CloudFront**

```bash
# Upload build folder to S3
aws s3 sync frontend/build s3://your-bucket-name/

# Configure CloudFront distribution
# Set S3 bucket as origin
# Set default root object to index.html
```

#### 5. **GitHub Pages**

Add to `package.json`:

```json
"homepage": "https://yourusername.github.io/enactus"
```

Then:

```bash
npm install --save-dev gh-pages
npm run build
npm run deploy
```

#### 6. **Traditional Web Server (Apache/Nginx)**

**Nginx Configuration:**

```nginx
server {
    listen 80;
    server_name your-domain.com;
    root /var/www/enactus/frontend/build;

    location / {
        try_files $uri /index.html;
    }
}
```

**Apache Configuration:**

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

### Environment Configuration for Deployment

Update `frontend/.env` with your production backend URL:

```env
REACT_APP_BACKEND_URL=https://your-api-domain.com
WDS_SOCKET_PORT=443
ENABLE_HEALTH_CHECK=false
```

### Files Ready for Deployment

```
frontend/
├── build/                 ← Deploy this folder
│   ├── index.html
│   ├── static/
│   │   ├── js/
│   │   └── css/
│   └── ...
├── Dockerfile            ← For containerized deployment
├── .dockerignore
└── package.json
```

### Production Checklist

- ✅ Build created and tested
- ✅ Bundle size optimized
- ⚠️ Update backend URL in `.env`
- ⚠️ Configure API endpoints
- ⚠️ Test form submissions
- ⚠️ Test all routes
- ⚠️ Set up custom domain (if needed)
- ⚠️ Configure SSL/HTTPS
- ⚠️ Set up monitoring & error tracking

### Performance Tips

1. **Caching Strategy**: Configure CDN caching headers
2. **Compression**: Serve with gzip enabled (most hosting does this)
3. **Lazy Loading**: Already configured in React
4. **Image Optimization**: Consider using next image placeholders
5. **SEO**: Update meta tags in `public/index.html`

### Troubleshooting

**404 on page refresh:**

- Ensure server redirects all routes to `index.html`
- This is a single-page app (SPA) requirement

**API connection issues:**

- Verify backend URL in `.env`
- Check CORS settings on backend
- Ensure backend is running and accessible

**CSS/JS not loading:**

- Clear browser cache
- Check if routes are correct
- Verify CDN settings

### Support Resources

- React Deployment Docs: https://create-react-app.dev/deployment/
- Netlify Docs: https://docs.netlify.com/
- Vercel Docs: https://vercel.com/docs
- Docker Guide: https://docs.docker.com/

### Next Steps

1. Choose your deployment platform
2. Update `.env` with production backend URL
3. Test the production build locally: `serve -s build`
4. Deploy using your chosen method
5. Test all functionality on production

**Current Local Build Display:**

- Frontend Production: **http://localhost:51234** (or visible port)
- Backend API: **http://localhost:8000** (ensure running)

---

**Ready to show your Enactus project! 🎉**

The build is optimized, production-ready, and can be deployed to any hosting platform.
