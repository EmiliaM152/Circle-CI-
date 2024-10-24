// eslint.config.js
export default [
  {
    ignores: ['node_modules/**'],  // Ignora node_modules
  },
  {
    files: ['**/*.js'],  // Aplica las reglas a archivos .js
    languageOptions: {
      ecmaVersion: 'latest',  // Usa la última versión de ECMAScript
      sourceType: 'module',
    },
    rules: {
      'no-unused-vars': 'warn',  // Avisa sobre variables no usadas
      'semi': ['error', 'always'],  // Requiere punto y coma
      'quotes': ['error', 'single'],  // Requiere comillas simples
    },
  },
];
