module.exports = {
  extends: [
    'plugin:jsx-a11y/recommended',
  ],
  parser: 'babel-eslint',  
  plugins: ['jsx-a11y'],
  parserOptions: {
    ecmaVersion: 2021,  
    sourceType: 'module', 
    ecmaFeatures: {
      jsx: true,  
    },
  },
  rules: {
    'jsx-a11y/alt-text': ['error', {
      'elements': ['img', 'area', 'input[type="image"]'],
      'img': ['Image'],
    }],
    'jsx-a11y/aria-role': [2, {
      'allowedInvalidRoles': ['text'],
      'ignoreNonDOM': true,
    }],
    'jsx-a11y/no-redundant-roles': 'error',
  },
};
