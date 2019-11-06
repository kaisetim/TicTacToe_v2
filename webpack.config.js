const path = require("path");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./packages/front/src/index.jsx",
  output: {
    filename: "app.[hash].js",
    path: path.resolve(__dirname, ".dist"),
    publicPath: ""
  },
  module: {
    rules: [
      {
        test: /\.js$|\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        use: [
          { loader: MiniCSSExtractPlugin.loader },
          { loader: "css-loader" },
          { loader: "postcss-loader" },
          { loader: "sass-loader" }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCSSExtractPlugin({
      filename: "styles.[hash].css"
    }),
    new TerserPlugin(),
    new HTMLWebpackPlugin({
      title: "TicTacToe_v2",
      inject: "head",
      template: "./packages/front/src/index.html"
    })
  ],
  mode: "none"
};
