module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "airbnb", "prettier", "prettier/react"],

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "prettier"],
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "react/react-in-jsx-scope": "off",
    "react/button-has-type": "off",
    "react/prop-types": "off",
    "react/no-unescaped-entities": "off",
    "react/require-default-props": "off",
    "import/no-unresolved": "off",
    "no-undef": "off",
    "react/jsx-props-no-spreading": "off",
  },
};
