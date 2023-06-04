export type BuildMode = "development" | "production";
export type BuildPort = number;

export interface BuildPaths {
  entry: string;
  build: string;
  html: string;
}

export interface BuildEnv {
  mode: BuildMode;
  port: BuildPort;
}

export default interface BuildOptions {
  mode: BuildMode;
  paths: BuildPaths;
  port: BuildPort;
  isDev: boolean;
}
