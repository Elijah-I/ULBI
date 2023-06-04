import type BuildOptions from "./types/config";

import webpack from "webpack";
import buildPlugins from "./build.plugins";
import buildLoaders from "./build.loaders";
import buildResolvers from "./build.resolvers";
import buildDevServer from "./build.dev.server";

export default (options: BuildOptions) => {
  const { mode, paths, isDev } = options;

  const config: webpack.Configuration = {
    mode,
    entry: paths.entry,
    output: {
      filename: "[name].[contenthash].js",
      path: paths.build,
      clean: true,
    },
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(),
    plugins: buildPlugins(options),
  };

  if (isDev) {
    config.devtool = "inline-source-map";
    config.devServer = buildDevServer(options);
  }

  return config;
};
