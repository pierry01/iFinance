const fs = require("fs");
const path = require("path");

module.exports = {
  extend: [
    "airbnb",
    "prettier",
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "plugin:jest-dom/recommended",
    "plugin:testing-library/react",
    "plugin:react-hooks/recommended",
  ],

  plugins: [
    "react",
    "graphql",
    "prettier",
    "jest-dom",
    "react-hooks",
    "testing-library",
  ],

  env: { browser: true, es6: true, node: true, jest: true },

  globals: { page: true, browser: true, context: true, google: true },

  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: { jsx: true },
  },

  rules: {
    "import/no-dynamic-require": [0],
    "react/no-danger": [0],
    "prettier/prettier": "error",
    "import/no-unresolved": [0],
    "react/jsx-props-no-spreading": "off",
    "no-underscore-dangle": "off",
    "graphql/template-strings": [
      "error",
      {
        env: "apollo",
        schemaString: fs.readFileSync(
          path.resolve(__dirname, "./app/graphql/schema.graphql"),
          "utf8"
        ),
      },
    ],
  },
};
