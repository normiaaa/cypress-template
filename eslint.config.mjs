import globals from "globals";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import cypressPlugin from "eslint-plugin-cypress";

export default [
  {
    // Common settings
    files: ["**/*.{js,ts}"],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
      cypress: cypressPlugin,
    },
    rules: {
      // TypeScript rules
      ...tsPlugin.configs.recommended.rules,

      // Cypress rules
      ...cypressPlugin.configs.recommended.rules,

      // Custom rules
      "@typescript-eslint/no-unused-vars": "warn",
      "no-console": "warn",
      "cypress/no-assigning-return-values": "error",
      "cypress/no-unnecessary-waiting": "error",
      "cypress/assertion-before-screenshot": "warn",
      "cypress/no-force": "warn",
      "cypress/no-async-tests": "error",
      "cypress/no-async-before": "error",
      "cypress/no-pause": "error",
    },
  },
  {
    // Override for specific files
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
    },
  },
];
