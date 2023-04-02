/*
 * @Description: eslint配置文件
 * @Author: 三棵杨树
 * @Date: 2023-04-02 20:45:15
 * @LastEditors: 三棵杨树
 * @LastEditTime: 2023-04-02 20:54:01
 */
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended', // 添加 prettier 插件
  ],
  overrides: [],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/promise-function-async': 'off',
    'vue/multi-word-component-names': 'off',
  },
};
