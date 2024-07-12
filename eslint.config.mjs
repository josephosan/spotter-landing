import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  files: ['**/*.vue', '**/*.ts', '**/*.tsx'],
  rules: {
    'no-console': 'off',
    'arrow-parens': 'off',
    'no-empty': 'off',
    'no-unused-vars': 'off',
    'multi-word': 'off',
    'no-async-promise-executor': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/v-on-event-hyphenation': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@stylistic/member-delimiter-style': 'off',
    '@stylistic/brace-style': 'off',
    '@stylistic/operator-linebreak': ['error', 'after'],
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 4,
        multiline: 1
      }
    ]
  }
})
