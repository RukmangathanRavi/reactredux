const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
  entry: "./public/src/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "Bundle.js",
  },
  module: {
    rules: [{ use: "babel-loader", test: /\.js$/, exclude: /node_modules/ }],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/src/index.html",
    }),
  ],
};

module.exports = config;
