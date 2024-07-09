import { createConfigForNuxt } from '@nuxt/eslint-config/flat';

export default createConfigForNuxt({
  files: ['src/**/*.{js,ts,vue}'],
  ignores: [
    'node_modules/',
    'dist/',
    '.git/'
  ]
});