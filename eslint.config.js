import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
  { ignores: ['dist'] },

  // Node-side files: build config and the content validator.
  {
    files: ['vite.config.js', 'eslint.config.js', 'scripts/**/*.{js,mjs}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.node,
    },
    rules: js.configs.recommended.rules,
  },

  // Browser-side application code.
  {
    files: ['src/**/*.{js,jsx}'],
    ...js.configs.recommended,
    languageOptions: {
      ecmaVersion: 'latest',
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
  },
  {
    files: ['src/**/*.{js,jsx}'],
    ...react.configs.flat.recommended,
    settings: { react: { version: '19.2' } },
  },
  { files: ['src/**/*.{js,jsx}'], ...react.configs.flat['jsx-runtime'] },
  { files: ['src/**/*.{js,jsx}'], ...reactHooks.configs.flat['recommended-latest'] },
  {
    files: ['src/**/*.{js,jsx}'],
    plugins: { 'react-refresh': reactRefresh },
    rules: {
      'react/jsx-no-target-blank': 'off',
      // Plain JSX project — no PropTypes, no TypeScript
      'react/prop-types': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
]
