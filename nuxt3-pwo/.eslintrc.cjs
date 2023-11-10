module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    extends: ['@nuxtjs', 'plugin:nuxt/recommended', 'prettier'],
    plugins: ['prettier'],
    rules: {
        'prettier/prettier': 'error',
    },
}
