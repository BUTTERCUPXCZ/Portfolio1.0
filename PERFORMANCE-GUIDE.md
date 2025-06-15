# Performance Optimization Guide

This document outlines the performance optimizations made to the portfolio website.

## Implemented Optimizations

### 1. Reduced Animation Complexity
- Simplified FloatingElements component
- Added reduced motion support
- Optimized parallax effects with throttling

### 2. Optimized Rendering
- Added React.memo to prevent unnecessary re-renders
- Implemented useMemo for static components
- Used requestAnimationFrame for smooth animations

### 3. Build Optimizations
- Updated Vite configuration for better chunking
- Added code splitting for vendor libraries
- Added image optimization script (Sharp)

### 4. CSS Optimizations
- Added content-visibility for images
- Simplified CSS animations
- Added hardware acceleration hints
- Added reduced motion media query

## Running the Optimized Version

1. Install the new dependencies:
```
npm install
```

2. Optimize images (optional but recommended):
```
npm run optimize-images
```

3. Run development server:
```
npm run dev
```

4. Build for production:
```
npm run build
```

## Further Optimization Tips

1. Consider using Next.js for server-side rendering
2. Implement proper image lazy loading
3. Consider using WebP images for better compression
4. Add proper caching headers when deploying

## Notes on Mobile Performance

The site now has specific optimizations for mobile devices:
- Reduced animation complexity
- Disabling certain animations on small screens
- Better handling of touch events

## References

- [Framer Motion Performance](https://www.framer.com/motion/guide-performance/)
- [React Performance Optimization](https://reactjs.org/docs/optimizing-performance.html)
- [Web Vitals](https://web.dev/vitals/)
