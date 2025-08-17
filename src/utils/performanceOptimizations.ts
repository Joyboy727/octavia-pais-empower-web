// Performance optimization utilities

// Debounced scroll handler
export const createOptimizedScrollHandler = (callback: () => void, delay = 16) => {
  let scrollTimeout: ReturnType<typeof setTimeout> | null = null;
  let lastScrollY = 0;

  return () => {
    const currentScrollY = window.scrollY;
    
    // Only update if significant scroll
    if (Math.abs(currentScrollY - lastScrollY) > 5) {
      lastScrollY = currentScrollY;
      
      if (!scrollTimeout) {
        scrollTimeout = setTimeout(() => {
          scrollTimeout = null;
          callback();
        }, delay);
      }
    }
  };
};

// Lazy loading utility
export const setupLazyLoading = () => {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          const src = img.getAttribute('data-src');
          
          if (src) {
            img.src = src;
            img.classList.remove('lazy-image');
            imageObserver.unobserve(img);
          }
        }
      });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }
};

// Resource preloading
export const preloadCriticalResources = () => {
  const criticalImages = [
    '/img/hero-desktop.webp',
    '/img/hero-mobile.webp'
  ];

  criticalImages.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });
};

// Performance monitoring
export const setupPerformanceMonitoring = () => {
  if ('PerformanceObserver' in window) {
    // Monitor Largest Contentful Paint
    const lcpObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        console.log('LCP:', entry.startTime);
        // Send to analytics if needed
      }
    });
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

    // Monitor Cumulative Layout Shift
    const clsObserver = new PerformanceObserver((list) => {
      let cls = 0;
      for (const entry of list.getEntries()) {
        if (!(entry as any).hadRecentInput) {
          cls += (entry as any).value;
        }
      }
      console.log('CLS:', cls);
    });
    clsObserver.observe({ entryTypes: ['layout-shift'] });
  }
};

// Form optimization with debounced validation
export const createOptimizedFormValidator = (delay = 300) => {
  let validationTimeout: ReturnType<typeof setTimeout>;

  return (field: HTMLInputElement, validator: (value: string) => string | null) => {
    clearTimeout(validationTimeout);
    validationTimeout = setTimeout(() => {
      const error = validator(field.value.trim());
      const errorEl = field.nextElementSibling as HTMLElement;
      
      if (error && errorEl) {
        errorEl.textContent = error;
        errorEl.style.display = 'block';
      } else if (errorEl) {
        errorEl.style.display = 'none';
      }
    }, delay);
  };
};