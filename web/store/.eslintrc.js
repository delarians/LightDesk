module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    extends: ["@nuxtjs/eslint-config-typescript", "plugin:nuxt/recommended"],
    // add your custom rules here
    rules: {
        "jsx-quotes": [1, "prefer-double"]
        // indent: ["error", 2],
        // "vue/html-indent": [
        //     "error",
        //     2,
        //     {
        //         attribute: 1,
        //         baseIndent: 0,
        //         closeBracket: 0,
        //         alignAttributesVertically: true,
        //         ignores: []
        //     }
        // ]
    }
};
