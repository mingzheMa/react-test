const { merge } = require("webpack-merge");
const nodeExternals = require("webpack-node-externals");

const defaultConfig = require("./webpack.default");
const serveConfig = {
  target: "node",
  entry: "./src/serve",
  externals: [nodeExternals()]
};

module.exports = merge(defaultConfig, serveConfig);
