module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [             
            'eslint:recommend',
            'plugin:react/recommended',
            'plugin:react/jsx-runtime',
            'plugin:react-hooks/recommended',
            'airbnb',
            'prettier'
          ],
  ignorePatterns:['dist','eslintrc.cjs'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins:['react-refresh'],
  rules: {'react-refresh/only-export-components':[
    'warn',{allowConstantExport:true},
  ],
  'react/jsx-uses-react':'off',
  },
};
