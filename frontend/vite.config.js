import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    nodePolyfills({
      include: ['buffer', 'stream', 'util'],
      globals: {
        Buffer: true,
        global: true,
        process: true,
      },
    }),
  ],
  resolve: {
    alias: {
      'events': 'events',
      'stream': 'stream-browserify',
      'buffer': 'buffer/',
      'util': 'util',
      'crypto': 'crypto-browserify',
      'assert': 'assert',
      'http': 'stream-http',
      'https': 'https-browserify',
      'os': 'os-browserify',
      'url': 'url',
      'zlib': 'browserify-zlib',
      'path': 'path-browserify',
      process: 'process/browser'
    }
  },
  define: {
    'process.env': {},
    global: {}
  },
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: 'globalThis'
      }
    }
  }
})
