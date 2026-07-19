import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";

export default [
  {
    ignores: ["dist"],
  },

  js.configs.recommended,

  react.configs.flat.recommended,
  react.configs.flat["jsx-runtime"],

  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: globals.browser,
    },

    settings: {
      react: {
        version: "detect",
      },
    },
  },
];