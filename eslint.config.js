import { config as defaultConfig } from '@epic-web/config/eslint';
import hydrogenPlugin from 'eslint-plugin-hydrogen';

export default [
  ...defaultConfig,
  {
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'], // Match files Hydrogen cares about
    plugins: {
      hydrogen: hydrogenPlugin,
    },
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
    },
    rules: {
      ...hydrogenPlugin.configs.hydrogen.rules,
    },
  },
];
