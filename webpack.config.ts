import type { BuildEnv, BuildPaths } from "./config/build/types/config";

import path from "path";
import buildWebpackConfig from "./config/build/build.webpack.config";

export default (env: BuildEnv) => {
  const port = env.port || 3000;
  const mode = env.mode || "development";

  const isDev = mode === "development";

  const paths: BuildPaths = {
    build: path.resolve(__dirname, "build"),
    entry: path.resolve(__dirname, "src", "index.tsx"),
    html: path.resolve(__dirname, "public", "index.html"),
  };

  return buildWebpackConfig({
    mode,
    paths,
    port,
    isDev,
  });
};
