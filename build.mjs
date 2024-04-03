import { ChildProcess, spawn } from "child_process";
import * as esbuild from "esbuild";

const outdir = "dist";
const nodePath = process.argv[0];

const ctx = await esbuild.context({
  bundle: true,
  platform: "node",
  target: ["node18.16.0"],
  outdir,
  entryPoints: [`./server.ts`],
  sourcemap: "inline",
  format: "esm",
  packages: "external",
  outExtension: { '.js': '.mjs' },
  // tsconfig: "tsconfig.json",
  plugins: [
    {
      name: "watch-server",
      setup: async (build) => {
        /** @type {ChildProcess | null} */
        let childProcess = null;

        build.onStart(() => {
          if (childProcess) {
            childProcess.kill("SIGKILL");
            childProcess = null;
          }
          console.log("Starting server build");
        });

        build.onEnd((res) => {
          for (const warning of res.warnings) {
            console.warn(warning);
          }
          for (const error of res.errors) {
            console.error(error);
          }

          childProcess = spawn(nodePath, [`${outdir}/server.mjs`], {
            env: process.env,
            stdio: "inherit",
          });
        });
      },
    },
  ],
});

await ctx.watch({});
