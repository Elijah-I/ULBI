import type BuildOptions from "./types/config";
import type DevServer from "webpack-dev-server";

export default (options: BuildOptions): DevServer.Configuration => {
  const { port } = options;

  return {
    port,
    open: true,
  };
};
