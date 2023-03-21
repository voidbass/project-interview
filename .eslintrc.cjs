module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    "only-error"
  ],
  rules: {
    "@typescript-eslint/explicit-function-return-type": "warning",
    "react-hooks/exhaustive-deps": "off",
    "jsx-a11y/anchor-is-valid": "off",
  }
}
