import antfu from '@antfu/eslint-config'

export default antfu(
  {
    unocss: true,
    formatters: true,
    rules: {
      'unused-imports/no-unused-imports': 'warn',
    },
    ignores: [
      'src/components/ui/**', // shadcn/ui
    ],
  },
)
