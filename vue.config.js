const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const smp = new SpeedMeasurePlugin(); // 打包速度分析
const webpack = require('webpack')
const path = require('path')

const moduleConfig = {
  outputDir: "zpMusicPlayer",
  productionSourceMap: false,
  devServer: {
    port: "8080"
  },
  publicPath: '/',
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      return smp.wrap({
        plugins: [
          new BundleAnalyzerPlugin(), // 打包分析
          new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
        ]
      })
    }
  },
  chainWebpack: (config) => {
    /* 设置别名 */
    config.resolve.alias
      .set("@", path.join(__dirname, "src"))
      .set("Api", path.join(__dirname, "src/api"))
      .set("Assets", path.join(__dirname, "src/assets"))
      .set("Components", path.join(__dirname, "src/components"))
      .set("Plugins", path.join(__dirname, "src/plugins"))
      .set("Stores", path.join(__dirname, "src/stores"))
      .set("Utils", path.join(__dirname, "src/utils"))
      .set("Views", path.join(__dirname, "src/views"))
      .set("Style", path.join(__dirname, "src/style"));
  },
}
module.exports = moduleConfig
