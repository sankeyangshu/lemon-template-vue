import { defineConfig } from '@sankeyangshu/eslint-config';

export default defineConfig(
  {
    vue: true,
    unocss: true,
    formatter: {
      markdown: true,
    },
  },
  {
    rules: {
      // '@typescript-eslint/ban-types': 'off',
      // '@typescript-eslint/no-explicit-any': 'off',
      // '@typescript-eslint/promise-function-async': 'off',
      'vue/multi-word-component-names': [
        'warn',
        {
          ignores: ['index', 'App', 'Register', '[id]', '[url]'],
        },
      ],
      'vue/component-name-in-template-casing': [
        'warn',
        'PascalCase',
        {
          registeredComponentsOnly: false,
          ignores: ['/^icon-/'],
        },
      ],
      'unocss/order-attributify': 'off',
    },
  }
);
