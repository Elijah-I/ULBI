import type BuildOptions from "./types/config";

import webpack from "webpack";
import HTMLWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export default (options: BuildOptions): webpack.WebpackPluginInstance[] => {
  const { paths } = options;

  const cssFileName = "css/[name].[contenthash:8].css";

  return [
    new HTMLWebpackPlugin({
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: cssFileName,
      chunkFilename: cssFileName,
    }),
  ];
};
