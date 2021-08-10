const { resolve } = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const context = resolve(__dirname, "../src");

module.exports = {
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    alias: {
      "@": context,
    },
  },
  context: context,
  module: {
    rules: [
      {
        test: [/\.[jt]sx?$/],
        use: ["babel-loader"],
        exclude: /node_modules/,
      },
      {
        test: [/\.css$/i, /\.s[ac]ss$/i],
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
              sassOptions: {
                outputStyle: "compressed",
              },
            },
          },
        ],
      },
    ],
  },

  performance: {
    hints: false,
  },
};
