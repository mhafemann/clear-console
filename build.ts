import type { BuildConfig } from "bun";
import { dts } from "@anymud/bun-plugin-dts";

const defaultBuildConfig: BuildConfig = {
  entrypoints: ["./src/index.ts"],
  outdir: "./dist",
};

await Promise.all([
  Bun.build({
    ...defaultBuildConfig,
    plugins: [dts()],
    target: "bun",
    format: "esm",
    naming: "[dir]/[name].js",
    minify: true,
  }),
  Bun.build({
    ...defaultBuildConfig,
    target: "bun",
    format: "cjs",
    naming: "[dir]/[name].cjs",
    minify: true,
  }),
]);
