module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-essential', 'eslint-config-prettier'],
  overrides: [
    {
      env: {
        node: true
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['vue', 'eslint-plugin-prettier'],
  rules: {
    'no-var': 'off',
    'no-empty': 'off',
    'no-unused-vars': 'off',
    'no-undef': 'off',
    'vue/multi-word-component-names': 'off',
    'no-console': 'off',
    'no-plusplus': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/no-dynamic-require': 'off',
    'global-require': 'off',
    'vue/valid-v-bind-sync': 'off',
    'no-underscore-dangle': 'off',
    'no-param-reassign': 'off',
    'prefer-destructuring': 'off',
    'vue/valid-define-emits': 'off',
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'no-unused-expressions': ['error', { allowShortCircuit: true }],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'never',
          component: 'always'
        },
        svg: 'always',
        math: 'always'
      }
    ]
  }
};
