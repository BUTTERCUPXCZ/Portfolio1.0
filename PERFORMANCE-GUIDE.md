# Performance Notes

What the site currently does for performance, and what is still worth doing.

## In place

### Code splitting
- `Navbar` + `Hero` load eagerly; `Skills`, `Experience`, `Portfolio`, `Contact`,
  `Footer` are `React.lazy` behind one `Suspense` boundary (`src/App.jsx`).
- `react`/`react-dom` and `motion` are pinned into their own chunks via
  `build.rollupOptions.output.codeSplitting.groups` in `vite.config.js`, so they
  cache independently of app code.

### Rendering
- `Hero` is wrapped in `React.memo`.
- Scroll-linked animations use Motion's `useScroll` motion value driving `scaleX`,
  so the progress bar animates off the main-thread style path instead of through
  React state.
- Section reveals use `whileInView` with `viewport={{ once: true }}` — each element
  animates once and is then static.

### Assets
- `img { content-visibility: auto }` in `src/index.css`.
- Project screenshots use `loading="lazy"`.
- The marquee sets `will-change: transform`.

### Motion preferences
- `@media (prefers-reduced-motion: reduce)` collapses animation and transition
  durations and disables smooth scrolling.

## Still worth doing

1. Convert `src/assets/*.png` to WebP or AVIF and serve `srcset` — `budsAI.png`
   is ~165 kB and is the largest asset in the bundle.
2. Prune `public/` — `Resume.pdf`, `downloads/Bus-System_3.zip`, and the other
   archives are copied into `dist/` verbatim (~12 MB) but nothing on the site
   links to them.
3. `public/downloads/project1.zip`, `project2.zip`, and `project3.zip` are 0 bytes.
4. Self-host the Google Fonts to remove the render-blocking cross-origin request.
5. Set long `Cache-Control` headers for `/assets/*` at the host (filenames are
   already content-hashed).

## Measuring

```sh
npm run analyze   # bundle treemap via rollup-plugin-visualizer
```

## References

- [Motion performance guide](https://motion.dev/docs/react-performance)
- [Web Vitals](https://web.dev/vitals/)
