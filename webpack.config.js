const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    index: "./src/ts/index.ts",
    about: "./src/ts/about/index.ts",
  },

  output: {
    filename: "assets/js/[name].js",
    path: path.join(__dirname, "public/dist/"),
  },

  resolve: {
    extensions: [".ts", ".js"],
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader",
      },
      {
        test: /\.(scss|sass|css)$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  // webpackの機能拡張
  plugins: [
    new MiniCssExtractPlugin({
      filename: "assets/css/[name].css", // アウトプットCSSファイル
    }),
  ],
  // ソースマップの作成
  devtool: "inline-source-map",

  devServer: {
    static: {
      directory: path.join(__dirname, "public/dist"),
    },
    port: 3000,
    open: true,
  },

  watchOptions: {
    ignored: /node_modules/,
  },
};
