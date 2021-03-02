const path = require("path");
const { merge } = require("webpack-merge");
const nodeExternals = require("webpack-node-externals");

const defaultConfig = require("./webpack.default");
const serveConfig = {
  target: "node",
  entry: "./src/serve",
  externals: [nodeExternals()],
  output: {
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "isomorphic-style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "img/[name].[hash:5].[ext]",
              emitFile: false
            }
          }
        ]
      }
    ]
  }
};

module.exports = merge(defaultConfig, serveConfig);
