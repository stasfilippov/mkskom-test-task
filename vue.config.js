const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  publicPath: `/mkskom-test-task/`,
  transpileDependencies: true,
});

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/layouts/common/variables.scss";`,
      },
    },
  },
  chainWebpack: (config) => {
    const svgRule = config.module.rule("svg");

    svgRule.uses.clear();

    svgRule
      .use("babel-loader")
      .loader("babel-loader")
      .end()
      .use("vue-svg-loader")
      .loader("vue-svg-loader");
  },
};
