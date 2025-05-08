import imageOptimizer from 'vite-plugin-image-optimizer';
export default defineConfig({
  plugins: [
    react(),
    imageOptimizer({
      jpg: { quality: 80 },
      png: { quality: 80 },
    }),
  ],
});