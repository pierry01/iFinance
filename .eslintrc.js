const fs = require("fs");
const path = require("path");

module.exports = {
  extends: [
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
    "react/no-danger": "off",
    "prettier/prettier": "error",
    "import/no-unresolved": "off",
    "no-underscore-dangle": "off",
    "import/no-dynamic-require": "off",
    "react/jsx-props-no-spreading": "off",
    "import/no-extraneous-dependencies": "off",
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
