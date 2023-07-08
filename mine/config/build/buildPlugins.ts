import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import { BuildOptions } from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

const deps = require("../../package.json").dependencies;
const { ModuleFederationPlugin } = require("webpack").container;

export function buildPlugins({
  paths
}: BuildOptions): webpack.WebpackPluginInstance[] {
  return [
    new ModuleFederationPlugin({
      name: "ulbi",
      filename: "remoteEntry.js",
      remotes: {
        ulbi: "ulbi@http://localhost:3000/remoteEntry.js"
      },
      exposes: {},
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"]
        }
      }
    }),
    new HtmlWebpackPlugin({
      template: paths.html
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[contenthash:8].css"
    })
  ];
}
