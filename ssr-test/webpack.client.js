const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");

const defaultConfig = require("./webpack.default");
const clientConfig = {
  entry: "./src/client",
  output: {
    filename: "js/main.[hash:5].js",
    path: path.resolve(__dirname, "public")
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ["**/*", "!favicon.ico"]
    })
  ]
};

module.exports = merge(defaultConfig, clientConfig);
