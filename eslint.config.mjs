import js from "@eslint/js";
import tseslint from "typescript-eslint";
import angular from "angular-eslint";

export default [
  js.configs.recommended,

  ...tseslint.configs.recommended,
  ...angular.configs.tsRecommended,

  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: true
      }
    }
  },

  {
    files: ["**/*.html"],
    ...angular.configs.templateRecommended
  }
];
