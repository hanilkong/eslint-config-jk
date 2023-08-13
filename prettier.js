module.exports = {
    extends:['plugin:prettier/recommended'],
    plugins:['prettier'],
    rules: {
        'prettier/prettier': [
            'error',
            {
                "singleQuote": true,
                "semi": true,
                "useTabs": false,
                "tabWidth": 2,
                "trailingComma": "all",
                "printWidth": 80,
                "arrowParens": "avoid"
            },
        ],
    }
}