module.exports = {
    root: true,
    extends: ['eslint:recommended', 'plugin:svelte/prettier', 'prettier'],
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2019,
    },
    env: {
        browser: true,
        es2017: true,
        node: true,
    },
};
