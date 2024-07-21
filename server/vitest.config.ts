import { defineConfig } from 'vitest/config';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  test: {
    // exclude: ['**/*.spec.ts', 'node_modules'],

    include: ['src/__tests__/**', 'src/**/*.spec.ts'],
    // ... Specify options here.
    reporters: ['default', 'html'],
    coverage: {
      enabled: true,
    },
    benchmark: {
      reporters: 'verbose',
      outputFile: 'html',
    },
  },
  plugins: [tsconfigPaths()],
});
