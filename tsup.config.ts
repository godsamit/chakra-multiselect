import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.tsx'],
  format: ['esm', 'cjs'],
  target: 'es2019',
  dts: {
    resolve: true,
    entry: ['src/index.tsx'],
  },
  outDir: 'dist',
  clean: true,
})
