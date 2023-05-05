module.exports = {
  defaultSeverity: 'error',
  extends: ['@tencent/stylelint-config-tencent'],
  plugins: ['stylelint-scss'],
  customSyntax: 'postcss-scss',
  rules: {
    'declaration-no-important': null
  },
};