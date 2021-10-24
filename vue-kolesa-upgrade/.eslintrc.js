{
    module.exports = {
        env: {
            node: true
        },
        extends: [
            "eslint:recommended",
            "plugin:vue/vue3-recommended",
            "plugin:vue/base",
            "prettier"
        ],
        rules: {
            // override/add rules settings here, such as:
            // 'vue/no-unused-vars': 'error'
            "vue/require-default-prop": "off"
        }
    };
}
