const overrideConfig = {
  env: {
    es2024: true,
    node: true,
  },
  extends: ["eslint:recommended", "prettier", "plugin:prettier/recommended"],
  parser: "@babel/eslint-parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["prettier"],
  rules: {
    "no-unused-vars": [
      "error",
      { vars: "all", args: "none", ignoreRestSiblings: false },
    ],
    "prettier/prettier": "error",
  },
};

export default overrideConfig;
