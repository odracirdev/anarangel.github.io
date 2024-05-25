module.exports = {
  extends: ["plugin:astro/recommended", "prettier"],
  overrides: [
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
      rules: {},
    },
    {
      files: ["*.ts", "*.tsx"],
      parser: "@typescript-eslint/parser",
      plugins: ["@typescript-eslint"],
      extends: ["plugin:@typescript-eslint/recommended"],
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
      },
      rules: {},
    },
  ],
};

/**
 * @reference
 * https://github.com/Zyruks/astro-starter/blob/main/docs/code-quality-tools/eslint.md
 */
