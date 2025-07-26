# Website Routing Fix Prompts

## Prompt 1: Client-Side Routing Setup (React/SPA)
```
Fix the 404 routing issues for octaviapais.com by implementing proper client-side routing:

Create a React Router setup with:
- Install react-router-dom if not already installed
- Setup BrowserRouter in main App component
- Define routes for: /, /about, /programs, /success, /contact
- Create individual page components for each route
- Add proper navigation links using Link components
- Implement a 404 fallback page for invalid routes
- Add loading states between route transitions
- Ensure all internal links use React Router Link instead of anchor tags

Include proper route configuration and navigation menu updates.
```

## Prompt 2: Server Configuration Fix (Apache/Nginx)
```
Configure server redirects to fix 404 errors for SPA routing:

For Apache (.htaccess file):
```apache
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

For Nginx:
```nginx
location / {
    try_files $uri $uri/ /index.html;
}
```

Add these configurations to ensure all routes serve the main index.html file.
```

## Prompt 3: Static Site Generator Fix (Next.js/Gatsby)
```
Fix routing for static site deployment:

If using Next.js:
- Ensure pages are in the correct /pages directory structure
- Create: pages/about.js, pages/programs.js, pages/success.js, pages/contact.js
- Use next/link for navigation between pages
- Configure next.config.js for proper export if using static export
- Add proper getStaticProps for each page if needed

If using Gatsby:
- Create pages in src/pages/ directory
- Use Gatsby Link component for navigation
- Ensure gatsby-config.js has proper plugin configuration
- Run gatsby build and gatsby serve to test locally
```

## Prompt 4: HTML Structure Fix (Multi-page Site)
```
Create proper HTML file structure for traditional multi-page site:

Create separate HTML files:
- index.html (homepage)
- about.html or about/index.html
- programs.html or programs/index.html  
- success.html or success/index.html
- contact.html or contact/index.html

Ensure each file has:
- Proper DOCTYPE and HTML structure
- Consistent navigation menu
- Correct relative/absolute path references
- Proper meta tags and title for each page
- Linked CSS and JavaScript files with correct paths

Update all navigation links to point to correct file paths.
```

## Prompt 5: Hosting Platform Configuration
```
Configure hosting platform for proper routing:

For Netlify:
Create _redirects file in public directory:
```
/*    /index.html   200
```

For Vercel:
Create vercel.json:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

For GitHub Pages:
Create 404.html that redirects to index.html:
```html
<!DOCTYPE html>
<html>
<head>
  <script>
    sessionStorage.redirect = location.href;
  </script>
  <meta http-equiv="refresh" content="0;URL='/'">
</head>
<body></body>
</html>
```
```

## Prompt 6: JavaScript Navigation Fix
```
Implement JavaScript-based navigation system:

Create a single-page application with JavaScript routing:
- Use History API (pushState/popState) for URL management
- Create navigation function that shows/hides content sections
- Implement smooth page transitions between sections
- Add proper browser back/forward button support
- Create content containers for each page section
- Use CSS classes to show/hide different page content
- Add loading animations between section changes
- Ensure SEO-friendly URLs with proper meta tag updates

Include smooth animations and proper state management.
```

## Prompt 7: Debugging and Testing Fix
```
Debug and test the routing system thoroughly:

Add debugging tools:
- Console logging for route changes
- Error boundary components for React applications
- Network tab monitoring for failed requests
- Implement proper error handling for 404 cases
- Add breadcrumb navigation for better UX
- Test all navigation links and direct URL access
- Verify mobile navigation functionality
- Check browser compatibility across different browsers
- Add analytics tracking for page views
- Implement proper canonical URLs for SEO

Create comprehensive testing checklist for all routes.
```

## Prompt 8: Performance Optimization
```
Optimize routing performance and user experience:

Implement:
- Code splitting for different routes/pages
- Lazy loading for page components
- Preloading for frequently accessed routes
- Service worker for offline functionality
- Proper caching strategies for static assets
- Progressive loading indicators
- Smooth transitions between routes
- Optimized bundle sizes for each route
- CDN configuration for static assets
- Compression for all text-based files

Focus on Core Web Vitals improvements and fast navigation.
```

## Quick Diagnosis Steps:
1. **Check if it's SPA**: Look for React/Vue/Angular in your codebase
2. **Check hosting platform**: Netlify, Vercel, GitHub Pages each need different configs
3. **Check file structure**: Are there actual HTML files for each route?
4. **Check server config**: Look for .htaccess or nginx.conf files
5. **Test locally**: See if the issue exists in local development

## Most Common Solutions:
- **SPA on static host**: Add redirect rules to serve index.html for all routes
- **Missing files**: Create actual page files for each route
- **Wrong navigation**: Use proper routing library instead of anchor tags
- **Server misconfiguration**: Update server config to handle client-side routing