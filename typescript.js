module.exports = {
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint"],
    parserOptions: {
        project: ["./tsconfig.json"], // Specify it only for TypeScript files
    },
    extends: [
        "airbnb-typescript",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
    ],
    settings: {
        "import/parsers": {
        "@typescript-eslint/parser": [".ts", ".tsx"]
        }
    }
};
