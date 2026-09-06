import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { TanStackRouterVite } from '@tanstack/router-vite-plugin';

export default defineConfig({
  base: './',
  plugins: [
    TanStackRouterVite({
      routesDirectory: './src/routes',
      generatedRouteTree: './src/routeTree.gen.ts',
    }),
    react(),
  ],
  server: {
    host: '127.0.0.1',
    watch: {
      ignored: ['**/android/**', '**/*.apk', '**/build-apk/**']
    },
    proxy: {
      '/api': 'http://127.0.0.1:5000'
    }
  }
});
