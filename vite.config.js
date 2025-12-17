import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Only import and use visualizer in analyze mode
  const plugins = [
    react() // Simplified - removed Babel options
  ];
  
  // Add visualizer only when specifically requested
  if (mode === 'analyze') {
    try {
      // Import visualizer dynamically to avoid issues if it's not installed
      const visualizer = require('rollup-plugin-visualizer').visualizer;
      plugins.push(visualizer({ open: true }));
    } catch (e) {
      console.warn('rollup-plugin-visualizer is not installed. Run npm install --save-dev rollup-plugin-visualizer to use the analyze mode.');
    }
  }
  
  return {
    plugins,
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    },
    build: {
      // Enable minification for better performance
      minify: 'esbuild',
      // Increase chunk size limit
      chunkSizeWarningLimit: 1000,
      // Optimize chunk splitting
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom'],
            motion: ['framer-motion'],
            icons: ['react-icons']
          }
        }
      },
      // Enable source map for production
      sourcemap: false,
      // Enable CSS code splitting
      cssCodeSplit: true
    },
    // Optimize dev server
    server: {
      hmr: {
        overlay: false
      },
      // Optimize dev server open behavior
      open: false
    },
    // Optimize asset handling
    assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.svg', '**/*.pdf'],
    // Optimize dependencies pre-bundling
    optimizeDeps: {
      include: ['react', 'react-dom', 'framer-motion', 'react-icons']
    }
  };
});
