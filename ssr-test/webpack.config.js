const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  mode: "development",
  target: "node",
  watch: true,
  entry: "./src/serve",
  externals: [nodeExternals()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src")
    },
    extensions: [".js", ".jsx", ".json", ".css"]
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",

            options: {
              presets: ["@babel/preset-react"]
            }
          }
        ]
      }
    ]
  }
};
