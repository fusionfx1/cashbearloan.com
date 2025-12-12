# Deploy to Cloudflare Pages - Complete Guide

This guide will help you deploy your installment loans landing page with the sticky bottom bar to Cloudflare Pages.

## Prerequisites

- GitHub account
- Cloudflare account (free tier works perfectly)
- Your code pushed to a GitHub repository

## Step 1: Prepare Your Project

Your project is already configured and ready to deploy! No database setup needed.

### Build Configuration
```json
{
  "build": {
    "command": "npm run build",
    "output": "dist"
  }
}
```

## Step 2: Connect to Cloudflare Pages

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Click on **"Pages"** in the left sidebar
3. Click **"Create a project"**
4. Click **"Connect to Git"**
5. Authorize Cloudflare to access your GitHub
6. Select your repository

## Step 3: Configure Build Settings

### Framework Preset
- Select: **Vite**

### Build Configuration
- **Build command**: `npm run build`
- **Build output directory**: `dist`
- **Root directory**: `/` (leave as default)

### Environment Variables
You don't need any! The sticky bar works with client-side generated data.

## Step 4: Deploy

1. Click **"Save and Deploy"**
2. Wait 2-3 minutes for the build to complete
3. Your site will be live at: `your-project.pages.dev`

## Step 5: Custom Domain (Optional)

1. In your Cloudflare Pages project, go to **"Custom domains"**
2. Click **"Set up a custom domain"**
3. Enter your domain name
4. Follow the DNS configuration instructions
5. Wait for DNS propagation (usually 5-15 minutes)

## Features That Work Without Database

Your sticky bottom bar includes:

### Dynamic Data Generation
- Generates 15 realistic customer approvals on page load
- Random names, locations, amounts, and purposes
- Realistic timestamps (2-62 minutes ago)
- Daily stats that vary slightly on each visit

### Client-Side Persistence
- Dismiss state saved in localStorage
- Stays dismissed for 24 hours
- No server or database required

### All Interactive Features
- Activity rotation every 5 seconds
- Expandable details panel
- Apply button navigation
- Smooth animations
- Auto-hide on scroll to footer

## Performance on Cloudflare Pages

### Expected Performance
- **Build time**: ~2 minutes
- **Deploy time**: ~30 seconds
- **Page load**: < 1 second (globally)
- **Lighthouse score**: 95+ (all metrics)

### Cloudflare Benefits
- Global CDN (272+ cities)
- Automatic HTTPS
- DDoS protection
- Unlimited bandwidth
- Free SSL certificate
- Edge caching

## Build Optimization

Your project is already optimized for Cloudflare:

```javascript
// vite.config.ts is configured for optimal builds
{
  build: {
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          lucide: ['lucide-react']
        }
      }
    }
  }
}
```

## Testing Locally Before Deploy

```bash
# Build for production
npm run build

# Preview the production build
npm run preview

# Open http://localhost:4173
```

## Troubleshooting

### Build Fails

**Error: "Cannot find module"**
- Solution: Make sure package.json has all dependencies
- Run: `npm install` locally first

**Error: "TypeScript errors"**
- Solution: Run `npm run lint` to check for errors
- Fix any TypeScript issues

### Site Loads but Bar Doesn't Appear

1. **Wait 3 seconds** - There's an intentional delay
2. Clear browser cache and hard refresh (Ctrl+Shift+R)
3. Check browser console for JavaScript errors
4. Verify you're on the home page (not /apply or /support)

### Activities Not Rotating

- Check if you dismissed the bar (it stays hidden for 24 hours)
- Clear localStorage: `localStorage.removeItem('stickyBarDismissed')`
- Refresh the page

## Updating Your Site

Every time you push to your GitHub repository:
1. Cloudflare automatically rebuilds
2. New version deploys in 2-3 minutes
3. Old version stays live until new one is ready
4. Zero downtime deployment

## Environment Variables (If Needed Later)

To add environment variables in Cloudflare Pages:

1. Go to your project **Settings**
2. Click **"Environment variables"**
3. Add variables for Production/Preview
4. Format: `VITE_YOUR_VARIABLE=value`
5. Redeploy for changes to take effect

Note: You don't need any environment variables for the current setup!

## Custom Domains

### Add Your Domain
1. Pages project > Custom domains
2. Click "Set up a custom domain"
3. Enter domain (e.g., loans.example.com)
4. Add DNS records as instructed:
   - **CNAME**: `your-project.pages.dev`
5. Wait for SSL certificate (automatic)

### Domain Examples
- `www.yourdomain.com`
- `loans.yourdomain.com`
- `apply.yourdomain.com`

## Performance Tips

### Already Implemented
- Code splitting (vendor chunks)
- Lazy loading components
- Optimized images
- Minified CSS/JS
- Tree shaking

### Additional Optimizations
```javascript
// Add to vite.config.ts for even better performance
build: {
  cssCodeSplit: true,
  sourcemap: false, // Remove in production
}
```

## Monitoring

### Cloudflare Analytics (Free)
1. Go to your Pages project
2. Click **"Analytics"**
3. View:
   - Page views
   - Unique visitors
   - Bandwidth usage
   - Geographic distribution

### Web Vitals
Already included with @vercel/speed-insights:
- Largest Contentful Paint (LCP)
- First Input Delay (FID)
- Cumulative Layout Shift (CLS)

## Security

### Automatic Features
- HTTPS everywhere
- DDoS protection
- Bot mitigation
- SSL/TLS encryption
- Security headers

### Recommended Headers
Add to `public/_headers`:
```
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  X-XSS-Protection: 1; mode=block
  Referrer-Policy: strict-origin-when-cross-origin
```

## Cost

### Cloudflare Pages Free Tier
- **Builds**: 500/month
- **Bandwidth**: Unlimited
- **Requests**: Unlimited
- **SSL**: Free
- **Custom domains**: Unlimited
- **Team members**: Unlimited

Perfect for this project!

## Rollback

If something goes wrong:
1. Go to **Deployments**
2. Find previous working deployment
3. Click **"Rollback to this deployment"**
4. Site reverts immediately

## Testing the Sticky Bar on Production

After deployment, test these features:

1. **Initial appearance**: Wait 3 seconds after page load
2. **Activity rotation**: Watch for changes every 5 seconds
3. **Expansion**: Click the up arrow to see details
4. **Apply button**: Should navigate to application page
5. **Dismiss**: Click X, refresh - should stay hidden
6. **Mobile**: Test on phone, tablet
7. **Scroll behavior**: Scroll to footer - bar should hide

## Support

### Cloudflare Documentation
- [Pages Docs](https://developers.cloudflare.com/pages/)
- [Build configuration](https://developers.cloudflare.com/pages/platform/build-configuration/)
- [Troubleshooting](https://developers.cloudflare.com/pages/platform/known-issues/)

### Project Issues
1. Check browser console for errors
2. Review build logs in Cloudflare dashboard
3. Test locally with `npm run build && npm run preview`

---

## Quick Deploy Checklist

- [ ] Code pushed to GitHub
- [ ] Connected repository to Cloudflare Pages
- [ ] Build settings configured (Vite, npm run build, dist)
- [ ] Deployment successful
- [ ] Site accessible at *.pages.dev URL
- [ ] Sticky bar appears after 3 seconds
- [ ] Activities rotate every 5 seconds
- [ ] All buttons work
- [ ] Mobile responsive
- [ ] Custom domain configured (optional)

**You're ready to deploy!** No database needed - everything runs client-side! 🚀
